
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Asset {
  id: string;
  user_id: string;
  name: string;
  type: 'model' | 'dataset';
  description?: string;
  file_path?: string;
  file_size?: number;
  metadata: any;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export const useAssets = () => {
  const queryClient = useQueryClient();

  const { data: assets = [], isLoading } = useQuery({
    queryKey: ['assets'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('assets')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Asset[];
    },
  });

  const createAssetMutation = useMutation({
    mutationFn: async ({ 
      name, 
      type, 
      description, 
      file 
    }: { 
      name: string; 
      type: 'model' | 'dataset'; 
      description?: string;
      file?: File;
    }) => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error('Not authenticated');

      let file_path = null;
      let file_size = null;

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('assets')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        
        file_path = fileName;
        file_size = file.size;
      }

      const { data, error } = await supabase
        .from('assets')
        .insert({
          name,
          type,
          description,
          file_path,
          file_size,
          user_id: user.id,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
      toast.success('Asset created successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create asset');
    },
  });

  const deleteAssetMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('assets')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
      toast.success('Asset deleted successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete asset');
    },
  });

  return {
    assets,
    isLoading,
    createAsset: createAssetMutation.mutate,
    deleteAsset: deleteAssetMutation.mutate,
    isCreating: createAssetMutation.isPending,
    isDeleting: deleteAssetMutation.isPending,
  };
};

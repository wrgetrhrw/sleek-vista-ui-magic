
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database, Upload, Search, FilterX } from "lucide-react";
import { useAssets } from "@/hooks/useAssets";
import { AssetCard } from "@/components/AssetCard";
import { CreateAssetDialog } from "@/components/CreateAssetDialog";
import { useAuth } from "@/hooks/useAuth";
import { AuthForm } from "@/components/AuthForm";
import { useState } from "react";

const AssetManager = () => {
  const { user } = useAuth();
  const { assets, isLoading, createAsset, deleteAsset, isCreating } = useAssets();
  const [searchTerm, setSearchTerm] = useState('');

  if (!user) {
    return <AuthForm />;
  }

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const models = filteredAssets.filter(asset => asset.type === 'model');
  const datasets = filteredAssets.filter(asset => asset.type === 'dataset');

  if (isLoading) {
    return (
      <div className="p-6 min-h-screen bg-background">
        <div className="flex justify-center items-center h-64">
          <div className="text-muted-foreground">Loading assets...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-foreground mb-6">Asset Manager</h1>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-foreground flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            Available Models & Datasets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4 flex-col sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search assets..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredAssets.length === 0 ? (
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <FilterX className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>{searchTerm ? 'No assets found matching your search.' : 'No assets found. Create your first asset!'}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {models.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Models ({models.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {models.map((asset) => (
                      <AssetCard key={asset.id} asset={asset} onDelete={deleteAsset} />
                    ))}
                  </div>
                </div>
              )}
              
              {datasets.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Datasets ({datasets.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {datasets.map((asset) => (
                      <AssetCard key={asset.id} asset={asset} onDelete={deleteAsset} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-2 mt-4 justify-end">
            <CreateAssetDialog onCreateAsset={createAsset} isCreating={isCreating} />
            <CreateAssetDialog 
              onCreateAsset={createAsset} 
              isCreating={isCreating}
              trigger={
                <Button variant="secondary">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Local Asset
                </Button>
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetManager;


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Download, Database } from 'lucide-react';
import { Asset } from '@/hooks/useAssets';

interface AssetCardProps {
  asset: Asset;
  onDelete: (id: string) => void;
}

export const AssetCard = ({ asset, onDelete }: AssetCardProps) => {
  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'Unknown size';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getTypeColor = (type: Asset['type']) => {
    switch (type) {
      case 'model':
        return 'bg-blue-500';
      case 'dataset':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-medium">{asset.name}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(asset.id)}
            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {asset.description && (
          <p className="text-xs text-muted-foreground">{asset.description}</p>
        )}
        <div className="flex items-center justify-between">
          <Badge className={`${getTypeColor(asset.type)} text-white text-xs`}>
            {asset.type.toUpperCase()}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formatFileSize(asset.file_size)}
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          Created: {new Date(asset.created_at).toLocaleDateString()}
        </div>
        {asset.file_path && (
          <Button variant="outline" size="sm" className="w-full">
            <Download className="h-3 w-3 mr-2" />
            Download
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

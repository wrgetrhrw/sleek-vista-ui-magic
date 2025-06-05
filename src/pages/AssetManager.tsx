
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database, Download, Upload, Search, FilterX } from "lucide-react";

const AssetManager = () => {
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
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                All Types
              </Button>
              <Button variant="outline">
                All Sources
              </Button>
            </div>
          </div>

          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <FilterX className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No assets found. Try another search.</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4 justify-end">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="w-4 h-4 mr-2" />
              Download New Asset
            </Button>
            <Button variant="secondary">
              <Upload className="w-4 h-4 mr-2" />
              Import Local Asset
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-foreground">My Trained Models</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Database className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>You haven't trained any models yet.</p>
            </div>
          </div>

          <div className="text-right mt-4">
            <Button>
              Export Selected Model
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetManager;

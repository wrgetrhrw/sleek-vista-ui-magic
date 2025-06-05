
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database, Download, Upload, Search, FilterX } from "lucide-react";

const AssetManager = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Asset Manager</h1>

      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            Available Models & Datasets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4 flex-col sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <Input 
                placeholder="Search assets..." 
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-700 text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white">
                All Types
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white">
                All Sources
              </Button>
            </div>
          </div>

          <div className="h-64 flex items-center justify-center text-slate-500">
            <div className="text-center">
              <FilterX className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No assets found. Try another search.</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4 justify-end">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download New Asset
            </Button>
            <Button className="bg-slate-700 hover:bg-slate-600 text-white transition-colors">
              <Upload className="w-4 h-4 mr-2" />
              Import Local Asset
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-white">My Trained Models</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-slate-500">
            <div className="text-center">
              <Database className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>You haven't trained any models yet.</p>
            </div>
          </div>

          <div className="text-right mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              Export Selected Model
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetManager;

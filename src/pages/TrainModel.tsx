
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Brain, Play, Square, BarChart2, Save, FileJson } from "lucide-react";
import { useState } from "react";

const TrainModel = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);

  const startTraining = () => {
    setIsTraining(true);
    setProgress(0);
    
    // Simulate training progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 200);
  };

  const stopTraining = () => {
    setIsTraining(false);
    setProgress(0);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">
        Model Training Configuration
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Configuration Section */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Training Task Type</label>
                <Select defaultValue="casual-lm">
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select task type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="casual-lm">Casual Language Modeling (Text-Gen)</SelectItem>
                    <SelectItem value="seq-class">Sequence Classification</SelectItem>
                    <SelectItem value="token-class">Token Classification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Base Model</label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="llama-7b">LLaMa 7B</SelectItem>
                    <SelectItem value="gpt-neo">GPT-Neo</SelectItem>
                    <SelectItem value="bert">BERT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Dataset</label>
              <Select>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Select dataset" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="text-dataset">Text Dataset</SelectItem>
                  <SelectItem value="code-dataset">Code Dataset</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Batch Size</label>
              <Input 
                type="number" 
                defaultValue="1024" 
                className="bg-slate-800/50 border-slate-700 text-white"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Config
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white">
                <FileJson className="w-4 h-4 mr-2" />
                Load Config
              </Button>
              <Button variant="outline" className="ml-auto border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white">
                Reset Config
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Training Monitor */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Training Monitor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 mb-6">
              {!isTraining ? (
                <Button onClick={startTraining} className="bg-green-600 hover:bg-green-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Start Training
                </Button>
              ) : (
                <Button onClick={stopTraining} className="bg-red-600 hover:bg-red-700 text-white">
                  <Square className="w-4 h-4 mr-2" />
                  Stop Training
                </Button>
              )}
            </div>
            
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-slate-400">Progress</span>
              <span className="text-sm text-blue-400">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 mb-6" />
            
            <div className="rounded-lg bg-slate-800/70 p-4 h-40 overflow-auto text-sm text-slate-300 font-mono mb-4">
              {isTraining ? (
                <div className="space-y-1">
                  <p>INFO: Initializing training environment...</p>
                  <p>INFO: Loading dataset from disk...</p>
                  <p>INFO: Starting training loop...</p>
                  {progress > 20 && <p>INFO: Epoch 1/10 - Loss: 2.453</p>}
                  {progress > 40 && <p>INFO: Epoch 2/10 - Loss: 2.124</p>}
                  {progress > 60 && <p>INFO: Epoch 3/10 - Loss: 1.896</p>}
                  {progress > 80 && <p>INFO: Epoch 4/10 - Loss: 1.782</p>}
                </div>
              ) : (
                <p>Training logs will appear here...</p>
              )}
            </div>
            
            <div className="bg-slate-800/70 rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="w-12 h-12 mx-auto mb-3 text-blue-400 opacity-50" />
                <p className="text-slate-500">Training metrics graph will appear during training</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainModel;

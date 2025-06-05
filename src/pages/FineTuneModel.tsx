
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Zap, Play, Square, BarChart2, Save, Download } from "lucide-react";
import { useState } from "react";

const FineTuneModel = () => {
  const [isFineTuning, setIsFineTuning] = useState(false);
  const [progress, setProgress] = useState(0);

  const startFineTuning = () => {
    setIsFineTuning(true);
    setProgress(0);
    
    // Simulate fine-tuning progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  const stopFineTuning = () => {
    setIsFineTuning(false);
    setProgress(0);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Finetuning Studio</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Configuration Section */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Base Model</label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select base model" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="llama-7b">LLaMa 7B</SelectItem>
                    <SelectItem value="gpt-neo">GPT-Neo</SelectItem>
                    <SelectItem value="bert">BERT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Dataset</label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="instruction-set">Instruction Dataset</SelectItem>
                    <SelectItem value="conversation">Conversation Dataset</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Fine-tuning Technique</label>
              <Select defaultValue="lora">
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Select technique" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="lora">LoRA</SelectItem>
                  <SelectItem value="qlora">QLoRA</SelectItem>
                  <SelectItem value="peft">PEFT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Learning Rate</label>
                <Input 
                  type="text" 
                  defaultValue="5e-5" 
                  className="bg-slate-800/50 border-slate-700 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Batch Size</label>
                <Input 
                  type="number" 
                  defaultValue="1024" 
                  className="bg-slate-800/50 border-slate-700 text-white"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Finetuning Preset
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white">
                Load Finetuning Preset
              </Button>
              <Button variant="outline" className="ml-auto border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white">
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Fine-tuning Monitor */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Control & Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 mb-6">
              {!isFineTuning ? (
                <Button onClick={startFineTuning} className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Start Finetuning
                </Button>
              ) : (
                <Button onClick={stopFineTuning} className="bg-red-600 hover:bg-red-700 text-white">
                  <Square className="w-4 h-4 mr-2" />
                  Stop Finetuning
                </Button>
              )}
              
              <Button className="bg-slate-700 hover:bg-slate-600 text-white" disabled={!isFineTuning && progress < 100}>
                <Download className="w-4 h-4 mr-2" />
                Download Finetuned Model
              </Button>
            </div>
            
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-slate-400">Progress</span>
              <span className="text-sm text-teal-400">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 mb-6" />
            
            <div className="rounded-lg bg-slate-800/70 p-4 h-40 overflow-auto text-sm text-slate-300 font-mono mb-4">
              {isFineTuning ? (
                <div className="space-y-1">
                  <p>INFO: Loading base model weights...</p>
                  <p>INFO: Preparing adapters...</p>
                  <p>INFO: Starting fine-tuning loop...</p>
                  {progress > 20 && <p>INFO: Step 100/500 - Loss: 0.453</p>}
                  {progress > 40 && <p>INFO: Step 200/500 - Loss: 0.324</p>}
                  {progress > 60 && <p>INFO: Step 300/500 - Loss: 0.256</p>}
                  {progress > 80 && <p>INFO: Step 400/500 - Loss: 0.198</p>}
                  {progress > 95 && <p>INFO: Saving model weights...</p>}
                </div>
              ) : (
                <p>Fine-tuning logs will appear here...</p>
              )}
            </div>
            
            <div className="bg-slate-800/70 rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="w-12 h-12 mx-auto mb-3 text-teal-400 opacity-50" />
                <p className="text-slate-500">Loss curve will appear during fine-tuning</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FineTuneModel;

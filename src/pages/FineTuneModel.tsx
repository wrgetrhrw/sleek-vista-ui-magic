
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Zap, Play, Square, BarChart2, Save, Download, Settings, Cpu } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

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
    <div className="p-6 min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-foreground mb-6">Finetuning Studio</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Configuration Section */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Fine-tuning Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Base Model</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select base model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="llama-7b">LLaMa 7B</SelectItem>
                    <SelectItem value="llama-13b">LLaMa 13B</SelectItem>
                    <SelectItem value="gpt-neo">GPT-Neo</SelectItem>
                    <SelectItem value="bert">BERT</SelectItem>
                    <SelectItem value="t5">T5</SelectItem>
                    <SelectItem value="mistral">Mistral 7B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Dataset</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instruction-set">Instruction Dataset</SelectItem>
                    <SelectItem value="conversation">Conversation Dataset</SelectItem>
                    <SelectItem value="qa">Q&A Dataset</SelectItem>
                    <SelectItem value="code">Code Dataset</SelectItem>
                    <SelectItem value="custom">Custom Dataset</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Fine-tuning Technique</label>
              <Select defaultValue="lora">
                <SelectTrigger>
                  <SelectValue placeholder="Select technique" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lora">LoRA</SelectItem>
                  <SelectItem value="qlora">QLoRA</SelectItem>
                  <SelectItem value="peft">PEFT</SelectItem>
                  <SelectItem value="full">Full Fine-tuning</SelectItem>
                  <SelectItem value="prefix">Prefix Tuning</SelectItem>
                  <SelectItem value="prompt">Prompt Tuning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">LoRA Rank</label>
                <Input type="number" defaultValue="8" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">LoRA Alpha</label>
                <Input type="number" defaultValue="16" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">LoRA Dropout: 0.05</label>
              <Slider defaultValue={[0.05]} max={0.3} min={0.0} step={0.01} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Epochs</label>
                <Input type="number" defaultValue="1" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Batch Size</label>
                <Input type="number" defaultValue="4" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Learning Rate</label>
              <Input type="text" defaultValue="0.000300" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Warmup Steps</label>
              <Input type="number" defaultValue="100" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Max Sequence Length</label>
              <Input type="number" defaultValue="512" />
            </div>
          </CardContent>
        </Card>

        {/* Hardware & Advanced Settings */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              Hardware & Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Compute Type</label>
              <Select defaultValue="gpu">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cpu">CPU Only</SelectItem>
                  <SelectItem value="gpu">Single GPU</SelectItem>
                  <SelectItem value="multi-gpu">Multi-GPU</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Gradient Accumulation Steps</label>
              <Input type="number" defaultValue="4" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Weight Decay</label>
              <Input type="text" defaultValue="0.01" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Save Strategy</label>
              <Select defaultValue="steps">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="steps">Save Every N Steps</SelectItem>
                  <SelectItem value="epoch">Save Every Epoch</SelectItem>
                  <SelectItem value="best">Save Best Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Output Directory</label>
              <div className="flex gap-2">
                <Input defaultValue="./home/ubuntu/finetuning_output" className="flex-1" />
                <Button variant="outline">
                  Browse
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="mixed-precision-ft" />
                <label htmlFor="mixed-precision-ft" className="text-sm text-muted-foreground">
                  Enable Mixed Precision (fp16)
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="gradient-checkpointing-ft" />
                <label htmlFor="gradient-checkpointing-ft" className="text-sm text-muted-foreground">
                  Enable Gradient Checkpointing
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="dataloader-pin-memory" />
                <label htmlFor="dataloader-pin-memory" className="text-sm text-muted-foreground">
                  Pin Memory for DataLoader
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remove-unused-columns" />
                <label htmlFor="remove-unused-columns" className="text-sm text-muted-foreground">
                  Remove Unused Columns
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="secondary">
                <Save className="w-4 h-4 mr-2" />
                Save Preset
              </Button>
              <Button variant="outline">
                Load Preset
              </Button>
              <Button variant="outline">
                Reset Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fine-tuning Monitor */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Control & Progress Monitor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 mb-6">
            {!isFineTuning ? (
              <Button onClick={startFineTuning} className="bg-primary hover:bg-primary/90">
                <Play className="w-4 h-4 mr-2" />
                Start Finetuning
              </Button>
            ) : (
              <Button onClick={stopFineTuning} variant="destructive">
                <Square className="w-4 h-4 mr-2" />
                Stop Finetuning
              </Button>
            )}
            
            <Button disabled={!isFineTuning && progress < 100}>
              <Download className="w-4 h-4 mr-2" />
              Download Finetuned Model
            </Button>
          </div>
          
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 mb-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg bg-muted p-4 h-40 overflow-auto text-sm text-foreground font-mono">
              {isFineTuning ? (
                <div className="space-y-1">
                  <p>INFO: Loading base model weights...</p>
                  <p>INFO: Preparing LoRA adapters...</p>
                  <p>INFO: Starting fine-tuning loop...</p>
                  {progress > 20 && <p>INFO: Step 100/500 - Loss: 0.453</p>}
                  {progress > 40 && <p>INFO: Step 200/500 - Loss: 0.324</p>}
                  {progress > 60 && <p>INFO: Step 300/500 - Loss: 0.256</p>}
                  {progress > 80 && <p>INFO: Step 400/500 - Loss: 0.198</p>}
                  {progress > 95 && <p>INFO: Saving model weights...</p>}
                </div>
              ) : (
                <p className="text-muted-foreground">Fine-tuning logs will appear here...</p>
              )}
            </div>
            
            <div className="bg-muted rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="w-12 h-12 mx-auto mb-3 text-primary opacity-50" />
                <p className="text-muted-foreground">Loss curve will appear during fine-tuning</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FineTuneModel;

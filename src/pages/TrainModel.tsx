
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Zap, Play, Square, BarChart2, Download, Save, Settings, Cpu, HardDrive } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

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
        return prev + 2;
      });
    }, 200);
  };

  const stopTraining = () => {
    setIsTraining(false);
    setProgress(0);
  };

  return (
    <div className="p-6 min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-foreground mb-6">Train Model</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Model Configuration */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Model Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Model Architecture</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select architecture" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transformer">Transformer</SelectItem>
                    <SelectItem value="cnn">CNN</SelectItem>
                    <SelectItem value="rnn">RNN</SelectItem>
                    <SelectItem value="lstm">LSTM</SelectItem>
                    <SelectItem value="bert">BERT</SelectItem>
                    <SelectItem value="gpt">GPT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Model Size</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (125M)</SelectItem>
                    <SelectItem value="medium">Medium (350M)</SelectItem>
                    <SelectItem value="large">Large (1.3B)</SelectItem>
                    <SelectItem value="xl">XL (2.7B)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Dataset</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select dataset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">Custom Dataset</SelectItem>
                  <SelectItem value="wikipedia">Wikipedia</SelectItem>
                  <SelectItem value="commoncrawl">Common Crawl</SelectItem>
                  <SelectItem value="books">Books Corpus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Epochs</label>
                <Input type="number" defaultValue="10" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Batch Size</label>
                <Input type="number" defaultValue="32" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Learning Rate</label>
              <Input type="text" defaultValue="0.001" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Sequence Length: 512</label>
              <Slider defaultValue={[512]} max={2048} min={128} step={128} />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Dropout Rate: 0.1</label>
              <Slider defaultValue={[0.1]} max={0.5} min={0.0} step={0.05} />
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
                  <SelectItem value="tpu">TPU</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Precision</label>
              <Select defaultValue="fp16">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fp32">FP32 (Full Precision)</SelectItem>
                  <SelectItem value="fp16">FP16 (Half Precision)</SelectItem>
                  <SelectItem value="bf16">BF16 (Brain Float)</SelectItem>
                  <SelectItem value="int8">INT8 (Quantized)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Optimizer</label>
              <Select defaultValue="adamw">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adamw">AdamW</SelectItem>
                  <SelectItem value="adam">Adam</SelectItem>
                  <SelectItem value="sgd">SGD</SelectItem>
                  <SelectItem value="rmsprop">RMSprop</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Scheduler</label>
              <Select defaultValue="cosine">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cosine">Cosine Annealing</SelectItem>
                  <SelectItem value="linear">Linear</SelectItem>
                  <SelectItem value="step">Step LR</SelectItem>
                  <SelectItem value="exponential">Exponential</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Output Directory</label>
              <div className="flex gap-2">
                <Input defaultValue="./models/training_output" className="flex-1" />
                <Button variant="outline">
                  Browse
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="gradient-checkpointing" />
                <label htmlFor="gradient-checkpointing" className="text-sm text-muted-foreground">
                  Enable Gradient Checkpointing
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="early-stopping" />
                <label htmlFor="early-stopping" className="text-sm text-muted-foreground">
                  Enable Early Stopping
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="wandb-logging" />
                <label htmlFor="wandb-logging" className="text-sm text-muted-foreground">
                  Enable W&B Logging
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Control */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Training Control & Monitor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 mb-6">
            {!isTraining ? (
              <Button onClick={startTraining} className="bg-primary hover:bg-primary/90">
                <Play className="w-4 h-4 mr-2" />
                Start Training
              </Button>
            ) : (
              <Button onClick={stopTraining} variant="destructive">
                <Square className="w-4 h-4 mr-2" />
                Stop Training
              </Button>
            )}
            
            <Button variant="secondary">
              <Save className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
            
            <Button disabled={!isTraining && progress < 100}>
              <Download className="w-4 h-4 mr-2" />
              Download Trained Model
            </Button>
          </div>
          
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-muted-foreground">Training Progress</span>
            <span className="text-sm text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3 mb-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg bg-muted p-4 h-40 overflow-auto text-sm text-foreground font-mono">
              {isTraining ? (
                <div className="space-y-1">
                  <p>INFO: Initializing training environment...</p>
                  <p>INFO: Loading dataset...</p>
                  <p>INFO: Model architecture: Transformer</p>
                  {progress > 10 && <p>INFO: Epoch 1/10 - Step 50/1000 - Loss: 2.45</p>}
                  {progress > 30 && <p>INFO: Epoch 3/10 - Step 150/1000 - Loss: 1.89</p>}
                  {progress > 50 && <p>INFO: Epoch 5/10 - Step 250/1000 - Loss: 1.34</p>}
                  {progress > 70 && <p>INFO: Epoch 7/10 - Step 350/1000 - Loss: 0.98</p>}
                  {progress > 90 && <p>INFO: Training completed successfully!</p>}
                </div>
              ) : (
                <p className="text-muted-foreground">Training logs will appear here...</p>
              )}
            </div>
            
            <div className="bg-muted rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="w-12 h-12 mx-auto mb-3 text-primary opacity-50" />
                <p className="text-muted-foreground">Training metrics will appear here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainModel;

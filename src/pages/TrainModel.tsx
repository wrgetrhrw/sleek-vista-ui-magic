
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Brain, Play, Square, BarChart2, Save, FileJson, Download, Settings } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TrainModel = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const startTraining = () => {
    setIsTraining(true);
    setProgress(0);
    setIsCompleted(false);
    
    // Simulate training progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setIsCompleted(true);
          return 100;
        }
        return prev + 1;
      });
    }, 200);
  };

  const stopTraining = () => {
    setIsTraining(false);
    setProgress(0);
    setIsCompleted(false);
  };

  const downloadModel = () => {
    // Simulate model download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'trained_model.zip';
    link.click();
  };

  return (
    <div className="p-6 min-h-screen bg-background">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Model Training Configuration
        </h1>
        <p className="text-muted-foreground">Configure and train your custom AI model</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Configuration Section */}
        <Card className="border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Training Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Settings */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Basic Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Training Task Type</Label>
                  <Select defaultValue="casual-lm">
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue placeholder="Select task type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual-lm">Casual Language Modeling</SelectItem>
                      <SelectItem value="seq-class">Sequence Classification</SelectItem>
                      <SelectItem value="token-class">Token Classification</SelectItem>
                      <SelectItem value="question-answer">Question Answering</SelectItem>
                      <SelectItem value="summarization">Text Summarization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Base Model</Label>
                  <Select defaultValue="llama-7b">
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="llama-7b">LLaMa 7B</SelectItem>
                      <SelectItem value="llama-13b">LLaMa 13B</SelectItem>
                      <SelectItem value="gpt-neo">GPT-Neo</SelectItem>
                      <SelectItem value="bert">BERT Base</SelectItem>
                      <SelectItem value="bert-large">BERT Large</SelectItem>
                      <SelectItem value="roberta">RoBERTa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Dataset</Label>
                <Select defaultValue="text-dataset">
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text-dataset">Custom Text Dataset</SelectItem>
                    <SelectItem value="code-dataset">Code Dataset</SelectItem>
                    <SelectItem value="conversation">Conversation Dataset</SelectItem>
                    <SelectItem value="instruction">Instruction Following</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Training Parameters */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Training Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Epochs</Label>
                  <Input 
                    type="number" 
                    defaultValue="3" 
                    className="bg-background border-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Batch Size (per device)</Label>
                  <Input 
                    type="number" 
                    defaultValue="8" 
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Learning Rate</Label>
                  <Input 
                    type="text" 
                    defaultValue="0.000301" 
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Gradient Accumulation Steps</Label>
                  <Input 
                    type="number" 
                    defaultValue="1" 
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Max Sequence Length</Label>
                  <Input 
                    type="number" 
                    defaultValue="2048" 
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Warmup Steps</Label>
                  <Input 
                    type="number" 
                    defaultValue="100" 
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Weight Decay</Label>
                  <Input 
                    type="text" 
                    defaultValue="0.01" 
                    className="bg-background border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Save Steps</Label>
                  <Input 
                    type="number" 
                    defaultValue="500" 
                    className="bg-background border-input"
                  />
                </div>
              </div>
            </div>
            
            {/* Output Configuration */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Output Configuration</h3>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Output Directory</Label>
                <div className="flex gap-2">
                  <Input 
                    type="text" 
                    defaultValue="./training_output/model_01" 
                    className="bg-background border-input flex-1"
                  />
                  <Button variant="outline" className="border-input hover:bg-accent">
                    Browse...
                  </Button>
                </div>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Advanced Options</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="mixed-precision" className="border-input" />
                  <Label htmlFor="mixed-precision" className="text-sm text-muted-foreground">
                    Enable Mixed Precision (fp16/bf16)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="gradient-checkpointing" className="border-input" />
                  <Label htmlFor="gradient-checkpointing" className="text-sm text-muted-foreground">
                    Enable Gradient Checkpointing
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="dataloader-drop-last" className="border-input" />
                  <Label htmlFor="dataloader-drop-last" className="text-sm text-muted-foreground">
                    Drop Last Incomplete Batch
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remove-unused-columns" className="border-input" />
                  <Label htmlFor="remove-unused-columns" className="text-sm text-muted-foreground">
                    Remove Unused Columns
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Save Config
              </Button>
              <Button variant="outline" className="border-input hover:bg-accent">
                <FileJson className="w-4 h-4 mr-2" />
                Load Config
              </Button>
              <Button variant="outline" className="border-input hover:bg-accent">
                Reset Config
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Training Monitor */}
        <Card className="border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Training Monitor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 mb-6">
              {!isTraining ? (
                <Button onClick={startTraining} className="bg-green-600 hover:bg-green-700">
                  <Play className="w-4 h-4 mr-2" />
                  Start Training
                </Button>
              ) : (
                <Button onClick={stopTraining} className="bg-red-600 hover:bg-red-700">
                  <Square className="w-4 h-4 mr-2" />
                  Stop Training
                </Button>
              )}
              
              {isCompleted && (
                <Button onClick={downloadModel} className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Model
                </Button>
              )}
            </div>
            
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 mb-6" />
            
            <div className="rounded-lg bg-muted p-4 h-40 overflow-auto text-sm text-foreground font-mono mb-4">
              {isTraining ? (
                <div className="space-y-1">
                  <p className="text-green-600">INFO: Initializing training environment...</p>
                  <p className="text-blue-600">INFO: Loading dataset from disk...</p>
                  <p className="text-purple-600">INFO: Starting training loop...</p>
                  {progress > 20 && <p className="text-orange-600">INFO: Epoch 1/3 - Loss: 2.453</p>}
                  {progress > 40 && <p className="text-orange-600">INFO: Epoch 2/3 - Loss: 2.124</p>}
                  {progress > 60 && <p className="text-orange-600">INFO: Epoch 3/3 - Loss: 1.896</p>}
                  {progress > 80 && <p className="text-green-600">INFO: Saving model checkpoint...</p>}
                  {progress === 100 && <p className="text-green-600">SUCCESS: Training completed!</p>}
                </div>
              ) : isCompleted ? (
                <div className="space-y-1">
                  <p className="text-green-600">Training completed successfully!</p>
                  <p className="text-blue-600">Final Loss: 1.782</p>
                  <p className="text-purple-600">Model saved to: ./training_output/model_01</p>
                  <p className="text-orange-600">Ready for download or deployment</p>
                </div>
              ) : (
                <p className="text-muted-foreground">Training logs will appear here...</p>
              )}
            </div>
            
            <div className="bg-muted rounded-lg p-4 h-40 flex items-center justify-center border-border">
              <div className="text-center">
                <BarChart2 className="w-12 h-12 mx-auto mb-3 text-primary opacity-50" />
                <p className="text-muted-foreground">Training metrics graph will appear during training</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainModel;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Book, MessageCircle, Github, ExternalLink } from "lucide-react";

const Help = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
        <HelpCircle className="w-8 h-8 text-primary" />
        Help Center
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border backdrop-blur-sm mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-foreground">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Welcome to LLM-Train! This application helps you manage, train, and fine-tune language models.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Use the Asset Manager to download or import models and datasets.</li>
                <li>Train new models from scratch in the Train Model tab.</li>
                <li>Fine-tune existing models in the Fine-Tune Model tab.</li>
                <li>Track your activities and manage the workflow in the Tasks section.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border backdrop-blur-sm mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-foreground">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline">
                    How do I download pre-trained models?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Navigate to the Asset Manager tab and click on "Download New Asset". 
                    You can browse available models from the Hugging Face hub and download them directly.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline">
                    What training techniques are supported?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The application supports various training techniques including standard fine-tuning, 
                    LoRA, QLoRA, and PEFT for parameter-efficient training.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline">
                    How can I save training configurations?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    In both the Train Model and Fine-tune Model tabs, you can save and load configurations
                    using the "Save Config" and "Load Config" buttons. These are stored as JSON files.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline">
                    Can I use custom datasets?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, you can import your own custom datasets via the Asset Manager. 
                    The application supports various formats including JSON, CSV, and JSONL.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-card border-border backdrop-blur-sm mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-foreground">Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a 
                href="#" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-accent/50"
              >
                <Book className="w-5 h-5" />
                <div>
                  <p className="font-medium">Documentation</p>
                  <p className="text-sm text-muted-foreground">Complete user guides</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-accent/50"
              >
                <MessageCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">Community Forum</p>
                  <p className="text-sm text-muted-foreground">Ask questions and share knowledge</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-accent/50"
              >
                <Github className="w-5 h-5" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">Source code and issue tracker</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-foreground">About LLM-Train</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                LLM-Train is an open-source tool designed to simplify the process of training and fine-tuning language models.
              </p>
              <p className="text-sm text-muted-foreground">
                Version 2.0.1 | Released 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;

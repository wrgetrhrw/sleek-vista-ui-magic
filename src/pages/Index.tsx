
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Zap, Database, CheckSquare, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="p-6 min-h-screen bg-background">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Welcome to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">LLM-Train</span>
        </h1>
        <p className="text-muted-foreground text-lg">Manage, train, and fine-tune your language models with ease</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Model Training</p>
                <p className="text-2xl font-bold text-foreground">Idle</p>
              </div>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Model Fine-tuning</p>
                <p className="text-2xl font-bold text-foreground">Idle</p>
              </div>
              <div className="w-12 h-12 bg-secondary/80 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Downloads</p>
                <p className="text-2xl font-bold text-foreground">Idle</p>
              </div>
              <div className="w-12 h-12 bg-accent/80 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Active Tasks</p>
                <p className="text-2xl font-bold text-foreground">0</p>
              </div>
              <div className="w-12 h-12 bg-secondary/80 rounded-lg flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Overview */}
        <Card className="lg:col-span-1 bg-card border-border backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-primary" />
              Task Overview
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Tasks</span>
                <span className="text-foreground font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">To Do</span>
                <span className="text-foreground font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">In Progress</span>
                <span className="text-foreground font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Completed</span>
                <span className="text-foreground font-semibold">0</span>
              </div>
            </div>

            <Link to="/tasks">
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
                View All Tasks
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="lg:col-span-2 bg-card border-border backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Upcoming Tasks
            </h3>
            
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No upcoming tasks.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/train-model">
            <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-foreground font-medium">Train Model</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/fine-tune-model">
            <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-foreground font-medium">Fine-tune Model</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/asset-manager">
            <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-foreground font-medium">Asset Manager</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/tasks">
            <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <CheckSquare className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-foreground font-medium">Task Board</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

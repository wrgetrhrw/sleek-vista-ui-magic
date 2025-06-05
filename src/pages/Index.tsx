
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Zap, Database, CheckSquare, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome to <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">LLM-Train</span>
        </h1>
        <p className="text-slate-400 text-lg">Manage, train, and fine-tune your language models with ease</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Model Training</p>
                <p className="text-2xl font-bold text-white">Idle</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Model Fine-tuning</p>
                <p className="text-2xl font-bold text-white">Idle</p>
              </div>
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-teal-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Downloads</p>
                <p className="text-2xl font-bold text-white">Idle</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Active Tasks</p>
                <p className="text-2xl font-bold text-white">0</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Overview */}
        <Card className="lg:col-span-1 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-400" />
              Task Overview
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Tasks</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">To Do</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">In Progress</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Completed</span>
                <span className="text-white font-semibold">0</span>
              </div>
            </div>

            <Link to="/tasks">
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                View All Tasks
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="lg:col-span-2 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-400" />
              Upcoming Tasks
            </h3>
            
            <div className="flex items-center justify-center h-32 text-slate-500">
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
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/train-model">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-medium">Train Model</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/fine-tune-model">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                <p className="text-white font-medium">Fine-tune Model</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/asset-manager">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <Database className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-medium">Asset Manager</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/tasks">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-4 text-center">
                <CheckSquare className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-medium">Task Board</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Tasks = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Task Board</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-200">
          <Plus className="w-4 h-4 mr-2" />
          Add New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white flex items-center justify-between">
              To Do
              <span className="bg-teal-600 text-white text-sm px-2 py-1 rounded-full">0</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {/* Tasks will be added here */}
          </CardContent>
        </Card>

        {/* In Progress Column */}
        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white flex items-center justify-between">
              In Progress
              <span className="bg-teal-600 text-white text-sm px-2 py-1 rounded-full">0</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {/* Tasks will be added here */}
          </CardContent>
        </Card>

        {/* Completed Column */}
        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white flex items-center justify-between">
              Completed
              <span className="bg-teal-600 text-white text-sm px-2 py-1 rounded-full">0</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {/* Tasks will be added here */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tasks;

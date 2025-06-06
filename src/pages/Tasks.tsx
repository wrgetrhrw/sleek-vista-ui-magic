
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Tasks = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Task Board</h1>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
          <Plus className="w-4 h-4 mr-2" />
          Add New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center justify-between">
              To Do
              <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">0</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {/* Tasks will be added here */}
          </CardContent>
        </Card>

        {/* In Progress Column */}
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center justify-between">
              In Progress
              <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">0</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {/* Tasks will be added here */}
          </CardContent>
        </Card>

        {/* Completed Column */}
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center justify-between">
              Completed
              <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">0</span>
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

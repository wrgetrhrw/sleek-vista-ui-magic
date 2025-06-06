
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTasks } from "@/hooks/useTasks";
import { TaskCard } from "@/components/TaskCard";
import { CreateTaskDialog } from "@/components/CreateTaskDialog";
import { useAuth } from "@/hooks/useAuth";
import { AuthForm } from "@/components/AuthForm";

const Tasks = () => {
  const { user } = useAuth();
  const { tasks, isLoading, createTask, updateTask, deleteTask, isCreating } = useTasks();

  if (!user) {
    return <AuthForm />;
  }

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  const handleStatusChange = (id: string, status: 'todo' | 'in_progress' | 'completed') => {
    updateTask({ id, updates: { status } });
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
  };

  if (isLoading) {
    return (
      <div className="p-6 bg-background min-h-screen">
        <div className="flex justify-center items-center h-64">
          <div className="text-muted-foreground">Loading tasks...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Task Board</h1>
        <CreateTaskDialog onCreateTask={createTask} isCreating={isCreating} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center justify-between">
              To Do
              <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">
                {todoTasks.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {todoTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
            {todoTasks.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                No tasks in this column
              </div>
            )}
          </CardContent>
        </Card>

        {/* In Progress Column */}
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center justify-between">
              In Progress
              <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">
                {inProgressTasks.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {inProgressTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
            {inProgressTasks.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                No tasks in this column
              </div>
            )}
          </CardContent>
        </Card>

        {/* Completed Column */}
        <Card className="bg-card border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-foreground flex items-center justify-between">
              Completed
              <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">
                {completedTasks.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[400px] space-y-3">
            {completedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
            {completedTasks.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                No tasks in this column
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tasks;

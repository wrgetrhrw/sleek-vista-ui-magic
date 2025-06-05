
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { toast } from "sonner";

const themeOptions = [
  { 
    id: "light", 
    name: "Light",
    description: "Clean and bright theme",
    gradient: "from-blue-200 to-purple-200"
  },
  { 
    id: "dark", 
    name: "Dark",
    description: "Dark theme for night coding",
    gradient: "from-slate-700 to-slate-900"
  },
  { 
    id: "nord", 
    name: "Nord",
    description: "Arctic inspired color palette",
    gradient: "from-blue-700 to-blue-900"
  },
  { 
    id: "solarized", 
    name: "Solarized",
    description: "Precision colors for machines",
    gradient: "from-yellow-600 to-orange-700"
  },
  { 
    id: "monokai", 
    name: "Monokai",
    description: "Sublime Text inspired theme",
    gradient: "from-green-500 to-yellow-500"
  },
  { 
    id: "dracula", 
    name: "Dracula",
    description: "Dark theme with vibrant colors",
    gradient: "from-purple-700 to-pink-700"
  },
  { 
    id: "github", 
    name: "GitHub",
    description: "GitHub inspired clean theme",
    gradient: "from-blue-100 to-slate-300"
  },
  { 
    id: "material", 
    name: "Material",
    description: "Google Material Design theme",
    gradient: "from-teal-500 to-blue-500"
  }
];

const Themes = () => {
  const { theme, setTheme } = useTheme();

  const applyTheme = (themeId: string) => {
    setTheme(themeId as any);
    const themeName = themeOptions.find(t => t.id === themeId)?.name;
    toast.success(`${themeName} theme applied successfully!`);
  };

  return (
    <div className="p-6 min-h-screen bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Themes</h1>
        <p className="text-muted-foreground">Customize the appearance of your application</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {themeOptions.map((themeOption) => (
          <Card 
            key={themeOption.id}
            onClick={() => applyTheme(themeOption.id)}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 border-2 ${
              theme === themeOption.id 
                ? "border-primary shadow-lg" 
                : "border-border hover:border-primary/50"
            }`}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br mb-4 flex items-center justify-center ${themeOption.gradient}`}>
                {theme === themeOption.id && <Check className="w-10 h-10 text-white" />}
                {theme !== themeOption.id && <Palette className="w-10 h-10 text-white opacity-70" />}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{themeOption.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{themeOption.description}</p>
              {theme === themeOption.id && (
                <div className="mt-3 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  Active
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Theme preferences are saved automatically when you select a theme</p>
      </div>
    </div>
  );
};

export default Themes;

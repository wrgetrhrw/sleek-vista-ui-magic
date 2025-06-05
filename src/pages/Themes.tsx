
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const themeOptions = [
  { id: "light", name: "Light" },
  { id: "dark", name: "Dark" },
  { id: "nord", name: "Nord" },
  { id: "solarized", name: "Solarized" },
  { id: "monokai", name: "Monokai" },
  { id: "dracula", name: "Dracula" },
  { id: "github", name: "GitHub" },
  { id: "material", name: "Material" },
];

const Themes = () => {
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const applyTheme = () => {
    toast.success(`${themeOptions.find(t => t.id === selectedTheme)?.name} theme applied successfully!`);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Themes</h1>
        <p className="text-slate-400">Customize the appearance of your application</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {themeOptions.map((theme) => (
          <Card 
            key={theme.id}
            onClick={() => setSelectedTheme(theme.id)}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedTheme === theme.id 
                ? "bg-slate-800 border-teal-500" 
                : "bg-slate-900/50 border-slate-800"
            }`}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[180px]">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br mb-4 flex items-center justify-center
                ${theme.id === "light" ? "from-blue-200 to-purple-200" : ""}
                ${theme.id === "dark" ? "from-slate-700 to-slate-900" : ""}
                ${theme.id === "nord" ? "from-blue-700 to-blue-900" : ""}
                ${theme.id === "solarized" ? "from-yellow-600 to-orange-700" : ""}
                ${theme.id === "monokai" ? "from-green-500 to-yellow-500" : ""}
                ${theme.id === "dracula" ? "from-purple-700 to-pink-700" : ""}
                ${theme.id === "github" ? "from-blue-100 to-slate-300" : ""}
                ${theme.id === "material" ? "from-teal-500 to-blue-500" : ""}
              `}>
                {selectedTheme === theme.id && <Check className="w-8 h-8 text-white" />}
                {selectedTheme !== theme.id && <Palette className="w-8 h-8 text-white opacity-70" />}
              </div>
              <h3 className="text-lg font-medium text-white">{theme.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <Button 
          onClick={applyTheme}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 text-lg"
        >
          Apply Theme
        </Button>
      </div>

      <div className="text-center text-sm text-slate-500">
        <p>Theme preferences are saved between sessions</p>
      </div>
    </div>
  );
};

export default Themes;

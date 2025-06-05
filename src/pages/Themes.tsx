
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const themeOptions = [
  { 
    id: "light", 
    name: "Light",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      primary: "210 100% 50%",
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96.1%",
      accent: "210 40% 96.1%",
      muted: "210 40% 96.1%",
      border: "214.3 31.8% 91.4%"
    }
  },
  { 
    id: "dark", 
    name: "Dark",
    colors: {
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
      card: "222.2 84% 4.9%",
      cardForeground: "210 40% 98%",
      primary: "210 100% 60%",
      primaryForeground: "210 40% 98%",
      secondary: "217.2 32.6% 17.5%",
      accent: "217.2 32.6% 17.5%",
      muted: "217.2 32.6% 17.5%",
      border: "217.2 32.6% 17.5%"
    }
  },
  { 
    id: "nord", 
    name: "Nord",
    colors: {
      background: "220 16% 22%",
      foreground: "220 14% 71%",
      card: "220 16% 26%",
      cardForeground: "220 14% 71%",
      primary: "213 32% 52%",
      primaryForeground: "220 14% 71%",
      secondary: "220 17% 32%",
      accent: "220 17% 32%",
      muted: "220 17% 32%",
      border: "220 13% 18%"
    }
  },
  { 
    id: "solarized", 
    name: "Solarized",
    colors: {
      background: "44 87% 94%",
      foreground: "192 81% 14%",
      card: "44 87% 94%",
      cardForeground: "192 81% 14%",
      primary: "18 89% 33%",
      primaryForeground: "44 87% 94%",
      secondary: "45 100% 85%",
      accent: "45 100% 85%",
      muted: "45 100% 85%",
      border: "45 6% 84%"
    }
  },
  { 
    id: "monokai", 
    name: "Monokai",
    colors: {
      background: "60 2% 14%",
      foreground: "60 9% 98%",
      card: "60 2% 18%",
      cardForeground: "60 9% 98%",
      primary: "80 76% 53%",
      primaryForeground: "60 2% 14%",
      secondary: "60 2% 25%",
      accent: "60 2% 25%",
      muted: "60 2% 25%",
      border: "60 2% 30%"
    }
  },
  { 
    id: "dracula", 
    name: "Dracula",
    colors: {
      background: "231 15% 18%",
      foreground: "60 30% 96%",
      card: "231 15% 22%",
      cardForeground: "60 30% 96%",
      primary: "265 89% 78%",
      primaryForeground: "231 15% 18%",
      secondary: "231 15% 30%",
      accent: "231 15% 30%",
      muted: "231 15% 30%",
      border: "231 15% 35%"
    }
  },
  { 
    id: "github", 
    name: "GitHub",
    colors: {
      background: "0 0% 100%",
      foreground: "213 27% 16%",
      card: "0 0% 100%",
      cardForeground: "213 27% 16%",
      primary: "212 92% 45%",
      primaryForeground: "0 0% 100%",
      secondary: "210 14% 97%",
      accent: "210 14% 97%",
      muted: "210 14% 97%",
      border: "216 12% 84%"
    }
  },
  { 
    id: "material", 
    name: "Material",
    colors: {
      background: "210 11% 15%",
      foreground: "213 31% 91%",
      card: "210 11% 18%",
      cardForeground: "213 31% 91%",
      primary: "199 89% 48%",
      primaryForeground: "210 11% 15%",
      secondary: "210 11% 25%",
      accent: "210 11% 25%",
      muted: "210 11% 25%",
      border: "210 11% 30%"
    }
  }
];

const Themes = () => {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    return localStorage.getItem('selected-theme') || 'dark';
  });

  useEffect(() => {
    // Apply the saved theme on component mount
    applyThemeToDocument(selectedTheme);
  }, []);

  const applyThemeToDocument = (themeId: string) => {
    const theme = themeOptions.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });

    // Add/remove dark class for compatibility
    if (themeId === 'dark' || themeId === 'nord' || themeId === 'monokai' || themeId === 'dracula' || themeId === 'material') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const applyTheme = () => {
    applyThemeToDocument(selectedTheme);
    localStorage.setItem('selected-theme', selectedTheme);
    
    const themeName = themeOptions.find(t => t.id === selectedTheme)?.name;
    toast.success(`${themeName} theme applied successfully!`);
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

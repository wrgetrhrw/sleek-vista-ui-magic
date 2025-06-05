
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark' | 'nord' | 'solarized' | 'monokai' | 'dracula' | 'github' | 'material';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const themeConfigs = {
  light: {
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    card: "0 0% 100%",
    cardForeground: "222.2 84% 4.9%",
    popover: "0 0% 100%",
    popoverForeground: "222.2 84% 4.9%",
    primary: "221.2 83.2% 53.3%",
    primaryForeground: "210 40% 98%",
    secondary: "210 40% 96.1%",
    secondaryForeground: "222.2 47.4% 11.2%",
    muted: "210 40% 96.1%",
    mutedForeground: "215.4 16.3% 46.9%",
    accent: "210 40% 96.1%",
    accentForeground: "222.2 47.4% 11.2%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "210 40% 98%",
    border: "214.3 31.8% 91.4%",
    input: "214.3 31.8% 91.4%",
    ring: "221.2 83.2% 53.3%",
    isDark: false
  },
  dark: {
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    card: "222.2 84% 4.9%",
    cardForeground: "210 40% 98%",
    popover: "222.2 84% 4.9%",
    popoverForeground: "210 40% 98%",
    primary: "217.2 91.2% 59.8%",
    primaryForeground: "222.2 84% 4.9%",
    secondary: "217.2 32.6% 17.5%",
    secondaryForeground: "210 40% 98%",
    muted: "217.2 32.6% 17.5%",
    mutedForeground: "215 20.2% 65.1%",
    accent: "217.2 32.6% 17.5%",
    accentForeground: "210 40% 98%",
    destructive: "0 62.8% 50.6%",
    destructiveForeground: "210 40% 98%",
    border: "217.2 32.6% 17.5%",
    input: "217.2 32.6% 17.5%",
    ring: "224.3 76.3% 48%",
    isDark: true
  },
  nord: {
    background: "220 16% 22%",
    foreground: "220 14% 71%",
    card: "220 16% 26%",
    cardForeground: "220 14% 71%",
    popover: "220 16% 26%",
    popoverForeground: "220 14% 71%",
    primary: "213 32% 52%",
    primaryForeground: "220 14% 71%",
    secondary: "220 17% 32%",
    secondaryForeground: "220 14% 71%",
    muted: "220 17% 32%",
    mutedForeground: "220 9% 46%",
    accent: "220 17% 32%",
    accentForeground: "220 14% 71%",
    destructive: "354 70% 54%",
    destructiveForeground: "220 14% 71%",
    border: "220 13% 18%",
    input: "220 13% 18%",
    ring: "213 32% 52%",
    isDark: true
  },
  solarized: {
    background: "44 87% 94%",
    foreground: "192 81% 14%",
    card: "44 87% 94%",
    cardForeground: "192 81% 14%",
    popover: "44 87% 94%",
    popoverForeground: "192 81% 14%",
    primary: "18 89% 33%",
    primaryForeground: "44 87% 94%",
    secondary: "45 100% 85%",
    secondaryForeground: "192 81% 14%",
    muted: "45 100% 85%",
    mutedForeground: "180 7% 60%",
    accent: "45 100% 85%",
    accentForeground: "192 81% 14%",
    destructive: "1 71% 52%",
    destructiveForeground: "44 87% 94%",
    border: "45 6% 84%",
    input: "45 6% 84%",
    ring: "18 89% 33%",
    isDark: false
  },
  monokai: {
    background: "60 2% 14%",
    foreground: "60 9% 98%",
    card: "60 2% 18%",
    cardForeground: "60 9% 98%",
    popover: "60 2% 18%",
    popoverForeground: "60 9% 98%",
    primary: "80 76% 53%",
    primaryForeground: "60 2% 14%",
    secondary: "60 2% 25%",
    secondaryForeground: "60 9% 98%",
    muted: "60 2% 25%",
    mutedForeground: "60 5% 64%",
    accent: "60 2% 25%",
    accentForeground: "60 9% 98%",
    destructive: "0 83% 63%",
    destructiveForeground: "60 9% 98%",
    border: "60 2% 30%",
    input: "60 2% 30%",
    ring: "80 76% 53%",
    isDark: true
  },
  dracula: {
    background: "231 15% 18%",
    foreground: "60 30% 96%",
    card: "231 15% 22%",
    cardForeground: "60 30% 96%",
    popover: "231 15% 22%",
    popoverForeground: "60 30% 96%",
    primary: "265 89% 78%",
    primaryForeground: "231 15% 18%",
    secondary: "231 15% 30%",
    secondaryForeground: "60 30% 96%",
    muted: "231 15% 30%",
    mutedForeground: "226 14% 93%",
    accent: "231 15% 30%",
    accentForeground: "60 30% 96%",
    destructive: "0 100% 67%",
    destructiveForeground: "60 30% 96%",
    border: "231 15% 35%",
    input: "231 15% 35%",
    ring: "265 89% 78%",
    isDark: true
  },
  github: {
    background: "0 0% 100%",
    foreground: "213 27% 16%",
    card: "0 0% 100%",
    cardForeground: "213 27% 16%",
    popover: "0 0% 100%",
    popoverForeground: "213 27% 16%",
    primary: "212 92% 45%",
    primaryForeground: "0 0% 100%",
    secondary: "210 14% 97%",
    secondaryForeground: "213 27% 16%",
    muted: "210 14% 97%",
    mutedForeground: "215 13% 65%",
    accent: "210 14% 97%",
    accentForeground: "213 27% 16%",
    destructive: "0 84% 60%",
    destructiveForeground: "0 0% 100%",
    border: "216 12% 84%",
    input: "216 12% 84%",
    ring: "212 92% 45%",
    isDark: false
  },
  material: {
    background: "210 11% 15%",
    foreground: "213 31% 91%",
    card: "210 11% 18%",
    cardForeground: "213 31% 91%",
    popover: "210 11% 18%",
    popoverForeground: "213 31% 91%",
    primary: "199 89% 48%",
    primaryForeground: "210 11% 15%",
    secondary: "210 11% 25%",
    secondaryForeground: "213 31% 91%",
    muted: "210 11% 25%",
    mutedForeground: "215 14% 65%",
    accent: "210 11% 25%",
    accentForeground: "213 31% 91%",
    destructive: "0 84% 60%",
    destructiveForeground: "213 31% 91%",
    border: "210 11% 30%",
    input: "210 11% 30%",
    ring: "199 89% 48%",
    isDark: true
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('selected-theme') as Theme;
    return saved && saved in themeConfigs ? saved : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const config = themeConfigs[theme];
    
    // Apply all CSS variables
    Object.entries(config).forEach(([key, value]) => {
      if (key !== 'isDark') {
        const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVarName, value);
      }
    });

    // Apply dark class for proper styling
    if (config.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('selected-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

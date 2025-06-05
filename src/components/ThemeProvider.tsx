
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
    foreground: "220 13% 18%",
    card: "0 0% 100%",
    cardForeground: "220 13% 18%",
    popover: "0 0% 100%",
    popoverForeground: "220 13% 18%",
    primary: "220.9 39.3% 11%",
    primaryForeground: "210 20% 98%",
    secondary: "220 14.3% 95.9%",
    secondaryForeground: "220.9 39.3% 11%",
    muted: "220 14.3% 95.9%",
    mutedForeground: "220 8.9% 46.1%",
    accent: "220 14.3% 95.9%",
    accentForeground: "220.9 39.3% 11%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "210 20% 98%",
    border: "220 13% 91%",
    input: "220 13% 91%",
    ring: "224.3 76.3% 48%",
    sidebarBackground: "0 0% 98%",
    sidebarForeground: "240 5.3% 26.1%",
    sidebarPrimary: "240 5.9% 10%",
    sidebarPrimaryForeground: "0 0% 98%",
    sidebarAccent: "240 4.8% 95.9%",
    sidebarAccentForeground: "240 5.9% 10%",
    sidebarBorder: "220 13% 91%",
    sidebarRing: "217.2 91.2% 59.8%",
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
    sidebarBackground: "240 5.9% 10%",
    sidebarForeground: "240 4.8% 95.9%",
    sidebarPrimary: "224.3 76.3% 48%",
    sidebarPrimaryForeground: "0 0% 100%",
    sidebarAccent: "240 3.7% 15.9%",
    sidebarAccentForeground: "240 4.8% 95.9%",
    sidebarBorder: "240 3.7% 15.9%",
    sidebarRing: "217.2 91.2% 59.8%",
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
    sidebarBackground: "220 16% 20%",
    sidebarForeground: "220 14% 71%",
    sidebarPrimary: "213 32% 52%",
    sidebarPrimaryForeground: "220 14% 71%",
    sidebarAccent: "220 17% 28%",
    sidebarAccentForeground: "220 14% 71%",
    sidebarBorder: "220 13% 18%",
    sidebarRing: "213 32% 52%",
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
    sidebarBackground: "44 87% 92%",
    sidebarForeground: "192 81% 14%",
    sidebarPrimary: "18 89% 33%",
    sidebarPrimaryForeground: "44 87% 94%",
    sidebarAccent: "45 100% 82%",
    sidebarAccentForeground: "192 81% 14%",
    sidebarBorder: "45 6% 84%",
    sidebarRing: "18 89% 33%",
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
    sidebarBackground: "60 2% 12%",
    sidebarForeground: "60 9% 98%",
    sidebarPrimary: "80 76% 53%",
    sidebarPrimaryForeground: "60 2% 14%",
    sidebarAccent: "60 2% 22%",
    sidebarAccentForeground: "60 9% 98%",
    sidebarBorder: "60 2% 30%",
    sidebarRing: "80 76% 53%",
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
    sidebarBackground: "231 15% 16%",
    sidebarForeground: "60 30% 96%",
    sidebarPrimary: "265 89% 78%",
    sidebarPrimaryForeground: "231 15% 18%",
    sidebarAccent: "231 15% 28%",
    sidebarAccentForeground: "60 30% 96%",
    sidebarBorder: "231 15% 35%",
    sidebarRing: "265 89% 78%",
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
    sidebarBackground: "0 0% 98%",
    sidebarForeground: "213 27% 16%",
    sidebarPrimary: "212 92% 45%",
    sidebarPrimaryForeground: "0 0% 100%",
    sidebarAccent: "210 14% 95%",
    sidebarAccentForeground: "213 27% 16%",
    sidebarBorder: "216 12% 84%",
    sidebarRing: "212 92% 45%",
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
    sidebarBackground: "210 11% 13%",
    sidebarForeground: "213 31% 91%",
    sidebarPrimary: "199 89% 48%",
    sidebarPrimaryForeground: "210 11% 15%",
    sidebarAccent: "210 11% 23%",
    sidebarAccentForeground: "213 31% 91%",
    sidebarBorder: "210 11% 30%",
    sidebarRing: "199 89% 48%",
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
    
    // Apply all CSS variables (excluding isDark which is not a CSS variable)
    Object.entries(config).forEach(([key, value]) => {
      if (key !== 'isDark') {
        const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVarName, value as string);
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

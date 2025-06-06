
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, CheckSquare, Database, Zap, Paintbrush, Palette, HelpCircle, Brain } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { UserMenu } from "@/components/UserMenu";
import { useAuth } from "@/hooks/useAuth";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Asset Manager", url: "/asset-manager", icon: Database },
  { title: "Train Model", url: "/train-model", icon: Zap },
  { title: "Fine-Tune Model", url: "/fine-tune-model", icon: Paintbrush },
  { title: "Themes", url: "/themes", icon: Palette },
  { title: "Help", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <Sidebar className="border-r border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <SidebarHeader className="p-6 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">LLM-Train</h2>
              <p className="text-sm text-slate-400">Task Manager</p>
            </div>
          </div>
          {user && <UserMenu />}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full transition-all duration-200 hover:bg-slate-800/50 hover:text-blue-400 rounded-lg ${
                      location.pathname === item.url
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-300"
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-slate-800">
        <div className="text-xs text-slate-500 text-center">
          <p>Version 2.0.1</p>
          <p className="mt-1">{user ? 'Connected' : 'Ready'}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

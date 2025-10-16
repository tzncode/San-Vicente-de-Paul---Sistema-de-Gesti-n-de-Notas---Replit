import { useState } from "react";
import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { LoginForm } from "@/components/LoginForm";
import { ProfessorDashboard } from "@/components/ProfessorDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";
import { CourseManagement } from "@/components/CourseManagement";
import { ExamCreation } from "@/components/ExamCreation";
import { GradeUpload } from "@/components/GradeUpload";
import { StudentManagement } from "@/components/StudentManagement";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut } from "lucide-react";

function MainLayout() {
  // TODO: remove mock functionality - Replace with actual auth
  const [userRole, setUserRole] = useState<"profesor" | "admin">("admin");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const style = {
    "--sidebar-width": "16rem",
  };

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar userRole={userRole} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b bg-card">
            <div className="flex items-center gap-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-mono">
                  {userRole === "admin" ? "Administrador" : "Profesor"}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setUserRole(userRole === "admin" ? "profesor" : "admin")}
                  data-testid="button-toggle-role"
                >
                  Cambiar a {userRole === "admin" ? "Profesor" : "Admin"}
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLoggedIn(false)}
                data-testid="button-logout"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Switch>
              {userRole === "admin" ? (
                <>
                  <Route path="/admin" component={AdminDashboard} />
                  <Route path="/admin/cursos" component={CourseManagement} />
                  <Route path="/admin/estudiantes" component={StudentManagement} />
                  <Route path="/" component={AdminDashboard} />
                </>
              ) : (
                <>
                  <Route path="/" component={ProfessorDashboard} />
                  <Route path="/examenes" component={ExamCreation} />
                  <Route path="/notas" component={GradeUpload} />
                </>
              )}
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <MainLayout />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  ClipboardList,
  Settings,
  GraduationCap,
  UserCog,
  Calendar,
} from "lucide-react";
import { Link, useLocation } from "wouter";

interface AppSidebarProps {
  userRole: "profesor" | "admin";
}

export function AppSidebar({ userRole }: AppSidebarProps) {
  const [location] = useLocation();

  const professorItems = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Mis Cursos", url: "/cursos", icon: BookOpen },
    { title: "Exámenes", url: "/examenes", icon: FileText },
    { title: "Cargar Notas", url: "/notas", icon: ClipboardList },
  ];

  const adminItems = [
    { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
    { title: "Gestión de Cursos", url: "/admin/cursos", icon: BookOpen },
    { title: "Gestión de Materias", url: "/admin/materias", icon: GraduationCap },
    { title: "Estudiantes", url: "/admin/estudiantes", icon: Users },
    { title: "Profesores", url: "/admin/profesores", icon: UserCog },
    { title: "Periodos Académicos", url: "/admin/periodos", icon: Calendar },
    { title: "Configuración", url: "/admin/configuracion", icon: Settings },
  ];

  const items = userRole === "admin" ? adminItems : professorItems;

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">San Vicente de Paul</span>
            <span className="text-xs text-muted-foreground">
              {userRole === "admin" ? "Administrador" : "Profesor"}
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          © 2025 San Vicente de Paul
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

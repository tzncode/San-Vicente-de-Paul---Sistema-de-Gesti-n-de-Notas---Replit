import { StatCard } from "./StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, TrendingUp, UserCog, Calendar } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function AdminDashboard() {
  // TODO: remove mock functionality
  const performanceData = [
    { name: "1° Grado", promedio: 8.2 },
    { name: "2° Grado", promedio: 7.9 },
    { name: "3° Grado", promedio: 8.5 },
    { name: "4° Grado", promedio: 7.6 },
    { name: "5° Grado", promedio: 8.1 },
    { name: "6° Grado", promedio: 7.8 },
  ];

  const recentActivity = [
    { id: 1, action: "Nuevo examen creado", profesor: "Prof. García", time: "Hace 2 horas" },
    { id: 2, action: "Notas cargadas", profesor: "Prof. Martínez", time: "Hace 3 horas" },
    { id: 3, action: "Nuevo estudiante agregado", profesor: "Admin", time: "Hace 5 horas" },
    { id: 4, action: "Curso actualizado", profesor: "Admin", time: "Hace 1 día" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard Administrativo</h1>
        <p className="text-muted-foreground mt-1">
          Vista general del sistema académico
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Estudiantes"
          value="324"
          icon={Users}
          description="Todos los niveles"
        />
        <StatCard
          title="Cursos Activos"
          value="12"
          icon={BookOpen}
          description="Primaria y Secundaria"
        />
        <StatCard
          title="Profesores"
          value="28"
          icon={UserCog}
          description="Personal activo"
        />
        <StatCard
          title="Promedio General"
          value="7.8"
          icon={TrendingUp}
          trend={{ value: 5.2, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento por Curso (Primaria)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis domain={[0, 10]} className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Bar dataKey="promedio" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
                  data-testid={`activity-${activity.id}`}
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.profesor} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nivel Primaria</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">6 Cursos</div>
            <p className="text-xs text-muted-foreground mt-1">178 estudiantes</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nivel Secundaria</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">6 Cursos</div>
            <p className="text-xs text-muted-foreground mt-1">146 estudiantes</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Periodo Actual</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">Trimestral</div>
            <p className="text-xs text-muted-foreground mt-1">Oct - Dic 2025</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

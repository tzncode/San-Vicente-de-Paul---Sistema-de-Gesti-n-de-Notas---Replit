import { StatCard } from "../StatCard";
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-6">
      <StatCard
        title="Total Estudiantes"
        value="324"
        description="Todos los niveles"
        icon={Users}
      />
      <StatCard
        title="Cursos Activos"
        value="12"
        description="Primaria y Secundaria"
        icon={BookOpen}
      />
      <StatCard
        title="Profesores"
        value="28"
        description="Personal activo"
        icon={GraduationCap}
      />
      <StatCard
        title="Promedio General"
        value="7.8"
        icon={TrendingUp}
        trend={{ value: 5.2, isPositive: true }}
      />
    </div>
  );
}

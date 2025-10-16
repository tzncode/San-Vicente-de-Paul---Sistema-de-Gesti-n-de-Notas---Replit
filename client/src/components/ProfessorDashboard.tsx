import { StatCard } from "./StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, TrendingUp, Users, Plus } from "lucide-react";

export function ProfessorDashboard() {
  // TODO: remove mock functionality
  const recentExams = [
    { id: 1, name: "Evaluación 1 - Matemática", curso: "6° Grado", date: "2025-10-05", promedio: 7.5 },
    { id: 2, name: "Parcial - Ciencias Sociales", curso: "3° Año", date: "2025-10-08", promedio: 8.2 },
    { id: 3, name: "Evaluación 2 - Lengua", curso: "5° Grado", date: "2025-10-10", promedio: 7.8 },
  ];

  const courses = [
    { id: 1, name: "6° Grado - Matemática", students: 28, nivel: "Primaria" },
    { id: 2, name: "3° Año - Ciencias Sociales", students: 32, nivel: "Secundaria" },
    { id: 3, name: "5° Grado - Lengua", students: 26, nivel: "Primaria" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard del Profesor</h1>
        <p className="text-muted-foreground mt-1">
          Vista general de tus cursos y evaluaciones
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Cursos Asignados"
          value={courses.length}
          icon={BookOpen}
          description="Activos este periodo"
        />
        <StatCard
          title="Total Estudiantes"
          value={courses.reduce((acc, c) => acc + c.students, 0)}
          icon={Users}
        />
        <StatCard
          title="Exámenes Creados"
          value={recentExams.length}
          icon={FileText}
          description="Este trimestre"
        />
        <StatCard
          title="Promedio General"
          value="7.8"
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Mis Cursos</span>
              <Button size="sm" data-testid="button-add-course">
                <Plus className="h-4 w-4 mr-1" />
                Unirse a Curso
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-3 rounded-md border hover-elevate active-elevate-2"
                  data-testid={`card-course-${course.id}`}
                >
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.students} estudiantes
                    </p>
                  </div>
                  <Badge variant="secondary">{course.nivel}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Exámenes Recientes</span>
              <Button size="sm" data-testid="button-create-exam">
                <Plus className="h-4 w-4 mr-1" />
                Crear Examen
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between p-3 rounded-md border hover-elevate active-elevate-2"
                  data-testid={`card-exam-${exam.id}`}
                >
                  <div className="flex-1">
                    <p className="font-medium">{exam.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {exam.curso} • {exam.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Promedio</p>
                    <p className="text-lg font-semibold font-mono">{exam.promedio}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

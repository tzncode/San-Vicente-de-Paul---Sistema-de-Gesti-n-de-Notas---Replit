import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Copy, Edit, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CourseManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // TODO: remove mock functionality
  const courses = [
    { id: 1, name: "1° Grado", nivel: "Primaria", students: 30, materias: 8, code: "PRI1-2025" },
    { id: 2, name: "2° Grado", nivel: "Primaria", students: 28, materias: 8, code: "PRI2-2025" },
    { id: 3, name: "3° Grado", nivel: "Primaria", students: 32, materias: 9, code: "PRI3-2025" },
    { id: 4, name: "1° Año", nivel: "Secundaria", students: 35, materias: 12, code: "SEC1-2025" },
    { id: 5, name: "2° Año", nivel: "Secundaria", students: 33, materias: 12, code: "SEC2-2025" },
    { id: 6, name: "3° Año", nivel: "Secundaria", students: 31, materias: 13, code: "SEC3-2025" },
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.nivel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    console.log("Código copiado:", code);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Gestión de Cursos</h1>
          <p className="text-muted-foreground mt-1">
            Administra los cursos de todos los niveles educativos
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-create-course">
              <Plus className="h-4 w-4 mr-2" />
              Crear Curso
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nuevo Curso</DialogTitle>
              <DialogDescription>
                Complete los datos del nuevo curso
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="courseName">Nombre del Curso</Label>
                <Input id="courseName" placeholder="ej: 4° Grado" data-testid="input-course-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nivel">Nivel Educativo</Label>
                <Select>
                  <SelectTrigger id="nivel" data-testid="select-nivel">
                    <SelectValue placeholder="Seleccione el nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primaria">Primaria</SelectItem>
                    <SelectItem value="secundaria">Secundaria</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => {
                  console.log("Curso creado");
                  setIsDialogOpen(false);
                }} data-testid="button-submit-course">
                  Crear Curso
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar cursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search-courses"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover-elevate" data-testid={`card-course-${course.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{course.nivel}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Estudiantes</p>
                  <p className="font-medium">{course.students}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Materias</p>
                  <p className="font-medium">{course.materias}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Código de Acceso</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-2 py-1 bg-muted rounded text-sm font-mono">
                    {course.code}
                  </code>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleCopyCode(course.code)}
                    data-testid={`button-copy-${course.id}`}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" data-testid={`button-edit-${course.id}`}>
                  <Edit className="h-3 w-3 mr-1" />
                  Editar
                </Button>
                <Button variant="outline" size="sm" className="flex-1" data-testid={`button-delete-${course.id}`}>
                  <Trash2 className="h-3 w-3 mr-1" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

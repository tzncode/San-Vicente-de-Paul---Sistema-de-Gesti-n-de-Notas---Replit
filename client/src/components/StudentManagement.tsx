import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Upload, Edit, Trash2 } from "lucide-react";
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

export function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // TODO: remove mock functionality
  const students = [
    { id: 1, dni: "45123456", name: "García, Juan", curso: "6° Grado", address: "Calle Falsa 123", phone: "11-1234-5678", gender: "M" },
    { id: 2, dni: "44987654", name: "Martínez, María", curso: "3° Año", address: "Av. Siempre Viva 456", phone: "11-8765-4321", gender: "F" },
    { id: 3, dni: "46234567", name: "Rodríguez, Carlos", curso: "5° Grado", address: "Calle Real 789", phone: "11-2345-6789", gender: "M" },
    { id: 4, dni: "45876543", name: "López, Ana", curso: "2° Año", address: "Av. Libertad 321", phone: "11-9876-5432", gender: "F" },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.dni.includes(searchTerm) ||
    student.curso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold">Gestión de Estudiantes</h1>
          <p className="text-muted-foreground mt-1">
            Administra los datos de los estudiantes
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" data-testid="button-upload-csv">
            <Upload className="h-4 w-4 mr-2" />
            Cargar CSV
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button data-testid="button-add-student">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Estudiante
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Agregar Nuevo Estudiante</DialogTitle>
                <DialogDescription>
                  Complete los datos del estudiante
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI *</Label>
                    <Input id="dni" placeholder="45123456" data-testid="input-dni" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Nombre Completo *</Label>
                    <Input id="studentName" placeholder="Apellido, Nombre" data-testid="input-student-name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentCourse">Curso *</Label>
                    <Select>
                      <SelectTrigger id="studentCourse" data-testid="select-student-course">
                        <SelectValue placeholder="Seleccione el curso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-grado">1° Grado</SelectItem>
                        <SelectItem value="2-grado">2° Grado</SelectItem>
                        <SelectItem value="3-grado">3° Grado</SelectItem>
                        <SelectItem value="1-anio">1° Año</SelectItem>
                        <SelectItem value="2-anio">2° Año</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Sexo *</Label>
                    <Select>
                      <SelectTrigger id="gender" data-testid="select-gender">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="M">Masculino</SelectItem>
                        <SelectItem value="F">Femenino</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Domicilio *</Label>
                  <Input id="address" placeholder="Calle, Número, Ciudad" data-testid="input-address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono del Responsable *</Label>
                  <Input id="phone" placeholder="11-1234-5678" data-testid="input-phone" />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => {
                    console.log("Estudiante agregado");
                    setIsDialogOpen(false);
                  }} data-testid="button-submit-student">
                    Agregar Estudiante
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre, DNI o curso..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search-students"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Estudiantes ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="grid grid-cols-[100px_1fr_120px_120px_80px] gap-4 pb-2 border-b font-medium text-sm">
              <div>DNI</div>
              <div>Nombre</div>
              <div>Curso</div>
              <div>Teléfono</div>
              <div className="text-right">Acciones</div>
            </div>
            
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="grid grid-cols-[100px_1fr_120px_120px_80px] gap-4 py-3 border-b items-center hover-elevate rounded-md"
                data-testid={`row-student-${student.id}`}
              >
                <div className="font-mono text-sm">{student.dni}</div>
                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.address}</p>
                </div>
                <div>
                  <Badge variant="secondary">{student.curso}</Badge>
                </div>
                <div className="text-sm font-mono">{student.phone}</div>
                <div className="flex gap-1 justify-end">
                  <Button size="icon" variant="ghost" data-testid={`button-edit-${student.id}`}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" data-testid={`button-delete-${student.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

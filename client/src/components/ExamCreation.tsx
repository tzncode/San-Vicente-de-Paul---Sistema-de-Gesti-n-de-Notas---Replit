import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";

export function ExamCreation() {
  const [examName, setExamName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Examen creado:", { examName, description });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" data-testid="button-back">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-semibold">Crear Nuevo Examen</h1>
          <p className="text-muted-foreground mt-1">
            Complete los datos del examen y las notas de los estudiantes
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Información del Examen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="examName">Nombre del Examen *</Label>
                <Input
                  id="examName"
                  placeholder="ej: Evaluación 1 - Matemática"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  data-testid="input-exam-name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="period">Periodo Académico *</Label>
                <Select>
                  <SelectTrigger id="period" data-testid="select-period">
                    <SelectValue placeholder="Seleccione el periodo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trimestral">Trimestral</SelectItem>
                    <SelectItem value="cuatrimestral">Cuatrimestral</SelectItem>
                    <SelectItem value="semestral">Semestral</SelectItem>
                    <SelectItem value="anual">Anual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="course">Curso *</Label>
                <Select>
                  <SelectTrigger id="course" data-testid="select-course">
                    <SelectValue placeholder="Seleccione el curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6-grado">6° Grado</SelectItem>
                    <SelectItem value="3-anio">3° Año</SelectItem>
                    <SelectItem value="5-grado">5° Grado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Materia *</Label>
                <Select>
                  <SelectTrigger id="subject" data-testid="select-subject">
                    <SelectValue placeholder="Seleccione la materia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matematica">Matemática</SelectItem>
                    <SelectItem value="lengua">Lengua</SelectItem>
                    <SelectItem value="ciencias">Ciencias Sociales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción (Opcional)</Label>
              <Textarea
                id="description"
                placeholder="Descripción del examen..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                data-testid="input-description"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vista Previa de Notas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Las notas se cargarán después de crear el examen
            </p>
            <div className="border rounded-md p-4">
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-2">
                <div>Estudiante</div>
                <div className="text-right">Nota (0.00 - 10.00)</div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="grid grid-cols-2 gap-2 items-center py-2 border-t">
                    <div className="text-sm">Estudiante {i}</div>
                    <div className="text-sm text-muted-foreground text-right">
                      (Pendiente)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button type="submit" data-testid="button-create-exam">
            <Save className="h-4 w-4 mr-2" />
            Crear Examen
          </Button>
        </div>
      </form>
    </div>
  );
}

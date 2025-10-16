import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Upload } from "lucide-react";

export function GradeUpload() {
  // TODO: remove mock functionality
  const [grades, setGrades] = useState<Record<number, string>>({
    1: "8.5",
    2: "7.0",
    3: "9.2",
    4: "",
    5: "6.8",
  });

  const students = [
    { id: 1, dni: "45123456", name: "García, Juan" },
    { id: 2, dni: "44987654", name: "Martínez, María" },
    { id: 3, dni: "46234567", name: "Rodríguez, Carlos" },
    { id: 4, dni: "45876543", name: "López, Ana" },
    { id: 5, dni: "44567890", name: "Fernández, Luis" },
  ];

  const handleGradeChange = (studentId: number, value: string) => {
    if (value === "" || (/^\d*\.?\d{0,2}$/.test(value) && parseFloat(value) <= 10)) {
      setGrades({ ...grades, [studentId]: value });
      console.log("Auto-guardado:", { studentId, grade: value });
    }
  };

  const handleSubmit = () => {
    console.log("Notas enviadas:", grades);
  };

  const getGradeColor = (grade: string) => {
    const num = parseFloat(grade);
    if (isNaN(num)) return "";
    if (num >= 7) return "text-chart-2";
    if (num >= 4) return "text-chart-3";
    return "text-chart-5";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" data-testid="button-back">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">Cargar Notas</h1>
          <p className="text-muted-foreground mt-1">
            Evaluación 1 - Matemática • 6° Grado
          </p>
        </div>
        <Badge variant="secondary">Trimestral</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Notas de Estudiantes</span>
            <span className="text-sm font-normal text-muted-foreground">
              Escala: 0.00 - 10.00
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="grid grid-cols-[auto_1fr_120px] gap-4 pb-2 border-b font-medium text-sm">
              <div className="w-24">DNI</div>
              <div>Estudiante</div>
              <div className="text-right">Nota</div>
            </div>
            
            {students.map((student) => (
              <div
                key={student.id}
                className="grid grid-cols-[auto_1fr_120px] gap-4 py-3 border-b items-center"
                data-testid={`row-student-${student.id}`}
              >
                <div className="font-mono text-sm w-24">{student.dni}</div>
                <div className="text-sm">{student.name}</div>
                <div className="text-right">
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={grades[student.id] || ""}
                    onChange={(e) => handleGradeChange(student.id, e.target.value)}
                    className={`w-full text-right font-mono font-medium ${getGradeColor(grades[student.id])}`}
                    placeholder="0.00"
                    data-testid={`input-grade-${student.id}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted rounded-md">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Notas Cargadas</p>
                <p className="text-lg font-semibold">
                  {Object.values(grades).filter(g => g !== "").length} / {students.length}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Promedio</p>
                <p className="text-lg font-semibold font-mono">
                  {(Object.values(grades)
                    .filter(g => g !== "")
                    .reduce((acc, g) => acc + parseFloat(g), 0) / 
                    Object.values(grades).filter(g => g !== "").length || 0).toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Último guardado</p>
                <p className="text-lg font-semibold">Hace 2 min</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2 justify-end">
        <Button variant="outline">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} data-testid="button-submit-grades">
          <Upload className="h-4 w-4 mr-2" />
          Subir Notas
        </Button>
      </div>
    </div>
  );
}

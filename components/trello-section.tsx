import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trello, CheckCircle2, Clock, AlertCircle } from "lucide-react"

export function TrelloSection() {
  return (
    <section id="trello" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Gestión con Trello</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seguimiento transparente de nuestro flujo de trabajo ágil
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Trello className="h-8 w-8 text-primary" />
                <CardTitle>Tablero del Proyecto</CardTitle>
              </div>
              <CardDescription>Visualiza todas las tareas, sprints y progreso del equipo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>28 tareas completadas</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>12 tareas en progreso</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <span>5 tareas pendientes</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <a href="https://trello.com/b/tu-tablero" target="_blank" rel="noopener noreferrer">
                  <Trello className="mr-2 h-4 w-4" />
                  Abrir Tablero
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Flujo de Trabajo</CardTitle>
              <CardDescription>Metodología ágil con sprints de 2 semanas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">1. Backlog</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Recopilación de todas las tareas y funcionalidades planificadas
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">2. Sprint Actual</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tareas asignadas para el sprint de 2 semanas en curso
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">3. En Revisión</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Code review y testing antes de pasar a producción
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">4. Completado</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Funcionalidades implementadas y desplegadas exitosamente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

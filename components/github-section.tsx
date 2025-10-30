import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, GitFork, Star, Terminal } from "lucide-react"

export function GithubSection() {
  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Repositorio GitHub</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Accede a nuestro código fuente y colabora con el proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Github className="h-8 w-8 text-primary" />
                <CardTitle>Repositorio Principal</CardTitle>
              </div>
              <CardDescription>Explora el código fuente completo del proyecto colaborativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>42 Stars</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  <span>14 Forks</span>
                </div>
              </div>
              <Button className="w-full group" asChild>
                <a href="https://github.com/tu-usuario/web-colaborativa-2025" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver en GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="h-8 w-8 text-primary" />
                <CardTitle>Clonar Proyecto</CardTitle>
              </div>
              <CardDescription>Guía rápida para comenzar a trabajar localmente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm">
                <code className="text-foreground">
                  git clone https://github.com/tu-usuario/web-colaborativa-2025.git
                  <br />
                  cd web-colaborativa-2025
                  <br />
                  npm install
                  <br />
                  npm run dev
                </code>
              </div>
              <p className="text-xs text-muted-foreground">Asegúrate de tener Node.js 18+ instalado en tu sistema</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

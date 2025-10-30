import { Github, Trello, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Web Colaborativa 2025</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proyecto desarrollado por estudiantes de programación como parte del curso de Desarrollo Web Moderno.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#github" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#trello" className="text-muted-foreground hover:text-primary transition-colors">
                  Trello
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://trello.com/b/tu-tablero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Trello className="h-5 w-5" />
              </a>
              <a
                href="mailto:contacto@webcolaborativa.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Web Colaborativa. Curso de Desarrollo Web Moderno - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

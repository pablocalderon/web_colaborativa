import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Miembro no encontrado</h1>
          <p className="text-muted-foreground mb-8">El miembro del equipo que buscas no existe.</p>
          <Link href="/#equipo">
            <Button>Volver al equipo</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

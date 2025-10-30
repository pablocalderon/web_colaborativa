import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { teamMembers } from "@/lib/team-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react"

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Botón de regreso */}
          <Link href="/#equipo">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver al equipo
            </Button>
          </Link>

          {/* Tarjeta de perfil */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar grande */}
                <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                  <AvatarImage
                    src={`/professional-portrait.png?height=128&width=128&query=professional+portrait+${member.initials}`}
                    alt={member.name}
                  />
                  <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                {/* Información del miembro */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">{member.name}</h1>
                  <p className="text-xl text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                  {/* Enlaces sociales */}
                  <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    {member.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Habilidades */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}

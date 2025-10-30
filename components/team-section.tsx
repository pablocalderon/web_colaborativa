import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { teamMembers } from "@/lib/team-data"

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            14 estudiantes apasionados trabajando juntos para crear soluciones innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Link key={index} href={`/equipo/${member.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all">
                    <AvatarImage
                      src={`/professional-portrait.png?key=wy4xn&height=96&width=96&query=professional+portrait+${member.initials}`}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

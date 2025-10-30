import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TeamSection } from "@/components/team-section"
import { GithubSection } from "@/components/github-section"
import { TrelloSection } from "@/components/trello-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <GithubSection />
        <TrelloSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

import { HeroSectionPage } from "@/components/Home/HeroSection";
import { HowCanIHelpSection } from "@/components/Home/HowCanIHelp";
import { RecentProjectsSection } from "@/components/Home/RecentProjects";

export default function Home() {
  return (
    <>
      <HeroSectionPage />
      <HowCanIHelpSection />
      <RecentProjectsSection />
    </>
  )
}

import HeroSection from "./components/HomePage/HeroSection";
import AchievementsSection from "./components/HomePage/AchievementsSection";
import ProjectsSection from "./components/LatestProjects/ProjectsSection";


export const metadata = {
  title: 'Reshan - HomePage',
  description: 'Generated by create next app',
}


export default function Home() {
  return (
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <ProjectsSection />
        
      </div>
  );
}

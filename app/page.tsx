import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import NowFeed from "@/components/NowFeed";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import SkillStack from "@/components/SkillStack";
import AIAgent from "@/components/AIAgent";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Profile />
      <Divider />
      <NowFeed />
      <Divider />
      <Experience />
      <Divider />
      <Portfolio />
      <Divider />
      <SkillStack />
      <Divider />
      <AIAgent />
      <Divider />
      <CallToAction />
    </main>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
    </div>
  );
}

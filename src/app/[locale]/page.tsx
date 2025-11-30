import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/LanguageSwitch";
import ModeToggler from "@/components/mode-toggler";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import NoAiSection from "@/components/sections/NoAiSection";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <NoAiSection />
      </main>
    </div>
  );
}

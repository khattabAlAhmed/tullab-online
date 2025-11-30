import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/LanguageSwitch";
import ModeToggler from "@/components/mode-toggler";
import Header from "@/components/Header";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-lg mb-4">{t('welcome')}</h2>
        <p>{t('test-text')}</p>
      </main>
    </div>
  );
}

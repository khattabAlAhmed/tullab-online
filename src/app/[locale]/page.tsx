import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/LanguageSwitch";
import ModeToggler from "@/components/mode-toggler";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">{t('title')}</h1>
        <div className="flex items-center gap-2">

        <LanguageSwitch />
        <ModeToggler />
        </div>
      </header>
      <main className="p-4">
        <h2 className="text-lg mb-4">{t('welcome')}</h2>
        <p>{t('test-text')}</p>
      </main>
    </div>
  );
}

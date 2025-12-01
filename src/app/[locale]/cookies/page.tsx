import { useTranslations } from 'next-intl';
import { Cookie } from 'lucide-react';

export default function CookiesPage() {
    const t = useTranslations('CookiesPage');

    const sections = ['whatAreCookies', 'howWeUse', 'types', 'control'];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#0b8eca]/10 flex items-center justify-center">
                            <Cookie className="w-8 h-8 text-[#0b8eca]" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                {t('title')}
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {t('lastUpdated')}
                            </p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm mb-8 border border-gray-100 dark:border-gray-700">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t('intro')}
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-6">
                        {sections.map((section) => (
                            <div
                                key={section}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {t(`sections.${section}.title`)}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {t(`sections.${section}.content`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

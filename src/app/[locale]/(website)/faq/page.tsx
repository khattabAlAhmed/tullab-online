import { useTranslations } from 'next-intl';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqPage() {
    const t = useTranslations('FaqPage');

    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0b8eca]/10 mb-6">
                            <HelpCircle className="w-10 h-10 text-[#0b8eca]" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {questions.map((q, index) => (
                            <details
                                key={q}
                                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="w-8 h-8 rounded-full bg-[#0b8eca]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#0b8eca] font-bold text-sm">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {t(`questions.${q}.question`)}
                                        </h3>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ms-4" />
                                </summary>
                                <div className="px-6 pb-6 ps-[72px]">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {t(`questions.${q}.answer`)}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
                        <h2 className="text-2xl font-bold mb-2">
                            {t('contactCta.title')}
                        </h2>
                        <p className="mb-6 opacity-90">
                            {t('contactCta.description')}
                        </p>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            {t('contactCta.button')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

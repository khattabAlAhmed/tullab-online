'use client';

import { useTranslations } from 'next-intl';
import { ShieldCheck, BrainCircuit, CheckCircle } from 'lucide-react';

const NoAiSection = () => {
    const t = useTranslations('NoAiSection');

    return (
        <section className="py-24 pt-48 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden  border border-2">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                        {/* Left Side: Visuals */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative">
                                {/* Main Circle */}
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white dark:bg-gray-800 shadow-2xl flex items-center justify-center relative z-10 border border-gray-100 dark:border-gray-700">
                                    <div className="text-center">
                                        <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                            0%
                                        </div>
                                        <div className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                            AI
                                        </div>
                                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                                            <ShieldCheck className="w-4 h-4" />
                                            <span>{t('turnitin')}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce duration-3000">
                                    <BrainCircuit className="w-8 h-8 text-gray-400" />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-gray-800" />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce duration-3000 delay-700">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>

                                {/* Background Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="w-full md:w-1/2 text-center md:text-start rtl:md:text-right">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {t('title')}
                            </h2>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                                {t('subtitle')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                {t('description')}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start rtl:md:justify-end">
                                <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div className="text-start rtl:text-right">
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{t('guaranteed')}</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{t('originality')}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <BrainCircuit className="w-5 h-5" />
                                    </div>
                                    <div className="text-start rtl:text-right">
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{t('human')}</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{t('expert')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoAiSection; 
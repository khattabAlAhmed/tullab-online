'use client';

import { useTranslations } from 'next-intl';
import {
    FileText,
    Presentation,
    GraduationCap,
    BookOpen,
    Rocket,
    Code,
    PieChart,
    Video,
    FileBarChart,
    UserSquare,
    ArrowRight,
    MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const servicesList = [
    { key: 'summaries', icon: FileText, route: '/services/summaries' },
    { key: 'powerpoint', icon: Presentation, route: '/services/powerpoint' },
    { key: 'graduation-research', icon: GraduationCap, route: '/services/graduation-research' },
    { key: 'assignments', icon: BookOpen, route: '/services/assignments' },
    { key: 'graduation-projects', icon: Rocket, route: '/services/graduation-projects' },
    { key: 'engineering-programming', icon: Code, route: '/services/engineering-programming' },
    { key: 'infographics', icon: PieChart, route: '/services/infographics' },
    { key: 'videos', icon: Video, route: '/services/videos' },
    { key: 'reports', icon: FileBarChart, route: '/services/reports' },
    { key: 'cv-design', icon: UserSquare, route: '/services/cv-design' },
];

const OurServicesSection = () => {
    const t = useTranslations();

    return (
        <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('OurServicesSection.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('OurServicesSection.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.key}
                                href={service.route}
                                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {t(`HeroSection.slides.${service.key}.title`)}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                                        {t(`HeroSection.slides.${service.key}.caption`)}
                                    </p>

                                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                                        <span>{t('HeroSection.buttons.readMore')}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all rtl:rotate-180" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                    {/* Not Found / WhatsApp Card */}
                    <Link
                        href="https://wa.me/1234567890"
                        target="_blank"
                        className="group relative bg-green-50 dark:bg-green-900/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-800 hover:-translate-y-1 overflow-hidden flex flex-col justify-center items-center text-center"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 dark:bg-green-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('OurServicesSection.notFound.title')}
                            </h3>

                            <div className="px-6 py-3 bg-green-600 text-white rounded-full font-medium group-hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                <span>{t('OurServicesSection.notFound.button')}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurServicesSection;
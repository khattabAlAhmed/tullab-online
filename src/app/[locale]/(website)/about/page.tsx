import { useTranslations } from 'next-intl';
import { Shield, Star, Clock, Users, Target, Heart, Award, CheckCircle } from 'lucide-react';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative bg-[#0b8eca] text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#097bb0] to-[#0b8eca] opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            {t('story.title')}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('story.content')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Mission Card */}
                        <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-2xl border border-blue-100 dark:border-gray-600">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-[#0b8eca]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {t('mission.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('mission.content')}
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-green-50 dark:bg-gray-700 p-8 rounded-2xl border border-green-100 dark:border-gray-600">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {t('vision.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('vision.content')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
                        {t('values.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Integrity */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-[#0b8eca]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('values.integrity.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('values.integrity.desc')}
                            </p>
                        </div>

                        {/* Quality */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('values.quality.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('values.quality.desc')}
                            </p>
                        </div>

                        {/* Reliability */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('values.reliability.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('values.reliability.desc')}
                            </p>
                        </div>

                        {/* Human Touch */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('values.humanTouch.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('values.humanTouch.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-[#0b8eca] text-white border-b border-2">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">800+</div>
                            <div className="text-blue-100">{t('stats.students')}</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">380+</div>
                            <div className="text-blue-100">{t('stats.projects')}</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-blue-100">{t('stats.experts')}</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
                            <div className="text-blue-100">{t('stats.satisfaction')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

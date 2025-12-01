'use client';

import { useTranslations } from 'next-intl';
import { Star, Quote } from 'lucide-react';

const reviewsList = ['review1', 'review2', 'review3'];

const TestimonialsSection = () => {
    const t = useTranslations('TestimonialsSection');

    return (
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reviewsList.map((review, index) => {
                        const name = t(`reviews.${review}.name`);
                        const role = t(`reviews.${review}.role`);
                        const text = t(`reviews.${review}.text`);

                        // Get initials from name
                        const initials = name
                            .split(' ')
                            .map(word => word[0])
                            .join('')
                            .toUpperCase()
                            .slice(0, 2);

                        return (
                            <div
                                key={review}
                                className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 end-6 text-blue-500/20 dark:text-blue-400/20">
                                    <Quote className="w-12 h-12" />
                                </div>

                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                                    &ldquo;{text}&rdquo;
                                </p>

                                {/* Reviewer Info */}
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                        {initials}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

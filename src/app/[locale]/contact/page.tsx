import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Phone Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 rounded-full bg-[#0b8eca]/10 flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-[#0b8eca]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('phone.title')}
                                </h3>
                                <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-[#0b8eca] transition-colors">
                                    +123 456 7890
                                </a>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 rounded-full bg-[#0b8eca]/10 flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-[#0b8eca]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('email.title')}
                                </h3>
                                <a href="mailto:info@tulaab-online.com" className="text-gray-600 dark:text-gray-400 hover:text-[#0b8eca] transition-colors">
                                    info@tulaab-online.com
                                </a>
                            </div>

                            {/* Address Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 rounded-full bg-[#0b8eca]/10 flex items-center justify-center mb-4">
                                    <MapPin className="w-6 h-6 text-[#0b8eca]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('address.title')}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    123 Academic Street,<br />
                                    Education City, EC 12345
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    {t('form.title')}
                                </h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {t('form.name')}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0b8eca] focus:border-transparent outline-none transition-all"
                                                placeholder={t('form.namePlaceholder')}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {t('form.email')}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0b8eca] focus:border-transparent outline-none transition-all"
                                                placeholder={t('form.emailPlaceholder')}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('form.subject')}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0b8eca] focus:border-transparent outline-none transition-all"
                                            placeholder={t('form.subjectPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('form.message')}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0b8eca] focus:border-transparent outline-none transition-all resize-none"
                                            placeholder={t('form.messagePlaceholder')}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#0b8eca] hover:bg-[#097ab3] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        {t('form.submit')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
    Youtube,
    Linkedin,
    Instagram,
    Facebook,
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Send
} from 'lucide-react';
import { FaTiktok, FaDiscord, FaReddit, FaXTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    const t = useTranslations('Footer');
    const navItems = useTranslations('navItems');

    const socialLinks = [
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', isLucide: true },
        { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok', isLucide: false },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', isLucide: true },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', isLucide: true },
        { icon: FaTelegram, href: 'https://t.me/tulaab_online', label: 'Telegram', isLucide: false },
        { icon: FaWhatsapp, href: 'https://wa.me/1234567890', label: 'WhatsApp', isLucide: false },
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', isLucide: true },
        { icon: FaDiscord, href: 'https://discord.com', label: 'Discord', isLucide: false },
        { icon: FaReddit, href: 'https://reddit.com', label: 'Reddit', isLucide: false },
        { icon: FaXTwitter, href: 'https://twitter.com', label: 'X (Twitter)', isLucide: false },
    ];

    const servicesList = [
        { key: 'summaries', label: navItems('services.summaries'), href: '/services/summaries' },
        { key: 'powerpoint', label: navItems('services.powerpoint'), href: '/services/powerpoint' },
        { key: 'graduation-research', label: navItems('services.graduation-research'), href: '/services/graduation-research' },
        { key: 'assignments', label: navItems('services.assignments'), href: '/services/assignments' },
        { key: 'graduation-projects', label: navItems('services.graduation-projects'), href: '/services/graduation-projects' },
    ];

    const usefulLinks = [
        { label: t('usefulLinks.about'), href: '/about' },
        { label: t('usefulLinks.privacy'), href: '/privacy' },
        { label: t('usefulLinks.terms'), href: '/terms' },
        { label: t('usefulLinks.faq'), href: '/faq' },
    ];

    const sitemapLinks = [
        { label: navItems('home'), href: '/' },
        { label: navItems('about'), href: '/about' },
        { label: navItems('ourServices'), href: '/services' },
        { label: navItems('contact'), href: '/contact' },
    ];

    return (
        <footer className="bg-[#0b8eca] text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-12 pb-8 border-b border-white/20 flex-wrap">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label={social.label}
                            >
                                {social.isLucide ? (
                                    <Icon className="w-5 h-5" />
                                ) : (
                                    <Icon className="w-5 h-5" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
                            {t('contactUs.title')}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold">{t('contactUs.phone')}</p>
                                    <a href="tel:+1234567890" className="text-sm hover:underline">
                                        +123 456 7890
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold">{t('contactUs.email')}</p>
                                    <a href="mailto:info@tulaab-online.com" className="text-sm hover:underline">
                                        info@tulaab-online.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold">{t('contactUs.address')}</p>
                                    <p className="text-sm">
                                        123 Academic Street, Education City
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
                            {t('services.title')}
                        </h3>
                        <ul className="space-y-2">
                            {servicesList.map((service) => (
                                <li key={service.key}>
                                    <Link
                                        href={service.href}
                                        className="text-sm hover:underline hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-transform duration-200"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
                            {t('usefulLinks.title')}
                        </h3>
                        <ul className="space-y-2">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:underline hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-transform duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
                            {t('sitemap.title')}
                        </h3>
                        <ul className="space-y-2 mb-4">
                            {sitemapLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:underline hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-transform duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm">
                            {t('social.description')}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm">
                            {t('copyright')}
                        </p>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="text-sm hover:underline">
                                {t('bottomLinks.privacy')}
                            </Link>
                            <Link href="/terms" className="text-sm hover:underline">
                                {t('bottomLinks.terms')}
                            </Link>
                            <Link href="/cookies" className="text-sm hover:underline">
                                {t('bottomLinks.cookies')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

'use client';

import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitch from './LanguageSwitch'
import ModeToggler from './mode-toggler'
import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    const t = useTranslations('HomePage');
    const navItems = useTranslations('navItems');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const locale = useLocale();

    const navItemsList = [
        { label: navItems('home'), href: '/', hasChildren: false },
        { label: navItems('about'), href: '/about', hasChildren: false },
        {
            label: navItems('ourServices'),
            href: '/services',
            hasChildren: true,
            childrenItems: [
                { label: navItems('services.summaries'), href: '/services/summaries' },
                { label: navItems('services.powerpoint'), href: '/services/powerpoint' },
                { label: navItems('services.graduation-research'), href: '/services/graduation-research' },
                { label: navItems('services.assignments'), href: '/services/assignments' },
                { label: navItems('services.graduation-projects'), href: '/services/graduation-projects' },
                { label: navItems('services.engineering-programming'), href: '/services/engineering-programming' },
                { label: navItems('services.infographics'), href: '/services/infographics' },
                { label: navItems('services.videos'), href: '/services/videos' },
                { label: navItems('services.reports'), href: '/services/reports' },
                { label: navItems('services.cv-design'), href: '/services/cv-design' },
            ]
        },
        { label: navItems('contact'), href: '/contact', hasChildren: false },
    ];

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <>
            {/* Top Language Bar */}
            <div className="bg-[#0b8eca] text-white py-2 px-4">
                <div className="container mx-auto flex justify-end items-center">
                    <LanguageSwitch />

                </div>
            </div>

            {/* Main Header */}
            <header className="bg-background border-b border-border sticky top-0 z-40">
                <div className="container mx-auto">
                    {/* Mobile & Tablet Header */}
                    <div className="flex items-center justify-between py-4 px-4 lg:hidden">
                        {/* Hamburger Menu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 hover:bg-accent rounded-md transition-colors"
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>


                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 items-center">
                            <div className=" w-auto">
                                <Image alt='logo' src={'/logo.png'} height={56.1} width={134.5} />
                                <h1 className="text-lg font-bold text-[#0b8eca]">{t('title')}</h1>
                            </div>
                        </Link>
                        {/* Search Icon */}
                        <button
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center justify-between py-4 px-4">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <div className="w-auto">
                                <Image alt='logo' src={locale === 'ar' ? '/logo.png' : '/logo_english.png'} height={56.1} width={134.5} />

                                {/* <h1 className="text-xl font-bold text-[#0b8eca]">{t('title')}</h1> */}
                            </div>
                        </Link>
                        {/* Navigation */}
                        <nav className="flex items-center gap-1 me-auto ms-12">
                            {navItemsList.map((item) => (
                                <div key={item.label} className="relative group">
                                    {item.hasChildren ? (
                                        <>
                                            <button
                                                className="flex items-center gap-1 font-medium px-4 py-2 text-foreground hover:text-[#0b8eca] transition-colors"
                                                onMouseEnter={() => setOpenDropdown(item.label)}

                                            >
                                                {item.label}
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                            {openDropdown === item.label && (
                                                <div
                                                    className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg min-w-[250px] py-2"
                                                    onMouseLeave={() => setOpenDropdown(null)}
                                                >
                                                    {item.childrenItems?.map((child) => (
                                                        <Link
                                                            key={child.label}
                                                            href={child.href}
                                                            className="block px-4 py-2 text-md hover:bg-accent hover:text-[#0b8eca] transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-2 text-md font-medium text-foreground hover:text-[#0b8eca] transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        {/* Search Icon */}

                        <button
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <ModeToggler />

                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute inset-0 bg-[#0b5f7f] text-white overflow-y-auto">
                        {/* Close Button */}
                        <div className="flex justify-start p-4 mt-12">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-md transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <nav className="px-6 py-4 space-y-2">
                            {navItemsList.map((item) => (
                                <div key={item.label} className="border-b border-white/20 pb-4">
                                    {item.hasChildren ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.label)}
                                                className="flex items-center justify-between w-full text-xl py-3 hover:text-white/80 transition-colors"
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {openDropdown === item.label && (
                                                <div className="pl-4 mt-2 space-y-2">
                                                    {item.childrenItems?.map((child) => (
                                                        <Link
                                                            key={child.label}
                                                            href={child.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block py-2 text-lg text-white/90 hover:text-white transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-xl py-3 hover:text-white/80 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
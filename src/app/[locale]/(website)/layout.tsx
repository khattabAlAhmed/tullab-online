import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: "Tulaab Online",
        description: "Tulaab Online for Students Services",
    };
}
export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

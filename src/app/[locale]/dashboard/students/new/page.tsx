"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchableSelect, type SelectOption } from "@/components/ui/searchable-select";
import {
    getAllCountriesForSelect,
    getUniversitiesByCountry,
    createStudent,
    type CountryOption,
    type UniversityOption,
} from "@/actions/student-form";
import { Loader2, ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function NewStudentForm() {
    const t = useTranslations("dashboard.studentsPage.form");
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    // Form state
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [telegramUser, setTelegramUser] = useState("");
    const [nationalityId, setNationalityId] = useState("");
    const [studyIn, setStudyIn] = useState("");
    const [universityId, setUniversityId] = useState("");

    // Options state
    const [countries, setCountries] = useState<CountryOption[]>([]);
    const [universities, setUniversities] = useState<UniversityOption[]>([]);
    const [isLoadingCountries, setIsLoadingCountries] = useState(true);
    const [isLoadingUniversities, setIsLoadingUniversities] = useState(false);

    // Error state
    const [error, setError] = useState("");

    // Load countries on mount
    useEffect(() => {
        getAllCountriesForSelect().then((data) => {
            setCountries(data);
            setIsLoadingCountries(false);
        });
    }, []);

    // Load universities when studyIn changes
    useEffect(() => {
        if (studyIn) {
            setIsLoadingUniversities(true);
            setUniversityId(""); // Reset university selection
            getUniversitiesByCountry(studyIn).then((data) => {
                setUniversities(data);
                setIsLoadingUniversities(false);
            });
        } else {
            setUniversities([]);
            setUniversityId("");
        }
    }, [studyIn]);

    // Convert to SelectOption format
    const countryOptions: SelectOption[] = countries.map((c) => ({
        value: c.id,
        labelEn: c.nameEn,
        labelAr: c.nameAr,
    }));

    const universityOptions: SelectOption[] = universities.map((u) => ({
        value: u.id,
        labelEn: u.nameEn,
        labelAr: u.nameAr,
    }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name.trim()) {
            setError(t("nameRequired"));
            return;
        }
        if (!nationalityId) {
            setError(t("nationalityRequired"));
            return;
        }
        if (!studyIn) {
            setError(t("studyInRequired"));
            return;
        }

        startTransition(async () => {
            const result = await createStudent({
                name: name.trim(),
                phoneNumber: phoneNumber.trim() || undefined,
                telegramUser: telegramUser.trim() || undefined,
                nationalityId,
                studyIn,
                universityId: universityId || undefined,
            });

            if (result.success) {
                router.push(`/${locale}/dashboard/students`);
            } else {
                setError(result.error || t("createError"));
            }
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href={`/${locale}/dashboard/students`}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
                    <p className="text-muted-foreground mt-1">{t("subtitle")}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                {error && (
                    <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                        {error}
                    </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">{t("name")} *</Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("namePlaceholder")}
                        disabled={isPending}
                    />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                    <Label htmlFor="phoneNumber">{t("phoneNumber")}</Label>
                    <Input
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={t("phoneNumberPlaceholder")}
                        disabled={isPending}
                        dir="ltr"
                    />
                </div>

                {/* Telegram User */}
                <div className="space-y-2">
                    <Label htmlFor="telegramUser">{t("telegramUser")}</Label>
                    <Input
                        id="telegramUser"
                        value={telegramUser}
                        onChange={(e) => setTelegramUser(e.target.value)}
                        placeholder={t("telegramUserPlaceholder")}
                        disabled={isPending}
                    />
                </div>

                {/* Nationality */}
                <div className="space-y-2">
                    <Label>{t("nationality")} *</Label>
                    <SearchableSelect
                        options={countryOptions}
                        value={nationalityId}
                        onChange={setNationalityId}
                        placeholder={t("selectNationality")}
                        searchPlaceholder={t("searchCountry")}
                        emptyText={t("noCountryFound")}
                        locale={locale}
                        disabled={isPending || isLoadingCountries}
                    />
                </div>

                {/* Study In */}
                <div className="space-y-2">
                    <Label>{t("studyIn")} *</Label>
                    <SearchableSelect
                        options={countryOptions}
                        value={studyIn}
                        onChange={setStudyIn}
                        placeholder={t("selectStudyIn")}
                        searchPlaceholder={t("searchCountry")}
                        emptyText={t("noCountryFound")}
                        locale={locale}
                        disabled={isPending || isLoadingCountries}
                    />
                </div>

                {/* University (dependent on Study In) */}
                <div className="space-y-2">
                    <Label>{t("university")}</Label>
                    <SearchableSelect
                        options={universityOptions}
                        value={universityId}
                        onChange={setUniversityId}
                        placeholder={t("selectUniversity")}
                        searchPlaceholder={t("searchUniversity")}
                        emptyText={studyIn ? t("noUniversityFound") : t("selectStudyInFirst")}
                        locale={locale}
                        disabled={isPending || isLoadingUniversities || !studyIn}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                    <Button type="submit" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {t("saving")}
                            </>
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                {t("save")}
                            </>
                        )}
                    </Button>
                    <Link href={`/${locale}/dashboard/students`}>
                        <Button type="button" variant="outline" disabled={isPending}>
                            {t("cancel")}
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

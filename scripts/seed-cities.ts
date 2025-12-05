import { drizzle } from "drizzle-orm/node-postgres";
import { city } from "../src/lib/db/schema/academy-schema";
import { nanoid } from "nanoid";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client);

// Country IDs from the database (country.json export)
const COUNTRY_IDS = {
    SA: "Hlv5S-YT1BbfcwSmP5l-3", // Saudi Arabia
    AE: "wXKeG_WJTr9VTrCBcBpSa", // United Arab Emirates
    QA: "2nHOV32WO4AZ-dnFWMd6Z", // Qatar
    KW: "JYEiVnzJhC-D892HNxPKq", // Kuwait
    BH: "Ozi84Ghi9jDT3yTbjblhB", // Bahrain
    OM: "iTW2FhzQQIZmXgjfLftCr", // Oman
    YE: "DNTLescwbpZq68KctUByy", // Yemen
    JO: "9Jg2jt7mz8LHYqwWRKMwl", // Jordan
    LB: "lEe2Ft_jW4dBvNbYULMJg", // Lebanon
    SY: "LBh1Itug_urSlWweLbGlg", // Syria
    IQ: "9O1Px0ssKtRNQB6oE057a", // Iraq
    EG: "LadIgdmptq3L-6l-IgRHK", // Egypt
    TR: "BQKi-uaKanAZE9PIDreUE", // Turkey
    IR: "4TU3LQqcP3LBYd_UAzZfA", // Iran
    GB: "mNfXKEBpINicl7S4QUck5", // United Kingdom
    FR: "DfUu0OZJCzTMStC8qRZRz", // France
    DE: "KCSmvp4pW2f8hAi034ybW", // Germany
    IT: "AB8mC3GPxnLklCqAEUHN7", // Italy
    ES: "XnXhWW5UrqZ6sU-_ek2r8", // Spain
    NL: "PbqcycICv1f6B-v9WOgxS", // Netherlands
    SE: "FHfWLwvgeGbxgoFJbXj7L", // Sweden
    NO: "Yv9Apy7HhFaFMdnu5uzCQ", // Norway
    DK: "Pe-tm77a0AFDJlm56h3JY", // Denmark
    FI: "Rt2ocxMtkAuA52Wv9BZyt", // Finland
    PL: "xMb3wv_Mn_IpA_5n89Jo-", // Poland
    GR: "ovFr4RlLacy-ovsv7JBEr", // Greece
    PT: "_Cf0XvKCR5H32OU4kG_4-", // Portugal
    CH: "ckjx5A_zQNDBVNvbSr1AP", // Switzerland
    AT: "bwhNhXEujBAHfx-sQMIby", // Austria
    BE: "xRwMAYv7F5arsNhcdlAOU", // Belgium
    IE: "W8aXXa8Ytj2rQNcgAz9mY", // Ireland
    CZ: "k2qZ8necHbQmxQLio7afY", // Czech Republic
    HU: "F-CP_aSl7Jc2CBd4q54eO", // Hungary
    RO: "ZQqWmadaBgbWSKF1ZXQVM", // Romania
    BG: "BAOWLN0RgatUAS2tSu84X", // Bulgaria
    HR: "cTQM5V5EUhIUQcIoqBWMC", // Croatia
    RS: "KKzeAaYyzXaF3j6jWNsnt", // Serbia
    UA: "G5-XsbzH_3U-gVCAX0Nkh", // Ukraine
    US: "hM6NxzFBZI5Fi3EOLAAHq", // United States
    CA: "RekoJjT12cJaW314WEJB_", // Canada
};

const cities = [
    // -------------------------
    // Saudi Arabia
    // -------------------------
    { nameEn: "Riyadh", nameAr: "الرياض", countryId: COUNTRY_IDS.SA },
    { nameEn: "Jeddah", nameAr: "جدة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Mecca", nameAr: "مكة المكرمة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Medina", nameAr: "المدينة المنورة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Dammam", nameAr: "الدمام", countryId: COUNTRY_IDS.SA },
    { nameEn: "Khobar", nameAr: "الخبر", countryId: COUNTRY_IDS.SA },
    { nameEn: "Taif", nameAr: "الطائف", countryId: COUNTRY_IDS.SA },
    { nameEn: "Tabuk", nameAr: "تبوك", countryId: COUNTRY_IDS.SA },

    // -------------------------
    // United Arab Emirates
    // -------------------------
    { nameEn: "Dubai", nameAr: "دبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Abu Dhabi", nameAr: "أبو ظبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Sharjah", nameAr: "الشارقة", countryId: COUNTRY_IDS.AE },
    { nameEn: "Ajman", nameAr: "عجمان", countryId: COUNTRY_IDS.AE },
    { nameEn: "Ras Al Khaimah", nameAr: "رأس الخيمة", countryId: COUNTRY_IDS.AE },
    { nameEn: "Fujairah", nameAr: "الفجيرة", countryId: COUNTRY_IDS.AE },
    { nameEn: "Al Ain", nameAr: "العين", countryId: COUNTRY_IDS.AE },

    // -------------------------
    // Qatar
    // -------------------------
    { nameEn: "Doha", nameAr: "الدوحة", countryId: COUNTRY_IDS.QA },
    { nameEn: "Al Wakrah", nameAr: "الوكرة", countryId: COUNTRY_IDS.QA },
    { nameEn: "Al Khor", nameAr: "الخور", countryId: COUNTRY_IDS.QA },
    { nameEn: "Lusail", nameAr: "لوسيل", countryId: COUNTRY_IDS.QA },

    // -------------------------
    // Kuwait
    // -------------------------
    { nameEn: "Kuwait City", nameAr: "مدينة الكويت", countryId: COUNTRY_IDS.KW },
    { nameEn: "Hawalli", nameAr: "حولي", countryId: COUNTRY_IDS.KW },
    { nameEn: "Salmiya", nameAr: "السالمية", countryId: COUNTRY_IDS.KW },
    { nameEn: "Farwaniya", nameAr: "الفروانية", countryId: COUNTRY_IDS.KW },
    { nameEn: "Jahra", nameAr: "الجهراء", countryId: COUNTRY_IDS.KW },

    // -------------------------
    // Bahrain
    // -------------------------
    { nameEn: "Manama", nameAr: "المنامة", countryId: COUNTRY_IDS.BH },
    { nameEn: "Muharraq", nameAr: "المحرق", countryId: COUNTRY_IDS.BH },
    { nameEn: "Riffa", nameAr: "الرفاع", countryId: COUNTRY_IDS.BH },
    { nameEn: "Isa Town", nameAr: "مدينة عيسى", countryId: COUNTRY_IDS.BH },

    // -------------------------
    // Oman
    // -------------------------
    { nameEn: "Muscat", nameAr: "مسقط", countryId: COUNTRY_IDS.OM },
    { nameEn: "Salalah", nameAr: "صلالة", countryId: COUNTRY_IDS.OM },
    { nameEn: "Sohar", nameAr: "صحار", countryId: COUNTRY_IDS.OM },
    { nameEn: "Nizwa", nameAr: "نزوى", countryId: COUNTRY_IDS.OM },
    { nameEn: "Sur", nameAr: "صور", countryId: COUNTRY_IDS.OM },

    // -------------------------
    // Yemen
    // -------------------------
    { nameEn: "Sana'a", nameAr: "صنعاء", countryId: COUNTRY_IDS.YE },
    { nameEn: "Aden", nameAr: "عدن", countryId: COUNTRY_IDS.YE },
    { nameEn: "Taiz", nameAr: "تعز", countryId: COUNTRY_IDS.YE },
    { nameEn: "Hodeidah", nameAr: "الحديدة", countryId: COUNTRY_IDS.YE },
    { nameEn: "Ibb", nameAr: "إب", countryId: COUNTRY_IDS.YE },
    { nameEn: "Mukalla", nameAr: "المكلا", countryId: COUNTRY_IDS.YE },
    { nameEn: "Dhamar", nameAr: "ذمار", countryId: COUNTRY_IDS.YE },

    // -------------------------
    // Jordan
    // -------------------------
    { nameEn: "Amman", nameAr: "عمّان", countryId: COUNTRY_IDS.JO },
    { nameEn: "Zarqa", nameAr: "الزرقاء", countryId: COUNTRY_IDS.JO },
    { nameEn: "Irbid", nameAr: "إربد", countryId: COUNTRY_IDS.JO },
    { nameEn: "Aqaba", nameAr: "العقبة", countryId: COUNTRY_IDS.JO },
    { nameEn: "Salt", nameAr: "السلط", countryId: COUNTRY_IDS.JO },

    // -------------------------
    // Lebanon
    // -------------------------
    { nameEn: "Beirut", nameAr: "بيروت", countryId: COUNTRY_IDS.LB },
    { nameEn: "Tripoli", nameAr: "طرابلس", countryId: COUNTRY_IDS.LB },
    { nameEn: "Sidon", nameAr: "صيدا", countryId: COUNTRY_IDS.LB },
    { nameEn: "Tyre", nameAr: "صور", countryId: COUNTRY_IDS.LB },
    { nameEn: "Jounieh", nameAr: "جونيه", countryId: COUNTRY_IDS.LB },

    // -------------------------
    // Syria
    // -------------------------
    { nameEn: "Damascus", nameAr: "دمشق", countryId: COUNTRY_IDS.SY },
    { nameEn: "Aleppo", nameAr: "حلب", countryId: COUNTRY_IDS.SY },
    { nameEn: "Homs", nameAr: "حمص", countryId: COUNTRY_IDS.SY },
    { nameEn: "Latakia", nameAr: "اللاذقية", countryId: COUNTRY_IDS.SY },
    { nameEn: "Hama", nameAr: "حماة", countryId: COUNTRY_IDS.SY },

    // -------------------------
    // Iraq
    // -------------------------
    { nameEn: "Baghdad", nameAr: "بغداد", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Basra", nameAr: "البصرة", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Mosul", nameAr: "الموصل", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Erbil", nameAr: "أربيل", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Sulaymaniyah", nameAr: "السليمانية", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Najaf", nameAr: "النجف", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Karbala", nameAr: "كربلاء", countryId: COUNTRY_IDS.IQ },

    // -------------------------
    // Egypt
    // -------------------------
    { nameEn: "Cairo", nameAr: "القاهرة", countryId: COUNTRY_IDS.EG },
    { nameEn: "Alexandria", nameAr: "الإسكندرية", countryId: COUNTRY_IDS.EG },
    { nameEn: "Giza", nameAr: "الجيزة", countryId: COUNTRY_IDS.EG },
    { nameEn: "Sharm El Sheikh", nameAr: "شرم الشيخ", countryId: COUNTRY_IDS.EG },
    { nameEn: "Luxor", nameAr: "الأقصر", countryId: COUNTRY_IDS.EG },
    { nameEn: "Aswan", nameAr: "أسوان", countryId: COUNTRY_IDS.EG },
    { nameEn: "Port Said", nameAr: "بورسعيد", countryId: COUNTRY_IDS.EG },
    { nameEn: "Suez", nameAr: "السويس", countryId: COUNTRY_IDS.EG },

    // -------------------------
    // Turkey
    // -------------------------
    { nameEn: "Istanbul", nameAr: "إسطنبول", countryId: COUNTRY_IDS.TR },
    { nameEn: "Ankara", nameAr: "أنقرة", countryId: COUNTRY_IDS.TR },
    { nameEn: "Izmir", nameAr: "إزمير", countryId: COUNTRY_IDS.TR },
    { nameEn: "Bursa", nameAr: "بورصة", countryId: COUNTRY_IDS.TR },
    { nameEn: "Antalya", nameAr: "أنطاليا", countryId: COUNTRY_IDS.TR },
    { nameEn: "Konya", nameAr: "قونية", countryId: COUNTRY_IDS.TR },
    { nameEn: "Trabzon", nameAr: "طرابزون", countryId: COUNTRY_IDS.TR },
    { nameEn: "Gaziantep", nameAr: "غازي عنتاب", countryId: COUNTRY_IDS.TR },

    // -------------------------
    // Iran
    // -------------------------
    { nameEn: "Tehran", nameAr: "طهران", countryId: COUNTRY_IDS.IR },
    { nameEn: "Isfahan", nameAr: "أصفهان", countryId: COUNTRY_IDS.IR },
    { nameEn: "Mashhad", nameAr: "مشهد", countryId: COUNTRY_IDS.IR },
    { nameEn: "Tabriz", nameAr: "تبريز", countryId: COUNTRY_IDS.IR },
    { nameEn: "Shiraz", nameAr: "شيراز", countryId: COUNTRY_IDS.IR },

    // -------------------------
    // United Kingdom
    // -------------------------
    { nameEn: "London", nameAr: "لندن", countryId: COUNTRY_IDS.GB },
    { nameEn: "Manchester", nameAr: "مانشستر", countryId: COUNTRY_IDS.GB },
    { nameEn: "Birmingham", nameAr: "برمنغهام", countryId: COUNTRY_IDS.GB },
    { nameEn: "Liverpool", nameAr: "ليفربول", countryId: COUNTRY_IDS.GB },
    { nameEn: "Edinburgh", nameAr: "إدنبرة", countryId: COUNTRY_IDS.GB },
    { nameEn: "Glasgow", nameAr: "غلاسكو", countryId: COUNTRY_IDS.GB },
    { nameEn: "Cardiff", nameAr: "كارديف", countryId: COUNTRY_IDS.GB },
    { nameEn: "Belfast", nameAr: "بلفاست", countryId: COUNTRY_IDS.GB },

    // -------------------------
    // France
    // -------------------------
    { nameEn: "Paris", nameAr: "باريس", countryId: COUNTRY_IDS.FR },
    { nameEn: "Marseille", nameAr: "مارسيليا", countryId: COUNTRY_IDS.FR },
    { nameEn: "Lyon", nameAr: "ليون", countryId: COUNTRY_IDS.FR },
    { nameEn: "Toulouse", nameAr: "تولوز", countryId: COUNTRY_IDS.FR },
    { nameEn: "Nice", nameAr: "نيس", countryId: COUNTRY_IDS.FR },
    { nameEn: "Bordeaux", nameAr: "بوردو", countryId: COUNTRY_IDS.FR },

    // -------------------------
    // Germany
    // -------------------------
    { nameEn: "Berlin", nameAr: "برلين", countryId: COUNTRY_IDS.DE },
    { nameEn: "Munich", nameAr: "ميونخ", countryId: COUNTRY_IDS.DE },
    { nameEn: "Frankfurt", nameAr: "فرانكفورت", countryId: COUNTRY_IDS.DE },
    { nameEn: "Hamburg", nameAr: "هامبورغ", countryId: COUNTRY_IDS.DE },
    { nameEn: "Cologne", nameAr: "كولونيا", countryId: COUNTRY_IDS.DE },
    { nameEn: "Stuttgart", nameAr: "شتوتغارت", countryId: COUNTRY_IDS.DE },
    { nameEn: "Düsseldorf", nameAr: "دوسلدورف", countryId: COUNTRY_IDS.DE },

    // -------------------------
    // Italy
    // -------------------------
    { nameEn: "Rome", nameAr: "روما", countryId: COUNTRY_IDS.IT },
    { nameEn: "Milan", nameAr: "ميلانو", countryId: COUNTRY_IDS.IT },
    { nameEn: "Naples", nameAr: "نابولي", countryId: COUNTRY_IDS.IT },
    { nameEn: "Turin", nameAr: "تورينو", countryId: COUNTRY_IDS.IT },
    { nameEn: "Florence", nameAr: "فلورنسا", countryId: COUNTRY_IDS.IT },
    { nameEn: "Venice", nameAr: "البندقية", countryId: COUNTRY_IDS.IT },

    // -------------------------
    // Spain
    // -------------------------
    { nameEn: "Madrid", nameAr: "مدريد", countryId: COUNTRY_IDS.ES },
    { nameEn: "Barcelona", nameAr: "برشلونة", countryId: COUNTRY_IDS.ES },
    { nameEn: "Valencia", nameAr: "فالنسيا", countryId: COUNTRY_IDS.ES },
    { nameEn: "Seville", nameAr: "إشبيلية", countryId: COUNTRY_IDS.ES },
    { nameEn: "Malaga", nameAr: "مالقة", countryId: COUNTRY_IDS.ES },
    { nameEn: "Bilbao", nameAr: "بلباو", countryId: COUNTRY_IDS.ES },

    // -------------------------
    // Netherlands
    // -------------------------
    { nameEn: "Amsterdam", nameAr: "أمستردام", countryId: COUNTRY_IDS.NL },
    { nameEn: "Rotterdam", nameAr: "روتردام", countryId: COUNTRY_IDS.NL },
    { nameEn: "The Hague", nameAr: "لاهاي", countryId: COUNTRY_IDS.NL },
    { nameEn: "Utrecht", nameAr: "أوتريخت", countryId: COUNTRY_IDS.NL },
    { nameEn: "Eindhoven", nameAr: "آيندهوفن", countryId: COUNTRY_IDS.NL },

    // -------------------------
    // Sweden
    // -------------------------
    { nameEn: "Stockholm", nameAr: "ستوكهولم", countryId: COUNTRY_IDS.SE },
    { nameEn: "Gothenburg", nameAr: "غوتنبرغ", countryId: COUNTRY_IDS.SE },
    { nameEn: "Malmö", nameAr: "مالمو", countryId: COUNTRY_IDS.SE },
    { nameEn: "Uppsala", nameAr: "أوبسالا", countryId: COUNTRY_IDS.SE },

    // -------------------------
    // Norway
    // -------------------------
    { nameEn: "Oslo", nameAr: "أوسلو", countryId: COUNTRY_IDS.NO },
    { nameEn: "Bergen", nameAr: "بيرغن", countryId: COUNTRY_IDS.NO },
    { nameEn: "Trondheim", nameAr: "تروندهايم", countryId: COUNTRY_IDS.NO },
    { nameEn: "Stavanger", nameAr: "ستافانغر", countryId: COUNTRY_IDS.NO },

    // -------------------------
    // Denmark
    // -------------------------
    { nameEn: "Copenhagen", nameAr: "كوبنهاغن", countryId: COUNTRY_IDS.DK },
    { nameEn: "Aarhus", nameAr: "آرهوس", countryId: COUNTRY_IDS.DK },
    { nameEn: "Odense", nameAr: "أودنسه", countryId: COUNTRY_IDS.DK },
    { nameEn: "Aalborg", nameAr: "آلبورغ", countryId: COUNTRY_IDS.DK },

    // -------------------------
    // Finland
    // -------------------------
    { nameEn: "Helsinki", nameAr: "هلسنكي", countryId: COUNTRY_IDS.FI },
    { nameEn: "Espoo", nameAr: "إسبو", countryId: COUNTRY_IDS.FI },
    { nameEn: "Tampere", nameAr: "تامبيري", countryId: COUNTRY_IDS.FI },
    { nameEn: "Turku", nameAr: "توركو", countryId: COUNTRY_IDS.FI },

    // -------------------------
    // Poland
    // -------------------------
    { nameEn: "Warsaw", nameAr: "وارسو", countryId: COUNTRY_IDS.PL },
    { nameEn: "Krakow", nameAr: "كراكوف", countryId: COUNTRY_IDS.PL },
    { nameEn: "Gdansk", nameAr: "غدانسك", countryId: COUNTRY_IDS.PL },
    { nameEn: "Wroclaw", nameAr: "فروتسواف", countryId: COUNTRY_IDS.PL },
    { nameEn: "Poznan", nameAr: "بوزنان", countryId: COUNTRY_IDS.PL },

    // -------------------------
    // Greece
    // -------------------------
    { nameEn: "Athens", nameAr: "أثينا", countryId: COUNTRY_IDS.GR },
    { nameEn: "Thessaloniki", nameAr: "سالونيك", countryId: COUNTRY_IDS.GR },
    { nameEn: "Patras", nameAr: "باتراس", countryId: COUNTRY_IDS.GR },
    { nameEn: "Heraklion", nameAr: "هيراكليون", countryId: COUNTRY_IDS.GR },

    // -------------------------
    // Portugal
    // -------------------------
    { nameEn: "Lisbon", nameAr: "لشبونة", countryId: COUNTRY_IDS.PT },
    { nameEn: "Porto", nameAr: "بورتو", countryId: COUNTRY_IDS.PT },
    { nameEn: "Braga", nameAr: "براغا", countryId: COUNTRY_IDS.PT },
    { nameEn: "Coimbra", nameAr: "كويمبرا", countryId: COUNTRY_IDS.PT },

    // -------------------------
    // Switzerland
    // -------------------------
    { nameEn: "Zurich", nameAr: "زيورخ", countryId: COUNTRY_IDS.CH },
    { nameEn: "Geneva", nameAr: "جنيف", countryId: COUNTRY_IDS.CH },
    { nameEn: "Basel", nameAr: "بازل", countryId: COUNTRY_IDS.CH },
    { nameEn: "Bern", nameAr: "برن", countryId: COUNTRY_IDS.CH },
    { nameEn: "Lausanne", nameAr: "لوزان", countryId: COUNTRY_IDS.CH },

    // -------------------------
    // Austria
    // -------------------------
    { nameEn: "Vienna", nameAr: "فيينا", countryId: COUNTRY_IDS.AT },
    { nameEn: "Salzburg", nameAr: "سالزبورغ", countryId: COUNTRY_IDS.AT },
    { nameEn: "Innsbruck", nameAr: "إنسبروك", countryId: COUNTRY_IDS.AT },
    { nameEn: "Graz", nameAr: "غراتس", countryId: COUNTRY_IDS.AT },

    // -------------------------
    // Belgium
    // -------------------------
    { nameEn: "Brussels", nameAr: "بروكسل", countryId: COUNTRY_IDS.BE },
    { nameEn: "Antwerp", nameAr: "أنتويرب", countryId: COUNTRY_IDS.BE },
    { nameEn: "Ghent", nameAr: "غنت", countryId: COUNTRY_IDS.BE },
    { nameEn: "Bruges", nameAr: "بروج", countryId: COUNTRY_IDS.BE },

    // -------------------------
    // Ireland
    // -------------------------
    { nameEn: "Dublin", nameAr: "دبلن", countryId: COUNTRY_IDS.IE },
    { nameEn: "Cork", nameAr: "كورك", countryId: COUNTRY_IDS.IE },
    { nameEn: "Galway", nameAr: "غالواي", countryId: COUNTRY_IDS.IE },
    { nameEn: "Limerick", nameAr: "ليمريك", countryId: COUNTRY_IDS.IE },

    // -------------------------
    // Czech Republic
    // -------------------------
    { nameEn: "Prague", nameAr: "براغ", countryId: COUNTRY_IDS.CZ },
    { nameEn: "Brno", nameAr: "برنو", countryId: COUNTRY_IDS.CZ },
    { nameEn: "Ostrava", nameAr: "أوسترافا", countryId: COUNTRY_IDS.CZ },
    { nameEn: "Pilsen", nameAr: "بلزن", countryId: COUNTRY_IDS.CZ },

    // -------------------------
    // Hungary
    // -------------------------
    { nameEn: "Budapest", nameAr: "بودابست", countryId: COUNTRY_IDS.HU },
    { nameEn: "Debrecen", nameAr: "دبرتسن", countryId: COUNTRY_IDS.HU },
    { nameEn: "Szeged", nameAr: "سيغد", countryId: COUNTRY_IDS.HU },
    { nameEn: "Pécs", nameAr: "بيتش", countryId: COUNTRY_IDS.HU },

    // -------------------------
    // Romania
    // -------------------------
    { nameEn: "Bucharest", nameAr: "بوخارست", countryId: COUNTRY_IDS.RO },
    { nameEn: "Cluj-Napoca", nameAr: "كلوج نابوكا", countryId: COUNTRY_IDS.RO },
    { nameEn: "Timisoara", nameAr: "تيميشوارا", countryId: COUNTRY_IDS.RO },
    { nameEn: "Iasi", nameAr: "ياش", countryId: COUNTRY_IDS.RO },

    // -------------------------
    // Bulgaria
    // -------------------------
    { nameEn: "Sofia", nameAr: "صوفيا", countryId: COUNTRY_IDS.BG },
    { nameEn: "Plovdiv", nameAr: "بلوفديف", countryId: COUNTRY_IDS.BG },
    { nameEn: "Varna", nameAr: "فارنا", countryId: COUNTRY_IDS.BG },
    { nameEn: "Burgas", nameAr: "بورغاس", countryId: COUNTRY_IDS.BG },

    // -------------------------
    // Croatia
    // -------------------------
    { nameEn: "Zagreb", nameAr: "زغرب", countryId: COUNTRY_IDS.HR },
    { nameEn: "Split", nameAr: "سبليت", countryId: COUNTRY_IDS.HR },
    { nameEn: "Dubrovnik", nameAr: "دوبروفنيك", countryId: COUNTRY_IDS.HR },
    { nameEn: "Rijeka", nameAr: "رييكا", countryId: COUNTRY_IDS.HR },

    // -------------------------
    // Serbia
    // -------------------------
    { nameEn: "Belgrade", nameAr: "بلغراد", countryId: COUNTRY_IDS.RS },
    { nameEn: "Novi Sad", nameAr: "نوفي ساد", countryId: COUNTRY_IDS.RS },
    { nameEn: "Niš", nameAr: "نيش", countryId: COUNTRY_IDS.RS },
    { nameEn: "Kragujevac", nameAr: "كراغويفاتس", countryId: COUNTRY_IDS.RS },

    // -------------------------
    // Ukraine
    // -------------------------
    { nameEn: "Kyiv", nameAr: "كييف", countryId: COUNTRY_IDS.UA },
    { nameEn: "Kharkiv", nameAr: "خاركيف", countryId: COUNTRY_IDS.UA },
    { nameEn: "Odesa", nameAr: "أوديسا", countryId: COUNTRY_IDS.UA },
    { nameEn: "Lviv", nameAr: "لفيف", countryId: COUNTRY_IDS.UA },
    { nameEn: "Dnipro", nameAr: "دنيبرو", countryId: COUNTRY_IDS.UA },

    // -------------------------
    // United States
    // -------------------------
    { nameEn: "New York", nameAr: "نيويورك", countryId: COUNTRY_IDS.US },
    { nameEn: "Los Angeles", nameAr: "لوس أنجلوس", countryId: COUNTRY_IDS.US },
    { nameEn: "Chicago", nameAr: "شيكاغو", countryId: COUNTRY_IDS.US },
    { nameEn: "Houston", nameAr: "هيوستن", countryId: COUNTRY_IDS.US },
    { nameEn: "Phoenix", nameAr: "فينيكس", countryId: COUNTRY_IDS.US },
    { nameEn: "San Francisco", nameAr: "سان فرانسيسكو", countryId: COUNTRY_IDS.US },
    { nameEn: "Miami", nameAr: "ميامي", countryId: COUNTRY_IDS.US },
    { nameEn: "Washington D.C.", nameAr: "واشنطن", countryId: COUNTRY_IDS.US },
    { nameEn: "Boston", nameAr: "بوسطن", countryId: COUNTRY_IDS.US },
    { nameEn: "Seattle", nameAr: "سياتل", countryId: COUNTRY_IDS.US },

    // -------------------------
    // Canada
    // -------------------------
    { nameEn: "Toronto", nameAr: "تورنتو", countryId: COUNTRY_IDS.CA },
    { nameEn: "Vancouver", nameAr: "فانكوفر", countryId: COUNTRY_IDS.CA },
    { nameEn: "Montreal", nameAr: "مونتريال", countryId: COUNTRY_IDS.CA },
    { nameEn: "Calgary", nameAr: "كالغاري", countryId: COUNTRY_IDS.CA },
    { nameEn: "Ottawa", nameAr: "أوتاوا", countryId: COUNTRY_IDS.CA },
    { nameEn: "Edmonton", nameAr: "إدمونتون", countryId: COUNTRY_IDS.CA },
];

async function main() {
    await client.connect();

    console.log(`Seeding ${cities.length} cities...`);

    for (const c of cities) {
        await db.insert(city).values({
            id: nanoid(),
            ...c,
        });
    }

    console.log("Cities seeded successfully!");
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

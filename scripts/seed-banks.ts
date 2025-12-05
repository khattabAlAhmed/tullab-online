import { drizzle } from "drizzle-orm/node-postgres";
import { bank } from "../src/lib/db/schema/academy-schema";
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

const banks = [
    // -------------------------
    // Saudi Arabia
    // -------------------------
    { nameEn: "Al Rajhi Bank", nameAr: "مصرف الراجحي", countryId: COUNTRY_IDS.SA },
    { nameEn: "Saudi National Bank (SNB)", nameAr: "البنك الأهلي السعودي", countryId: COUNTRY_IDS.SA },
    { nameEn: "Riyad Bank", nameAr: "بنك الرياض", countryId: COUNTRY_IDS.SA },
    { nameEn: "SABB Bank", nameAr: "البنك السعودي البريطاني", countryId: COUNTRY_IDS.SA },
    { nameEn: "Alinma Bank", nameAr: "مصرف الإنماء", countryId: COUNTRY_IDS.SA },
    { nameEn: "Banque Saudi Fransi", nameAr: "البنك السعودي الفرنسي", countryId: COUNTRY_IDS.SA },
    { nameEn: "Arab National Bank", nameAr: "البنك العربي الوطني", countryId: COUNTRY_IDS.SA },
    { nameEn: "Bank Albilad", nameAr: "بنك البلاد", countryId: COUNTRY_IDS.SA },
    { nameEn: "STC Pay", nameAr: "اس تي سي باي", countryId: COUNTRY_IDS.SA },

    // -------------------------
    // United Arab Emirates
    // -------------------------
    { nameEn: "Emirates NBD", nameAr: "الإمارات دبي الوطني", countryId: COUNTRY_IDS.AE },
    { nameEn: "First Abu Dhabi Bank (FAB)", nameAr: "بنك أبوظبي الأول", countryId: COUNTRY_IDS.AE },
    { nameEn: "Abu Dhabi Commercial Bank", nameAr: "بنك أبوظبي التجاري", countryId: COUNTRY_IDS.AE },
    { nameEn: "Mashreq Bank", nameAr: "بنك المشرق", countryId: COUNTRY_IDS.AE },
    { nameEn: "Dubai Islamic Bank", nameAr: "بنك دبي الإسلامي", countryId: COUNTRY_IDS.AE },
    { nameEn: "RAKBANK", nameAr: "بنك رأس الخيمة الوطني", countryId: COUNTRY_IDS.AE },
    { nameEn: "Commercial Bank of Dubai", nameAr: "بنك دبي التجاري", countryId: COUNTRY_IDS.AE },

    // -------------------------
    // Qatar
    // -------------------------
    { nameEn: "Qatar National Bank (QNB)", nameAr: "بنك قطر الوطني", countryId: COUNTRY_IDS.QA },
    { nameEn: "Qatar Islamic Bank", nameAr: "مصرف قطر الإسلامي", countryId: COUNTRY_IDS.QA },
    { nameEn: "Commercial Bank of Qatar", nameAr: "البنك التجاري القطري", countryId: COUNTRY_IDS.QA },
    { nameEn: "Doha Bank", nameAr: "بنك الدوحة", countryId: COUNTRY_IDS.QA },
    { nameEn: "Masraf Al Rayan", nameAr: "مصرف الريان", countryId: COUNTRY_IDS.QA },

    // -------------------------
    // Kuwait
    // -------------------------
    { nameEn: "National Bank of Kuwait", nameAr: "بنك الكويت الوطني", countryId: COUNTRY_IDS.KW },
    { nameEn: "Kuwait Finance House", nameAr: "بيت التمويل الكويتي", countryId: COUNTRY_IDS.KW },
    { nameEn: "Gulf Bank", nameAr: "بنك الخليج", countryId: COUNTRY_IDS.KW },
    { nameEn: "Burgan Bank", nameAr: "بنك برقان", countryId: COUNTRY_IDS.KW },
    { nameEn: "Boubyan Bank", nameAr: "بنك بوبيان", countryId: COUNTRY_IDS.KW },

    // -------------------------
    // Bahrain
    // -------------------------
    { nameEn: "National Bank of Bahrain", nameAr: "بنك البحرين الوطني", countryId: COUNTRY_IDS.BH },
    { nameEn: "Bank of Bahrain and Kuwait", nameAr: "بنك البحرين والكويت", countryId: COUNTRY_IDS.BH },
    { nameEn: "Ahli United Bank", nameAr: "البنك الأهلي المتحد", countryId: COUNTRY_IDS.BH },
    { nameEn: "Al Baraka Banking Group", nameAr: "مجموعة البركة المصرفية", countryId: COUNTRY_IDS.BH },
    { nameEn: "Bahrain Islamic Bank", nameAr: "بنك البحرين الإسلامي", countryId: COUNTRY_IDS.BH },

    // -------------------------
    // Oman
    // -------------------------
    { nameEn: "Bank Muscat", nameAr: "بنك مسقط", countryId: COUNTRY_IDS.OM },
    { nameEn: "Bank Dhofar", nameAr: "بنك ظفار", countryId: COUNTRY_IDS.OM },
    { nameEn: "National Bank of Oman", nameAr: "البنك الوطني العماني", countryId: COUNTRY_IDS.OM },
    { nameEn: "Oman Arab Bank", nameAr: "البنك العربي العماني", countryId: COUNTRY_IDS.OM },
    { nameEn: "Bank Sohar", nameAr: "بنك صحار", countryId: COUNTRY_IDS.OM },
    { nameEn: "Alizz Islamic Bank", nameAr: "بنك العز الإسلامي", countryId: COUNTRY_IDS.OM },

    // -------------------------
    // Yemen
    // -------------------------
    { nameEn: "Central Bank of Yemen", nameAr: "البنك المركزي اليمني", countryId: COUNTRY_IDS.YE },
    { nameEn: "Yemen Kuwait Bank", nameAr: "بنك اليمن والكويت", countryId: COUNTRY_IDS.YE },
    { nameEn: "Cooperative and Agricultural Credit Bank", nameAr: "بنك التسليف التعاوني والزراعي", countryId: COUNTRY_IDS.YE },
    { nameEn: "Yemen Bank for Reconstruction and Development", nameAr: "بنك اليمن للإنشاء والتعمير", countryId: COUNTRY_IDS.YE },
    { nameEn: "International Bank of Yemen", nameAr: "البنك الدولي اليمني", countryId: COUNTRY_IDS.YE },
    { nameEn: "Shamil Bank of Yemen", nameAr: "بنك الشامل اليمني", countryId: COUNTRY_IDS.YE },
    { nameEn: "Tadhamon International Islamic Bank", nameAr: "بنك التضامن الإسلامي الدولي", countryId: COUNTRY_IDS.YE },
    { nameEn: "Al-Kuraimi Islamic Microfinance Bank", nameAr: "بنك الكريمي الإسلامي للتمويل الأصغر", countryId: COUNTRY_IDS.YE },

    // -------------------------
    // Jordan
    // -------------------------
    { nameEn: "Arab Bank", nameAr: "البنك العربي", countryId: COUNTRY_IDS.JO },
    { nameEn: "Jordan Ahli Bank", nameAr: "البنك الأهلي الأردني", countryId: COUNTRY_IDS.JO },
    { nameEn: "Housing Bank for Trade and Finance", nameAr: "بنك الإسكان للتجارة والتمويل", countryId: COUNTRY_IDS.JO },
    { nameEn: "Cairo Amman Bank", nameAr: "بنك القاهرة عمان", countryId: COUNTRY_IDS.JO },
    { nameEn: "Bank of Jordan", nameAr: "بنك الأردن", countryId: COUNTRY_IDS.JO },

    // -------------------------
    // Lebanon
    // -------------------------
    { nameEn: "Bank Audi", nameAr: "بنك عودة", countryId: COUNTRY_IDS.LB },
    { nameEn: "Blom Bank", nameAr: "بنك لبنان والمهجر", countryId: COUNTRY_IDS.LB },
    { nameEn: "Byblos Bank", nameAr: "بنك بيبلوس", countryId: COUNTRY_IDS.LB },
    { nameEn: "Bank of Beirut", nameAr: "بنك بيروت", countryId: COUNTRY_IDS.LB },
    { nameEn: "Fransabank", nameAr: "فرنسبنك", countryId: COUNTRY_IDS.LB },

    // -------------------------
    // Syria
    // -------------------------
    { nameEn: "Commercial Bank of Syria", nameAr: "المصرف التجاري السوري", countryId: COUNTRY_IDS.SY },
    { nameEn: "Real Estate Bank", nameAr: "المصرف العقاري", countryId: COUNTRY_IDS.SY },
    { nameEn: "Syria International Islamic Bank", nameAr: "بنك سورية الدولي الإسلامي", countryId: COUNTRY_IDS.SY },
    { nameEn: "Bank of Syria and Overseas", nameAr: "بنك سورية والمهجر", countryId: COUNTRY_IDS.SY },
    { nameEn: "Cham Bank", nameAr: "بنك الشام", countryId: COUNTRY_IDS.SY },

    // -------------------------
    // Iraq
    // -------------------------
    { nameEn: "Trade Bank of Iraq", nameAr: "مصرف التجارة العراقي", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Rasheed Bank", nameAr: "مصرف الرشيد", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Rafidain Bank", nameAr: "مصرف الرافدين", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Iraqi Islamic Bank", nameAr: "المصرف العراقي الإسلامي", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Kurdistan International Bank", nameAr: "مصرف كوردستان الدولي", countryId: COUNTRY_IDS.IQ },

    // -------------------------
    // Egypt
    // -------------------------
    { nameEn: "National Bank of Egypt", nameAr: "البنك الأهلي المصري", countryId: COUNTRY_IDS.EG },
    { nameEn: "Banque Misr", nameAr: "بنك مصر", countryId: COUNTRY_IDS.EG },
    { nameEn: "Commercial International Bank (CIB)", nameAr: "البنك التجاري الدولي", countryId: COUNTRY_IDS.EG },
    { nameEn: "QNB Alahli", nameAr: "بنك قطر الوطني الأهلي", countryId: COUNTRY_IDS.EG },
    { nameEn: "Banque du Caire", nameAr: "بنك القاهرة", countryId: COUNTRY_IDS.EG },
    { nameEn: "Faisal Islamic Bank of Egypt", nameAr: "بنك فيصل الإسلامي المصري", countryId: COUNTRY_IDS.EG },
    { nameEn: "Arab African International Bank", nameAr: "البنك العربي الأفريقي الدولي", countryId: COUNTRY_IDS.EG },

    // -------------------------
    // Turkey
    // -------------------------
    { nameEn: "Ziraat Bankası", nameAr: "بنك زراعات", countryId: COUNTRY_IDS.TR },
    { nameEn: "İş Bankası", nameAr: "بنك إش", countryId: COUNTRY_IDS.TR },
    { nameEn: "Garanti BBVA", nameAr: "غارانتي بي بي في أيه", countryId: COUNTRY_IDS.TR },
    { nameEn: "Akbank", nameAr: "آك بنك", countryId: COUNTRY_IDS.TR },
    { nameEn: "Yapı Kredi", nameAr: "يابي كريدي", countryId: COUNTRY_IDS.TR },
    { nameEn: "Halkbank", nameAr: "حلق بنك", countryId: COUNTRY_IDS.TR },
    { nameEn: "VakıfBank", nameAr: "وقف بنك", countryId: COUNTRY_IDS.TR },
    { nameEn: "Kuveyt Türk", nameAr: "الكويت التركي", countryId: COUNTRY_IDS.TR },

    // -------------------------
    // Iran
    // -------------------------
    { nameEn: "Bank Melli Iran", nameAr: "بنك ملي إيران", countryId: COUNTRY_IDS.IR },
    { nameEn: "Bank Mellat", nameAr: "بنك ملت", countryId: COUNTRY_IDS.IR },
    { nameEn: "Bank Saderat Iran", nameAr: "بنك صادرات إيران", countryId: COUNTRY_IDS.IR },
    { nameEn: "Bank Tejarat", nameAr: "بنك تجارت", countryId: COUNTRY_IDS.IR },
    { nameEn: "Bank Sepah", nameAr: "بنك سپه", countryId: COUNTRY_IDS.IR },
    { nameEn: "Parsian Bank", nameAr: "بنك بارسيان", countryId: COUNTRY_IDS.IR },

    // -------------------------
    // United Kingdom
    // -------------------------
    { nameEn: "HSBC", nameAr: "إتش إس بي سي", countryId: COUNTRY_IDS.GB },
    { nameEn: "Barclays", nameAr: "باركليز", countryId: COUNTRY_IDS.GB },
    { nameEn: "Lloyds Bank", nameAr: "لويدز بنك", countryId: COUNTRY_IDS.GB },
    { nameEn: "NatWest", nameAr: "ناتويست", countryId: COUNTRY_IDS.GB },
    { nameEn: "Santander UK", nameAr: "سانتاندر المملكة المتحدة", countryId: COUNTRY_IDS.GB },
    { nameEn: "Standard Chartered", nameAr: "ستاندرد تشارترد", countryId: COUNTRY_IDS.GB },
    { nameEn: "Revolut", nameAr: "ريفولوت", countryId: COUNTRY_IDS.GB },

    // -------------------------
    // France
    // -------------------------
    { nameEn: "BNP Paribas", nameAr: "بي إن بي باريباس", countryId: COUNTRY_IDS.FR },
    { nameEn: "Crédit Agricole", nameAr: "كريدي أجريكول", countryId: COUNTRY_IDS.FR },
    { nameEn: "Société Générale", nameAr: "سوسيتيه جنرال", countryId: COUNTRY_IDS.FR },
    { nameEn: "Banque Populaire", nameAr: "البنك الشعبي", countryId: COUNTRY_IDS.FR },
    { nameEn: "LCL", nameAr: "إل سي إل", countryId: COUNTRY_IDS.FR },
    { nameEn: "Crédit Mutuel", nameAr: "كريدي موتويل", countryId: COUNTRY_IDS.FR },

    // -------------------------
    // Germany
    // -------------------------
    { nameEn: "Deutsche Bank", nameAr: "دويتشه بنك", countryId: COUNTRY_IDS.DE },
    { nameEn: "Commerzbank", nameAr: "كومرتس بنك", countryId: COUNTRY_IDS.DE },
    { nameEn: "DZ Bank", nameAr: "دي زد بنك", countryId: COUNTRY_IDS.DE },
    { nameEn: "KfW", nameAr: "كي إف دبليو", countryId: COUNTRY_IDS.DE },
    { nameEn: "Sparkasse", nameAr: "شباركاسه", countryId: COUNTRY_IDS.DE },
    { nameEn: "N26", nameAr: "إن 26", countryId: COUNTRY_IDS.DE },

    // -------------------------
    // Italy
    // -------------------------
    { nameEn: "UniCredit", nameAr: "يونيكريديت", countryId: COUNTRY_IDS.IT },
    { nameEn: "Intesa Sanpaolo", nameAr: "إنتيسا سانباولو", countryId: COUNTRY_IDS.IT },
    { nameEn: "Banco BPM", nameAr: "بانكو بي بي إم", countryId: COUNTRY_IDS.IT },
    { nameEn: "Monte dei Paschi di Siena", nameAr: "مونتي دي باسكي دي سيينا", countryId: COUNTRY_IDS.IT },
    { nameEn: "BPER Banca", nameAr: "بي بي إي آر بنك", countryId: COUNTRY_IDS.IT },

    // -------------------------
    // Spain
    // -------------------------
    { nameEn: "Santander", nameAr: "سانتاندر", countryId: COUNTRY_IDS.ES },
    { nameEn: "BBVA", nameAr: "بي بي في أيه", countryId: COUNTRY_IDS.ES },
    { nameEn: "CaixaBank", nameAr: "كايكسا بنك", countryId: COUNTRY_IDS.ES },
    { nameEn: "Sabadell", nameAr: "ساباديل", countryId: COUNTRY_IDS.ES },
    { nameEn: "Bankinter", nameAr: "بانكنتر", countryId: COUNTRY_IDS.ES },

    // -------------------------
    // Netherlands
    // -------------------------
    { nameEn: "ING Bank", nameAr: "آي إن جي بنك", countryId: COUNTRY_IDS.NL },
    { nameEn: "Rabobank", nameAr: "رابوبنك", countryId: COUNTRY_IDS.NL },
    { nameEn: "ABN AMRO", nameAr: "إيه بي إن أمرو", countryId: COUNTRY_IDS.NL },
    { nameEn: "Triodos Bank", nameAr: "تريودوس بنك", countryId: COUNTRY_IDS.NL },
    { nameEn: "Bunq", nameAr: "بانك", countryId: COUNTRY_IDS.NL },

    // -------------------------
    // Sweden
    // -------------------------
    { nameEn: "Swedbank", nameAr: "سويد بنك", countryId: COUNTRY_IDS.SE },
    { nameEn: "Handelsbanken", nameAr: "هاندلس بانكن", countryId: COUNTRY_IDS.SE },
    { nameEn: "SEB", nameAr: "إس إي بي", countryId: COUNTRY_IDS.SE },
    { nameEn: "Nordea", nameAr: "نورديا", countryId: COUNTRY_IDS.SE },
    { nameEn: "Klarna", nameAr: "كلارنا", countryId: COUNTRY_IDS.SE },

    // -------------------------
    // Norway
    // -------------------------
    { nameEn: "DNB", nameAr: "دي إن بي", countryId: COUNTRY_IDS.NO },
    { nameEn: "Sparebank 1", nameAr: "سباربنك 1", countryId: COUNTRY_IDS.NO },
    { nameEn: "Nordea Norway", nameAr: "نورديا النرويج", countryId: COUNTRY_IDS.NO },
    { nameEn: "Handelsbanken Norway", nameAr: "هاندلس بانكن النرويج", countryId: COUNTRY_IDS.NO },

    // -------------------------
    // Denmark
    // -------------------------
    { nameEn: "Danske Bank", nameAr: "دانسكي بنك", countryId: COUNTRY_IDS.DK },
    { nameEn: "Jyske Bank", nameAr: "يوسكي بنك", countryId: COUNTRY_IDS.DK },
    { nameEn: "Nykredit", nameAr: "نيكريديت", countryId: COUNTRY_IDS.DK },
    { nameEn: "Sydbank", nameAr: "سيد بنك", countryId: COUNTRY_IDS.DK },

    // -------------------------
    // Finland
    // -------------------------
    { nameEn: "Nordea Finland", nameAr: "نورديا فنلندا", countryId: COUNTRY_IDS.FI },
    { nameEn: "OP Financial Group", nameAr: "مجموعة أو بي المالية", countryId: COUNTRY_IDS.FI },
    { nameEn: "Danske Bank Finland", nameAr: "دانسكي بنك فنلندا", countryId: COUNTRY_IDS.FI },
    { nameEn: "Aktia Bank", nameAr: "أكتيا بنك", countryId: COUNTRY_IDS.FI },

    // -------------------------
    // Poland
    // -------------------------
    { nameEn: "PKO Bank Polski", nameAr: "بي كي أو بنك بولسكي", countryId: COUNTRY_IDS.PL },
    { nameEn: "Bank Pekao", nameAr: "بنك بيكاو", countryId: COUNTRY_IDS.PL },
    { nameEn: "Santander Bank Polska", nameAr: "سانتاندر بنك بولندا", countryId: COUNTRY_IDS.PL },
    { nameEn: "mBank", nameAr: "إم بنك", countryId: COUNTRY_IDS.PL },
    { nameEn: "ING Bank Śląski", nameAr: "آي إن جي بنك شلونسكي", countryId: COUNTRY_IDS.PL },

    // -------------------------
    // Greece
    // -------------------------
    { nameEn: "National Bank of Greece", nameAr: "البنك الأهلي اليوناني", countryId: COUNTRY_IDS.GR },
    { nameEn: "Piraeus Bank", nameAr: "بنك بيرايوس", countryId: COUNTRY_IDS.GR },
    { nameEn: "Alpha Bank", nameAr: "ألفا بنك", countryId: COUNTRY_IDS.GR },
    { nameEn: "Eurobank", nameAr: "يوروبنك", countryId: COUNTRY_IDS.GR },

    // -------------------------
    // Portugal
    // -------------------------
    { nameEn: "Caixa Geral de Depósitos", nameAr: "كايشا جيرال دي ديبوزيتوس", countryId: COUNTRY_IDS.PT },
    { nameEn: "Banco BPI", nameAr: "بانكو بي بي آي", countryId: COUNTRY_IDS.PT },
    { nameEn: "Novo Banco", nameAr: "نوفو بانكو", countryId: COUNTRY_IDS.PT },
    { nameEn: "Millennium BCP", nameAr: "ميلينيوم بي سي بي", countryId: COUNTRY_IDS.PT },

    // -------------------------
    // Switzerland
    // -------------------------
    { nameEn: "UBS", nameAr: "يو بي إس", countryId: COUNTRY_IDS.CH },
    { nameEn: "Credit Suisse", nameAr: "كريدي سويس", countryId: COUNTRY_IDS.CH },
    { nameEn: "Julius Baer", nameAr: "جوليوس باير", countryId: COUNTRY_IDS.CH },
    { nameEn: "Zürcher Kantonalbank", nameAr: "زيورخر كانتونالبنك", countryId: COUNTRY_IDS.CH },
    { nameEn: "Raiffeisen Switzerland", nameAr: "رايفايزن سويسرا", countryId: COUNTRY_IDS.CH },

    // -------------------------
    // Austria
    // -------------------------
    { nameEn: "Erste Group Bank", nameAr: "إرسته غروب بنك", countryId: COUNTRY_IDS.AT },
    { nameEn: "Raiffeisen Bank International", nameAr: "رايفايزن بنك الدولي", countryId: COUNTRY_IDS.AT },
    { nameEn: "Bank Austria", nameAr: "بنك النمسا", countryId: COUNTRY_IDS.AT },
    { nameEn: "BAWAG", nameAr: "باواغ", countryId: COUNTRY_IDS.AT },

    // -------------------------
    // Belgium
    // -------------------------
    { nameEn: "KBC Bank", nameAr: "كي بي سي بنك", countryId: COUNTRY_IDS.BE },
    { nameEn: "BNP Paribas Fortis", nameAr: "بي إن بي باريباس فورتيس", countryId: COUNTRY_IDS.BE },
    { nameEn: "Belfius", nameAr: "بلفيوس", countryId: COUNTRY_IDS.BE },
    { nameEn: "ING Belgium", nameAr: "آي إن جي بلجيكا", countryId: COUNTRY_IDS.BE },

    // -------------------------
    // Ireland
    // -------------------------
    { nameEn: "Bank of Ireland", nameAr: "بنك أيرلندا", countryId: COUNTRY_IDS.IE },
    { nameEn: "AIB Bank", nameAr: "إيه آي بي بنك", countryId: COUNTRY_IDS.IE },
    { nameEn: "Permanent TSB", nameAr: "بيرمننت تي إس بي", countryId: COUNTRY_IDS.IE },
    { nameEn: "Ulster Bank", nameAr: "أولستر بنك", countryId: COUNTRY_IDS.IE },

    // -------------------------
    // Czech Republic
    // -------------------------
    { nameEn: "Česká spořitelna", nameAr: "تشيسكا سبوريتيلنا", countryId: COUNTRY_IDS.CZ },
    { nameEn: "ČSOB", nameAr: "تشيسوب", countryId: COUNTRY_IDS.CZ },
    { nameEn: "Komerční banka", nameAr: "كوميرتشني بانكا", countryId: COUNTRY_IDS.CZ },
    { nameEn: "UniCredit Bank Czech Republic", nameAr: "يونيكريديت بنك التشيك", countryId: COUNTRY_IDS.CZ },

    // -------------------------
    // Hungary
    // -------------------------
    { nameEn: "OTP Bank", nameAr: "أو تي بي بنك", countryId: COUNTRY_IDS.HU },
    { nameEn: "K&H Bank", nameAr: "كي آند إتش بنك", countryId: COUNTRY_IDS.HU },
    { nameEn: "Erste Bank Hungary", nameAr: "إرسته بنك المجر", countryId: COUNTRY_IDS.HU },
    { nameEn: "CIB Bank", nameAr: "سي آي بي بنك", countryId: COUNTRY_IDS.HU },

    // -------------------------
    // Romania
    // -------------------------
    { nameEn: "Banca Transilvania", nameAr: "بانكا ترانسيلفانيا", countryId: COUNTRY_IDS.RO },
    { nameEn: "BCR", nameAr: "بي سي آر", countryId: COUNTRY_IDS.RO },
    { nameEn: "BRD - Groupe Société Générale", nameAr: "بي آر دي", countryId: COUNTRY_IDS.RO },
    { nameEn: "ING Bank Romania", nameAr: "آي إن جي بنك رومانيا", countryId: COUNTRY_IDS.RO },

    // -------------------------
    // Bulgaria
    // -------------------------
    { nameEn: "UniCredit Bulbank", nameAr: "يونيكريديت بولبنك", countryId: COUNTRY_IDS.BG },
    { nameEn: "DSK Bank", nameAr: "دي إس كيه بنك", countryId: COUNTRY_IDS.BG },
    { nameEn: "United Bulgarian Bank", nameAr: "البنك البلغاري المتحد", countryId: COUNTRY_IDS.BG },
    { nameEn: "First Investment Bank", nameAr: "بنك الاستثمار الأول", countryId: COUNTRY_IDS.BG },

    // -------------------------
    // Croatia
    // -------------------------
    { nameEn: "Zagrebačka banka", nameAr: "زغربتشكا بانكا", countryId: COUNTRY_IDS.HR },
    { nameEn: "Privredna banka Zagreb", nameAr: "بريفريدنا بانكا زغرب", countryId: COUNTRY_IDS.HR },
    { nameEn: "Erste Bank Croatia", nameAr: "إرسته بنك كرواتيا", countryId: COUNTRY_IDS.HR },
    { nameEn: "OTP banka Hrvatska", nameAr: "أو تي بي بانكا كرواتيا", countryId: COUNTRY_IDS.HR },

    // -------------------------
    // Serbia
    // -------------------------
    { nameEn: "Banca Intesa Serbia", nameAr: "بانكا إنتيسا صربيا", countryId: COUNTRY_IDS.RS },
    { nameEn: "UniCredit Bank Serbia", nameAr: "يونيكريديت بنك صربيا", countryId: COUNTRY_IDS.RS },
    { nameEn: "Komercijalna Banka", nameAr: "كوميرسيالنا بانكا", countryId: COUNTRY_IDS.RS },
    { nameEn: "Raiffeisen Bank Serbia", nameAr: "رايفايزن بنك صربيا", countryId: COUNTRY_IDS.RS },

    // -------------------------
    // Ukraine
    // -------------------------
    { nameEn: "PrivatBank", nameAr: "بريفات بنك", countryId: COUNTRY_IDS.UA },
    { nameEn: "Oschadbank", nameAr: "أوشاد بنك", countryId: COUNTRY_IDS.UA },
    { nameEn: "Ukreximbank", nameAr: "أوكريكسيم بنك", countryId: COUNTRY_IDS.UA },
    { nameEn: "Raiffeisen Bank Aval", nameAr: "رايفايزن بنك أفال", countryId: COUNTRY_IDS.UA },
    { nameEn: "PUMB", nameAr: "بي يو إم بي", countryId: COUNTRY_IDS.UA },

    // -------------------------
    // United States
    // -------------------------
    { nameEn: "JPMorgan Chase", nameAr: "جي بي مورغان تشيس", countryId: COUNTRY_IDS.US },
    { nameEn: "Bank of America", nameAr: "بنك أوف أمريكا", countryId: COUNTRY_IDS.US },
    { nameEn: "Wells Fargo", nameAr: "ويلز فارغو", countryId: COUNTRY_IDS.US },
    { nameEn: "Citibank", nameAr: "سيتي بنك", countryId: COUNTRY_IDS.US },
    { nameEn: "Goldman Sachs", nameAr: "غولدمان ساكس", countryId: COUNTRY_IDS.US },
    { nameEn: "Morgan Stanley", nameAr: "مورغان ستانلي", countryId: COUNTRY_IDS.US },
    { nameEn: "US Bank", nameAr: "يو إس بنك", countryId: COUNTRY_IDS.US },
    { nameEn: "Capital One", nameAr: "كابيتال وان", countryId: COUNTRY_IDS.US },
    { nameEn: "PNC Bank", nameAr: "بي إن سي بنك", countryId: COUNTRY_IDS.US },
    { nameEn: "Charles Schwab", nameAr: "تشارلز شواب", countryId: COUNTRY_IDS.US },

    // -------------------------
    // Canada
    // -------------------------
    { nameEn: "Royal Bank of Canada (RBC)", nameAr: "البنك الملكي الكندي", countryId: COUNTRY_IDS.CA },
    { nameEn: "Toronto-Dominion Bank (TD)", nameAr: "بنك تورنتو دومينيون", countryId: COUNTRY_IDS.CA },
    { nameEn: "Bank of Nova Scotia (Scotiabank)", nameAr: "بنك نوفا سكوشا", countryId: COUNTRY_IDS.CA },
    { nameEn: "Bank of Montreal (BMO)", nameAr: "بنك مونتريال", countryId: COUNTRY_IDS.CA },
    { nameEn: "Canadian Imperial Bank of Commerce (CIBC)", nameAr: "البنك الكندي الإمبراطوري للتجارة", countryId: COUNTRY_IDS.CA },
    { nameEn: "National Bank of Canada", nameAr: "البنك الوطني الكندي", countryId: COUNTRY_IDS.CA },
];

async function main() {
    await client.connect();

    console.log(`Seeding ${banks.length} banks...`);

    for (const b of banks) {
        await db.insert(bank).values({
            id: nanoid(),
            ...b,
        });
    }

    console.log("Banks seeded successfully!");
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

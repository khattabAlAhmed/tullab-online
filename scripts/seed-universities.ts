import { drizzle } from "drizzle-orm/node-postgres";
import { university } from "../src/lib/db/schema/academy-schema";
import { nanoid } from "nanoid";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client);

// Country IDs from the database (country.json export) - Arabic Countries Only
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
};

const universities = [
    // -------------------------
    // Saudi Arabia
    // -------------------------
    { nameEn: "King Saud University", nameAr: "جامعة الملك سعود", countryId: COUNTRY_IDS.SA },
    { nameEn: "King Abdulaziz University", nameAr: "جامعة الملك عبدالعزيز", countryId: COUNTRY_IDS.SA },
    { nameEn: "King Fahd University of Petroleum and Minerals", nameAr: "جامعة الملك فهد للبترول والمعادن", countryId: COUNTRY_IDS.SA },
    { nameEn: "Umm Al-Qura University", nameAr: "جامعة أم القرى", countryId: COUNTRY_IDS.SA },
    { nameEn: "Islamic University of Madinah", nameAr: "الجامعة الإسلامية بالمدينة المنورة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Imam Muhammad ibn Saud Islamic University", nameAr: "جامعة الإمام محمد بن سعود الإسلامية", countryId: COUNTRY_IDS.SA },
    { nameEn: "King Khalid University", nameAr: "جامعة الملك خالد", countryId: COUNTRY_IDS.SA },
    { nameEn: "Taibah University", nameAr: "جامعة طيبة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Qassim University", nameAr: "جامعة القصيم", countryId: COUNTRY_IDS.SA },
    { nameEn: "Taif University", nameAr: "جامعة الطائف", countryId: COUNTRY_IDS.SA },
    { nameEn: "Jazan University", nameAr: "جامعة جازان", countryId: COUNTRY_IDS.SA },
    { nameEn: "Najran University", nameAr: "جامعة نجران", countryId: COUNTRY_IDS.SA },
    { nameEn: "Northern Border University", nameAr: "جامعة الحدود الشمالية", countryId: COUNTRY_IDS.SA },
    { nameEn: "Tabuk University", nameAr: "جامعة تبوك", countryId: COUNTRY_IDS.SA },
    { nameEn: "Hail University", nameAr: "جامعة حائل", countryId: COUNTRY_IDS.SA },
    { nameEn: "Al-Baha University", nameAr: "جامعة الباحة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Jouf University", nameAr: "جامعة الجوف", countryId: COUNTRY_IDS.SA },
    { nameEn: "Prince Sultan University", nameAr: "جامعة الأمير سلطان", countryId: COUNTRY_IDS.SA },
    { nameEn: "Alfaisal University", nameAr: "جامعة الفيصل", countryId: COUNTRY_IDS.SA },
    { nameEn: "Effat University", nameAr: "جامعة عفت", countryId: COUNTRY_IDS.SA },
    { nameEn: "Dar Al-Hekma University", nameAr: "جامعة دار الحكمة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Prince Mohammad Bin Fahd University", nameAr: "جامعة الأمير محمد بن فهد", countryId: COUNTRY_IDS.SA },
    { nameEn: "King Abdullah University of Science and Technology", nameAr: "جامعة الملك عبدالله للعلوم والتقنية", countryId: COUNTRY_IDS.SA },
    { nameEn: "Princess Nourah bint Abdulrahman University", nameAr: "جامعة الأميرة نورة بنت عبدالرحمن", countryId: COUNTRY_IDS.SA },
    { nameEn: "Imam Abdulrahman Bin Faisal University", nameAr: "جامعة الإمام عبدالرحمن بن فيصل", countryId: COUNTRY_IDS.SA },
    { nameEn: "Majmaah University", nameAr: "جامعة المجمعة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Shaqra University", nameAr: "جامعة شقراء", countryId: COUNTRY_IDS.SA },
    { nameEn: "Prince Sattam bin Abdulaziz University", nameAr: "جامعة الأمير سطام بن عبدالعزيز", countryId: COUNTRY_IDS.SA },
    { nameEn: "Saudi Electronic University", nameAr: "الجامعة السعودية الإلكترونية", countryId: COUNTRY_IDS.SA },
    { nameEn: "Bisha University", nameAr: "جامعة بيشة", countryId: COUNTRY_IDS.SA },
    { nameEn: "Jeddah University", nameAr: "جامعة جدة", countryId: COUNTRY_IDS.SA },

    // -------------------------
    // United Arab Emirates
    // -------------------------
    { nameEn: "United Arab Emirates University", nameAr: "جامعة الإمارات العربية المتحدة", countryId: COUNTRY_IDS.AE },
    { nameEn: "Khalifa University", nameAr: "جامعة خليفة", countryId: COUNTRY_IDS.AE },
    { nameEn: "Zayed University", nameAr: "جامعة زايد", countryId: COUNTRY_IDS.AE },
    { nameEn: "American University of Sharjah", nameAr: "الجامعة الأمريكية في الشارقة", countryId: COUNTRY_IDS.AE },
    { nameEn: "University of Sharjah", nameAr: "جامعة الشارقة", countryId: COUNTRY_IDS.AE },
    { nameEn: "American University in Dubai", nameAr: "الجامعة الأمريكية في دبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "New York University Abu Dhabi", nameAr: "جامعة نيويورك أبوظبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Ajman University", nameAr: "جامعة عجمان", countryId: COUNTRY_IDS.AE },
    { nameEn: "Higher Colleges of Technology", nameAr: "كليات التقنية العليا", countryId: COUNTRY_IDS.AE },
    { nameEn: "Abu Dhabi University", nameAr: "جامعة أبوظبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Al Ain University", nameAr: "جامعة العين", countryId: COUNTRY_IDS.AE },
    { nameEn: "University of Dubai", nameAr: "جامعة دبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Sorbonne University Abu Dhabi", nameAr: "جامعة السوربون أبوظبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Heriot-Watt University Dubai", nameAr: "جامعة هيريوت وات دبي", countryId: COUNTRY_IDS.AE },
    { nameEn: "Canadian University Dubai", nameAr: "الجامعة الكندية في دبي", countryId: COUNTRY_IDS.AE },

    // -------------------------
    // Qatar
    // -------------------------
    { nameEn: "Qatar University", nameAr: "جامعة قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Hamad Bin Khalifa University", nameAr: "جامعة حمد بن خليفة", countryId: COUNTRY_IDS.QA },
    { nameEn: "Qatar Foundation", nameAr: "مؤسسة قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Weill Cornell Medicine-Qatar", nameAr: "طب وايل كورنيل قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Georgetown University in Qatar", nameAr: "جامعة جورجتاون في قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Northwestern University in Qatar", nameAr: "جامعة نورث وسترن في قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Texas A&M University at Qatar", nameAr: "جامعة تكساس إيه آند إم في قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Carnegie Mellon University in Qatar", nameAr: "جامعة كارنيجي ميلون في قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Virginia Commonwealth University in Qatar", nameAr: "جامعة فيرجينيا كومنولث في قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "College of the North Atlantic Qatar", nameAr: "كلية شمال الأطلنطي قطر", countryId: COUNTRY_IDS.QA },
    { nameEn: "Lusail University", nameAr: "جامعة لوسيل", countryId: COUNTRY_IDS.QA },

    // -------------------------
    // Kuwait
    // -------------------------
    { nameEn: "Kuwait University", nameAr: "جامعة الكويت", countryId: COUNTRY_IDS.KW },
    { nameEn: "American University of Kuwait", nameAr: "الجامعة الأمريكية في الكويت", countryId: COUNTRY_IDS.KW },
    { nameEn: "Gulf University for Science and Technology", nameAr: "جامعة الخليج للعلوم والتكنولوجيا", countryId: COUNTRY_IDS.KW },
    { nameEn: "Arab Open University Kuwait", nameAr: "الجامعة العربية المفتوحة الكويت", countryId: COUNTRY_IDS.KW },
    { nameEn: "Australian College of Kuwait", nameAr: "الكلية الأسترالية في الكويت", countryId: COUNTRY_IDS.KW },
    { nameEn: "Kuwait College of Science and Technology", nameAr: "كلية الكويت للعلوم والتكنولوجيا", countryId: COUNTRY_IDS.KW },
    { nameEn: "Box Hill College Kuwait", nameAr: "كلية بوكس هيل الكويت", countryId: COUNTRY_IDS.KW },
    { nameEn: "American International University Kuwait", nameAr: "الجامعة الدولية الأمريكية الكويت", countryId: COUNTRY_IDS.KW },

    // -------------------------
    // Bahrain
    // -------------------------
    { nameEn: "University of Bahrain", nameAr: "جامعة البحرين", countryId: COUNTRY_IDS.BH },
    { nameEn: "Arabian Gulf University", nameAr: "جامعة الخليج العربي", countryId: COUNTRY_IDS.BH },
    { nameEn: "Ahlia University", nameAr: "جامعة الأهلية", countryId: COUNTRY_IDS.BH },
    { nameEn: "Royal University for Women", nameAr: "الجامعة الملكية للبنات", countryId: COUNTRY_IDS.BH },
    { nameEn: "AMA International University", nameAr: "جامعة أما الدولية", countryId: COUNTRY_IDS.BH },
    { nameEn: "Bahrain Polytechnic", nameAr: "بوليتكنك البحرين", countryId: COUNTRY_IDS.BH },
    { nameEn: "Kingdom University", nameAr: "جامعة المملكة", countryId: COUNTRY_IDS.BH },
    { nameEn: "Applied Science University", nameAr: "جامعة العلوم التطبيقية", countryId: COUNTRY_IDS.BH },

    // -------------------------
    // Oman
    // -------------------------
    { nameEn: "Sultan Qaboos University", nameAr: "جامعة السلطان قابوس", countryId: COUNTRY_IDS.OM },
    { nameEn: "University of Nizwa", nameAr: "جامعة نزوى", countryId: COUNTRY_IDS.OM },
    { nameEn: "Sohar University", nameAr: "جامعة صحار", countryId: COUNTRY_IDS.OM },
    { nameEn: "Dhofar University", nameAr: "جامعة ظفار", countryId: COUNTRY_IDS.OM },
    { nameEn: "German University of Technology in Oman", nameAr: "الجامعة الألمانية للتكنولوجيا في عُمان", countryId: COUNTRY_IDS.OM },
    { nameEn: "Arab Open University Oman", nameAr: "الجامعة العربية المفتوحة عُمان", countryId: COUNTRY_IDS.OM },
    { nameEn: "Muscat University", nameAr: "جامعة مسقط", countryId: COUNTRY_IDS.OM },
    { nameEn: "Middle East College", nameAr: "كلية الشرق الأوسط", countryId: COUNTRY_IDS.OM },
    { nameEn: "Buraimi University College", nameAr: "كلية البريمي الجامعية", countryId: COUNTRY_IDS.OM },
    { nameEn: "Majan University College", nameAr: "كلية مجان الجامعية", countryId: COUNTRY_IDS.OM },

    // -------------------------
    // Yemen
    // -------------------------
    { nameEn: "Sana'a University", nameAr: "جامعة صنعاء", countryId: COUNTRY_IDS.YE },
    { nameEn: "Aden University", nameAr: "جامعة عدن", countryId: COUNTRY_IDS.YE },
    { nameEn: "Taiz University", nameAr: "جامعة تعز", countryId: COUNTRY_IDS.YE },
    { nameEn: "Hadhramout University", nameAr: "جامعة حضرموت", countryId: COUNTRY_IDS.YE },
    { nameEn: "Ibb University", nameAr: "جامعة إب", countryId: COUNTRY_IDS.YE },
    { nameEn: "Hodeidah University", nameAr: "جامعة الحديدة", countryId: COUNTRY_IDS.YE },
    { nameEn: "Dhamar University", nameAr: "جامعة ذمار", countryId: COUNTRY_IDS.YE },
    { nameEn: "Amran University", nameAr: "جامعة عمران", countryId: COUNTRY_IDS.YE },
    { nameEn: "Al-Baydha University", nameAr: "جامعة البيضاء", countryId: COUNTRY_IDS.YE },
    { nameEn: "Lahj University", nameAr: "جامعة لحج", countryId: COUNTRY_IDS.YE },
    { nameEn: "Hajjah University", nameAr: "جامعة حجة", countryId: COUNTRY_IDS.YE },
    { nameEn: "Al-Sa'eed University", nameAr: "جامعة السعيد", countryId: COUNTRY_IDS.YE },
    { nameEn: "Yemeni-Jordanian University", nameAr: "الجامعة اليمنية الأردنية", countryId: COUNTRY_IDS.YE },
    { nameEn: "University of Science and Technology Yemen", nameAr: "جامعة العلوم والتكنولوجيا اليمن", countryId: COUNTRY_IDS.YE },
    { nameEn: "Sabaa University", nameAr: "جامعة سبأ", countryId: COUNTRY_IDS.YE },
    { nameEn: "Modern Science University", nameAr: "جامعة العلوم الحديثة", countryId: COUNTRY_IDS.YE },
    { nameEn: "Queen Arwa University", nameAr: "جامعة الملكة أروى", countryId: COUNTRY_IDS.YE },
    { nameEn: "Lebanese International University Yemen", nameAr: "الجامعة اللبنانية الدولية اليمن", countryId: COUNTRY_IDS.YE },

    // -------------------------
    // Jordan
    // -------------------------
    { nameEn: "University of Jordan", nameAr: "الجامعة الأردنية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Yarmouk University", nameAr: "جامعة اليرموك", countryId: COUNTRY_IDS.JO },
    { nameEn: "Jordan University of Science and Technology", nameAr: "جامعة العلوم والتكنولوجيا الأردنية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Mutah University", nameAr: "جامعة مؤتة", countryId: COUNTRY_IDS.JO },
    { nameEn: "Hashemite University", nameAr: "الجامعة الهاشمية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Al al-Bayt University", nameAr: "جامعة آل البيت", countryId: COUNTRY_IDS.JO },
    { nameEn: "Al-Balqa Applied University", nameAr: "جامعة البلقاء التطبيقية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Tafila Technical University", nameAr: "جامعة الطفيلة التقنية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Al-Hussein Bin Talal University", nameAr: "جامعة الحسين بن طلال", countryId: COUNTRY_IDS.JO },
    { nameEn: "German Jordanian University", nameAr: "الجامعة الألمانية الأردنية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Amman Arab University", nameAr: "جامعة عمان العربية", countryId: COUNTRY_IDS.JO },
    { nameEn: "Applied Science Private University", nameAr: "جامعة العلوم التطبيقية الخاصة", countryId: COUNTRY_IDS.JO },
    { nameEn: "Princess Sumaya University for Technology", nameAr: "جامعة الأميرة سمية للتكنولوجيا", countryId: COUNTRY_IDS.JO },
    { nameEn: "Philadelphia University", nameAr: "جامعة فيلادلفيا", countryId: COUNTRY_IDS.JO },
    { nameEn: "Zarqa University", nameAr: "جامعة الزرقاء", countryId: COUNTRY_IDS.JO },
    { nameEn: "Middle East University Jordan", nameAr: "جامعة الشرق الأوسط الأردن", countryId: COUNTRY_IDS.JO },
    { nameEn: "Petra University", nameAr: "جامعة البتراء", countryId: COUNTRY_IDS.JO },
    { nameEn: "American University in Madaba", nameAr: "الجامعة الأمريكية في مادبا", countryId: COUNTRY_IDS.JO },

    // -------------------------
    // Lebanon
    // -------------------------
    { nameEn: "American University of Beirut", nameAr: "الجامعة الأمريكية في بيروت", countryId: COUNTRY_IDS.LB },
    { nameEn: "Lebanese American University", nameAr: "الجامعة اللبنانية الأمريكية", countryId: COUNTRY_IDS.LB },
    { nameEn: "Lebanese University", nameAr: "الجامعة اللبنانية", countryId: COUNTRY_IDS.LB },
    { nameEn: "Saint Joseph University of Beirut", nameAr: "جامعة القديس يوسف في بيروت", countryId: COUNTRY_IDS.LB },
    { nameEn: "University of Balamand", nameAr: "جامعة البلمند", countryId: COUNTRY_IDS.LB },
    { nameEn: "Holy Spirit University of Kaslik", nameAr: "جامعة الروح القدس الكسليك", countryId: COUNTRY_IDS.LB },
    { nameEn: "Notre Dame University-Louaize", nameAr: "جامعة سيدة اللويزة", countryId: COUNTRY_IDS.LB },
    { nameEn: "Beirut Arab University", nameAr: "جامعة بيروت العربية", countryId: COUNTRY_IDS.LB },
    { nameEn: "Antonine University", nameAr: "الجامعة الأنطونية", countryId: COUNTRY_IDS.LB },
    { nameEn: "Haigazian University", nameAr: "جامعة هايكازيان", countryId: COUNTRY_IDS.LB },
    { nameEn: "Lebanese International University", nameAr: "الجامعة اللبنانية الدولية", countryId: COUNTRY_IDS.LB },
    { nameEn: "Arab Open University Lebanon", nameAr: "الجامعة العربية المفتوحة لبنان", countryId: COUNTRY_IDS.LB },

    // -------------------------
    // Syria
    // -------------------------
    { nameEn: "Damascus University", nameAr: "جامعة دمشق", countryId: COUNTRY_IDS.SY },
    { nameEn: "Aleppo University", nameAr: "جامعة حلب", countryId: COUNTRY_IDS.SY },
    { nameEn: "Tishreen University", nameAr: "جامعة تشرين", countryId: COUNTRY_IDS.SY },
    { nameEn: "Al-Baath University", nameAr: "جامعة البعث", countryId: COUNTRY_IDS.SY },
    { nameEn: "Al-Furat University", nameAr: "جامعة الفرات", countryId: COUNTRY_IDS.SY },
    { nameEn: "Syrian Virtual University", nameAr: "الجامعة الافتراضية السورية", countryId: COUNTRY_IDS.SY },
    { nameEn: "International University for Science and Technology", nameAr: "الجامعة الدولية للعلوم والتكنولوجيا", countryId: COUNTRY_IDS.SY },
    { nameEn: "Arab International University", nameAr: "الجامعة العربية الدولية", countryId: COUNTRY_IDS.SY },
    { nameEn: "University of Kalamoon", nameAr: "جامعة القلمون", countryId: COUNTRY_IDS.SY },
    { nameEn: "Wadi International University", nameAr: "جامعة الوادي الدولية", countryId: COUNTRY_IDS.SY },

    // -------------------------
    // Iraq
    // -------------------------
    { nameEn: "University of Baghdad", nameAr: "جامعة بغداد", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Mosul", nameAr: "جامعة الموصل", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Basrah", nameAr: "جامعة البصرة", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Al-Nahrain University", nameAr: "جامعة النهرين", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Technology Iraq", nameAr: "الجامعة التكنولوجية العراق", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Kufa", nameAr: "جامعة الكوفة", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Babylon", nameAr: "جامعة بابل", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Al-Mustansiriya University", nameAr: "الجامعة المستنصرية", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Tikrit", nameAr: "جامعة تكريت", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Anbar", nameAr: "جامعة الأنبار", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Diyala", nameAr: "جامعة ديالى", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Karbala", nameAr: "جامعة كربلاء", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Sulaimani University", nameAr: "جامعة السليمانية", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Salahaddin University-Erbil", nameAr: "جامعة صلاح الدين أربيل", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Duhok", nameAr: "جامعة دهوك", countryId: COUNTRY_IDS.IQ },
    { nameEn: "American University of Iraq Sulaimani", nameAr: "الجامعة الأمريكية في العراق السليمانية", countryId: COUNTRY_IDS.IQ },
    { nameEn: "Cihan University", nameAr: "جامعة جيهان", countryId: COUNTRY_IDS.IQ },
    { nameEn: "University of Kirkuk", nameAr: "جامعة كركوك", countryId: COUNTRY_IDS.IQ },

    // -------------------------
    // Egypt
    // -------------------------
    { nameEn: "Cairo University", nameAr: "جامعة القاهرة", countryId: COUNTRY_IDS.EG },
    { nameEn: "Alexandria University", nameAr: "جامعة الإسكندرية", countryId: COUNTRY_IDS.EG },
    { nameEn: "Ain Shams University", nameAr: "جامعة عين شمس", countryId: COUNTRY_IDS.EG },
    { nameEn: "Al-Azhar University", nameAr: "جامعة الأزهر", countryId: COUNTRY_IDS.EG },
    { nameEn: "Helwan University", nameAr: "جامعة حلوان", countryId: COUNTRY_IDS.EG },
    { nameEn: "Mansoura University", nameAr: "جامعة المنصورة", countryId: COUNTRY_IDS.EG },
    { nameEn: "Assiut University", nameAr: "جامعة أسيوط", countryId: COUNTRY_IDS.EG },
    { nameEn: "Zagazig University", nameAr: "جامعة الزقازيق", countryId: COUNTRY_IDS.EG },
    { nameEn: "Tanta University", nameAr: "جامعة طنطا", countryId: COUNTRY_IDS.EG },
    { nameEn: "Benha University", nameAr: "جامعة بنها", countryId: COUNTRY_IDS.EG },
    { nameEn: "Suez Canal University", nameAr: "جامعة قناة السويس", countryId: COUNTRY_IDS.EG },
    { nameEn: "Fayoum University", nameAr: "جامعة الفيوم", countryId: COUNTRY_IDS.EG },
    { nameEn: "Menoufia University", nameAr: "جامعة المنوفية", countryId: COUNTRY_IDS.EG },
    { nameEn: "Kafr El Sheikh University", nameAr: "جامعة كفر الشيخ", countryId: COUNTRY_IDS.EG },
    { nameEn: "Beni-Suef University", nameAr: "جامعة بني سويف", countryId: COUNTRY_IDS.EG },
    { nameEn: "South Valley University", nameAr: "جامعة جنوب الوادي", countryId: COUNTRY_IDS.EG },
    { nameEn: "Sohag University", nameAr: "جامعة سوهاج", countryId: COUNTRY_IDS.EG },
    { nameEn: "Minia University", nameAr: "جامعة المنيا", countryId: COUNTRY_IDS.EG },
    { nameEn: "Port Said University", nameAr: "جامعة بورسعيد", countryId: COUNTRY_IDS.EG },
    { nameEn: "Damanhour University", nameAr: "جامعة دمنهور", countryId: COUNTRY_IDS.EG },
    { nameEn: "American University in Cairo", nameAr: "الجامعة الأمريكية بالقاهرة", countryId: COUNTRY_IDS.EG },
    { nameEn: "German University in Cairo", nameAr: "الجامعة الألمانية بالقاهرة", countryId: COUNTRY_IDS.EG },
    { nameEn: "British University in Egypt", nameAr: "الجامعة البريطانية في مصر", countryId: COUNTRY_IDS.EG },
    { nameEn: "Nile University", nameAr: "جامعة النيل", countryId: COUNTRY_IDS.EG },
    { nameEn: "Future University in Egypt", nameAr: "جامعة المستقبل في مصر", countryId: COUNTRY_IDS.EG },
    { nameEn: "Arab Academy for Science and Technology", nameAr: "الأكاديمية العربية للعلوم والتكنولوجيا", countryId: COUNTRY_IDS.EG },
    { nameEn: "October 6 University", nameAr: "جامعة 6 أكتوبر", countryId: COUNTRY_IDS.EG },
    { nameEn: "Misr International University", nameAr: "جامعة مصر الدولية", countryId: COUNTRY_IDS.EG },
    { nameEn: "Modern Sciences and Arts University", nameAr: "جامعة أكتوبر للعلوم الحديثة والآداب", countryId: COUNTRY_IDS.EG },
    { nameEn: "Pharos University in Alexandria", nameAr: "جامعة فاروس بالإسكندرية", countryId: COUNTRY_IDS.EG },
    { nameEn: "Zewail City of Science and Technology", nameAr: "مدينة زويل للعلوم والتكنولوجيا", countryId: COUNTRY_IDS.EG },
    { nameEn: "Egyptian Japanese University of Science and Technology", nameAr: "الجامعة المصرية اليابانية للعلوم والتكنولوجيا", countryId: COUNTRY_IDS.EG },
];

async function main() {
    await client.connect();

    console.log(`Seeding ${universities.length} universities...`);

    for (const u of universities) {
        await db.insert(university).values({
            id: nanoid(),
            ...u,
        });
    }

    console.log("Universities seeded successfully!");
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

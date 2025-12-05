import { drizzle } from "drizzle-orm/node-postgres";
import { country } from "../src/lib/db/schema/academy-schema";
import { nanoid } from "nanoid";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client);

const countries = [
  // -------------------------
  // Middle East
  // -------------------------
  { nameEn: "Saudi Arabia", nameAr: "السعودية", code: "SA", timezone: "Asia/Riyadh" },
  { nameEn: "United Arab Emirates", nameAr: "الإمارات", code: "AE", timezone: "Asia/Dubai" },
  { nameEn: "Qatar", nameAr: "قطر", code: "QA", timezone: "Asia/Qatar" },
  { nameEn: "Kuwait", nameAr: "الكويت", code: "KW", timezone: "Asia/Kuwait" },
  { nameEn: "Bahrain", nameAr: "البحرين", code: "BH", timezone: "Asia/Bahrain" },
  { nameEn: "Oman", nameAr: "عُمان", code: "OM", timezone: "Asia/Muscat" },
  { nameEn: "Yemen", nameAr: "اليمن", code: "YE", timezone: "Asia/Aden" },
  { nameEn: "Jordan", nameAr: "الأردن", code: "JO", timezone: "Asia/Amman" },
  { nameEn: "Lebanon", nameAr: "لبنان", code: "LB", timezone: "Asia/Beirut" },
  { nameEn: "Syria", nameAr: "سوريا", code: "SY", timezone: "Asia/Damascus" },
  { nameEn: "Iraq", nameAr: "العراق", code: "IQ", timezone: "Asia/Baghdad" },
  { nameEn: "Egypt", nameAr: "مصر", code: "EG", timezone: "Africa/Cairo" },
  { nameEn: "Turkey", nameAr: "تركيا", code: "TR", timezone: "Europe/Istanbul" },
  { nameEn: "Iran", nameAr: "إيران", code: "IR", timezone: "Asia/Tehran" },

  // -------------------------
  // Europe
  // -------------------------
  { nameEn: "United Kingdom", nameAr: "المملكة المتحدة", code: "GB", timezone: "Europe/London" },
  { nameEn: "France", nameAr: "فرنسا", code: "FR", timezone: "Europe/Paris" },
  { nameEn: "Germany", nameAr: "ألمانيا", code: "DE", timezone: "Europe/Berlin" },
  { nameEn: "Italy", nameAr: "إيطاليا", code: "IT", timezone: "Europe/Rome" },
  { nameEn: "Spain", nameAr: "إسبانيا", code: "ES", timezone: "Europe/Madrid" },
  { nameEn: "Netherlands", nameAr: "هولندا", code: "NL", timezone: "Europe/Amsterdam" },
  { nameEn: "Sweden", nameAr: "السويد", code: "SE", timezone: "Europe/Stockholm" },
  { nameEn: "Norway", nameAr: "النرويج", code: "NO", timezone: "Europe/Oslo" },
  { nameEn: "Denmark", nameAr: "الدنمارك", code: "DK", timezone: "Europe/Copenhagen" },
  { nameEn: "Finland", nameAr: "فنلندا", code: "FI", timezone: "Europe/Helsinki" },
  { nameEn: "Poland", nameAr: "بولندا", code: "PL", timezone: "Europe/Warsaw" },
  { nameEn: "Greece", nameAr: "اليونان", code: "GR", timezone: "Europe/Athens" },
  { nameEn: "Portugal", nameAr: "البرتغال", code: "PT", timezone: "Europe/Lisbon" },
  { nameEn: "Switzerland", nameAr: "سويسرا", code: "CH", timezone: "Europe/Zurich" },
  { nameEn: "Austria", nameAr: "النمسا", code: "AT", timezone: "Europe/Vienna" },
  { nameEn: "Belgium", nameAr: "بلجيكا", code: "BE", timezone: "Europe/Brussels" },
  { nameEn: "Ireland", nameAr: "أيرلندا", code: "IE", timezone: "Europe/Dublin" },
  { nameEn: "Czech Republic", nameAr: "التشيك", code: "CZ", timezone: "Europe/Prague" },
  { nameEn: "Hungary", nameAr: "المجر", code: "HU", timezone: "Europe/Budapest" },
  { nameEn: "Romania", nameAr: "رومانيا", code: "RO", timezone: "Europe/Bucharest" },
  { nameEn: "Bulgaria", nameAr: "بلغاريا", code: "BG", timezone: "Europe/Sofia" },
  { nameEn: "Croatia", nameAr: "كرواتيا", code: "HR", timezone: "Europe/Zagreb" },
  { nameEn: "Serbia", nameAr: "صربيا", code: "RS", timezone: "Europe/Belgrade" },
  { nameEn: "Ukraine", nameAr: "أوكرانيا", code: "UA", timezone: "Europe/Kyiv" },

  // -------------------------
  // North America
  // -------------------------
  { nameEn: "United States", nameAr: "الولايات المتحدة", code: "US", timezone: "America/New_York" },
  { nameEn: "Canada", nameAr: "كندا", code: "CA", timezone: "America/Toronto" },
];

async function main() {
  await client.connect();

  for (const c of countries) {
    await db.insert(country).values({
      id: nanoid(),
      ...c,
    });
  }

  console.log("Countries seeded successfully!");
  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { drizzle } from "drizzle-orm/node-postgres";
import { paymentType } from "../src/lib/db/schema/academy-schema";
import { nanoid } from "nanoid";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client);

// Payment types with percentage representing the upfront payment percentage
const paymentTypes = [
    // -------------------------
    // الدفع الكامل مقدماً - Full Payment Upfront
    // -------------------------
    {
        titleEn: "Full Payment Upfront",
        titleAr: "الدفع الكامل مقدماً",
        percentage: 100
    },

    // -------------------------
    // الدفع الكامل عند التسليم - Full Payment on Delivery
    // -------------------------
    {
        titleEn: "Full Payment on Delivery",
        titleAr: "الدفع الكامل عند التسليم",
        percentage: 0
    },

    // -------------------------
    // الدفع الكامل نهاية الشهر - Full Payment End of Month
    // -------------------------
    {
        titleEn: "Full Payment End of Month",
        titleAr: "الدفع الكامل نهاية الشهر",
        percentage: 0
    },

    // -------------------------
    // نصف مقدماً، نصف عند التسليم - Half Upfront, Half on Delivery
    // -------------------------
    {
        titleEn: "50% Upfront, 50% on Delivery",
        titleAr: "50% مقدماً، 50% عند التسليم",
        percentage: 50
    },

    // -------------------------
    // ثلث مقدماً، ثلثان عند التسليم - One Third Upfront
    // -------------------------
    {
        titleEn: "33% Upfront, 67% on Delivery",
        titleAr: "33% مقدماً، 67% عند التسليم",
        percentage: 33
    },

    // -------------------------
    // ثلثان مقدماً، ثلث عند التسليم - Two Thirds Upfront
    // -------------------------
    {
        titleEn: "67% Upfront, 33% on Delivery",
        titleAr: "67% مقدماً، 33% عند التسليم",
        percentage: 67
    },

    // -------------------------
    // ربع مقدماً - Quarter Upfront
    // -------------------------
    {
        titleEn: "25% Upfront, 75% on Delivery",
        titleAr: "25% مقدماً، 75% عند التسليم",
        percentage: 25
    },

    // -------------------------
    // ثلاثة أرباع مقدماً - Three Quarters Upfront
    // -------------------------
    {
        titleEn: "75% Upfront, 25% on Delivery",
        titleAr: "75% مقدماً، 25% عند التسليم",
        percentage: 75
    },

    // -------------------------
    // الدفع على مراحل - Milestone Payments
    // -------------------------
    {
        titleEn: "Milestone Based (30%, 40%, 30%)",
        titleAr: "دفع على مراحل (30%، 40%، 30%)",
        percentage: 30
    },

    // -------------------------
    // رمزي مقدماً - Token/Deposit Upfront
    // -------------------------
    {
        titleEn: "10% Deposit, 90% on Delivery",
        titleAr: "10% عربون، 90% عند التسليم",
        percentage: 10
    },

    // -------------------------
    // عربون 20% - 20% Deposit
    // -------------------------
    {
        titleEn: "20% Deposit, 80% on Delivery",
        titleAr: "20% عربون، 80% عند التسليم",
        percentage: 20
    },

    // -------------------------
    // دفع أسبوعي - Weekly Payment
    // -------------------------
    {
        titleEn: "Weekly Installments",
        titleAr: "أقساط أسبوعية",
        percentage: 0
    },

    // -------------------------
    // دفع شهري - Monthly Installments
    // -------------------------
    {
        titleEn: "Monthly Installments",
        titleAr: "أقساط شهرية",
        percentage: 0
    },

    // -------------------------
    // الدفع بعد المراجعة - Payment After Review
    // -------------------------
    {
        titleEn: "Payment After Review & Approval",
        titleAr: "الدفع بعد المراجعة والموافقة",
        percentage: 0
    },

    // -------------------------
    // دفع مؤجل - Deferred Payment
    // -------------------------
    {
        titleEn: "Deferred Payment (Pay Later)",
        titleAr: "دفع مؤجل (ادفع لاحقاً)",
        percentage: 0
    },
];

async function main() {
    await client.connect();

    console.log(`Seeding ${paymentTypes.length} payment types...`);

    for (const pt of paymentTypes) {
        await db.insert(paymentType).values({
            id: nanoid(),
            ...pt,
        });
    }

    console.log("Payment types seeded successfully!");
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

import { drizzle } from "drizzle-orm/node-postgres";
import { projectType } from "../src/lib/db/schema/academy-schema";
import { nanoid } from "nanoid";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client);

const projectTypes = [
    // -------------------------
    // الخدمات البرمجية والهندسية
    // Programming & Engineering Services
    // -------------------------
    { typeEn: "Programming Projects", typeAr: "المشاريع البرمجية" },
    { typeEn: "Programming Assignments", typeAr: "الواجبات البرمجية" },
    { typeEn: "Engineering Assignments", typeAr: "التكاليف الهندسية" },
    { typeEn: "Technical Drawings & Blueprints", typeAr: "المخططات والرسومات الهندسية" },
    { typeEn: "Graduation Projects", typeAr: "مشاريع التخرج" },

    // -------------------------
    // رسائل الماجستير والدكتوراه
    // Master's & PhD Services
    // -------------------------
    { typeEn: "Master's Thesis (Full)", typeAr: "رسالة الماجستير (كاملة)" },
    { typeEn: "PhD Dissertation (Full)", typeAr: "رسالة الدكتوراه (كاملة)" },
    { typeEn: "Research Proposal", typeAr: "مقترح البحث (Proposal)" },
    { typeEn: "Research Plan Development", typeAr: "خطة البحث" },
    { typeEn: "Theoretical Framework", typeAr: "الإطار النظري" },
    { typeEn: "Literature Review", typeAr: "الدراسات السابقة" },
    { typeEn: "Practical/Applied Research", typeAr: "الجانب العملي والتطبيقي" },
    { typeEn: "Results Discussion & Recommendations", typeAr: "مناقشة النتائج والتوصيات" },
    { typeEn: "Thesis Formatting", typeAr: "تنسيق الرسائل والأبحاث" },
    { typeEn: "Timeline Planning for Thesis", typeAr: "خطة زمنية لإنجاز الرسائل" },
    { typeEn: "Academic Supervision & Follow-up", typeAr: "متابعة وإشراف أكاديمي" },

    // -------------------------
    // البحوث والتقارير الجامعية
    // University Research & Reports
    // -------------------------
    { typeEn: "University Research Papers", typeAr: "الأبحاث الجامعية" },
    { typeEn: "University Assignments", typeAr: "الواجبات الجامعية" },
    { typeEn: "Academic Reports", typeAr: "التقارير الأكاديمية" },
    { typeEn: "Scientific Documentation (APA)", typeAr: "التوثيق العلمي (APA)" },
    { typeEn: "Scientific Documentation (MLA)", typeAr: "التوثيق العلمي (MLA)" },
    { typeEn: "Scientific Documentation (Harvard)", typeAr: "التوثيق العلمي (Harvard)" },
    { typeEn: "Scientific Documentation (Chicago)", typeAr: "التوثيق العلمي (Chicago)" },
    { typeEn: "Scientific Articles Writing", typeAr: "صياغة المقالات العلمية" },
    { typeEn: "Journal Publication Support", typeAr: "دعم النشر في المجلات" },

    // -------------------------
    // التحليل الإحصائي
    // Statistical Analysis
    // -------------------------
    { typeEn: "Statistical Analysis (SPSS)", typeAr: "التحليل الإحصائي (SPSS)" },
    { typeEn: "Statistical Analysis (AMOS)", typeAr: "التحليل الإحصائي (AMOS)" },
    { typeEn: "Statistical Analysis (Smart PLS)", typeAr: "التحليل الإحصائي (Smart PLS)" },
    { typeEn: "Statistical Analysis (R)", typeAr: "التحليل الإحصائي (R)" },
    { typeEn: "Statistical Analysis (Excel)", typeAr: "التحليل الإحصائي (Excel)" },
    { typeEn: "Hypothesis Testing", typeAr: "اختبارات الفرضيات" },
    { typeEn: "Descriptive & Analytical Statistics", typeAr: "الإحصاء الوصفي والتحليلي" },
    { typeEn: "Charts & Graphs", typeAr: "الجداول والرسوم البيانية" },
    { typeEn: "Results Writing & Interpretation", typeAr: "كتابة النتائج وتفسيرها" },

    // -------------------------
    // الترجمة والخدمات اللغوية
    // Translation & Language Services
    // -------------------------
    { typeEn: "Academic Translation (Arabic to English)", typeAr: "ترجمة أكاديمية (عربي إلى إنجليزي)" },
    { typeEn: "Academic Translation (English to Arabic)", typeAr: "ترجمة أكاديمية (إنجليزي إلى عربي)" },
    { typeEn: "Technical Translation", typeAr: "ترجمة تقنية" },
    { typeEn: "Medical Translation", typeAr: "ترجمة طبية" },
    { typeEn: "Literary Translation", typeAr: "ترجمة أدبية" },
    { typeEn: "Proofreading (Linguistic)", typeAr: "التدقيق اللغوي" },
    { typeEn: "Proofreading (Spelling)", typeAr: "التدقيق الإملائي" },
    { typeEn: "Proofreading (Grammar)", typeAr: "التدقيق النحوي" },
    { typeEn: "Paraphrasing & Plagiarism Reduction", typeAr: "إعادة الصياغة وتقليل الاقتباس" },

    // -------------------------
    // التلخيص والشروحات
    // Summaries & Explanations
    // -------------------------
    { typeEn: "Book Summaries", typeAr: "تلخيص الكتب" },
    { typeEn: "Novel Summaries", typeAr: "تلخيص الروايات" },
    { typeEn: "Reference Summaries", typeAr: "تلخيص المراجع" },
    { typeEn: "Course Explanations", typeAr: "شروحات المقررات" },

    // -------------------------
    // العروض والتصاميم
    // Presentations & Designs
    // -------------------------
    { typeEn: "PowerPoint Presentations", typeAr: "عروض بوربوينت" },
    { typeEn: "Research Poster Design", typeAr: "تصميم بوسترات بحثية" },
    { typeEn: "Infographic Design", typeAr: "تصميم إنفوجرافيك" },

    // -------------------------
    // الاستبيانات والنماذج
    // Questionnaires & Forms
    // -------------------------
    { typeEn: "Electronic Questionnaires", typeAr: "استبيانات إلكترونية" },
    { typeEn: "Data Collection", typeAr: "جمع البيانات" },
    { typeEn: "Research Forms Design", typeAr: "تصميم استمارات بحثية" },

    // -------------------------
    // خدمات مهنية
    // Professional Services
    // -------------------------
    { typeEn: "Academic CV Writing", typeAr: "كتابة السيرة الذاتية الأكاديمية" },
    { typeEn: "Recommendation Letters", typeAr: "خطابات التوصية" },
    { typeEn: "Book Writing", typeAr: "كتابة الكتب" },
];

async function main() {
    await client.connect();

    console.log(`Seeding ${projectTypes.length} project types...`);

    for (const pt of projectTypes) {
        await db.insert(projectType).values({
            id: nanoid(),
            ...pt,
        });
    }

    console.log("Project types seeded successfully!");
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

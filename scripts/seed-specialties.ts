import { drizzle } from "drizzle-orm/node-postgres";
import { specialty } from "../src/lib/db/schema/academy-schema";
import { nanoid } from "nanoid";
import pg from "pg";
import "dotenv/config";

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client);

const specialties = [
    // -------------------------
    // الهندسة - Engineering
    // -------------------------
    { titleEn: "Civil Engineering", titleAr: "الهندسة المدنية" },
    { titleEn: "Mechanical Engineering", titleAr: "الهندسة الميكانيكية" },
    { titleEn: "Electrical Engineering", titleAr: "الهندسة الكهربائية" },
    { titleEn: "Electronics Engineering", titleAr: "هندسة الإلكترونيات" },
    { titleEn: "Chemical Engineering", titleAr: "الهندسة الكيميائية" },
    { titleEn: "Petroleum Engineering", titleAr: "هندسة البترول" },
    { titleEn: "Industrial Engineering", titleAr: "الهندسة الصناعية" },
    { titleEn: "Architectural Engineering", titleAr: "الهندسة المعمارية" },
    { titleEn: "Environmental Engineering", titleAr: "الهندسة البيئية" },
    { titleEn: "Biomedical Engineering", titleAr: "الهندسة الطبية الحيوية" },
    { titleEn: "Aerospace Engineering", titleAr: "هندسة الطيران والفضاء" },
    { titleEn: "Materials Engineering", titleAr: "هندسة المواد" },
    { titleEn: "Nuclear Engineering", titleAr: "الهندسة النووية" },
    { titleEn: "Marine Engineering", titleAr: "الهندسة البحرية" },
    { titleEn: "Telecommunications Engineering", titleAr: "هندسة الاتصالات" },

    // -------------------------
    // الحاسوب والبرمجة - Computer & Programming
    // -------------------------
    { titleEn: "Computer Science", titleAr: "علوم الحاسوب" },
    { titleEn: "Software Engineering", titleAr: "هندسة البرمجيات" },
    { titleEn: "Information Technology", titleAr: "تقنية المعلومات" },
    { titleEn: "Cybersecurity", titleAr: "الأمن السيبراني" },
    { titleEn: "Artificial Intelligence", titleAr: "الذكاء الاصطناعي" },
    { titleEn: "Data Science", titleAr: "علوم البيانات" },
    { titleEn: "Web Development", titleAr: "تطوير الويب" },
    { titleEn: "Mobile App Development", titleAr: "تطوير تطبيقات الجوال" },
    { titleEn: "Database Administration", titleAr: "إدارة قواعد البيانات" },
    { titleEn: "Network Engineering", titleAr: "هندسة الشبكات" },
    { titleEn: "Game Development", titleAr: "تطوير الألعاب" },
    { titleEn: "Cloud Computing", titleAr: "الحوسبة السحابية" },

    // -------------------------
    // العلوم الطبية - Medical Sciences
    // -------------------------
    { titleEn: "Medicine", titleAr: "الطب البشري" },
    { titleEn: "Pharmacy", titleAr: "الصيدلة" },
    { titleEn: "Nursing", titleAr: "التمريض" },
    { titleEn: "Dentistry", titleAr: "طب الأسنان" },
    { titleEn: "Physiotherapy", titleAr: "العلاج الطبيعي" },
    { titleEn: "Medical Laboratory", titleAr: "المختبرات الطبية" },
    { titleEn: "Radiology", titleAr: "الأشعة" },
    { titleEn: "Public Health", titleAr: "الصحة العامة" },
    { titleEn: "Nutrition & Dietetics", titleAr: "التغذية والحمية" },
    { titleEn: "Veterinary Medicine", titleAr: "الطب البيطري" },
    { titleEn: "Optometry", titleAr: "البصريات" },

    // -------------------------
    // إدارة الأعمال - Business Administration
    // -------------------------
    { titleEn: "Business Administration", titleAr: "إدارة الأعمال" },
    { titleEn: "Accounting", titleAr: "المحاسبة" },
    { titleEn: "Finance", titleAr: "المالية" },
    { titleEn: "Marketing", titleAr: "التسويق" },
    { titleEn: "Human Resources", titleAr: "الموارد البشرية" },
    { titleEn: "Economics", titleAr: "الاقتصاد" },
    { titleEn: "International Business", titleAr: "الأعمال الدولية" },
    { titleEn: "Entrepreneurship", titleAr: "ريادة الأعمال" },
    { titleEn: "Supply Chain Management", titleAr: "إدارة سلاسل الإمداد" },
    { titleEn: "Project Management", titleAr: "إدارة المشاريع" },
    { titleEn: "E-Commerce", titleAr: "التجارة الإلكترونية" },
    { titleEn: "Banking & Insurance", titleAr: "البنوك والتأمين" },

    // -------------------------
    // العلوم الطبيعية - Natural Sciences
    // -------------------------
    { titleEn: "Physics", titleAr: "الفيزياء" },
    { titleEn: "Chemistry", titleAr: "الكيمياء" },
    { titleEn: "Biology", titleAr: "الأحياء" },
    { titleEn: "Mathematics", titleAr: "الرياضيات" },
    { titleEn: "Statistics", titleAr: "الإحصاء" },
    { titleEn: "Geology", titleAr: "الجيولوجيا" },
    { titleEn: "Environmental Science", titleAr: "العلوم البيئية" },
    { titleEn: "Astronomy", titleAr: "علم الفلك" },
    { titleEn: "Biotechnology", titleAr: "التقنية الحيوية" },
    { titleEn: "Microbiology", titleAr: "علم الأحياء الدقيقة" },
    { titleEn: "Genetics", titleAr: "علم الوراثة" },

    // -------------------------
    // العلوم الإنسانية والاجتماعية - Humanities & Social Sciences
    // -------------------------
    { titleEn: "Psychology", titleAr: "علم النفس" },
    { titleEn: "Sociology", titleAr: "علم الاجتماع" },
    { titleEn: "Political Science", titleAr: "العلوم السياسية" },
    { titleEn: "Philosophy", titleAr: "الفلسفة" },
    { titleEn: "History", titleAr: "التاريخ" },
    { titleEn: "Geography", titleAr: "الجغرافيا" },
    { titleEn: "Anthropology", titleAr: "علم الإنسان" },
    { titleEn: "Archaeology", titleAr: "علم الآثار" },
    { titleEn: "Social Work", titleAr: "الخدمة الاجتماعية" },

    // -------------------------
    // اللغات والترجمة - Languages & Translation
    // -------------------------
    { titleEn: "Arabic Language", titleAr: "اللغة العربية" },
    { titleEn: "English Language", titleAr: "اللغة الإنجليزية" },
    { titleEn: "French Language", titleAr: "اللغة الفرنسية" },
    { titleEn: "German Language", titleAr: "اللغة الألمانية" },
    { titleEn: "Spanish Language", titleAr: "اللغة الإسبانية" },
    { titleEn: "Turkish Language", titleAr: "اللغة التركية" },
    { titleEn: "Translation & Interpretation", titleAr: "الترجمة والترجمة الفورية" },
    { titleEn: "Linguistics", titleAr: "علم اللغويات" },
    { titleEn: "Literature", titleAr: "الأدب" },

    // -------------------------
    // التربية والتعليم - Education
    // -------------------------
    { titleEn: "Education", titleAr: "التربية" },
    { titleEn: "Curriculum & Instruction", titleAr: "المناهج وطرق التدريس" },
    { titleEn: "Educational Leadership", titleAr: "القيادة التربوية" },
    { titleEn: "Special Education", titleAr: "التربية الخاصة" },
    { titleEn: "Early Childhood Education", titleAr: "تربية الطفولة المبكرة" },
    { titleEn: "Educational Technology", titleAr: "تقنيات التعليم" },
    { titleEn: "Physical Education", titleAr: "التربية البدنية" },

    // -------------------------
    // القانون والشريعة - Law & Islamic Studies
    // -------------------------
    { titleEn: "Law", titleAr: "القانون" },
    { titleEn: "Islamic Law (Sharia)", titleAr: "الشريعة الإسلامية" },
    { titleEn: "Islamic Studies", titleAr: "الدراسات الإسلامية" },
    { titleEn: "Criminal Law", titleAr: "القانون الجنائي" },
    { titleEn: "International Law", titleAr: "القانون الدولي" },
    { titleEn: "Commercial Law", titleAr: "القانون التجاري" },

    // -------------------------
    // الفنون والتصميم - Arts & Design
    // -------------------------
    { titleEn: "Graphic Design", titleAr: "التصميم الجرافيكي" },
    { titleEn: "Interior Design", titleAr: "التصميم الداخلي" },
    { titleEn: "Fashion Design", titleAr: "تصميم الأزياء" },
    { titleEn: "Fine Arts", titleAr: "الفنون الجميلة" },
    { titleEn: "Animation & Visual Effects", titleAr: "الرسوم المتحركة والمؤثرات البصرية" },
    { titleEn: "Photography", titleAr: "التصوير الفوتوغرافي" },
    { titleEn: "Music", titleAr: "الموسيقى" },
    { titleEn: "Film & Media Production", titleAr: "الإنتاج السينمائي والإعلامي" },

    // -------------------------
    // الإعلام والاتصال - Media & Communication
    // -------------------------
    { titleEn: "Mass Communication", titleAr: "الاتصال الجماهيري" },
    { titleEn: "Journalism", titleAr: "الصحافة" },
    { titleEn: "Public Relations", titleAr: "العلاقات العامة" },
    { titleEn: "Digital Media", titleAr: "الإعلام الرقمي" },
    { titleEn: "Broadcasting", titleAr: "الإذاعة والتلفزيون" },

    // -------------------------
    // الزراعة والبيئة - Agriculture & Environment
    // -------------------------
    { titleEn: "Agriculture", titleAr: "الزراعة" },
    { titleEn: "Food Science", titleAr: "علوم الأغذية" },
    { titleEn: "Animal Science", titleAr: "علوم الحيوان" },
    { titleEn: "Plant Science", titleAr: "علوم النبات" },
    { titleEn: "Agricultural Engineering", titleAr: "الهندسة الزراعية" },
    { titleEn: "Water Resources", titleAr: "الموارد المائية" },

    // -------------------------
    // السياحة والفندقة - Tourism & Hospitality
    // -------------------------
    { titleEn: "Tourism Management", titleAr: "إدارة السياحة" },
    { titleEn: "Hotel Management", titleAr: "إدارة الفنادق" },
    { titleEn: "Event Management", titleAr: "إدارة الفعاليات" },

    // -------------------------
    // خدمات أكاديمية متخصصة - Specialized Academic Services
    // -------------------------
    { titleEn: "Academic Writing", titleAr: "الكتابة الأكاديمية" },
    { titleEn: "Research Methodology", titleAr: "منهجية البحث العلمي" },
    { titleEn: "Statistical Analysis", titleAr: "التحليل الإحصائي" },
    { titleEn: "Proofreading & Editing", titleAr: "التدقيق اللغوي والتحرير" },
    { titleEn: "Academic Translation", titleAr: "الترجمة الأكاديمية" },
    { titleEn: "Presentation Design", titleAr: "تصميم العروض التقديمية" },
];

async function main() {
    await client.connect();

    console.log(`Seeding ${specialties.length} specialties...`);

    for (const s of specialties) {
        await db.insert(specialty).values({
            id: nanoid(),
            ...s,
        });
    }

    console.log("Specialties seeded successfully!");
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

import { pgTable, text, timestamp, integer, decimal } from "drizzle-orm/pg-core";

export const country = pgTable("country", {
    id: text("id").primaryKey(),
    nameEn: text("name_en").notNull(),
    nameAr: text("name_ar").notNull(),
    code: text("code").notNull(),
    timezone: text("timezone").notNull(),
});

export const city = pgTable("city", {
    id: text("id").primaryKey(),
    nameEn: text("name_en").notNull(),
    nameAr: text("name_ar").notNull(),
    countryId: text("country_id")
        .notNull()
        .references(() => country.id, { onDelete: "cascade" }),
});

export const university = pgTable("university", {
    id: text("id").primaryKey(),
    nameEn: text("name_en").notNull(),
    nameAr: text("name_ar").notNull(),
    logoUrl: text("logo_url").default("/assets/university_placeholder.png"),
});

export const student = pgTable("student", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    phoneNumber: text("phone_number"),
    telegramUser: text("telegram_user"),
    nationalityId: text("nationality_id")
        .notNull()
        .references(() => country.id, { onDelete: "cascade" }),
    studyIn: text("study_in")
        .notNull()
        .references(() => country.id, { onDelete: "cascade" }),
});

export const specialty = pgTable("specialty", {
    id: text("id").primaryKey(),
    titleEn: text("title_en").notNull(),
    titleAr: text("title_ar").notNull(),
});

export const specialist = pgTable("specialist", {
    id: text("id").primaryKey(),
    nameEn: text("name_en").notNull(),
    nameAr: text("name_ar").notNull(),
    specialtyId: text("specialty_id")
        .notNull()
        .references(() => specialty.id, { onDelete: "cascade" }),
});

export const bank = pgTable("bank", {
    id: text("id").primaryKey(),
    nameEn: text("name_en").notNull(),
    nameAr: text("name_ar").notNull(),
    logo: text("logo"),
    countryId: text("country_id")
        .notNull()
        .references(() => country.id, { onDelete: "cascade" }),
});

export const projectType = pgTable("project_type", {
    id: text("id").primaryKey(),
    typeEn: text("type_en").notNull(),
    typeAr: text("type_ar").notNull(),
});

export const paymentType = pgTable("payment_type", {
    id: text("id").primaryKey(),
    titleEn: text("title_en").notNull(),
    titleAr: text("title_ar").notNull(),
    percentage: integer("percentage").notNull(),
});

export const payment = pgTable("payment", {
    id: text("id").primaryKey(),
    bankId: text("bank_id").references(() => bank.id, { onDelete: "set null" }),
    depositAttachmentUrl: text("deposit_attachment_url"),
    currency: text("currency").notNull(),
    amount: decimal("amount").notNull(),
});

export const project = pgTable("project", {
    id: text("id").primaryKey(),
    projectTypeId: text("project_type_id")
        .notNull()
        .references(() => projectType.id, { onDelete: "cascade" }),
    studentId: text("student_id")
        .notNull()
        .references(() => student.id, { onDelete: "cascade" }),
    specialistId: text("specialist_id")
        .references(() => specialist.id, { onDelete: "set null" }), // Optional as per logical flow (might not be assigned yet)
    price: decimal("price").notNull(),
    deadline: timestamp("deadline"),
    deliveredAt: timestamp("delivered_at"),
    paymentId: text("payment_id").references(() => payment.id, { onDelete: "set null" }),
    paymentTypeId: text("payment_type_id").references(() => paymentType.id, { onDelete: "set null" }),
});

export const projectAttachment = pgTable("project_attachment", {
    id: text("id").primaryKey(),
    projectId: text("project_id")
        .notNull()
        .references(() => project.id, { onDelete: "cascade" }),
    attachmentName: text("attachment_name").notNull(),
    attachmentSize: integer("attachment_size").notNull(), // Size in KB
    attachmentUrl: text("attachment_url").notNull(),
});

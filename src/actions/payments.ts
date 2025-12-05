"use server";

import { db } from "@/lib/db/drizzle";
import { payment, bank } from "@/lib/db/schema/academy-schema";
import { eq, asc, desc } from "drizzle-orm";

export type Payment = {
    id: string;
    currency: string;
    amount: string;
    depositAttachmentUrl: string | null;
    bankNameEn: string | null;
    bankNameAr: string | null;
};

export type PaymentSortBy = "amount" | "currency" | "bank";

export type GetPaymentsResult = {
    payments: Payment[];
    hasMore: boolean;
};

export async function getPayments(
    page: number = 1,
    limit: number = 15,
    sortBy: PaymentSortBy = "amount"
): Promise<GetPaymentsResult> {
    const offset = (page - 1) * limit;

    let orderByColumn;
    switch (sortBy) {
        case "currency":
            orderByColumn = asc(payment.currency);
            break;
        case "bank":
            orderByColumn = asc(bank.nameEn);
            break;
        case "amount":
        default:
            orderByColumn = desc(payment.amount);
            break;
    }

    const result = await db
        .select({
            id: payment.id,
            currency: payment.currency,
            amount: payment.amount,
            depositAttachmentUrl: payment.depositAttachmentUrl,
            bankNameEn: bank.nameEn,
            bankNameAr: bank.nameAr,
        })
        .from(payment)
        .leftJoin(bank, eq(payment.bankId, bank.id))
        .orderBy(orderByColumn)
        .limit(limit + 1)
        .offset(offset);

    const hasMore = result.length > limit;

    const payments: Payment[] = (hasMore ? result.slice(0, limit) : result).map((p) => ({
        id: p.id,
        currency: p.currency,
        amount: p.amount,
        depositAttachmentUrl: p.depositAttachmentUrl,
        bankNameEn: p.bankNameEn,
        bankNameAr: p.bankNameAr,
    }));

    return {
        payments,
        hasMore,
    };
}

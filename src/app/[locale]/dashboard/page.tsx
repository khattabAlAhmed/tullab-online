import { useTranslations } from 'next-intl';
import { FolderPlus, UserPlus, CreditCard, UserCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function DashboardPage() {
  const t = useTranslations('dashboard.home.quickActions');

  const actions = [
    { label: t('newProject'), icon: FolderPlus, href: '/dashboard/projects/new' },
    { label: t('newStudent'), icon: UserPlus, href: '/dashboard/students/new' },
    { label: t('newPayment'), icon: CreditCard, href: '/dashboard/payments/new' },
    { label: t('newSpecialist'), icon: UserCog, href: '/dashboard/specialists/new' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            className="h-32 flex flex-col items-center justify-center gap-4 text-lg hover:bg-accent hover:text-accent-foreground border-2 border-dashed hover:border-solid transition-all"
            asChild
          >
            <Link href={action.href}>
              <action.icon className="!h-8 !w-8" />
              {action.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
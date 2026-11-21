import NavyGoldBetterDashboard from '@/features/test/StyleSevenTest'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/test')({
  component: NavyGoldBetterDashboard,
})



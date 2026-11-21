import MasterItemPage from '@/features/admin/masters/master-item/MasterItemPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/admin/masters/master-item/',
)({
  component: MasterItemPage,
})



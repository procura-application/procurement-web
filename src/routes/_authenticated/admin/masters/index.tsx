import MasterPage from '@/features/admin/masters/MasterPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/masters/')({
  component: MasterPage,
})



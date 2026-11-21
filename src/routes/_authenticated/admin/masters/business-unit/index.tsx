import BusinessUnitPage from '@/features/admin/masters/business-unit/BusinessUnitPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/admin/masters/business-unit/',
)({
  component: BusinessUnitPage,
})



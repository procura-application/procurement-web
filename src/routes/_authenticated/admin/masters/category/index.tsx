import CategoryPage from '@/features/admin/masters/category/CategoryPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/masters/category/')(
  {
    component: CategoryPage,
  },
)



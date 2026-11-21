import UserListingPage from '@/features/admin/users/UserListingPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/users/')({
  component: UserListingPage,
})



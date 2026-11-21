import AdminLayout from '@/features/admin/layout/pages/AdminLayout'
import { createFileRoute,  redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin')({
      beforeLoad: ({ context, location }) => {
    if (context.auth.role !== 'ADMIN') {
      console.log("in admin unauthorized")
      throw redirect({
        to: '/unauthorized',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AdminLayout,
})


import LoginComponent from '@/auth/components/LoginComponent'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  validateSearch: (search) => ({
    redirect: (search.redirect as string),
  }),
  beforeLoad: ({ context, search }) => {
    // Redirect if already authenticated
    if (context.auth.authenticated) {
      throw redirect({ to: search.redirect })
    }
  },
  component: LoginComponent,
})


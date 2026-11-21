import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/buyer')({
    beforeLoad: ({ context, location }) => {
    if (context.auth.role !== 'BUYER') {
      console.log("in buyer unauthorized")
      throw redirect({
        to: '/unauthorized',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/buyer/router"!</div>
}

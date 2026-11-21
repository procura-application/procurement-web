import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/buyer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/_buyer/"!</div>
}

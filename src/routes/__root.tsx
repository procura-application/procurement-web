import { useAuth } from '@/auth/context/AuthContext'
import type { AuthContextType } from '@/auth/types'
import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
interface MyRouterContext {
  auth: AuthContextType
}
  import { ToastContainer } from 'react-toastify';

const RootLayout = () => 
{
  // const auth = useAuth();
  // if(!auth.authenticated)
  return (
  <>
    <div className="p-2 flex gap-2">
     
    </div>
    <hr />
    <Outlet />
    <ToastContainer/>
    <TanStackRouterDevtools />
  </>
)
}

export const Route = createRootRouteWithContext<MyRouterContext>()(
  {
    component: RootLayout
  }
)
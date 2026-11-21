import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { useAuth } from './auth/context/AuthContext'
import AuthProvider from './auth/context/AuthContextProvider'
import type { AuthProviderProps } from './auth/types'

const router = createRouter({ routeTree ,
  context : {auth: undefined!}

})
const queryClient = new QueryClient()
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const outerAuth = Promise.withResolvers<AuthProviderProps>();
function App() {
  const auth = useAuth();
  console.log("🔄 APP RENDER:", auth.authenticated);
    useEffect(() => {
    //if (auth.isLoading) return;
    outerAuth.resolve(auth);
  }, [auth]);
    useEffect(() => {
    router.invalidate();
  }, [auth.authenticated]);
  return (
        <RouterProvider router={router} context={{auth: auth}} />
  )
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
  <App />
  </AuthProvider>
  </QueryClientProvider>

  </StrictMode>,
)

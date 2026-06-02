import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { RootLayout } from '@/layouts/RootLayout'
import { FullPageSpinner } from '@/components/ui'

// ─── Lazy-loaded Pages (code splitting) ────────────────────────────────────────
const HomePage      = lazy(() => import('@/pages/Home'))
const AboutPage     = lazy(() => import('@/pages/About'))
const PopupDemoPage = lazy(() => import('@/pages/PopupDemo'))
const NotFoundPage  = lazy(() => import('@/pages/NotFound'))

// ─── Suspense Wrapper ──────────────────────────────────────────────────────────
function SuspenseWrapper({ children }) {
  return <Suspense fallback={<FullPageSpinner />}>{children}</Suspense>
}

// ─── Router Definition ─────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <HomePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <SuspenseWrapper>
            <AboutPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'popup',
        element: (
          <SuspenseWrapper>
            <PopupDemoPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: '*',
        element: (
          <SuspenseWrapper>
            <NotFoundPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
])

export default router

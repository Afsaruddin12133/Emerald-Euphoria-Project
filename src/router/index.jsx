/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { RootLayout } from '@/layouts/RootLayout'
import { FullPageSpinner } from '@/components/ui'

// ─── Lazy-loaded Pages (code splitting) ────────────────────────────────────────
const HomePage = lazy(() => import('@/pages/Home'))
const AboutPage = lazy(() => import('@/pages/About'))
const PopupDemoPage = lazy(() => import('@/pages/PopupDemo'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

// ─── Router Definition ─────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'popup',
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <PopupDemoPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<FullPageSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default router

import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'

/**
 * RootLayout — public-facing shell: Navbar + page content + Footer.
 */
export function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#00120C]">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import OfferPopup from '@/components/shared/OfferPopup'

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
      <ScrollToTop />
      <OfferPopup />
    </div>
  )
}

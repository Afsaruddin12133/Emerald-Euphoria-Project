import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { ChatButton } from '@/components/shared/ChatButton'
import OfferPopup from '@/components/shared/OfferPopup'

/**
 * RootLayout — public-facing shell: Navbar + page content + Footer.
 */
export function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#00120C] overflow-x-clip w-full">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ChatButton />
      <OfferPopup />
    </div>
  )
}

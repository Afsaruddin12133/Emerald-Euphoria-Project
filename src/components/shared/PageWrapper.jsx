/**
 * PageWrapper — plain semantic wrapper.
 * Animations will be added here later with Framer Motion.
 */
export function PageWrapper({ children }) {
  return (
    <main className="flex-1">
      {children}
    </main>
  )
}

import Nav from "../nav/page"
import Footer from "../footer/page"
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* dashboard page uchun map */}
      <Nav />
      {children}
      <Footer />
    </section>
  )
}
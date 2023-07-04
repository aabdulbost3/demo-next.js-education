import Nav from "../nav/page"
import Footer from "../footer/page"
export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav/>
        {children}
        <Footer />
      </section>
    )
  }
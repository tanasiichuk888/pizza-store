import DashboardPreview from './DashboardPreview'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__wash" />
        <div className="atmosphere__grid" />
        <div className="atmosphere__orb atmosphere__orb--a" />
        <div className="atmosphere__orb atmosphere__orb--b" />
      </div>

      <header className="topbar">
        <a className="brand brand--nav" href="#top" aria-label="Meridian home">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">Meridian</span>
        </a>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#product">Product</a>
          <a href="#proof">Proof</a>
        </nav>
        <a className="btn btn--ghost" href="#demo">
          Book a walkthrough
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="brand-lockup">Meridian</p>
            <h1 id="hero-title">See which accounts will renew before they slip.</h1>
            <p className="hero__lede">
              One operating view for B2B revenue teams — renewal risk, expansion
              signals, and pipeline health in a single morning glance.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#demo">
                Start free workspace
              </a>
              <a className="btn btn--secondary" href="#product">
                View the board
              </a>
            </div>
          </div>

          <div className="hero__stage" id="product">
            <DashboardPreview />
          </div>
        </section>

        <section className="proof" id="proof" aria-labelledby="proof-title">
          <h2 id="proof-title">Built for the Monday revenue standup</h2>
          <p>
            Meridian replaces scattered CRM notes and spreadsheet health scores
            with a live account board your CS, sales, and finance leads can trust.
          </p>
        </section>

        <section className="cta" id="demo" aria-labelledby="cta-title">
          <h2 id="cta-title">Ship clarity to the whole revenue org.</h2>
          <p>Open a workspace in minutes. Invite CS and AEs the same afternoon.</p>
          <a className="btn btn--primary" href="mailto:hello@meridian.example">
            Request early access
          </a>
        </section>
      </main>

      <footer className="footer">
        <span className="brand__name">Meridian</span>
        <span>Account health for B2B revenue teams</span>
      </footer>
    </div>
  )
}

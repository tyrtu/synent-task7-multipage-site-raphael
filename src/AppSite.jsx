import { useEffect, useMemo, useState } from 'react';

const routes = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/contact': 'Contact',
};

const homeHighlights = [
  { value: '120+', label: 'Projects delivered' },
  { value: '24/7', label: 'Support coverage' },
  { value: '98%', label: 'Client satisfaction' },
];

const serviceCards = [
  {
    title: 'Website design',
    text: 'Landing pages, portfolios, and business sites with a clear visual hierarchy and mobile-first layout.',
  },
  {
    title: 'Front-end development',
    text: 'React interfaces, reusable components, and responsive user experiences built for speed and clarity.',
  },
  {
    title: 'Maintenance & support',
    text: 'Ongoing updates, performance fixes, and content changes so the site stays useful after launch.',
  },
];

function AppSite() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const handlePopState = () => setPath(getPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentPage = useMemo(() => routes[path] || 'Home', [path]);

  const navigate = (nextPath) => {
    if (nextPath === path) {
      return;
    }

    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
  };

  const goTo = (nextPath) => (event) => {
    event.preventDefault();
    navigate(nextPath);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">R</span>
          <div>
            <h1>RaphTech Studios</h1>
            <p>Web Developement And Design</p>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          <NavLink label="Home" path="/" activePath={path} onNavigate={navigate} />
          <NavLink label="About" path="/about" activePath={path} onNavigate={navigate} />
          <NavLink label="Services" path="/services" activePath={path} onNavigate={navigate} />
          <NavLink label="Contact" path="/contact" activePath={path} onNavigate={navigate} />
        </nav>
      </header>

      <main className="content">
        {path === '/' && (
          <>
            <section className="page-hero panel hero-split">
              <div>
                <span className="eyebrow">{currentPage} page</span>
                <h2>We build clean, responsive websites for modern businesses.</h2>
                <p>
                  RaphTech Studios delivers fast, modern web solutions tailored to your audience. From concept to launch, we ensure every pixel serves a purpose—and every user has a smooth experience.
                </p>
                <div className="actions">
                  <a className="button primary" href="/services" onClick={goTo('/services')}>
                    Explore Services
                  </a>
                  <a className="button secondary" href="/contact" onClick={goTo('/contact')}>
                    Contact Us
                  </a>
                </div>
              </div>

              <aside className="panel spotlight">
                <h3>What visitors see first</h3>
                <ul>
                  <li>A short business summary</li>
                  <li>Key services and benefits</li>
                  <li>Clear call to action</li>
                </ul>
              </aside>
            </section>

            <section className="stat-strip">
              {homeHighlights.map((item) => (
                <article className="panel stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </section>

            <section className="section-block">
              <SectionHeader
                title="What we do"
                text="We combine strategy, design, and clean code to create websites that engage visitors and drive results."
              />
              <div className="grid-layout">
                <Card
                  title="Strategy"
                  text="We plan the site structure, content hierarchy, and calls to action before writing the code."
                />
                <Card
                  title="Design"
                  text="We create a consistent visual style with readable typography and responsive spacing."
                />
                <Card
                  title="Delivery"
                  text="We hand off a functional website that is easy to maintain and ready for deployment."
                />
              </div>
            </section>
          </>
        )}

        {path === '/about' && (
          <>
            <section className="page-hero panel">
              <span className="eyebrow">{currentPage} page</span>
              <h2>About RaphTech Studios</h2>
              <p>
                We're a web development studio focused on creating fast, accessible, and user-centered digital experiences. Our work combines thoughtful design with solid engineering to solve real business problems.
              </p>
            </section>

            <section className="two-column">
              <article className="panel text-block">
                <h3>Our story</h3>
                <p>
                  Founded on the belief that great web experiences shouldn't require unnecessary complexity, RaphTech Studios started as a passion project and has grown into a trusted partner for businesses looking to strengthen their online presence.
                </p>
                <p>
                  We've worked with startups, small businesses, and growing teams to launch websites that are not just beautiful—but profitable. Every project is an opportunity to learn, improve, and deliver measurable value.
                </p>
                <p>
                  Whether it's a knowledge base, a landing page, or a full web application, we approach each challenge with the same commitment: clarity, reliability, and care.
                </p>
              </article>

              <article className="panel text-block accent-block">
                <h3>Core values</h3>
                <ul>
                  <li><strong>User-centric:</strong> We design for the person using the site, not just the computer.</li>
                  <li><strong>Reliable:</strong> Code that works, scales, and doesn't break unexpectedly.</li>
                  <li><strong>Transparent:</strong> Clear timelines, honest feedback, and no hidden surprises.</li>
                  <li><strong>Modern:</strong> We stay current with tools and best practices without chasing trends.</li>
                  <li><strong>Supportive:</strong> Your success is our success—we're here long after launch.</li>
                </ul>
              </article>
            </section>
          </>
        )}

        {path === '/services' && (
          <>
            <section className="page-hero panel">
              <span className="eyebrow">{currentPage} page</span>
              <h2>Our services</h2>
              <p>
                Every project starts with understanding your goals. We offer specialized services to help you succeed online—whether you're building from scratch or improving an existing site.
              </p>
            </section>

            <section className="grid-layout">
              {serviceCards.map((service) => (
                <Card key={service.title} title={service.title} text={service.text} />
              ))}
            </section>

            <section className="section-block">
              <SectionHeader
                title="How we work"
                text="Our process is designed to be collaborative, transparent, and focused on your goals from start to finish."
              />
              <div className="process-grid">
                <article className="panel process-card">
                  <span>01</span>
                  <h3>Discovery</h3>
                  <p>We review goals, target users, and the main content that needs to appear on the site.</p>
                </article>
                <article className="panel process-card">
                  <span>02</span>
                  <h3>Build</h3>
                  <p>We create the pages, wire the navigation, and ensure the layout works well on mobile and desktop.</p>
                </article>
                <article className="panel process-card">
                  <span>03</span>
                  <h3>Launch</h3>
                  <p>We verify the final site, make content adjustments, and prepare it for public sharing.</p>
                </article>
              </div>
            </section>
          </>
        )}

        {path === '/contact' && (
          <>
            <section className="page-hero panel">
              <span className="eyebrow">{currentPage} page</span>
              <h2>Let's talk about your project</h2>
              <p>
                Have a question or ready to start? Get in touch—we'll respond within 24 hours and discuss how we can help bring your vision to life.
              </p>
            </section>

            <section className="contact-grid">
              <form className="panel contact-form" onSubmit={(event) => event.preventDefault()}>
                <h3>Send a message</h3>
                <label>
                  Your name
                  <input type="text" placeholder="Enter your name" />
                </label>
                <label>
                  Email address
                  <input type="email" placeholder="Enter your email" />
                </label>
                <label>
                  Message
                  <textarea rows="5" placeholder="Tell us about your project"></textarea>
                </label>
                <button className="button primary" type="submit">
                  Submit inquiry
                </button>
              </form>

              <aside className="contact-stack">
                <article className="panel text-block">
                  <h3>Contact details</h3>
                  <p>Email: hello@Raphtechstudios.com</p>
                  <p>Phone: +254 748 211 821</p>
                  <p>Location: Kenya</p>
                </article>
                <article className="panel text-block accent-block">
                  <h3>Office hours</h3>
                  <p>Monday to Friday</p>
                  <p>9:00 AM to 6:00 PM</p>
                  <p>Response time: within 24 hours</p>
                </article>
              </aside>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RaphTech Studios</h4>
            <p>Building fast, clean web experiences that drive results.</p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services" onClick={goTo('/services')}>Website Design</a></li>
              <li><a href="/services" onClick={goTo('/services')}>Front-end Development</a></li>
              <li><a href="/services" onClick={goTo('/services')}>Maintenance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: hello@Raphtechstudios.com</p>
            <p>Phone: +254 748 211 821</p>
            <p>Kenya</p>
          </div>

          <div className="footer-section">
            <h4>Follow</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 RaphTech Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, text }) {
  return (
    <div className="section-header">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function NavLink({ label, path, activePath, onNavigate }) {
  return (
    <a
      href={path}
      className={activePath === path ? 'nav-link active' : 'nav-link'}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(path);
      }}
    >
      {label}
    </a>
  );
}

function Card({ title, text }) {
  return (
    <article className="panel info-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function getPath() {
  return window.location.pathname;
}

export default AppSite;

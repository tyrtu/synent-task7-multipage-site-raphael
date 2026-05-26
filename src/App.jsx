import { useEffect, useMemo, useState, useRef } from 'react';
import { FaRocket, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaGithub, FaQuoteLeft, FaCheckCircle, FaArrowRight, FaBars, FaTimes, FaBullseye, FaGem, FaShieldAlt, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';
import t1 from './assets/testomonial/testomonial-img1.jpg';
import t2 from './assets/testomonial/testomonial-img2.jpg';
import t3 from './assets/testomonial/testomonial-img3.jpg';
import t4 from './assets/testomonial/testomonial-img4.jpg';
import t5 from './assets/testomonial/testomonial-img5.jpg';

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

if (mapboxToken) {
  mapboxgl.accessToken = mapboxToken;
}


//didnt use react router cause its just a small projct
const routes = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/contact': 'Contact',
};

const homeStats = [
  { value: '140+', label: 'Projects launched' },
  { value: '99.4%', label: 'Average uptime' },
  { value: '4.9/5', label: 'Client satisfaction' },
  { value: '12', label: 'Industries supported' },
];

const capabilities = [
  {
    title: 'Brand-first digital systems',
    text: 'Web experiences designed to feel premium, trustworthy, and easy to navigate across devices.',
  },
  {
    title: 'Performance and accessibility',
    text: 'Fast interfaces with clean structure, strong contrast, semantic markup, and keyboard-friendly flows.',
  },
  {
    title: 'Reliable growth foundations',
    text: 'Analytics-ready, SEO-aware, and easy to maintain so your team can keep improving after launch.',
  },
];

const process = [
  { step: '01', title: 'Discover', text: 'We map goals, users, and constraints into a clear delivery plan.' },
  { step: '02', title: 'Design', text: 'We create a visual language, interaction model, and content structure.' },
  { step: '03', title: 'Build', text: 'We implement responsive pages, reusable components, and QA.' },
  { step: '04', title: 'Launch', text: 'We deploy, monitor, and improve the site with real feedback.' },
];

const caseStudies = [
  {
    title: 'Professional services portal',
    industry: 'Consulting',
    impact: 'Reduced inquiry drop-off by 31% and improved form completion.',
  },
  {
    title: 'Multi-region logistics site',
    industry: 'Operations',
    impact: 'Enabled faster launch across three markets with a shared system.',
  },
  {
    title: 'Healthcare information hub',
    industry: 'Med-tech',
    impact: 'Improved readability and simplified patient onboarding journeys.',
  },
];

const testimonials = [
  {
    name: 'Diana M.',
    role: 'Operations Director',
    quote: 'The site feels confident and modern. More importantly, it works cleanly across the team.',
  },
  {
    name: 'Kevin O.',
    role: 'Head of Growth',
    quote: 'Delivery was structured, fast, and practical. Exactly the kind of partner we needed.',
  },
];

const testimonialImgs = [t1, t2, t3, t4, t5];

const services = [
  {
    name: 'Website Design & Build',
    desc: 'A full modern website with strategy, copy structure, design, build, and launch support.',
    bullets: ['Discovery workshops', 'UX and visual system', 'Responsive build'],
  },
  {
    name: 'Platform Modernization',
    desc: 'Refresh an existing platform with stronger UX, faster performance, and better maintainability.',
    bullets: ['Audit and redesign', 'Accessibility fixes', 'Performance tuning'],
  },
  {
    name: 'Ongoing Growth Support',
    desc: 'Monthly improvements that help your site keep converting and staying relevant.',
    bullets: ['SEO improvements', 'Content updates', 'Monitoring and iteration'],
  },
];

const packages = [
  {
    title: 'Starter',
    price: 'For small teams',
    items: ['One strategic workshop', 'Core pages', 'Launch checklist'],
  },
  {
    title: 'Pro',
    price: 'For growth teams',
    items: ['Expanded content', 'Component system', 'Analytics setup'],
  },
  {
    title: 'Enterprise',
    price: 'For complex orgs',
    items: ['Custom architecture', 'Governance', 'Long-term support'],
  },
];

const team = [
  { name: 'Raph M.', role: 'Founder / Technical Lead', initials: 'RM' },
  { name: 'Asha K.', role: 'Design Lead', initials: 'AK' },
  { name: 'Musa T.', role: 'Content Strategist', initials: 'MT' },
];

const faq = [
  {
    question: 'How long does a project take?',
    answer: 'Most projects take between 4 and 10 weeks depending on scope, feedback cycles, and content readiness.',
  },
  {
    question: 'Do you work with existing teams?',
    answer: 'Yes. We can collaborate with in-house product, marketing, and engineering teams or lead end to end.',
  },
  {
    question: 'Can you redesign an existing site?',
    answer: 'Absolutely. We can modernize an existing product or rebuild a site with a better structure and experience.',
  },
];

function App() {
  const [path, setPath] = useState(getPath());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setPath(getPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentPage = useMemo(() => routes[path] || 'Home', [path]);

  const navigate = (nextPath) => {
    if (nextPath === path) return;
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl justify-center flex-col px-2 py-4 sm:px-6 lg:px-8 ">
        <header className="sticky top-0 z-20 mb-8 bg-white/60 backdrop-blur">
          <div className="flex items-center justify-between py-4">
            <button className="flex items-center gap-3 text-left" onClick={() => navigate('/')}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-orange-950 shadow-soft" style={{ background: '#fb923c' }}>
                <FaRocket size={18} />
              </div>
              <div>
                <div className="font-display text-xl font-semibold tracking-tight text-orange-900">
                  RaphTech Studios
                </div>
                <p className="text-sm muted">Modern digital experiences</p>
              </div>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {Object.keys(routes).map((route) => (
                <NavButton key={route} route={route} active={path === route} onNavigate={navigate} />
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-orange-300 bg-orange-300 p-3 text-orange-950 md:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {menuOpen && (
            <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-soft md:hidden">
              <div className="flex flex-col gap-2">
                {Object.keys(routes).map((route) => (
                  <NavButton key={route} route={route} active={path === route} onNavigate={navigate} />
                ))}
              </div>
            </div>
          )}
        </header>
        
        {/*normally for a bigger roject i woud use react router and the pages would be in separate files under pages folder*/}
        <main className="flex-1 space-y-16 pb-12">
          {path === '/' && <HomePage currentPage={currentPage} onNavigate={navigate} />}
          {path === '/about' && <AboutPage currentPage={currentPage} onNavigate={navigate} />}
          {path === '/services' && <ServicesPage currentPage={currentPage} onNavigate={navigate} />}
          {path === '/contact' && <ContactPage currentPage={currentPage} onNavigate={navigate} />}
        </main>

        <footer className="site-footer mt-10 py-10 ">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
              <div className='col-span-2 sm:col-span-1'>
                <div className="flex items-center gap-3">
                  <div style={{ background: '#fb923c', color: '#7c2d12' }} className="flex h-12 w-16 items-center justify-center rounded-2xl">
                    <FaRocket />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-orange-900">RaphTech Studios</div>
                    <p className="muted">Strategy, design, and delivery for modern brands.</p>
                  </div>
                </div>
                <div className="mt-6 muted text-sm">
                  <p>Serving clients globally with a focus on clarity, performance, and long-term support.</p>
                </div>
              </div>

              <div className='flex flex-col items-center'>
                <h4 className="text-lg sm:text-2xl v font-semibold text-orange-900">Services</h4>
                <ul className="mt-4 space-y-2 text-xs leading-normal sm:text-[16px] muted">
                  <li>Website Design & Build</li>
                  <li>Platform Modernization</li>
                  <li>Ongoing Growth Support</li>
                </ul>
              </div>

              <div className='flex flex-col items-center'>
                <h4 className="text-lg sm:text-2xl font-semibold text-orange-900">Contact</h4>
                <ul className="mt-4 space-y-2 text-xs sm:text-[16px] muted">
                  <li className="flex items-center gap-2 "><span className='icon'><FaEnvelope /></span> hello@raphtechstudios.com</li>
                  <li className="flex items-center gap-2 "><span className='icon'><FaPhone /></span> +254 748 211 821</li>
                  <li className="flex items-center gap-2 "><span className='icon'><FaMapMarkerAlt /></span> Nairobi, Kenya</li>
                </ul>
                <div className="mt-4 flex gap-6  ">
                  <a className="icon"  aria-label="GitHub"><FaGithub /></a>
                  <a className="icon" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a className="icon" aria-label="Twitter"><FaTwitter /></a>
                  <a className="icon" aria-label="Instagram"><FaInstagram /></a>

                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 text-sm muted">
              <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
                <p>© 2026 RaphTech Studios  All rights reserved.</p>
                <p>Designed with care · Built for reliability</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function HomePage({ currentPage, onNavigate }) {
  return (
    <>
      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7">
          <span className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            {currentPage} page · RaphTech Studios
          </span>
          <div className="space-y-5 px-4" >
            <h1 className="font-display max-w-3xl  text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950 text-center">
              Beautiful websites that feel calm, detailed, and client-ready.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 text-center">
              We design and build polished digital experiences for ambitious teams who want a modern site that is
              responsive, fast, and easy to maintain. The layout is intentionally spacious and structured to feel
              premium without looking overly busy.
            </p>
          </div>

          <div className="flex justify-center gap-3 sm:flex-row">
            <ActionButton onClick={() => onNavigate('/services')} >Explore services</ActionButton>
            <SecondaryButton onClick={() => onNavigate('/contact')}>Start a project</SecondaryButton>
          </div>

          <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
            {homeStats.map((item) => (
              <div key={item.label} className="rounded-lg border border-orange-100 bg-orange-50 p-5 shadow-soft">
                <div className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</div>
                <div className="mt-2 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 white p-6 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Featured</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">Studio snapshot</h2>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  Ready to launch
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <MiniFeature title="Clean UI" text="Careful spacing, readable typography, and measured motion." />
                <MiniFeature title="Responsive" text="Layouts that adapt elegantly from mobile to desktop." />
                <MiniFeature title="Maintainable" text="Reusable sections that scale with your content." />
                <MiniFeature title="Focused" text="A clear path from attention to conversion." />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-orange-300 p-6 text-slate-900 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-800">Approach</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-slate-900">A design language that feels composed, not crowded.</h3>
            <p className="mt-4 text-slate-800">
              We avoid clutter and use strong hierarchy, generous breathing room, and intentional section flow so each
              page reads clearly and feels professional.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {capabilities.map((item) => (
          <InfoPanel key={item.title} title={item.title} text={item.text} />
        ))}
      </section>

      <section className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Selected work</p>
          <h2 className="font-display text-3xl font-semibold text-slate-950">Case studies with business impact</h2>
          <p className="max-w-xl text-slate-600">
            Each project is framed around a measurable outcome. The visual treatment stays calm, editorial, and
            confidence-building so the site feels substantial rather than decorative.
          </p>

          <div className="rounded-lg border border-orange-200 bg-orange-50 p-2 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">What matters most</p>
            <div className="mt-4 grid gap-3 grid-cols-3">
              <div className="rounded-lg bg-white sm:p-4 p-2 shadow-soft">
                <p className="text-2xl font-semibold text-orange-950 text-center">01</p>
                <p className="mt-1 text-sm text-slate-700 text-center">Clarity</p>
              </div>
              <div className="rounded-lg bg-white sm:p-4 p-2 shadow-soft">
                <p className="text-2xl font-semibold text-orange-950 text-center">02</p>
                <p className="mt-1 text-sm text-slate-700 text-center">Consistency</p>
              </div>
              <div className="rounded-lg bg-white sm:p-4 p-2 shadow-soft">
                <p className="text-2xl font-semibold text-orange-950 text-center">03</p>
                <p className="mt-1 text-sm text-slate-700 text-center">Results</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {caseStudies.map((item, index) => (
            <article key={item.title} className="rounded-xl border border-orange-200 bg-orange-50 p-5 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-200 text-orange-950">
                  <FaBullseye />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <span className="text-sm text-slate-500">{item.industry}</span>
                  </div>
                  <p className="mt-3 text-slate-700">{item.impact}</p>
                  <div className="mt-4 h-1 rounded-full bg-orange-200">
                    <div className="h-1 rounded-full bg-orange-500" style={{ width: `${72 - index * 8}%` }} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">A clear delivery flow</h2>
          <p className="mt-4 text-slate-700">
            We keep the process structured and visible so clients know what happens next at every stage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {process.map((item) => (
            <article key={item.step} className="rounded-xl border border-orange-200 bg-orange-50 p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-200 text-orange-950">
                  <FaCogs />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">Step {item.step}</div>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">{item.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900">What clients say</h2>
            <div className="mt-6 space-y-4">
            {testimonials.map((item, idx) => (
              <blockquote key={item.name} className="testimonial-card">
                <div className="flex items-start gap-4">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-quote">“{item.quote}”</p>
                </div>
                <footer className="testimonial-author">
                  <div className="avatar"><img src={testimonialImgs[idx % testimonialImgs.length]} alt={item.name} /></div>
                  <div>
                    <strong className="text-slate-900">{item.name}</strong>
                    <div className="text-sm text-slate-700">{item.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Highlights</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">Why teams choose us</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="flex items-center gap-3"><FaArrowRight style={{ color: 'var(--brand-700)', fontSize: '0.9rem' }} /> Thoughtful visual hierarchy with calm, spacious layouts.</li>
            <li className="flex items-center gap-3"><FaArrowRight style={{ color: 'var(--brand-700)', fontSize: '0.9rem' }} /> Responsive behavior that works cleanly on every screen size.</li>
            <li className="flex items-center gap-3"><FaArrowRight style={{ color: 'var(--brand-700)', fontSize: '0.9rem' }} /> Professional tone and detailed content instead of short placeholder blocks.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function AboutPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build digital experiences that feel deliberate and premium."
        description="Our focus is not just aesthetics. We shape the content, structure, and interaction model so the page feels complete, readable, and business-ready from the first scroll."
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">What drives us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">Three things we keep consistent on every project</h2>
          <p className="mt-4 max-w-xl text-slate-600">
            The work looks better when the thinking is clear. These three principles shape the structure, voice, and quality of every page.
          </p>
        </article>

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-orange-200 bg-orange-50 p-5 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-200 text-orange-950">
              <FaBullseye />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Mission</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Design and build web experiences that help serious businesses present themselves with clarity and confidence.
            </p>
          </article>

          <article className="rounded-2xl border border-orange-200 bg-orange-100 p-5 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-200 text-orange-950">
              <FaGem />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Values</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Clear communication, strong craft, thoughtful decisions, and a bias toward practical delivery.
            </p>
          </article>

          <article className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-200 text-orange-950">
              <FaShieldAlt />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Standards</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Accessible, responsive, maintainable, and measured against real outcomes rather than decoration alone.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-200 text-orange-950">
              <FaChartLine />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Timeline</p>
              <h2 className="font-display text-3xl font-semibold text-slate-950">How the studio has evolved</h2>
            </div>
          </div>

          <p className="max-w-xl text-slate-600">
            The journey moved from simple landing pages to clearer systems, stronger layouts, and more thoughtful digital experiences.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="text-2xl font-semibold text-slate-950">2022</p>
              <p className="mt-2 text-sm text-slate-700">Started with small business websites and content-led landing pages.</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-100 p-4">
              <p className="text-2xl font-semibold text-slate-950">2024</p>
              <p className="mt-2 text-sm text-slate-700">Expanded into product-led experiences, design systems, and launch support.</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="text-2xl font-semibold text-slate-950">2026</p>
              <p className="mt-2 text-sm text-slate-700">Focused on polished, responsive, high-trust websites for growing teams.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-orange-50 p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-200 text-orange-950">
              <FaUsers />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Team</p>
              <h3 className="text-2xl font-semibold text-slate-950">Small team, senior thinking</h3>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {team.map((person) => (
              <div key={person.name} className="flex items-center gap-4 rounded-xl border border-orange-200 bg-white p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-300 text-sm font-bold text-orange-950">
                  {person.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-950">{person.name}</p>
                  <p className="text-sm text-slate-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-orange-700">Working style</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900">We keep the process calm and accountable.</h2>
            <p className="mt-3 text-slate-600">A collaborative, disciplined approach with clear milestones and practical handoffs so projects ship on time.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-orange-200 bg-white p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><FaCheckCircle /></div>
                <div>
                  <p className="font-semibold text-slate-900">Clear scope</p>
                  <p className="mt-1 text-sm text-slate-600">Every page and component is defined before build work begins.</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-orange-200 bg-white p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><FaUsers /></div>
                <div>
                  <p className="font-semibold text-slate-900">Feedback loops</p>
                  <p className="mt-1 text-sm text-slate-600">Short review rounds keep decisions fast and the design aligned.</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-orange-200 bg-white p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><FaCogs /></div>
                <div>
                  <p className="font-semibold text-slate-900">Strong handoff</p>
                  <p className="mt-1 text-sm text-slate-600">We leave documentation, clean code, and practical next steps for your team.</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-orange-200 bg-white p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><FaChartLine /></div>
                <div>
                  <p className="font-semibold text-slate-900">Post-launch</p>
                  <p className="mt-1 text-sm text-slate-600">We stay available for monitoring, updates, and improvements.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        </section>
    </>
  );
}

function ServicesPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything needed for a professional, responsive web presence."
        description="Our services are structured to cover strategy, design, development, and support so your site stays polished and useful after launch."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Service</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">{service.name}</h3>
            <p className="mt-3 text-slate-600">{service.desc}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0" style={{ color: 'var(--brand-700)', fontSize: '1rem' }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1fr_1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Packages</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">Choose the right engagement level</h2>
          <p className="mt-3 text-slate-600">Each package is flexible, but the structure gives clients a clear starting point.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-xl font-semibold text-slate-950">{pkg.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{pkg.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pkg.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Delivery</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">What happens on a typical project</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoPanel title="Week 1" text="Scope, content direction, goals, and page structure." />
            <InfoPanel title="Week 2-3" text="Visual direction, page sections, and responsive component work." />
            <InfoPanel title="Week 4" text="Review, refinement, QA, and launch preparation." />
            <InfoPanel title="After launch" text="Monitoring, updates, and optional monthly improvements." />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage({ currentPage }) {
  return (
    <>
      <PageHero
        eyebrow={currentPage}
        title="Let's turn your brief into a polished website."
        description="Share your timeline, goals, and priorities. We will respond with a clear next step and a structure that feels practical from the start."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Full name" placeholder="Your full name" />
            <FormField label="Work email" placeholder="name@company.com" type="email" />
            <FormField label="Company" placeholder="Your company" />
            <FormField label="Project timeline" placeholder="When do you want to start?" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Project goals</label>
            <textarea
              rows="7"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
              placeholder="Describe what you want to improve, the audience, and any constraints."
            />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ActionButton type="submit">Send inquiry</ActionButton>
            <SecondaryButton>Schedule a call</SecondaryButton>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 panel-dark p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-800">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900">Direct details</h2>
            <div className="mt-6 space-y-4 text-slate-800">
              <p><strong className="text-slate-900">Email:</strong> hello@raphtechstudios.com</p>
              <p><strong className="text-slate-900">Phone:</strong> +254 748 211 821</p>
              <p><strong className="text-slate-900">Location:</strong> Nairobi, Kenya</p>
              <p><strong className="text-slate-900">Reply time:</strong> Within 24 business hours</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">FAQ</p>
            <div className="mt-4 space-y-3">
              {faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer list-none font-medium text-slate-950">{item.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Map</p>
            <div className="mt-4">
              <MapComponent />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}


//could have made component files for the comps below and put
//in components folfder but that seemed a bit overkill for this small proj
function PageHero({ eyebrow, title, description }) {
  return (
    <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
      <span className="inline-flex rounded-xl px-4 py-2 text-sm font-medium" style={{ background: '#fb923c', color: '#fff' }}>
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h1 className="font-display max-w-4xl text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}



function NavButton({ route, active, onNavigate }) {
  return (
    <button
      onClick={() => onNavigate(route)}
      className={'rounded-lg px-4 py-2 text-sm font-medium transition'}
      style={active ? { background: '#fb923c', color: '#7c2d12', boxShadow: 'var(--soft)' } : undefined}
    >
      {routes[route]}
    </button>
  );
}

function ActionButton({ children, ...props }) {
  return (
    <button
      type={props.type || 'button'}
      {...props}
      className="btn-primary"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, ...props }) {
  return (
    <button
      type={props.type || 'button'}
      {...props}
      className="btn-secondary "
    >
      {children}
    </button>
  );
}

function InfoPanel({ title, text }) {
  // choose an icon by matching title keywords
  let Icon = FaBullseye;
  if (/performance|accessibility/i.test(title)) Icon = FaChartLine;
  if (/reliable|growth|foundations/i.test(title)) Icon = FaShieldAlt;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-700">
          <Icon />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{text}</p>
        </div>
      </div>
    </article>
  );
}

function MiniFeature({ title, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function TimelineItem({ year, text }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4">
      <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold text-orange-950" style={{ background: '#fb923c' }}>
        {year}
      </div>
      <p className="pt-1 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function Callout({ title, text }) {
  return (
    <div className="callout">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-800">{text}</p>
    </div>
  );
}

function FormField({ label, type = 'text', placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
      />
    </label>
  );
}

function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    if (!mapboxToken || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [36.8219, -1.2921], // Nairobi, Kenya coordinates
      zoom: 12,
    });

    // Add marker for Nairobi
    new mapboxgl.Marker({ color: '#0ea5a4' })
      .setLngLat([36.8219, -1.2921])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('RaphTech Studios · Nairobi, Kenya'))
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  if (!mapboxToken) {
    return (
      <div className="mapbox-container flex items-center justify-center bg-orange-100 px-6 text-center text-sm text-slate-700">
        Add <strong className="mx-1 text-slate-900">VITE_MAPBOX_TOKEN</strong> to your environment to show the live map.
      </div>
    );
  }

  return <div ref={mapContainer} id="map" className="mapbox-container" />;
}

function getPath() {
  return window.location.pathname;
}

export default App;
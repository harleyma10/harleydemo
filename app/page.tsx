import Image from "next/image";

/* ───── tiny inline SVG icons (no external deps) ───── */
function IconChart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconBox() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
    </svg>
  );
}

/* ───── data ───── */

const features = [
  {
    icon: <IconChart />,
    title: "Real-Time Analytics",
    desc: "Track revenue, conversion rates, and customer behavior with live dashboards that update in real time.",
  },
  {
    icon: <IconBox />,
    title: "Product Management",
    desc: "Add, edit, and organize your entire catalog with bulk actions, variant support, and smart categories.",
  },
  {
    icon: <IconTruck />,
    title: "Order Fulfillment",
    desc: "Streamline picking, packing, and shipping with automated workflows and carrier integrations.",
  },
  {
    icon: <IconShield />,
    title: "Secure Payments",
    desc: "PCI-compliant checkout with support for Stripe, PayPal, and 50+ global payment methods.",
  },
  {
    icon: <IconBolt />,
    title: "Blazing Fast",
    desc: "Sub-second page loads powered by edge caching and optimized APIs so your customers never wait.",
  },
  {
    icon: <IconUsers />,
    title: "Team Collaboration",
    desc: "Role-based permissions, activity logs, and shared workspaces keep your whole team in sync.",
  },
];

const stats = [
  { value: "10K+", label: "Active Stores" },
  { value: "$2B+", label: "GMV Processed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9", label: "Avg. Rating" },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    desc: "Perfect for new shops getting started.",
    features: [
      "Up to 500 products",
      "Basic analytics",
      "Email support",
      "1 team member",
      "Standard checkout",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    desc: "For growing brands that need more power.",
    features: [
      "Unlimited products",
      "Advanced analytics & reports",
      "Priority support",
      "10 team members",
      "Custom checkout",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored solutions for high-volume sellers.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited team members",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      "Harley Demo transformed how we run our online store. Revenue is up 40% since we switched.",
    name: "Sarah Chen",
    role: "Founder, Bloom & Co",
  },
  {
    quote:
      "The analytics alone are worth the price. We finally understand where our customers come from.",
    name: "Marcus Johnson",
    role: "Head of Growth, UrbanGear",
  },
  {
    quote:
      "Setup took 15 minutes. Our team was productive on day one. Best dashboard we have ever used.",
    name: "Priya Patel",
    role: "COO, FreshBite Foods",
  },
];

/* ───── page ───── */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ────── Nav ────── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-indigo-600">
            Harley&nbsp;Demo
          </a>
          <nav className="hidden gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Testimonials
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 sm:inline-block"
            >
              Log in
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ────── Hero ────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 text-center lg:pt-32">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 mb-6">
            Now in public beta &mdash; free for 14 days
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Your e-commerce empire,{" "}
            <span className="text-indigo-600">one&nbsp;dashboard</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Manage products, orders, and analytics from a single, beautifully
            crafted dashboard. Built for speed, designed for humans.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#cta"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-500 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition"
            >
              See Features
            </a>
          </div>
        </div>

        {/* hero image */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="Dashboard showing charts, revenue metrics, and order data"
              width={1200}
              height={675}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ────── Stats ────── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────── Features ────── */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to sell online
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From inventory to insights, our platform gives you the tools to
              grow &mdash; without the complexity.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── Screenshot / Social-proof ────── */}
      <section className="bg-indigo-600">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Actionable insights at a glance
            </h2>
            <p className="mt-4 text-indigo-100 text-lg leading-relaxed">
              Our analytics engine breaks down your sales, traffic, and
              customer trends so you can make smarter decisions &mdash; faster.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Revenue & profit breakdowns",
                "Customer lifetime value tracking",
                "Conversion funnel analysis",
                "Automated weekly reports",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-indigo-100">
                  <span className="text-indigo-300">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/analytics.jpg"
              alt="Analytics dashboard showing traffic and conversion data"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ────── Testimonials ────── */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by thousands of sellers
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── Pricing ────── */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              No hidden fees. Cancel anytime. Start with a 14-day free trial on
              any plan.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition ${
                  p.highlighted
                    ? "border-indigo-600 ring-2 ring-indigo-600 bg-white"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{p.desc}</p>
                <p className="mt-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-indigo-600">
                        <IconCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition ${
                    p.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── CTA ────── */}
      <section id="cta" className="bg-indigo-600">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to grow your store?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100 text-lg">
            Join 10,000+ merchants who run their business on Harley Demo. Start
            your free 14-day trial today &mdash; no credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-md hover:bg-indigo-50 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="rounded-lg border border-indigo-400 px-8 py-3.5 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* ────── Footer ────── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-lg font-bold text-indigo-600">Harley&nbsp;Demo</p>
              <p className="mt-2 text-sm text-gray-500">
                The all-in-one e-commerce dashboard for modern sellers.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-gray-900">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Integrations</a></li>
                <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Harley Demo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

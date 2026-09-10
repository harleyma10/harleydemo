"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need a credit card to start the free trial?",
    answer:
      "No. Every plan includes a 14-day free trial and we never ask for card details up front. Add a payment method whenever you are ready to keep going.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most stores are live in under 15 minutes. Connect your existing catalog, pick a checkout flow, and invite your team — no engineering work required.",
  },
  {
    question: "Can I import products from another platform?",
    answer:
      "Yes. We support one-click imports from Shopify, WooCommerce, BigCommerce, and CSV files, including variants, images, and inventory levels.",
  },
  {
    question: "Which payment providers do you support?",
    answer:
      "Checkout is PCI-compliant and works with Stripe, PayPal, and 50+ global payment methods, including Apple Pay, Google Pay, and local wallets.",
  },
  {
    question: "Can I change or cancel my plan later?",
    answer:
      "Upgrade, downgrade, or cancel at any time from your billing settings. Changes take effect immediately and we prorate the difference automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All data is encrypted in transit and at rest, backed by role-based permissions, activity logs, and a 99.9% uptime SLA on every paid plan.",
  },
];

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Everything you need to know about the product and billing. Can&rsquo;t
            find an answer? Talk to our team.
          </p>
        </div>

        <div className="mt-16 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-gray-50"
                  >
                    <span className="text-base font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="text-indigo-600">
                      <IconChevron open={open} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!open}
                  className="px-6 pb-5 text-sm leading-relaxed text-gray-500"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

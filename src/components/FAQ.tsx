import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  "Subscriptions & Billing",
  "Family Plan",
  "Outfit Tracking & Scanning",
  "App Issues",
  "Health & Style Sync",
  "Notifications",
  "Referrals & Collabs",
];

const faqData = {
  "Subscriptions & Billing": [
    {
      question: "I paid but the app still shows a paywall. What gives?",
      answer: "Try restoring your purchases in the app settings. If that doesn't work, contact our support team and we'll resolve it.",
    },
    {
      question: "Can I switch my subscription from iPhone to Android (or vice versa)?",
      answer: "Yes, as long as you log in with the same account, your subscription will carry over across platforms.",
    },
    {
      question: "How do I cancel my subscription or free trial?",
      answer: "You can cancel anytime through your Apple App Store or Google Play Store subscription settings.",
    },
    {
      question: "I want a refund. How do I get one?",
      answer: "Refunds are processed by Apple or Google. Please request a refund through their respective support pages.",
    }
  ],
  "Family Plan": [
    {
      question: "I bought the family plan but my invites just see a free trial page",
      answer: "Ensure they clicked the exact invite link you sent, and that they haven't already used a free trial on their account.",
    }
  ],
  "Outfit Tracking & Scanning": [
    {
      question: "The app scanned my outfit totally wrong. It thinks my outfit is something else entirely",
      answer: "You can manually correct the item categories and colors in the app. This helps our AI learn and improve!",
    },
    {
      question: "I'm getting an \"items were not processed\" error on every scan",
      answer: "Make sure you have a stable internet connection. If the issue persists, try clearing the app cache or updating to the latest version.",
    },
    {
      question: "Can I import my wardrobe history from another app?",
      answer: "Currently, we do not support direct imports from other apps, but we are working on this feature for a future update.",
    }
  ],
  "App Issues": [
    {
      question: "What are the minimum requirements to run LookAI?",
      answer: "LookAI requires iOS 15 or later for Apple devices, and Android 10 or later for Android devices.",
    },
    {
      question: "The app keeps crashing or won't open",
      answer: "Try reinstalling the app and ensure your OS is up to date. If the problem continues, reach out to our support team.",
    },
    {
      question: "I reinstalled the app and all my data is gone",
      answer: "Make sure you logged in with the exact same email address or sign-in method you used originally. Your data is safely stored in the cloud.",
    },
    {
      question: "My PDF export isn't working",
      answer: "Check that you have granted LookAI permission to save files to your device. If it still fails, try exporting a smaller date range.",
    }
  ],
  "Health & Style Sync": [
    {
      question: "My outfits aren't showing up in LookAI",
      answer: "Pull down on the home screen to refresh. If they still don't appear, try logging out and back in.",
    },
    {
      question: "My scan count is doubled or tripled",
      answer: "This occasionally happens if you scan the same item from multiple angles without grouping them. You can delete duplicate scans in your history.",
    }
  ],
  "Notifications": [
    {
      question: "I'm getting way too many notifications",
      answer: "You can customize your notification preferences in the app settings, or disable them entirely in your phone settings.",
    }
  ],
  "Referrals & Collabs": [
    {
      question: "I skipped the referral code during signup. Can I still enter it?",
      answer: "Yes, you can enter a referral code in the app settings within 48 hours of creating your account.",
    },
    {
      question: "Is it possible to get a custom promo code?",
      answer: "We occasionally offer custom promo codes to partners and creators. Feel free to reach out if you have a proposal!",
    },
    {
      question: "I'm a creator and want to work with LookAI",
      answer: "We'd love to hear from you! Please email us at collabs@lookai.app with your media kit and social links.",
    }
  ]
};

export default function FAQ({ compact = false }: { compact?: boolean }) {
  // For compact mode, we just want a flat list of 5-6 common questions
  const compactFaqs = [
    faqData["Subscriptions & Billing"][0],
    faqData["Outfit Tracking & Scanning"][0],
    faqData["App Issues"][0],
    faqData["Health & Style Sync"][0],
    faqData["Subscriptions & Billing"][2]
  ];

  return (
    <div className={`w-full bg-[#fcfcfc] ${compact ? 'py-16' : 'pb-24'}`}>
      {/* Header Section */}
      <section className={`${compact ? 'pb-8' : 'pt-20 pb-10'} px-6`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${compact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'} font-bold text-[#1d1d1f] tracking-tight mb-4`}>
            Frequently asked questions
          </h2>
          {!compact && (
            <>
              <p className="text-lg text-[#6e6e73] mb-4">
                Everything about billing, scanning, syncing, and the rest. Can't find your answer? Real humans are one email away.
              </p>
              <p className="text-sm text-[#86868b]">
                Last updated July 2026
              </p>
            </>
          )}
        </div>
      </section>

      {/* Categories Filter/Nav (Only in full mode) */}
      {!compact && (
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <a 
                key={cat} 
                href={`#${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-[#1d1d1f] hover:bg-gray-50 transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Sections */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {compact ? (
            <Accordion className="space-y-4 w-full">
              {compactFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <AccordionTrigger className="text-[#1d1d1f] hover:no-underline font-medium py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6e6e73]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            Object.entries(faqData).map(([category, questions]) => (
              <div key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-24">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6">
                  {category}
                </h3>
                <Accordion className="space-y-4 w-full">
                  {questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-white rounded-2xl px-6 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    >
                      <AccordionTrigger className="text-[#1d1d1f] hover:no-underline font-medium py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6e6e73]">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Compact Mode Footer: See all FAQs */}
      {compact && (
        <section className="px-6 mt-10">
          <div className="max-w-3xl mx-auto flex justify-center">
            <Link 
              href="/faq"
              className="inline-flex items-center gap-2 text-[#1d1d1f] font-medium hover:underline"
            >
              See all FAQs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Still Stuck Section (Only in full mode) */}
      {!compact && (
        <section className="px-6 mt-24">
          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 sm:p-14 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
              Still stuck?
            </h3>
            <p className="text-[#6e6e73] mb-8 max-w-md mx-auto">
              Our support team is real humans who actually care. Reach out and we'll figure it out.
            </p>
            <a 
              href="mailto:support@lookai.app"
              className="inline-flex items-center justify-center bg-[#1d1d1f] hover:bg-black text-white rounded-full px-8 h-12 font-medium transition-colors"
            >
              Email support@lookai.app
            </a>
          </div>
        </section>
      )}
    </div>
  );
}

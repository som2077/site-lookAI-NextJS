import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "I paid but the app still shows a paywall. What gives?",
    answer: "Please try restoring your purchases in the app settings. If the issue persists, contact our support team and we'll fix it immediately.",
  },
  {
    question: "How do I cancel my subscription or free trial?",
    answer: "You can manage or cancel your subscription directly through your device's App Store or Google Play Store settings.",
  },
  {
    question: "I want a refund. How do I get one?",
    answer: "Refunds are handled directly by Apple or Google depending on your platform. You can request a refund through their respective support pages.",
  },
  {
    question: "The app scanned my outfit totally wrong. It thinks my outfit is something else entirely",
    answer: "AI isn't perfect! You can manually edit the scanned items in the app to correct them and help train our model.",
  },
  {
    question: "The app keeps crashing or won't open",
    answer: "Try force closing the app, making sure you have the latest update installed, and restarting your device. If it still crashes, reach out to support.",
  },
  {
    question: "My outfits aren't showing up in LookAI",
    answer: "Make sure you are logged into the correct account and have a stable internet connection so your outfits can sync from the cloud.",
  }
];

export default function FAQSection() {
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[#6e6e73]">
            The questions our support team hears most.
          </p>
        </div>
        
        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 border-none shadow-sm"
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

        <div className="mt-10 flex justify-center">
          <Link href="/faq">
            <Button variant="outline" className="rounded-full bg-white hover:bg-zinc-50 border-zinc-200 px-6 font-medium text-[#1d1d1f] group h-12">
              See all FAQs <ArrowRight className="ml-2 h-4 w-4 text-[#6e6e73] group-hover:text-[#1d1d1f] transition-colors" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const features = [
  {
    title: "AI-Powered Recommendations",
    description: "Get personalized style suggestions based on your preferences and body type.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.905L9 18.75l-.813-2.845a4.5 4.5 0 00-3.09-3.09L2.25 12l2.845-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.845a4.5 4.5 0 003.09 3.09L15.75 12l-2.845.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3 3 0 00-2.33-2.33L14.25 6l1.036-.259a3 3 0 002.33-2.33L18 2.25l.259 1.035a3 3 0 002.33 2.33L21.75 6l-1.036.259a3 3 0 00-2.33 2.33z" />
      </svg>
    ),
  },
  {
    title: "Virtual Try-On",
    description: "See how outfits look on you before buying — no fitting room needed.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
  {
    title: "Trend Analysis",
    description: "Stay ahead with real-time trend data from top fashion houses.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    avatar: "/avatars/sarah.jpg",
    content: "Look AI completely transformed how I plan my outfits. The AI recommendations are spot-on!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Style Enthusiast",
    avatar: "/avatars/michael.jpg",
    content: "The virtual try-on feature is a game-changer. I've saved so much time and money.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Personal Shopper",
    avatar: "/avatars/emily.jpg",
    content: "I recommend Look AI to all my clients. The trend analysis helps me stay ahead.",
    rating: 4,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-white px-6 py-16 sm:px-8 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column - Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:pr-8">

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="h-full w-full object-cover" />
                </div>
                <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" className="h-full w-full object-cover" />
                </div>
                <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" className="h-full w-full object-cover" />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-800 ml-1">
                Loved by 5M users with <span className="text-yellow-400">⭐</span> 4.9 rating
              </span>
            </div>

            {/* Headlines */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold tracking-tight text-[#1d1d1f] sm:text-6xl lg:text-6xl">
                Introducing Look AI
              </h1>
              <h2 className="text-4xl font-normal  text-[#1d1d1f] sm:text-5xl lg:text-6xl">
                Style yourself <br className="hidden lg:block" />
                with just a picture
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-500  ">
              Meet Look AI, the AI-powered app for effortless outfit styling. Snap a photo of your clothes and get instant personalized outfit recommendations and wardrobe insights.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start">
              <a href="#" className="inline-block transition-opacity hover:opacity-80">
                <img src="/googleplay.png" alt="Get it on Google Play" className="h-[44px] w-auto rounded-md" />
              </a>
            </div>
          </div>

          {/* Right Column - Visuals */}
          <div className="relative flex justify-center items-center w-full max-w-[600px] mx-auto lg:h-[600px]">
            {/* Abstract Phones Placeholder */}
            <div className="relative w-full h-[500px] bg-zinc-50 rounded-[40px] border-[8px] border-zinc-200 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-0 w-32 h-6 bg-zinc-200 rounded-b-xl"></div>
              <p className="text-zinc-400 font-medium">App Interface Preview</p>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Everything you need to look your best
            </h2>
            <p className="mt-4 text-zinc-600">
              Look AI combines cutting-edge AI with fashion expertise to help you make confident style choices.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-zinc-200 bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-900 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loved by thousands
            </h2>
            <p className="mt-4 text-zinc-400">
              See what our users are saying about Look AI.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white text-black">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-zinc-700">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-700 font-medium text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-black">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Ready to find your perfect look?
          </h2>
          <p className="mt-4 text-zinc-600">
            Join thousands of users who have transformed their style with Look AI.
          </p>
          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-green-600">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Thanks! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Label htmlFor="email" className="sm:w-24 sm:text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Get Early Access
              </Button>
              <p className="text-xs text-zinc-500">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Tabs Section - Demo */}
      <section className="border-y border-zinc-100 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-zinc-600">
              Three simple steps to transform your style.
            </p>
          </div>
          <Tabs defaultValue="step1" className="mx-auto max-w-2xl">
            <TabsList className="mx-auto mb-8 rounded-full bg-zinc-100 p-1.5">
              <TabsTrigger value="step1">Step 1</TabsTrigger>
              <TabsTrigger value="step2">Step 2</TabsTrigger>
              <TabsTrigger value="step3">Step 3</TabsTrigger>
            </TabsList>
            <TabsContent value="step1" className="mx-auto mb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Tell us your style</h3>
                  <p className="mt-2 text-zinc-600">
                    Answer a few quick questions about your preferences, body type, and lifestyle. Our AI learns what makes you look and feel your best.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="step2" className="mx-auto mb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Get AI recommendations</h3>
                  <p className="mt-2 text-zinc-600">
                    Receive personalized outfit suggestions, trend reports, and virtual try-on previews tailored just for you.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="step3" className="mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Shop with confidence</h3>
                  <p className="mt-2 text-zinc-600">
                    Buy what you love with confidence. Track your style evolution and get smarter recommendations over time.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}

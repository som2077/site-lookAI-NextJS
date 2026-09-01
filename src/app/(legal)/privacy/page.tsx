export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 sm:px-10 lg:px-20 text-[#1d1d1f]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy for LookAI</h1>
        <p className="text-gray-500 mb-10"><strong>Last Updated:</strong> September 1, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="leading-relaxed mb-4">
            Welcome to LookAI ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the manner in which LookAI collects, uses, maintains, and discloses information collected from users (each, a "User") of the LookAI mobile application (the "App").
          </p>
          <p className="leading-relaxed">
            By accessing or using the App, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use the App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="leading-relaxed mb-4">
            We collect information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("Personal Information"). We collect the following categories of information:
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">A. Information You Provide to Us</h3>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2 mb-4">
            <li><strong>Account Information:</strong> We use passwordless authentication. When you register, we collect your email address, phone number (if applicable), and authentication tokens provided by our identity provider (Clerk).</li>
            <li><strong>Profile Information:</strong> We collect information you voluntarily provide to build your profile, such as your display name, username, body type, preferred clothing fit, style preferences, and aesthetic choices.</li>
            <li><strong>User Content:</strong> We collect images of your clothing ("Wardrobe Images") that you upload or capture using your device’s camera. We also collect any text, comments, reactions, or photos you post to the LookAI community feed.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">B. Information Collected Automatically</h3>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2">
            <li><strong>Location Data:</strong> With your permission, we collect coarse and/or fine location data from your device to fetch accurate, hyper-local weather forecasts (via Open-Meteo). This is essential for providing weather-appropriate outfit recommendations.</li>
            <li><strong>Device Information:</strong> We collect information about your mobile device, including hardware model, operating system version, unique device identifiers, IP address, and mobile network information.</li>
            <li><strong>Usage Data:</strong> We automatically collect data regarding your interaction with the App, such as the features you use, the time and duration of your activities, your Style Score progression, and error logs (via Sentry).</li>
            <li><strong>Purchase History:</strong> If you subscribe to Premium Services, we collect transaction history (via RevenueCat), but we do not process or store your credit card information.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="leading-relaxed mb-2">We use the information we collect for the following business and commercial purposes:</p>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2">
            <li><strong>Service Provision:</strong> To create and manage your account, digitize your wardrobe, generate AI-powered outfit recommendations, and calculate your Comfort Score based on real-time weather.</li>
            <li><strong>AI Processing:</strong> To analyze your Wardrobe Images using third-party artificial intelligence models to automatically detect clothing categories, occasions, colors, and to remove image backgrounds.</li>
            <li><strong>Community Features:</strong> To operate the community feed, allow you to share posts, and interact with other users.</li>
            <li><strong>Personalization:</strong> To tailor the App experience to your specific body type, weather, and style preferences.</li>
            <li><strong>Analytics & Improvement:</strong> To understand how users interact with the App, monitor performance, troubleshoot crashes, and develop new features.</li>
            <li><strong>Communication:</strong> To send you push notifications regarding your daily outfits, streaks, system updates, and promotional offers (which you can opt out of at any time).</li>
            <li><strong>Security & Compliance:</strong> To prevent fraud, enforce our Terms of Use, and comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Third-Party Service Providers</h2>
          <p className="leading-relaxed mb-2">
            We rely on trusted third-party providers to operate LookAI. We share your data with them strictly for the purposes outlined below. These providers are bound by confidentiality obligations:
          </p>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2">
            <li><strong>Clerk:</strong> For identity verification, secure authentication, and session management.</li>
            <li><strong>Supabase:</strong> For database hosting (PostgreSQL), realtime subscriptions, and secure backend operations.</li>
            <li><strong>Cloudinary:</strong> For cloud storage, optimization, and hosting of your Wardrobe Images and profile pictures.</li>
            <li><strong>AI & Processing APIs (Google Gemini, fal.ai, remove.bg):</strong> To perform computer vision tasks, background removal, label scanning, and virtual try-ons. <em>Note: Images are transmitted to these services solely for request fulfillment. We do not grant these providers the right to train their foundational models on your private data without your explicit consent.</em></li>
            <li><strong>Open-Meteo:</strong> For weather forecasting (requires anonymized geographic coordinates).</li>
            <li><strong>RevenueCat, Apple & Google:</strong> For processing in-app purchases and managing subscription entitlements.</li>
            <li><strong>Sentry:</strong> For capturing crash reports and performance monitoring to ensure App stability.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Data Retention and Deletion</h2>
          <p className="leading-relaxed mb-2">We retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2">
            <li><strong>Active Accounts:</strong> We keep your profile data, wardrobe images, and community posts as long as your account is active.</li>
            <li><strong>Account Deletion:</strong> You can request account deletion at any time via the App settings. Upon receiving a deletion request, we will delete your Personal Information from our active databases and revoke access to your stored images, subject to legal obligations and disaster recovery backups.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Security of Your Information</h2>
          <p className="leading-relaxed">
            We implement reasonable administrative, technical, and physical security measures to protect your Personal Information. This includes securing our database with Row Level Security (RLS) policies in Supabase, using HTTPS/TLS encryption for data transmission, and utilizing secure JWT tokens for authentication. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Your Privacy Rights (GDPR & CCPA)</h2>
          <p className="leading-relaxed mb-2">Depending on your location, you may have the following rights regarding your data:</p>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2 mb-4">
            <li><strong>Right to Access:</strong> You can request a copy of the Personal Information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You can correct inaccurate or incomplete data via your profile settings.</li>
            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You can request the deletion of your account and associated data.</li>
            <li><strong>Right to Restrict/Object:</strong> You can object to our processing of your data for specific purposes.</li>
            <li><strong>Right to Data Portability:</strong> You can request your data in a structured, commonly used, and machine-readable format.</li>
          </ul>
          <p className="leading-relaxed">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
          <p className="leading-relaxed">
            The App is not intended for use by children under the age of 13 (or 16 in certain European jurisdictions). We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information and terminate the account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Changes to This Privacy Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date and, if necessary, providing a prominent notice within the App. Your continued use of the App following the posting of changes constitutes your acceptance of such changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="leading-relaxed mb-2">
            If you have questions, comments, or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="leading-relaxed">
            <strong>Email:</strong> <a href="mailto:support@lookai.com" className="text-blue-600 hover:underline">support@lookai.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

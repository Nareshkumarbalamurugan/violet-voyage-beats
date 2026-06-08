import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Violet Voyage ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.

These terms apply to all visitors, users, and others who access or use the Service. Violet Voyage is developed and maintained by Krishna Sangavi.`,
  },
  {
    title: "2. Description of Service",
    content: `Violet Voyage is a curated travel discovery platform that provides:

• Destination guides and cultural information
• Food, music, and attraction recommendations
• An interactive Journey Diary for personal travel memories
• Travel planning tools including budget calculator, currency converter, and packing checklist
• Travel blog articles and editorial content

The Service is provided for informational and entertainment purposes. We make no warranties that the information provided is complete, accurate, or up-to-date.`,
  },
  {
    title: "3. User Accounts",
    content: `**Registration:** You may create an account to access personalised features. You are responsible for maintaining the confidentiality of your account credentials.

**Accuracy:** You agree to provide accurate and complete information when creating your account. You are responsible for all activity that occurs under your account.

**Security:** You must notify us immediately of any unauthorised use of your account. We are not liable for any loss resulting from unauthorised use of your account that occurs before notification.

**Termination:** We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: "4. User Content",
    content: `Journey Diary entries and other content you create on Violet Voyage are stored locally in your browser. We do not claim ownership of your personal content.

You are solely responsible for the content you create and share. By using the Service, you confirm that your content does not violate any applicable laws or third-party rights.`,
  },
  {
    title: "5. Intellectual Property",
    content: `The Service and its original content, features, and functionality are owned by Krishna Sangavi and are protected by applicable intellectual property laws.

**Third-party content:** Destination images are sourced from Unsplash under their free licence. Music platform links connect to Spotify and Apple Music, which are independent services with their own terms.

**Permitted use:** You may use the Service for personal, non-commercial purposes. You may not reproduce, distribute, or create derivative works without express written permission.`,
  },
  {
    title: "6. External Links",
    content: `The Service contains links to external websites including Spotify, Apple Music, Google Maps, and Unsplash. These links are provided for convenience and do not constitute an endorsement.

We have no control over the content or practices of external sites and accept no responsibility for them. Your use of external sites is governed by their respective terms and privacy policies.`,
  },
  {
    title: "7. Disclaimers",
    content: `**Travel information:** Destination guides, safety ratings, visa information, and travel advice are provided for general reference only. Always verify current conditions with official government travel advisories before travelling.

**Service availability:** We do not guarantee that the Service will be uninterrupted, error-free, or available at any particular time.

**Demo nature:** Certain features (including authentication, newsletter signup, and contact form) simulate functionality for demonstration purposes and do not connect to live backend services.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by law, Krishna Sangavi and Violet Voyage shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:

• Your use of or inability to use the Service
• Any errors or omissions in the content
• Decisions made based on information provided by the Service
• Travel incidents or outcomes

Your use of the Service is at your sole risk.`,
  },
  {
    title: "9. Privacy",
    content: `Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page. Your continued use of the Service after changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.`,
  },
  {
    title: "12. Contact",
    content: `For questions about these Terms, please contact:

Developer: Krishna Sangavi
Email: hello@violetvoyage.com
Studio: Bengaluru, Karnataka, India`,
  },
];

function TermsPage() {
  return (
    <main className="min-h-screen pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col items-start gap-4"
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <FileText className="h-7 w-7 text-gold" />
            <h1 className="text-4xl font-semibold text-gradient-gold">Terms of Service</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Last updated: June 2026 &nbsp;·&nbsp; Developer: Krishna Sangavi
          </p>
          <p className="text-muted-foreground">
            Please read these Terms of Service carefully before using Violet Voyage. By using the
            Service, you agree to these terms.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-3xl p-6 shadow-soft"
            >
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              <div className="mt-3 space-y-2">
                {section.content.split("\n\n").map((para, pi) => (
                  <p
                    key={pi}
                    className="text-sm leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>')
                        .replace(/^• /gm, "&#8226; "),
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/privacy"
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            Privacy Policy →
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}

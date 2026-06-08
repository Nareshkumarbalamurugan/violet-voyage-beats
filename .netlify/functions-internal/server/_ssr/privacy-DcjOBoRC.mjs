import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { i as Shield } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const sections = [{
  title: "1. Information We Collect",
  content: `We collect information you provide directly to us, including when you create an account, use our services, or contact us for support.

**Account information:** When you register, we collect your name, email address, and the password you create (stored locally in your browser via localStorage — we do not transmit passwords to any server in this demo version).

**Usage data:** We collect information about how you interact with the site, including pages visited, features used, and preferences saved.

**Journey diary content:** Entries you create in your Journey Diary are stored locally in your browser and are not transmitted to our servers.

**Newsletter subscriptions:** If you subscribe to our newsletter, we collect your email address.`
}, {
  title: "2. How We Use Your Information",
  content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Personalise your experience and remember your preferences
• Send you newsletters and travel inspiration (only if you subscribe)
• Respond to your comments, questions, and requests
• Monitor and analyse usage patterns to improve our platform
• Detect and prevent fraudulent or abusive activity`
}, {
  title: "3. Information Sharing",
  content: `We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. We may share your information in the following limited circumstances:

**Service providers:** We may share information with third-party vendors who assist us in operating our website. These parties are contractually obligated to keep your information confidential.

**Legal requirements:** We may disclose your information if required by law or in response to valid requests by public authorities.

**Business transfers:** If Violet Voyage is involved in a merger or acquisition, your information may be transferred as part of that transaction.`
}, {
  title: "4. Cookies and Tracking",
  content: `We use browser localStorage and sessionStorage to store:

• Your authentication session (vv-auth-user)
• Registered account data (vv-auth-users)
• Your theme preference (vv-theme)
• Your Journey Diary entries (vv-journey)
• Session loader state (vv-loaded)

No third-party tracking cookies are used. No advertising networks have access to your data. We do not use Google Analytics or similar tracking services.`
}, {
  title: "5. Data Retention",
  content: `Account data and journey entries are stored in your browser's localStorage and persist until you clear your browser data or explicitly delete them.

You may delete your account at any time by signing out and clearing your browser's localStorage. All associated data will be permanently removed from your device.`
}, {
  title: "6. Security",
  content: `We implement reasonable technical measures to protect your information. However, no internet transmission or electronic storage is 100% secure.

**Important note for the demo version:** Passwords are stored in plain text in localStorage for demonstration purposes only. This is not a secure practice for production applications. In a production deployment, all passwords would be hashed using bcrypt or a similar algorithm, and data would be transmitted over HTTPS with proper server-side validation.`
}, {
  title: "7. Your Rights",
  content: `You have the right to:

• Access the personal information we hold about you
• Correct inaccurate data
• Request deletion of your data
• Withdraw consent for data processing
• Lodge a complaint with a supervisory authority

To exercise any of these rights, contact us at hello@violetvoyage.com.`
}, {
  title: "8. Children's Privacy",
  content: `Violet Voyage is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`
}, {
  title: "9. Changes to This Policy",
  content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting a notice on the site or by email. Your continued use of our services after any changes constitutes acceptance of the updated policy.`
}, {
  title: "10. Contact Us",
  content: `If you have questions about this Privacy Policy or our data practices, please contact:

Developer: Krishna Sangavi
Email: hello@violetvoyage.com
Studio: Bengaluru, Karnataka, India`
}];
function PrivacyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen pb-24 pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mb-10 flex flex-col items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "← Home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-7 w-7 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold text-gradient-gold", children: "Privacy Policy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Last updated: June 2026  ·  Developer: Krishna Sangavi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "At Violet Voyage, we take your privacy seriously. This policy describes how we collect, use, and protect information about you when you use our services." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: sections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "glass rounded-3xl p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: section.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: section.content.split("\n\n").map((para, pi) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", dangerouslySetInnerHTML: {
        __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>').replace(/^• /gm, "&#8226; ")
      } }, pi)) })
    ] }, section.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "rounded-full border border-white/20 px-5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground", children: "Terms of Service →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105", children: "Contact us" })
    ] })
  ] }) });
}
export {
  PrivacyPage as component
};

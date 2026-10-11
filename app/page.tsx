"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Check,
  ChevronDown, Globe2, GraduationCap, Headphones, Menu, MessageCircle,
  Plane, ShieldCheck, Sparkles, Star, X
} from "lucide-react";

type Language = "en" | "bn";

const copy = {
  en: {
    nav: ["Home", "Destinations", "Services", "About us", "Our team"],
    badge: "YOUR FUTURE HAS NO BORDERS",
    heroTitle: "Your global journey starts",
    heroAccent: "with the right guidance.",
    heroText: "Personalized study abroad and student visa guidance for ambitious students from Bangladesh.",
    primary: "Book a free consultation",
    secondary: "Explore destinations",
    trust: "Trusted guidance. Clear next steps. Your future, worldwide.",
    countriesLabel: "POPULAR DESTINATIONS",
    countriesTitle: "Find your place in the world.",
    countriesText: "Explore study opportunities in leading destinations and get a plan that fits your goals.",
    servicesLabel: "HOW WE HELP",
    servicesTitle: "From first question to take-off.",
    servicesText: "A thoughtful, transparent process that keeps you informed at every step.",
    aboutLabel: "A PARTNER IN YOUR JOURNEY",
    aboutTitle: "Big dreams deserve a clear plan.",
    aboutText: "We help students understand their options, prepare stronger applications, and move forward with confidence. Our approach is personal, practical, and focused on your goals.",
    teamLabel: "MEET THE PEOPLE BEHIND YOUR PLAN",
    teamTitle: "Real people. Personal guidance.",
    teamText: "Get support from a team that cares about your next chapter.",
    testimonialsLabel: "STUDENT STORIES",
    testimonialsTitle: "A little confidence goes a long way.",
    contactLabel: "LET'S TALK ABOUT YOUR FUTURE",
    contactTitle: "Your next chapter could start today.",
    contactText: "Tell us a little about your plans. Our team will help you understand the next steps.",
    formName: "Your full name",
    formEmail: "Email address",
    formPhone: "Phone number",
    formCountry: "Preferred destination",
    formService: "What do you need help with?",
    formMessage: "Tell us about your study plans (optional)",
    submit: "Request a consultation",
    footer: "Helping Bangladeshi students move forward with clarity and confidence.",
    footerLinks: "Explore",
    footerContact: "Contact",
    disclaimer: "Visa decisions are made by the relevant government authorities. We provide guidance, not guarantees.",
    success: "Thanks! Your request has been noted in this demo. Backend integration will be added in the next phase."
  },
  bn: {
    nav: ["হোম", "গন্তব্য", "সেবাসমূহ", "আমাদের সম্পর্কে", "টিম"],
    badge: "আপনার ভবিষ্যতের কোনো সীমানা নেই",
    heroTitle: "আপনার বিশ্বজয়ের যাত্রা শুরু",
    heroAccent: "হোক সঠিক পরামর্শে।",
    heroText: "বাংলাদেশি শিক্ষার্থীদের জন্য ব্যক্তিগত স্টাডি অ্যাব্রড ও স্টুডেন্ট ভিসা গাইডেন্স।",
    primary: "ফ্রি কনসালটেশন বুক করুন",
    secondary: "গন্তব্য দেখুন",
    trust: "বিশ্বস্ত পরামর্শ। পরিষ্কার পরিকল্পনা। বিশ্বজুড়ে আপনার ভবিষ্যৎ।",
    countriesLabel: "জনপ্রিয় গন্তব্য",
    countriesTitle: "বিশ্বের কোথায় আপনার ঠিকানা?",
    countriesText: "আপনার লক্ষ্য অনুযায়ী জনপ্রিয় দেশে পড়াশোনার সুযোগ ও পরিকল্পনা খুঁজে নিন।",
    servicesLabel: "যেভাবে আমরা সাহায্য করি",
    servicesTitle: "প্রথম প্রশ্ন থেকে বিদেশযাত্রা পর্যন্ত।",
    servicesText: "প্রতিটি ধাপে পরিষ্কার ধারণা ও ব্যক্তিগত সহায়তার জন্য সাজানো প্রক্রিয়া।",
    aboutLabel: "আপনার যাত্রার সঙ্গী",
    aboutTitle: "বড় স্বপ্নের জন্য চাই পরিষ্কার পরিকল্পনা।",
    aboutText: "আমরা শিক্ষার্থীদের সুযোগ বুঝতে, আবেদন প্রস্তুত করতে এবং আত্মবিশ্বাস নিয়ে এগিয়ে যেতে সাহায্য করি। আমাদের পরামর্শ ব্যক্তিগত, বাস্তবসম্মত এবং আপনার লক্ষ্যের ওপর নির্ভরশীল।",
    teamLabel: "আপনার পরিকল্পনার পেছনের মানুষগুলো",
    teamTitle: "মানুষের মতো যত্ন, ব্যক্তিগত পরামর্শ।",
    teamText: "আপনার ভবিষ্যৎ নিয়ে আন্তরিক একটি টিমের কাছ থেকে সহায়তা নিন।",
    testimonialsLabel: "শিক্ষার্থীদের অভিজ্ঞতা",
    testimonialsTitle: "আত্মবিশ্বাসই অনেক দূর এগিয়ে দেয়।",
    contactLabel: "আপনার ভবিষ্যৎ নিয়ে কথা বলি",
    contactTitle: "আপনার নতুন অধ্যায় আজই শুরু হতে পারে।",
    contactText: "আপনার পরিকল্পনা সম্পর্কে কিছু তথ্য দিন। পরবর্তী পদক্ষেপ বুঝতে আমাদের টিম সাহায্য করবে।",
    formName: "আপনার পুরো নাম",
    formEmail: "ইমেইল ঠিকানা",
    formPhone: "ফোন নম্বর",
    formCountry: "পছন্দের গন্তব্য",
    formService: "কোন বিষয়ে সাহায্য চান?",
    formMessage: "আপনার পড়াশোনার পরিকল্পনা (ঐচ্ছিক)",
    submit: "কনসালটেশন অনুরোধ করুন",
    footer: "বাংলাদেশি শিক্ষার্থীদের আত্মবিশ্বাস ও স্বচ্ছতার সঙ্গে এগিয়ে যেতে সাহায্য করি।",
    footerLinks: "দ্রুত লিংক",
    footerContact: "যোগাযোগ",
    disclaimer: "ভিসার সিদ্ধান্ত সংশ্লিষ্ট সরকারি কর্তৃপক্ষ নেয়। আমরা পরামর্শ দিই, ভিসার নিশ্চয়তা দিই না।",
    success: "ধন্যবাদ! এই ডেমোতে আপনার অনুরোধটি দেখানো হয়েছে। পরের ধাপে ব্যাকএন্ড যুক্ত করা হবে।"
  }
};

const destinations = [
  { code: "CA", name: "Canada", sub: "Quality education, welcoming communities", image: "photo-1519832979-6fa984b1c3b8", tag: "STUDENT FAVOURITE", tint: "blue" },
  { code: "UK", name: "United Kingdom", sub: "Globally recognised degrees", image: "photo-1513635269975-59663e0ac1ad", tag: "TOP UNIVERSITIES", tint: "coral" },
  { code: "US", name: "United States", sub: "A world of academic possibilities", image: "photo-1490610476181-d83430b64dcd", tag: "WIDE CHOICE", tint: "gold" },
  { code: "AU", name: "Australia", sub: "Study, explore, and grow", image: "photo-1506973035872-a4ec16b8e8d9", tag: "LIFESTYLE + STUDY", tint: "green" }
];

const services = [
  { icon: GraduationCap, title: "University & course selection", bn: "বিশ্ববিদ্যালয় ও কোর্স নির্বাচন", desc: "Shortlist programs that align with your academic background, interests, and budget.", descBn: "আপনার শিক্ষাগত যোগ্যতা, আগ্রহ ও বাজেট অনুযায়ী উপযুক্ত প্রোগ্রাম বাছাই।", number: "01" },
  { icon: BookOpen, title: "Application preparation", bn: "আবেদন প্রস্তুতি", desc: "Get organised with document checklists, application guidance, and deadline planning.", descBn: "ডকুমেন্ট চেকলিস্ট, আবেদন নির্দেশনা এবং সময়সীমার পরিকল্পনা।", number: "02" },
  { icon: ShieldCheck, title: "Student visa guidance", bn: "স্টুডেন্ট ভিসা গাইডেন্স", desc: "Understand the process, required documents, and how to prepare for your next steps.", descBn: "ভিসা প্রক্রিয়া, প্রয়োজনীয় কাগজপত্র ও পরবর্তী ধাপ সম্পর্কে পরিষ্কার ধারণা।", number: "03" },
  { icon: MessageCircle, title: "Interview & pre-departure", bn: "ইন্টারভিউ ও যাত্রাপূর্ব সহায়তা", desc: "Prepare for interviews and feel more confident about the move ahead.", descBn: "ইন্টারভিউয়ের প্রস্তুতি নিন এবং বিদেশযাত্রার আগে আত্মবিশ্বাসী হন।", number: "04" }
];

const team = [
  { name: "Himu", role: "Founder & Lead Consultant", initials: "NA", image: "photo-1500648767791-00dcc994a43e" },
  { name: "Sheikh Nehal", role: "Student Counsellor", initials: "SR", image: "https://res.cloudinary.com/dvmnbsdec/image/upload/v1791739525/IMG-20261011-WA0021.jpg" },
  { name: "Lina Rahman", role: "Application Advisor", initials: "TH", image: "photo-1506794778202-cad84cf45f1d" }
];

function imageUrl(id: string, width = 1000) {
  if (id === "https://res") {
    return "https://res.cloudinary.com/dvmnbsdec/image/upload/v1791739525/IMG-20261011-WA0021.jpg";
  }

  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = copy[language];
  const bn = language === "bn";

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#" className="brand" aria-label="Global Visa Hub home">
            <span className="brand-mark"><Globe2 size={23} strokeWidth={2.5} /></span>
            <span className="brand-text">global<span>visa</span><b>hub.</b></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            {t.nav.map((item, i) => <button key={item} onClick={() => goTo(["home", "destinations", "services", "about", "team"][i])}>{item}</button>)}
            <button className="mobile-consult" onClick={() => goTo("contact")}>{t.primary}<ArrowUpRight size={16} /></button>
          </nav>
          <div className="nav-actions">
            <button className="language-switch" onClick={() => setLanguage(bn ? "en" : "bn")} aria-label="Switch language">
              <Globe2 size={16} /> {bn ? "EN" : "বাংলা"}
            </button>
            <button className="nav-cta" onClick={() => goTo("contact")}>{t.primary}<ArrowUpRight size={16} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />{t.badge}</div>
          <h1>{t.heroTitle}<br /><span>{t.heroAccent}</span></h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-buttons">
            <button className="button-primary" onClick={() => goTo("contact")}>{t.primary}<ArrowUpRight size={18} /></button>
            <button className="button-text" onClick={() => goTo("destinations")}>{t.secondary}<ArrowDownRight size={17} /></button>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <img src={imageUrl("photo-1534528741775-53994a69daeb", 100)} alt="" />
              <img src={imageUrl("photo-1506794778202-cad84cf45f1d", 100)} alt="" />
              <img src={imageUrl("photo-1500648767791-00dcc994a43e", 100)} alt="" />
              <span>+</span>
            </div>
            <div><div className="proof-stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><p>{t.trust}</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-main"><img src={imageUrl("photo-1523240795612-9a054b0db644", 1100)} alt="Students collaborating on a university campus" /></div>
          <div className="photo-note note-top"><span className="note-icon"><GraduationCap size={19} /></span><div><strong>Make your next move</strong><small>One step at a time</small></div></div>
          <div className="photo-note note-bottom"><span className="note-icon coral-icon"><Plane size={18} /></span><div><strong>Dream. Prepare. Go.</strong><small>Your journey, supported.</small></div></div>
          <div className="hero-stamp"><span>YOUR FUTURE</span><Globe2 size={25} /><span>IS OUT THERE</span></div>
          <div className="hero-scribble"><Sparkles size={26} /></div>
        </div>
        <div className="hero-bottomline"><span>01 / 04</span><div className="line-track"><span /></div><span>LET'S MAKE IT HAPPEN</span></div>
      </section>

      <section className="marquee-band" aria-label="Our services">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => <div className="marquee-content" key={i}><span>STUDY ABROAD</span><Sparkles size={17} /><span>STUDENT VISA GUIDANCE</span><Globe2 size={17} /><span>YOUR FUTURE, WORLDWIDE</span><ArrowUpRight size={17} /><span>STUDY ABROAD</span><Sparkles size={17} /></div>)}
        </div>
      </section>

      <section className="section-shell destinations-section" id="destinations">
        <div className="section-heading split-heading">
          <div><span className="section-kicker">{t.countriesLabel}</span><h2>{t.countriesTitle}</h2></div>
          <div className="heading-aside"><p>{t.countriesText}</p><span className="circle-arrow"><ArrowDownRight size={22} /></span></div>
        </div>
        <div className="destination-grid">
          {destinations.map((d, i) => <article className={`destination-card destination-${d.tint}`} key={d.code}>
            <img src={imageUrl(d.image, 800)} alt={`${d.name} destination`} />
            <div className="destination-overlay" />
            <span className="destination-tag"><span />{d.tag}</span>
            <div className="destination-info"><span className="country-code">{d.code}</span><h3>{d.name}</h3><p>{d.sub}</p><button onClick={() => goTo("contact")} aria-label={`Ask about studying in ${d.name}`}><ArrowUpRight size={20} /></button></div>
          </article>)}
        </div>
        <p className="destination-note"><span><Check size={15} /></span> We help you explore options. Eligibility and visa outcomes depend on each student's circumstances and official requirements.</p>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-heading centered-heading"><span className="section-kicker">{t.servicesLabel}</span><h2>{t.servicesTitle}</h2><p>{t.servicesText}</p></div>
          <div className="services-grid">
            {services.map((s) => <article className="service-card" key={s.number}>
              <div className="service-top"><span className="service-icon"><s.icon size={23} /></span><span className="service-number">{s.number}</span></div>
              <h3>{bn ? s.bn : s.title}</h3><p>{bn ? s.descBn : s.desc}</p>
              <button className="service-link" onClick={() => goTo("contact")}>{bn ? "আরও জানুন" : "Learn more"}<ArrowUpRight size={16} /></button>
            </article>)}
          </div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-visual">
          <img className="about-main-image" src={imageUrl("photo-1521737711867-e3b97375f902", 1000)} alt="Consultants working together in a modern office" />
          <div className="about-floating-card"><span className="floating-icon"><BadgeCheck size={21} /></span><div><strong>Guidance that puts you first</strong><small>Honest, personal, student-focused</small></div></div>
          <div className="about-side-image"><img src={imageUrl("photo-1517486808906-6ca8b3f04846", 400)} alt="Students spending time together" /></div>
          <div className="about-decoration">GROW<br />BEYOND<br />BORDERS.</div>
        </div>
        <div className="about-copy"><span className="section-kicker">{t.aboutLabel}</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p>
          <ul className="check-list"><li><span><Check size={15} /></span>{bn ? "আপনার লক্ষ্য অনুযায়ী ব্যক্তিগত পরিকল্পনা" : "A plan shaped around your goals"}</li><li><span><Check size={15} /></span>{bn ? "আবেদন ও ডকুমেন্টে ধাপে ধাপে সহায়তা" : "Step-by-step application support"}</li><li><span><Check size={15} /></span>{bn ? "পরিষ্কার যোগাযোগ ও বাস্তবসম্মত নির্দেশনা" : "Clear communication and practical guidance"}</li></ul>
          <button className="button-primary" onClick={() => goTo("contact")}>{bn ? "আমাদের সঙ্গে কথা বলুন" : "Get to know us"}<ArrowUpRight size={18} /></button>
          <div className="about-stats"><div><strong>1:1</strong><span>PERSONAL GUIDANCE</span></div><div><strong>4+</strong><span>STUDY DESTINATIONS</span></div><div><strong>100%</strong><span>STUDENT-FOCUSED</span></div></div>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><span className="section-kicker">{t.teamLabel}</span><h2>{t.teamTitle}</h2></div><div className="heading-aside"><p>{t.teamText}</p><button className="circle-arrow" onClick={() => goTo("contact")} aria-label="Contact the team"><ArrowUpRight size={22} /></button></div></div>
          <div className="team-grid">{team.map((member, i) => <article className="team-card" key={member.initials}><div className="team-image"><img src={imageUrl(member.image, 650)} alt={member.name} /><span className="team-index">0{i + 1}</span><a href="#contact" aria-label={`Contact ${member.name}`} onClick={(e) => { e.preventDefault(); goTo("contact"); }}><ArrowUpRight size={19} /></a></div><h3>{member.name}</h3><p>{member.role}</p></article>)}</div>
        </div>
      </section>

      <section className="testimonial-section section-shell">
        <div className="testimonial-left"><span className="section-kicker">{t.testimonialsLabel}</span><h2>{t.testimonialsTitle}</h2><div className="testimonial-controls"><span>01 <i /> 03</span><button aria-label="Previous testimonial"><ArrowDownRight size={17} /></button><button aria-label="Next testimonial"><ArrowUpRight size={17} /></button></div></div>
        <article className="testimonial-card"><div className="quote-mark">“</div><div className="testimonial-stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div><blockquote>Having someone explain each step made the process feel less overwhelming. I finally knew what to focus on and what questions to ask.</blockquote><div className="student-quote"><img src={imageUrl("photo-1534528741775-53994a69daeb", 120)} alt="Student portrait" /><div><strong>Student story</strong><span>Illustrative sample testimonial</span></div><span className="quote-country">BANGLADESH</span></div><p className="testimonial-disclaimer">Sample testimonial for design preview. Replace with a real, permission-approved student review before launch.</p></article>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-pattern" />
        <div className="section-shell contact-layout">
          <div className="contact-copy"><span className="section-kicker light-kicker">{t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p>
            <div className="contact-perks"><div><span><Headphones size={18} /></span><div><strong>Personal consultation</strong><small>Discuss your individual plans</small></div></div><div><span><ShieldCheck size={18} /></span><div><strong>Clear, honest guidance</strong><small>No visa guarantees or false promises</small></div></div></div>
            <div className="contact-direct"><span>HAVE A QUICK QUESTION?</span><a href="mailto:hello@globalvisahub.example">hello@globalvisahub.example <ArrowUpRight size={16} /></a></div>
          </div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="form-heading"><div><span>LET'S GET STARTED</span><h3>{bn ? "আপনার পরিকল্পনা জানান" : "Tell us about your plans"}</h3></div><span className="form-step">01 / 02</span></div>
            <div className="form-grid"><label>{t.formName}<input required name="name" placeholder={bn ? "আপনার নাম" : "e.g. Ayesha Rahman"} /></label><label>{t.formEmail}<input required type="email" name="email" placeholder="you@example.com" /></label><label>{t.formPhone}<input required type="tel" name="phone" placeholder="+880 1XXX-XXXXXX" /></label><label>{t.formCountry}<span className="select-wrap"><select required name="country" defaultValue=""><option value="" disabled>{bn ? "দেশ নির্বাচন করুন" : "Choose a destination"}</option><option>Canada</option><option>United Kingdom</option><option>United States</option><option>Australia</option><option>Other</option></select><ChevronDown size={16} /></span></label><label className="full-field">{t.formService}<span className="select-wrap"><select required name="service" defaultValue=""><option value="" disabled>{bn ? "সেবা নির্বাচন করুন" : "Select a service"}</option><option>University / course selection</option><option>Application preparation</option><option>Student visa guidance</option><option>Interview / pre-departure</option></select><ChevronDown size={16} /></span></label><label className="full-field">{t.formMessage}<textarea name="message" rows={3} placeholder={bn ? "আপনি কী নিয়ে পরিকল্পনা করছেন?" : "Your preferred intake, subject, or any questions..."} /></label></div>
            {submitted && <p className="form-success"><Check size={16} />{t.success}</p>}
            <button className="button-primary form-submit" type="submit">{t.submit}<ArrowUpRight size={18} /></button><p className="form-privacy"><ShieldCheck size={14} /> Your information should be handled securely. This demo form does not send or store data yet.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand"><a href="#" className="brand brand-light"><span className="brand-mark"><Globe2 size={23} /></span><span className="brand-text">global<span>visa</span><b>hub.</b></span></a><p>{t.footer}</p><div className="social-row"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a></div></div>
          <div className="footer-column"><h4>{t.footerLinks}</h4><button onClick={() => goTo("destinations")}>{t.nav[1]}</button><button onClick={() => goTo("services")}>{t.nav[2]}</button><button onClick={() => goTo("about")}>{t.nav[3]}</button><button onClick={() => goTo("team")}>{t.nav[4]}</button></div>
          <div className="footer-column"><h4>{t.footerContact}</h4><a href="mailto:hello@globalvisahub.example">hello@globalvisahub.example</a><a href="tel:+8801000000000">+880 1XXX-XXXXXX</a><span>Dhaka, Bangladesh</span><button className="footer-login" onClick={() => alert("Admin and team login will be connected when the backend is added.")}>Admin / Team login <ArrowUpRight size={14} /></button></div>
          <div className="footer-newsletter"><span>THE NEXT CHAPTER</span><h3>Big plans?<br />Let's talk.</h3><button onClick={() => goTo("contact")}>Start a conversation <ArrowUpRight size={17} /></button><div className="footer-globe"><Globe2 size={62} strokeWidth={0.7} /></div></div>
        </div>
        <div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} Global Visa Hub. Demo brand concept.</span><span>{t.disclaimer}</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

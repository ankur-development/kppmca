"use client"

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// External links data
const externalLinks = {
  government: [
    { name: "RBI", url: "https://www.rbi.org.in/home.aspx" },
    { name: "Mahavat", url: "https://www.rbi.org.in/home.aspx" },
    { name: "Income Tax Department", url: "https://incometaxindia.gov.in/Pages/default.aspx" },
    { name: "e-Filing Portal", url: "https://www.incometax.gov.in/iec/foportal" },
    { name: "Ministry of Corporate Affairs", url: "https://www.mca.gov.in/content/mca/global/en/home.html" },
    { name: "CBIC", url: "https://www.cbic.gov.in/" },
    { name: "ITAT Online", url: "https://itatonline.org/archives/main/" },
    { name: "GST", url: "https://www.gst.gov.in/" },
    { name: "DGFT", url: "https://www.dgft.gov.in/CP/" },
    { name: "Maharera", url: "https://maharerait.mahaonline.gov.in/" },
    { name: "ROFM", url: "https://rof.mahaonline.gov.in/" },
    { name: "MSME", url: "https://msme.gov.in/" },
    { name: "Udyog Aadhar", url: "https://udyamregistration.gov.in/" },
    { name: "Mahagst", url: "https://mahagst.gov.in/" }
  ],
  caGovernance: [
    { name: "ICAI", url: "https://www.icai.org/" },
    { name: "PUNE ICAI", url: "https://www.puneicai.org/" },
    { name: "UDIN", url: "https://udin.icai.org/" }
  ],
  banks: [
    { name: "HDFC Bank", url: "https://www.hdfcbank.com/" },
    { name: "ICICI Bank", url: "https://www.icicibank.com/" },
    { name: "State Bank of India", url: "https://www.onlinesbi.com/" },
    { name: "Indian Overseas Bank", url: "https://www.iob.in/" },
    { name: "Punjab National Bank", url: "https://www.pnbindia.in/" },
    { name: "IndusInd Bank", url: "https://www.indusind.com/in/en/personal.html" },
    { name: "Bank of India", url: "https://www.bankofindia.co.in/" },
    { name: "Bank of Maharashtra", url: "https://bankofmaharashtra.in/" },
    { name: "Canara Bank", url: "https://canarabank.com/" },
    { name: "Union Bank of India", url: "https://www.unionbankofindia.co.in/english/home.aspx" }
  ],
  news: [
    { name: "Times of India", url: "https://timesofindia.indiatimes.com/" },
    { name: "Indian Express", url: "https://indianexpress.com/" },
    { name: "Hindustan Times", url: "https://www.hindustantimes.com/" },
    { name: "Economic Times", url: "https://economictimes.indiatimes.com/" }
  ],
  finance: [
    { name: "BSE", url: "https://www.bseindia.com/" },
    { name: "NSE", url: "https://www.nseindia.com/" },
    { name: "Moneycontrol", url: "https://www.moneycontrol.com/" }
  ]
};

// Privacy Policy Dialog Component
function PrivacyPolicyDialog() {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-muted-foreground text-sm hover:text-primary transition-colors">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 max-h-[80vh] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Privacy Policy
          </DialogTitle>
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p>
                        At KPPM and Associates, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us. By using our services or visiting our website, you consent to the practices described in this policy.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Information We Collect</strong>
                      </p>
                      <p>
                        <strong>Personal Information:</strong> We may collect personal information, including but not limited to your name, contact details, email address, and other identifiable information when you engage with our services, submit inquiries, or use our website.
                      </p>
                      <p>
                        <strong>Usage Information:</strong> We collect information about how you interact with our website and services, including your IP address, browser type, and usage patterns. This information is used to improve our website and services.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>How We Use Your Information</strong>
                      </p>
                      <p>
                        <strong>Providing Services:</strong> We use your personal information to provide the services you request, including but not limited to tax consultancy, business advisory, and compliance services.
                      </p>
                      <p>
                        <strong>Communication:</strong> We may use your contact information to communicate with you about our services, updates, and important information.
                      </p>
                      <p>
                        <strong>Improving Services:</strong> Your usage information helps us analyze and enhance our services, tailor our content, and improve the user experience.
                      </p>
                      <p>
                        <strong>Legal Compliance:</strong> We may use and disclose your information to comply with legal obligations, such as tax regulations and reporting requirements.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Information Sharing</strong>
                      </p>
                      <p>
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except when required by law or when necessary for providing our services. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Data Security</strong>
                      </p>
                      <p>
                        We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. While we strive to protect your personal information, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Your Rights</strong>
                      </p>
                      <p>
                        You have the right to access, correct, or delete your personal information held by us. If you wish to exercise these rights or have any concerns about your data, please contact us using the information provided below.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Changes to this Privacy Policy</strong>
                      </p>
                      <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Thus, we advise you to review this page periodically for any changes.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Contact Us</strong>
                      </p>
                      <p>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at: info@kppmca.in or call us at 9421520506.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t px-6 py-4 sm:items-center">
          {!hasReadToBottom && (
            <span className="text-muted-foreground grow text-xs max-sm:text-center">
              Read all policy before accepting.
            </span>
          )}
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" disabled={!hasReadToBottom}>
              I understand
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Terms of Service Dialog Component
function TermsOfServiceDialog() {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-muted-foreground text-sm hover:text-primary transition-colors">
          Terms of Service
        </button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 max-h-[80vh] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Terms of Service
          </DialogTitle>
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p>
                        <strong>Acceptance of Terms</strong>
                      </p>
                      <p>
                        By accessing and using this website, users agree to
                        comply with and be bound by these Terms of Service.
                        Users who do not agree with these terms should
                        discontinue use of the website immediately.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Professional Services</strong>
                      </p>
                      <p>
                        KPPM provides chartered accountancy and related professional services. All services are subject to professional standards and regulations. The scope of work will be defined in separate engagement letters.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>User Account Responsibilities</strong>
                      </p>
                      <p>
                        Users are responsible for maintaining the
                        confidentiality of their account credentials. Any
                        activities occurring under a user's account are
                        the sole responsibility of the account holder. Users
                        must notify the website administrators immediately of
                        any unauthorized account access.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Content Usage and Restrictions</strong>
                      </p>
                      <p>
                        The website and its original content are protected by
                        intellectual property laws. Users may not reproduce,
                        distribute, modify, create derivative works, or
                        commercially exploit any content without explicit
                        written permission from KPPM.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Limitation of Liability</strong>
                      </p>
                      <p>
                        The website provides content "as is" without
                        any warranties. KPPM shall not be liable
                        for direct, indirect, incidental, consequential, or
                        punitive damages arising from user interactions with the
                        platform.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>User Conduct Guidelines</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        <li>Not upload harmful or malicious content</li>
                        <li>Respect the rights of other users</li>
                        <li>
                          Avoid activities that could disrupt website
                          functionality
                        </li>
                        <li>
                          Comply with applicable local and international laws
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Modifications to Terms</strong>
                      </p>
                      <p>
                        KPPM reserves the right to modify these terms at
                        any time. Continued use of the website after changes
                        constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Termination Clause</strong>
                      </p>
                      <p>
                        KPPM may terminate or suspend user access without
                        prior notice for violations of these terms or for any
                        other reason deemed appropriate by the administration.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Governing Law</strong>
                      </p>
                      <p>
                        These terms are governed by the laws of India and the jurisdiction of Maharashtra courts, without regard to conflict of law principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t px-6 py-4 sm:items-center">
          {!hasReadToBottom && (
            <span className="text-muted-foreground grow text-xs max-sm:text-center">
              Read all terms before accepting.
            </span>
          )}
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" disabled={!hasReadToBottom}>
              I agree
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// External Links Section Component
type ExternalLink = {
  name: ReactNode;
  url: string;
};

type ExternalLinksSectionProps = {
  title: string;
  links: ExternalLink[];
  className?: string;
};

function ExternalLinksSection({ title, links, className = "" }: ExternalLinksSectionProps) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
            >
              {link.name}
              <ExternalLink className="h-3 w-3" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Footer Component
export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="KPPM Logo"
              width={160}
              height={60}
              className="object-contain mb-6"
            />
            <p className="text-muted-foreground mb-6">
              KPPM is a premier chartered accountancy firm dedicated to
              providing comprehensive financial solutions with integrity and
              precision.
            </p>
            <div className="flex gap-4 text-foreground">
              <a
                href="https://www.facebook.com/kppmca/#"
                aria-label="Facebook"
                className="bg-muted hover:bg-primary hover:text-muted p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/search?source=hp&ei=bk7tW_XmC4OS9QOE6J-wCw&q=kppm+and+associates&oq=&gs_l=psy-ab.3.1.35i39k1l6.0.0.0.7171.2.1.0.0.0.0.0.0..1.0....0...1c..64.psy-ab..1.1.150.6...150.h2YV_IB91rk"
                aria-label="Google Search"
                className="bg-muted hover:bg-primary hover:text-muted p-2 rounded-full transition-colors"
              >
                <img src={'/google.svg'} alt="google search" className="h-5 w-5" />
              </a>
              <a
                href="https://in.linkedin.com/company/kppm-associates"
                aria-label="LinkedIn"
                className="bg-muted hover:bg-primary hover:text-muted p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Our Clients",
                "Blog",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Tax Planning & Compliance",
                "Audit & Assurance",
                "Accounting & Bookkeeping",
                "Business Advisory",
                "Compliance Services",
                "Corporate Finance",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-muted-foreground">
                  4 Ambika Appt, Behind BSNL office,<br /> Nal Stops, Karve Road,
                  Erandwane <br />Pune - 411004.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="mailto:info@kppmca.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@kppmca.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="tel:9421520506"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  9421520506, 9209186441
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* External Links Section */}
        <div className="border-t border-muted pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Useful Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <ExternalLinksSection 
              title="Government Websites" 
              links={externalLinks.government} 
            />
            <ExternalLinksSection 
              title="CA Governance" 
              links={externalLinks.caGovernance} 
            />
            <ExternalLinksSection 
              title="Financial Institutions" 
              links={externalLinks.banks} 
            />
            <ExternalLinksSection 
              title="News" 
              links={externalLinks.news} 
            />
            <ExternalLinksSection 
              title="Finance" 
              links={externalLinks.finance} 
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} KPPM | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <PrivacyPolicyDialog />
              <TermsOfServiceDialog />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
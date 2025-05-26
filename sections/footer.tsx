import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                aria-label="Twitter"
                className="bg-muted hover:bg-primary hover:text-muted p-2 rounded-full transition-colors"
              >
                <img src={'/google.svg'} alt="google searcg" className="h-5 w-5" />
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
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} KPPM | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

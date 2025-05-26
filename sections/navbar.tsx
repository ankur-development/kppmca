"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle menu handler
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu handler for overlay and links
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = ["Home", "About", "Services", "Clients", "Blog", "Contact"];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-gray-100 py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-6 mb-2 md:mb-0">
            <div className="flex items-center gap-2 group">
              <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <a
                href="mailto:info@kppmca.in"
                className="hover:text-primary transition-colors"
              >
                info@kppmca.in
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <a
                href="tel:9421520506"
                className="hover:text-primary transition-colors"
              >
                9421520506, 9209186441
              </a>
            </div>
          </div>
         <div className="flex gap-4">
              <a
                href="https://www.facebook.com/kppmca/#"
                aria-label="Facebook"
                className="hover:text-muted transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/search?source=hp&ei=bk7tW_XmC4OS9QOE6J-wCw&q=kppm+and+associates&oq=&gs_l=psy-ab.3.1.35i39k1l6.0.0.0.7171.2.1.0.0.0.0.0.0..1.0....0...1c..64.psy-ab..1.1.150.6...150.h2YV_IB91rk"
                aria-label="Twitter"
                className="hover:text-muted transition-colors"
              >
                <img src={'/google.svg'} alt="google searcg" className="h-5 w-5" />
              </a>
              <a
                href="https://in.linkedin.com/company/kppm-associates"
                aria-label="LinkedIn"
                className="hover:text-muted transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 bg-white dark:bg-gray-900 ${
          scrolled ? "shadow-lg" : ""
        } transition-shadow duration-300`}
      >
        <div className=" px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center relative z-20">
            <div className="relative h-12 w-32">
              <Image
                src="/logo.png"
                alt="KPPM Logo"
                width={128}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <Button
            asChild
            className="hidden md:flex gap-2 bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="#contact">
              Get in Touch
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-20 p-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-10 transition-opacity duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          aria-hidden={!isMenuOpen}
        />

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-gray-900 z-10 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="pt-20 pb-6 px-6 flex flex-col h-full">
            <nav className="flex flex-col gap-1 mb-8">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-3 px-4 text-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t dark:border-gray-800 pt-6">
              <Button
                asChild
                className="w-full gap-2 bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="#contact" onClick={closeMenu}>
                  Get in Touch
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>

              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

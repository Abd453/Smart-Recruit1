import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Brand & Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
                Smart Recruit
              </h2>
              <p className="text-green-100/80 text-base leading-relaxed max-w-xs">
                Empowering organizations with AI-driven talent acquisition solutions for a smarter tomorrow.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white border-b-2 border-green-500/30 pb-2 w-fit uppercase tracking-widest">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-black mb-1">Email</span>
                  <a href="mailto:info@smartrecruit.com" className="text-green-100 hover:text-white transition-colors text-sm font-medium">
                    info@smartrecruit.com
                  </a>
                </div>
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-black mb-1">Phone</span>
                  <a href="tel:+251-115-570544" className="text-green-100 hover:text-white transition-colors text-sm font-medium">
                    +251-115-570544
                  </a>
                </div>
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-black mb-1">Office</span>
                  <span className="text-green-100/90 text-sm font-medium leading-snug">
                    Haya Hulet, Festival 22 Building,<br /> 7th Floor, Addis Ababa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white border-b-2 border-green-500/30 pb-2 w-fit uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              <li>
                <a href="#exper" className="text-green-100/80 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Our Vision
                </a>
              </li>
              <li>
                <a href="#wedo" className="text-green-100/80 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Recruitment Services
                </a>
              </li>
              <li>
                <a href="#testi" className="text-green-100/80 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100/80 hover:text-white hover:translate-x-2 inline-flex items-center transition-all duration-300 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy & Data Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white border-b-2 border-green-500/30 pb-2 w-fit uppercase tracking-widest">
              Connect With Us
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              Follow our journey and stay updated with industry trends and career tips.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: FaFacebookF, href: "https://www.facebook.com/ienetworksolutions", name: "Facebook" },
                { Icon: FaTwitter, href: "https://x.com/IE_Networks", name: "Twitter" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ienetworks/", name: "LinkedIn" },
                { Icon: FaInstagram, href: "https://instagram.com", name: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500 group shadow-lg"
                  aria-label={social.name}
                >
                  <social.Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-green-400/60 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-green-400">Smart Recruit</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-green-400/60">
            <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


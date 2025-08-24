import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-display font-bold">Woodland Car Rental</span>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Your trusted partner for premium car rental services. Experience comfort, 
              reliability, and exceptional service with our extensive fleet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Our Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/daily" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Daily Rental
                </Link>
              </li>
              <li>
                <Link href="/services/weekly" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Weekly Rental
                </Link>
              </li>
              <li>
                <Link href="/services/monthly" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Monthly Rental
                </Link>
              </li>
              <li>
                <Link href="/services/luxury" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Luxury Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">info@woodlandcarrental.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">123 Main Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Woodland Car Rental. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

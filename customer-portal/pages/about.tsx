import React from 'react';
import Layout from '../components/Layout';
import { Car, CheckCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    { number: '01', title: 'Customer Centricity', description: 'We put our customers first in everything we do' },
    { number: '02', title: 'Reliability', description: 'Consistent, dependable service you can count on' },
    { number: '03', title: 'Flexibility', description: 'Adapting to meet your unique mobility needs' },
    { number: '04', title: 'Versatility', description: 'Wide range of vehicles for every purpose' },
    { number: '05', title: 'Resilience', description: 'Overcoming challenges to serve you better' },
    { number: '06', title: 'Accountability', description: 'Taking responsibility for our commitments' }
  ];

  const vehicleCategories = [
    { icon: Car, title: 'Economy Cars', description: 'Compact and fuel-efficient, perfect for city driving and short trips. Affordable and comfortable transportation without compromise.' },
    { icon: Car, title: 'Sedan', description: 'Enjoy the perfect balance of comfort, style, and functionality. Ideal for individuals, couples, or small families seeking a smooth driving experience.' },
    { icon: Car, title: 'SUVs', description: 'Embrace versatility and space with our SUV selection. Designed to provide ample seating and cargo capacity for family vacations or rugged adventures.' },
    { icon: Car, title: 'Luxury Cars', description: 'Indulge in luxury and sophistication with our premium vehicles. Experience superior mobility enriched with high-end features and advanced technology.' },
    { icon: Car, title: 'Minivans', description: 'Accommodate larger groups with ease. Our spacious minivans are perfect for family vacations, group trips, or corporate outings.' },
    { icon: Car, title: 'Trucks', description: 'For commercial purposes or hauling needs, we provide a range of trucks in various sizes and configurations to meet your specific requirements.' }
  ];

  const services = [
    'City Exploration', 'Family Vacations and Weekend Getaways', 'Outdoor Adventures',
    'Business Travel', 'Moving and Hauling', 'Special Occasions',
    'Airport Travel', 'Event Transportation', 'Commuting to Work or School', 'Hourly Services'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-800 to-dark-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Woodland Car and Truck Rental
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your Trusted Car and Truck Rental Service Provider for 18 Years
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900">
                ABOUT US
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Woodland, Canada's premier car and truck rental company, dedicated to serving the unique mobility requirements of people, businesses, and communities across the nation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At our core, we stand tall as a testament to trust, efficiency, and excellence, offering top-notch car and truck rental services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey started back in 2006, with a simple vision – to become the go-to mobility partner in Canada. Since then, we've grown, earning the trust of our valued customers and becoming a brand name recognized for reliable and top-tier car and truck hire services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cars" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Browse Our Fleet
                </Link>
                <Link href="/contact" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop"
                alt="Professional car rental service"
                className="rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"
                alt="Professional service"
                className="rounded-2xl shadow-soft"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900">
                Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To serve Canada and Canadians through flexible and affordable mobility solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that convenience, accessibility, and affordability are paramount when it comes to commuting. That's why we strive to empower individuals to access on-demand mobility options, support businesses in their logistic operations, and contribute to the economic growth of our beloved country.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cars" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Rent Online
                </Link>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span>Or give us a call:</span>
                  <a href="tel:+1-800-123-4567" className="text-orange-500 font-semibold text-lg">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Woodland, our company culture is driven by core values that inspire us to provide exceptional car and truck rental services and make a positive impact on customers, employees, and the environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-4">
                  {value.number}
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900">
                Fulfil Your Mobility Demands with Woodland Car and Truck Rental Services
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  <strong>No matter the occasion or destination</strong>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>No matter the short trip or long stay</strong>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>No matter if it's just you or a larger crew.</strong>
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With cost-effective options, find the ideal car rental in Canada to match your mobility needs and preferences at Woodland.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold text-dark-900 mb-4">
                Our Services Include:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Explore Our Range of Commute-Ready Vehicles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Woodland team is dedicated to providing you with the perfect vehicle - from our wide range of well-maintained cars and trucks - all while making your rental experience seamless.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/cars" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center text-lg">
              <Car className="h-6 w-6 mr-2" />
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-orange-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-orange-100">
                18+
              </div>
              <div className="text-orange-100 font-medium">
                Years of Experience
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-orange-100">
                500+
              </div>
              <div className="text-orange-100 font-medium">
                Happy Customers
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-orange-100">
                50+
              </div>
              <div className="text-orange-100 font-medium">
                Vehicle Models
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-orange-100">
                24/7
              </div>
              <div className="text-orange-100 font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-800 to-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Woodland Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their car rental needs. 
            Book now and enjoy a seamless rental experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              <Car className="h-5 w-5 mr-2" />
              Browse Our Fleet
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

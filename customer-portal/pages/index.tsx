import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Car, MapPin, Calendar, Shield, Star, Users, Zap, Check, ChevronDown, ChevronUp, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Car,
      title: 'Wide Selection',
      description: 'Choose from our extensive fleet of well-maintained vehicles'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Pick up and drop off at convenient locations across the city'
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      description: 'Book for hours, days, weeks, or months - whatever you need'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All our vehicles come with comprehensive insurance coverage'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: '24/7 customer support and roadside assistance'
    },
    {
      icon: Zap,
      title: 'Quick Process',
      description: 'Simple online booking with instant confirmation'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Vehicle Models' },
    { number: '10+', label: 'City Locations' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      text: "I highly recommend Woodland Car Rental. Their team went above and beyond to accommodate our needs and provided excellent customer support. The entire rental experience was smooth.",
      author: "RAHUL",
      rating: 5
    },
    {
      text: "Great selection of vehicles. Friendly and helpful staff working here. Highly recommend coming here.",
      author: "PRIYA",
      rating: 5
    },
    {
      text: "Outstanding service. The team was attentive and courteous. They made sure I had the right car for my trip, and the whole process was a breeze. Highly recommended.",
      author: "AMIT",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to rent a car in Woodland Car Rental?",
      answer: "Well, that depends on the type of car, how long you want it, where you're renting it from, and which car rental company you go with. Economy cars usually have lower prices, but if you're going for luxury or specialty cars, they might be a bit pricier."
    },
    {
      question: "Can I rent a car in India using my international driver's license?",
      answer: "Yes, you can rent a car in India with an international driver's license. However, it's recommended to also carry your original license and ensure it's valid for the duration of your rental."
    },
    {
      question: "What types of vehicles do you offer for rental?",
      answer: "We offer a wide range of vehicles including economy cars, sedans, SUVs, luxury vehicles, and pickup trucks. Each category is designed to meet different needs and preferences."
    },
    {
      question: "What are the rental rates?",
      answer: "Our rental rates vary based on vehicle type, duration, and season. We offer competitive pricing starting from ₹999 per day for economy cars, with discounts for longer rentals."
    },
    {
      question: "What are the requirements for renting a car or truck?",
      answer: "You need a valid driver's license, proof of identity, and a credit card for the security deposit. The minimum age requirement is 21 years, and you must have at least 1 year of driving experience."
    }
  ];

  const benefits = [
    "18+ Years of Experience",
    "Affordable & Transparent",
    "Minimal Paperwork",
    "Instant Booking Options",
    "Flexible Fleet Scheduling 7 am to 7 pm",
    "Customer Support",
    "Excellent Car Hire Discount",
    "Prioritize Safety & Security"
  ];

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative container-custom text-center text-white z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Woodland Car and Truck Rental
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Experience the freedom of the open road with our premium car rental service. 
              From economy to luxury, we have the perfect vehicle for every journey.
            </p>
            
            {/* Quick Booking Form */}
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Quick Booking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Pick-up Date</label>
                  <input type="date" className="input-field bg-white/10 border-white/30 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Time</label>
                  <select className="input-field bg-white/10 border-white/30 text-white">
                    <option>Select your time</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Return Date</label>
                  <input type="date" className="input-field bg-white/10 border-white/30 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Time</label>
                  <select className="input-field bg-white/10 border-white/30 text-white">
                    <option>Select your time</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </div>
              </div>
              <button className="btn-accent w-full text-lg py-4">
                BOOK RIDE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="bg-accent-500 py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="pricing-card text-center min-w-[200px]">
                <div className="text-3xl font-bold text-black mb-1">₹999</div>
                <div className="text-sm text-gray-600 mb-4">/day</div>
                <button className="btn-primary bg-black text-white hover:bg-gray-800 w-full">
                  Rent Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Providing Efficient Transit Options To Different Cities In India
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We at Woodland Car and Truck Rental are dedicated to offering our customers a seamless mobility experience, 
                no matter the purpose or duration of their trip. Our diverse fleet of vehicles and competitive pricing make 
                us a top choice for those seeking efficient transit options in various cities throughout India.
              </p>
              <Link href="/about" className="btn-accent inline-flex items-center">
                Read More
                <ChevronDown className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop"
                alt="Professional car rental service"
                className="rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At our car rental service, we have over 18 years of experience providing affordable and transparent rental options. 
                We prioritize safety and security while offering minimal paperwork and zero maintenance costs. Our instant booking 
                options and flexible fleet scheduling make renting a car hassle-free.
              </p>
              
              {/* Numbered Benefits */}
              <div className="space-y-6">
                {[
                  "01 Effortless Commuting",
                  "02 Transparent Pricing", 
                  "03 Seamless Booking",
                  "04 Well-maintained Vehicles"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="benefit-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-xl font-medium">{benefit.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>

              {/* Checklist Benefits */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="benefit-check" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"
                alt="Professional service"
                className="rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Woodland Car Rental?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We're committed to providing you with the best car rental experience possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-medium transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary-200">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Happy Clients!
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              At Woodland Car Rental, we take pride in providing fast, friendly and professional service to all our clients. 
              Don't just take our word for it, here are some reviews from our happy clients:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning-500 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-secondary-900">{testimonial.author}</span>
                  <div className="text-4xl text-secondary-300">"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
              Get answers to common questions about our car rental services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-700 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-accent-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-secondary-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their car rental needs. 
            Book now and enjoy a seamless rental experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars" className="btn-accent">
              <Car className="h-5 w-5 mr-2" />
              Browse Our Fleet
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

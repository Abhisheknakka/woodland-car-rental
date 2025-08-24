import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Car, MapPin, Calendar, Star, Check, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [isOpen2, setIsOpen2] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const toggleAccordion2 = (index: number) => {
    setIsOpen2(isOpen2 === index ? null : index);
  };

  const features = [
    {
      icon: Car,
      title: 'Wide Fleet Selection',
      description: 'Choose from our extensive collection of vehicles including economy cars, SUVs, luxury vehicles, and trucks.'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Convenient pickup and drop-off locations across major cities in Canada.'
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      description: 'Book online 24/7 with instant confirmation and easy modification options.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      content: 'Excellent service! The car was clean, well-maintained, and the pickup process was seamless.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Family Vacation',
      content: 'Perfect for our family trip. Great rates and the staff was very helpful with recommendations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Weekend Getaway',
      content: 'Quick and easy booking process. The car exceeded our expectations and was very fuel-efficient.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You\'ll need a valid driver\'s license, credit card, and proof of insurance. International drivers may need an International Driving Permit.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Free cancellation up to 24 hours before pickup. Late cancellations may incur a small fee.'
    },
    {
      question: 'Do you offer insurance coverage?',
      answer: 'Yes, we offer comprehensive insurance coverage options for all our vehicles to ensure your peace of mind.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Absolutely! You can extend your rental by contacting us before the return time.'
    }
  ];

  const quickFacts = [
    {
      number: '18+',
      label: 'Years of Experience'
    },
    {
      number: '500+',
      label: 'Happy Customers'
    },
    {
      number: '50+',
      label: 'Vehicle Models'
    },
    {
      number: '24/7',
      label: 'Support Available'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-800 to-dark-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find a Fleet Tailored to Your Mobility Needs
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            At our car rental service, we have over 40+ licensed vehicles available in varying sizes. 
            Our fleet is tailored to meet your mobility needs, whether you're traveling alone or with companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center">
              <Car className="h-6 w-6 mr-2" />
              Browse Cars
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-soft">
            <h2 className="text-3xl font-bold text-dark-900 mb-6 text-center">
              Quick Booking
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Pickup Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Vehicle Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                  <option>Select Vehicle Type</option>
                  <option>Economy</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                  <option>Truck</option>
                </select>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                Search Available Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Why Choose Woodland Car Rental?
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              We provide reliable, affordable, and convenient car rental services across Canada
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-strong transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="section-padding bg-orange-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {quickFacts.map((fact, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-orange-100">
                  {fact.number}
                </div>
                <div className="text-orange-100 font-medium">
                  {fact.label}
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
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-soft">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-dark-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-dark-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Quick answers to common questions about our car rental services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-dark-900">{faq.question}</span>
                  {isOpen === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-500" />
                  )}
                </button>
                {isOpen === index && (
                  <div className="px-6 pb-4">
                    <p className="text-dark-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-800 to-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their car rental needs. 
            Book now and enjoy a seamless rental experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center">
              <Car className="h-5 w-5 mr-2" />
              Browse Our Fleet
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

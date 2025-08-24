import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@woodlandcarrental.com',
      link: 'mailto:info@woodlandcarrental.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Main Street, City, State 12345',
      link: '#',
      description: 'Visit our office during business hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '24/7 Available',
      link: '#',
      description: 'We\'re here to help you round the clock'
    }
  ];

  const services = [
    'Daily Car Rentals',
    'Weekly Car Rentals',
    'Monthly Car Rentals',
    'Luxury Car Rentals',
    'SUV Rentals',
    'Truck Rentals',
    'Airport Pickup',
    'Corporate Rentals'
  ];

  const locations = [
    'Caledon', 'Brampton', 'Vaughan', 'Mississauga', 'Toronto', 
    'Scarborough', 'Richmond Hill', 'Markham', 'New Market', 'Rexdale',
    'Oakville', 'Milton', 'King City', 'Aurora', 'Orangeville', 'Georgetown'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-secondary-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto">
            Elevating Mobility, Empowering Journeys, and Inspiring Change in India
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Don't be shy, Contact Us!
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We're here to help you find the perfect vehicle for your journey. 
            Get in touch with us today and experience exceptional service.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Get in Touch */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                  Get in Touch
                </h3>
                <p className="text-lg text-secondary-600">
                  We are always ready to help you with your car rental needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.link} 
                        className="text-primary-600 hover:text-primary-700 font-medium block mb-1"
                      >
                        {info.value}
                      </a>
                      <p className="text-secondary-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services List */}
              <div className="pt-6 border-t border-secondary-200">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  Our Services Include:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-secondary-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                Message Us
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-success-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-secondary-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Name *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First"
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last"
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your car rental needs..."
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>SUBMIT</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Visit our office or explore our service areas across India
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-secondary-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-600 mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-secondary-500">
                  We're working on integrating Google Maps to show our exact location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We provide car rental services across major cities in India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="text-center p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                <MapPin className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <span className="text-secondary-700 font-medium">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Quick answers to common questions about our car rental services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  What documents do I need to rent a car?
                </h4>
                <p className="text-secondary-600">
                  You'll need a valid driving license, ID proof (Aadhar/PAN), and a credit/debit card for payment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  What is your cancellation policy?
                </h4>
                <p className="text-secondary-600">
                  Free cancellation up to 24 hours before pickup. Late cancellations may incur a small fee.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  Do you offer insurance coverage?
                </h4>
                <p className="text-secondary-600">
                  Yes, we offer comprehensive insurance coverage options for all our vehicles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  Can I extend my rental period?
                </h4>
                <p className="text-secondary-600">
                  Absolutely! You can extend your rental by contacting us before the return time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Contact us now and get the perfect vehicle for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="btn-accent inline-flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a href="mailto:info@woodlandcarrental.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

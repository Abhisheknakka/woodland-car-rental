import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Car, MapPin, Star, Filter, Search, Calendar, Fuel, Check } from 'lucide-react';

export default function CarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'economy', name: 'Economy' },
    { id: 'sedan', name: 'Sedan' },
    { id: 'suv', name: 'SUV' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'truck', name: 'Truck' }
  ];

  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      category: 'economy',
      price: 45,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      features: ['5 Seats', 'Automatic', 'Air Conditioning', 'Bluetooth'],
      location: 'Toronto',
      fuelType: 'Gasoline',
      available: true
    },
    {
      id: 2,
      name: 'Honda Civic',
      category: 'economy',
      price: 48,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      features: ['5 Seats', 'Automatic', 'Air Conditioning', 'USB Ports'],
      location: 'Vancouver',
      fuelType: 'Gasoline',
      available: true
    },
    {
      id: 3,
      name: 'Toyota Camry',
      category: 'sedan',
      price: 65,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
      features: ['5 Seats', 'Automatic', 'Leather Seats', 'Navigation'],
      location: 'Montreal',
      fuelType: 'Hybrid',
      available: true
    },
    {
      id: 4,
      name: 'Honda CR-V',
      category: 'suv',
      price: 75,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      features: ['7 Seats', 'AWD', 'Backup Camera', 'Bluetooth'],
      location: 'Calgary',
      fuelType: 'Gasoline',
      available: true
    },
    {
      id: 5,
      name: 'BMW 3 Series',
      category: 'luxury',
      price: 120,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      features: ['5 Seats', 'Automatic', 'Leather Seats', 'Premium Sound'],
      location: 'Toronto',
      fuelType: 'Gasoline',
      available: true
    },
    {
      id: 6,
      name: 'Ford F-150',
      category: 'truck',
      price: 95,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      features: ['5 Seats', 'Automatic', 'Towing Package', '4x4'],
      location: 'Edmonton',
      fuelType: 'Gasoline',
      available: true
    }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-800 to-dark-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Fleet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Choose from our extensive collection of well-maintained vehicles
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-gray-600">
                  {sortedCars.length} car{sortedCars.length !== 1 ? 's' : ''} available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {sortedCars.length === 0 ? (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No cars found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCars.map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-soft hover:shadow-strong transition-shadow duration-300 overflow-hidden">
                  {/* Car Image */}
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                    {!car.available && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Unavailable
                      </div>
                    )}
                  </div>

                  {/* Car Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-dark-900">{car.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-orange-500 fill-current" />
                        <span className="text-sm text-gray-600">{car.rating}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-orange-500">${car.price}</span>
                      <span className="text-gray-600">/day</span>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {car.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-orange-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Location and Fuel */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{car.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fuel className="h-4 w-4" />
                        <span>{car.fuelType}</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button 
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                        car.available
                          ? 'bg-orange-500 hover:bg-orange-600 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!car.available}
                    >
                      {car.available ? 'Book Now' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-800 to-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for special requests or to discuss custom rental arrangements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
              View All Cars
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

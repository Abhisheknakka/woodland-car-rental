import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Car, MapPin, Star, Filter, Search, Calendar, Fuel } from 'lucide-react';

export default function CarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const cars = [
    {
      id: 1,
      name: 'Toyota Innova Crysta',
      category: 'SUV',
      location: 'Mumbai',
      price: 2500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      fuel: 'Diesel',
      seats: 7,
      transmission: 'Automatic'
    },
    {
      id: 2,
      name: 'Honda City',
      category: 'Sedan',
      location: 'Delhi',
      price: 1800,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      fuel: 'Petrol',
      seats: 5,
      transmission: 'Manual'
    },
    {
      id: 3,
      name: 'Maruti Swift',
      category: 'Hatchback',
      location: 'Bangalore',
      price: 1200,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      fuel: 'Petrol',
      seats: 5,
      transmission: 'Manual'
    },
    {
      id: 4,
      name: 'Mahindra XUV500',
      category: 'SUV',
      location: 'Chennai',
      price: 2200,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      fuel: 'Diesel',
      seats: 7,
      transmission: 'Manual'
    },
    {
      id: 5,
      name: 'Hyundai i20',
      category: 'Hatchback',
      location: 'Mumbai',
      price: 1100,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      fuel: 'Petrol',
      seats: 5,
      transmission: 'Manual'
    },
    {
      id: 6,
      name: 'Toyota Fortuner',
      category: 'SUV',
      location: 'Delhi',
      price: 3500,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      fuel: 'Diesel',
      seats: 7,
      transmission: 'Automatic'
    }
  ];

  const categories = ['all', 'SUV', 'Sedan', 'Hatchback', 'Luxury'];
  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'];

  const filteredCars = cars.filter(car => {
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || car.location === selectedLocation;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         car.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Perfect Ride
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Browse our extensive fleet of well-maintained vehicles and find the perfect car for your journey
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-secondary-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search cars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-secondary-600">
              Showing {sortedCars.length} of {cars.length} cars
            </p>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-secondary-400" />
              <span className="text-sm text-secondary-500">Filters Applied</span>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCars.map((car) => (
              <div key={car.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-secondary-900">{car.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">₹{car.price}</div>
                      <div className="text-sm text-secondary-500">per day</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <MapPin className="h-4 w-4" />
                      <span>{car.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Fuel className="h-4 w-4" />
                      <span>{car.fuel} • {car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Car className="h-4 w-4" />
                      <span>{car.seats} seats</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="btn-primary flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </button>
                    <button className="btn-outline border-secondary-300 text-secondary-600 hover:bg-secondary-50">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {sortedCars.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                No cars found
              </h3>
              <p className="text-secondary-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                  setSearchTerm('');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

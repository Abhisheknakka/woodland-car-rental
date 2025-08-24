import React from 'react';
import Layout from '../components/Layout';
import { Car, Home, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <Car className="h-24 w-24 text-primary-500 mx-auto mb-4" />
            <h1 className="text-6xl font-bold text-primary-600 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-secondary-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="btn-primary w-full inline-flex items-center justify-center"
            >
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Link>
            
            <Link 
              href="/cars" 
              className="btn-secondary w-full inline-flex items-center justify-center"
            >
              <Search className="h-4 w-4 mr-2" />
              Browse Our Cars
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn-outline w-full inline-flex items-center justify-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-secondary-200">
            <p className="text-sm text-secondary-500">
              Need help? <Link href="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

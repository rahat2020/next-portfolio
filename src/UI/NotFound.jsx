'use client'
import Link from 'next/link'
import { AlertCircle, Home } from 'react-feather'

const NotFound =()=> {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
          <p className="text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
              <AlertCircle className="w-32 h-32 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link href="/experience" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound;
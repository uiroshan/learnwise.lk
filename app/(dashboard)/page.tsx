import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Calendar, CreditCard, Database, Search, User } from 'lucide-react';
import { Terminal } from './terminal';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  
  return (
    <main>
        <section className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Find the Perfect Course for Your Child's Growth
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering Students, Connecting Parents to the Best Educators
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              About Learnwise
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
              Learnwise is your one-stop platform to find the best educational courses and teachers for your child. We connect parents with trusted professionals who care about your child's progress.
            </p>
          </div>
        </section>

        <section id="features" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Why Choose Learnwise?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <Search className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Find the Best Courses</h3>
                <p className="text-gray-500 text-center">
                  Easily search for courses based on subjects, fees, schedule, and learning goals.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <User className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get to Know Your Teachers</h3>
                <p className="text-gray-500 text-center">
                  Explore teacher profiles with detailed information on qualifications, achievements, and past reviews.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Verified Institutes</h3>
                <p className="text-gray-500 text-center">
                  Trust the quality and credibility of the institutes listed on Learnwise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              How Learnwise Works
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Courses and Teachers</h3>
                <p className="text-gray-500 text-center">
                  Browse a wide range of courses and discover educators based on what you need.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">View Detailed Profiles</h3>
                <p className="text-gray-500 text-center">
                  Learn about each teacher's qualifications, experience, and reviews from other parents.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Informed</h3>
                <p className="text-gray-500 text-center">
                  Get updates on schedules, fees, and course content to make the best decision for your child's education.
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}

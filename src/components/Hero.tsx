import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-screen min-h-screen pt-16 bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary-600/10 bg-primary-50/50 px-3 py-1 mb-6 lg:mb-8">
              <p className="text-sm font-medium text-primary-700">
                🎉 Now offering online consultations
              </p>
            </div>

            <h1 className="text-3xl text-black sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              Your Health & Wellness
              <strong className="block font-extrabold text-primary-600 mt-2">
                Our Priority
              </strong>
            </h1>

            <p className="mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl text-gray-600">
              Experience modern healthcare solutions with our comprehensive pharmacy services. 
              From prescription management to health consultations.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-lg bg-primary-600 px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 border border-primary-600"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 relative px-4 sm:px-6 lg:px-8 pt-8 lg:pt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Pharmacy Team"
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1800&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 shadow-xl rounded-xl hidden sm:flex items-center gap-4 animate-float">
              <div className="rounded-full bg-primary-50 p-2 sm:p-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500">Trusted by</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">10K+ Patients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

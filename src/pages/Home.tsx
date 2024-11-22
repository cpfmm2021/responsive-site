import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Modern Website
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            A fully responsive website built with React, Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary w-full sm:w-auto">Get Started</button>
            <button className="btn-secondary w-full sm:w-auto">Learn More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

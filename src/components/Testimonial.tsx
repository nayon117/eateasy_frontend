import  { useState, useEffect, useRef } from 'react';
import { Play, Pause, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: 'EatEasy has revolutionized my dining experience! The variety and quality of food options are unmatched.',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    stars: 5
  },
  {
    id: 2,
    text: 'I love how easy it is to order my favorite meals. The app is user-friendly and the delivery is always on time!',
    author: 'Mike Thompson',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    stars: 4
  },
  {
    id: 3,
    text: 'The customer service is top-notch. They always go above and beyond to ensure customer satisfaction.',
    author: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    stars: 5
  },
  {
    id: 4,
    text: 'EatEasy has made my busy life so much easier. I can always count on them for a delicious meal!',
    author: 'David Rodriguez',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80',
    stars: 4
  }
];

const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [, setActiveTestimonial] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationId: number;

    const animate = () => {
      if (container && !isPaused) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="bg-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">What Our Customers Say</h2>
        <div
          ref={containerRef}
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Testimonials"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-teal-600">{testimonial.author}</h3>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex justify-end">
                  <span className="text-teal-500 text-sm">EatEasy Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePauseToggle}
            className="bg-teal-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-teal-600 transition-colors duration-300"
            aria-label={isPaused ? 'Resume testimonials' : 'Pause testimonials'}
          >
            {isPaused ? (
              <>
                <Play size={20} className="mr-2" /> Resume
              </>
            ) : (
              <>
                <Pause size={20} className="mr-2" /> Pause
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
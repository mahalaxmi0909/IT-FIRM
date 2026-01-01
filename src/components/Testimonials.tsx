import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechVentures Inc.',
    content: 'Orbit Tech transformed our legacy systems into a modern, scalable platform. Their technical expertise and professionalism exceeded our expectations. The project was delivered on time and under budget.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, StartupX',
    content: 'Working with Orbit Tech was a game-changer for our startup. They not only built our MVP but also provided invaluable strategic guidance. Our user engagement increased by 300% after launch.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Director of Digital, GlobalCorp',
    content: 'The AI solution Orbit Tech developed has revolutionized our customer service operations. Response times decreased by 70% and customer satisfaction scores are at an all-time high.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-amber-50/30 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(200,80%,50%)]/10 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-amber-50/50 rounded-2xl p-8 card-hover relative border border-amber-100/50"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(200,80%,50%)] flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



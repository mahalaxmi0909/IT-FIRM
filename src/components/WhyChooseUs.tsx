import { Rocket, Clock, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile methodology ensures rapid development cycles and quick time-to-market.',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description: 'We commit to deadlines with a 99% on-time delivery track record.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing and code reviews ensure bug-free, production-ready code.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Round-the-clock technical support and maintenance for all projects.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-2 relative overflow-hidden bg-amber-50/20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(200,80%,50%)]/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute -top-20 -left-20 w-32 h-32 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-100/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-16 left-1/4 w-28 h-28 bg-slate-100/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute -bottom-12 right-1/3 w-20 h-20 bg-blue-50/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Subtle moving lines */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent animate-slide-right" />
          <div className="absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200/30 to-transparent animate-slide-right" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent animate-slide-right" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200/30 to-transparent animate-slide-right" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      <div className="container mx-auto relative max-w-5xl px-4 z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Sets Us
            <span className="gradient-text"> Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical excellence with a client-first approach to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center group"
            >
              <div className="bg-amber-50/30 rounded-2xl p-6 border border-amber-100/30 mb-6 group-hover:bg-amber-50/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-[hsl(200,80%,50%)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

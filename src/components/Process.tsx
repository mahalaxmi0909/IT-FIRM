import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business goals, challenges, and vision through in-depth consultations.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy & Planning',
    description: 'Our team develops a comprehensive roadmap with clear milestones, timelines, and deliverables.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Design & Development',
    description: 'We bring your vision to life with agile sprints, regular demos, and continuous feedback loops.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Support',
    description: 'We ensure a smooth deployment and provide ongoing maintenance and optimization.',
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-amber-50/20 relative overflow-hidden">
      {/* Background Gradient matching WhyChooseUs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(200,80%,50%)]/5" />

      <div className="container mx-auto relative">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase animate-fade-in">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in stagger-1">
            How We
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed animate-fade-in stagger-2">
            A proven methodology that ensures successful project delivery every time.
          </p>
        </div>

        {/* Enhanced Process Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-amber-50/30 rounded-2xl p-8 text-center gradient-border h-full border border-amber-100/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 group-hover:from-blue-50/50 group-hover:via-transparent group-hover:to-cyan-50/30 transition-all duration-700" />
                  {/* Subtle color accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                  {/* Enhanced Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Enhanced Icon with animation */}
                  <div className="relative mb-6 mt-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;


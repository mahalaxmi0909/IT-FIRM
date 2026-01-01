import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-amber-50/20">
      {/* Background Gradient matching WhyChooseUs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(200,80%,50%)]/5" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            About Orbit Tech
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4 mb-6">
            Engineering
            <span className="gradient-text"> Excellence</span>
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Premier IT consulting firm delivering enterprise-grade solutions with precision, innovation, and measurable business outcomes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            {/* Company Overview */}
            <div className="bg-amber-50/30 rounded-2xl p-8 border border-amber-100/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Who We Are</h3>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Founded in 2012, Orbit Tech is a premier IT consulting firm specializing in enterprise digital transformation, 
                  cloud architecture, and cybersecurity solutions.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We design, implement, and manage technology ecosystems that drive business growth and operational excellence 
                  for Fortune 500 companies and emerging enterprises.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Our team of certified engineers, solutions architects, and security experts collaborate to deliver 
                  enterprise-grade solutions that scale with your business ambitions.
                </p>
              </div>
            </div>

            {/* Company Mission */}
            <div className="bg-amber-50/30 rounded-2xl p-8 border border-amber-100/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive sustainable growth, 
                  enhance operational efficiency, and create competitive advantages in the digital landscape.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We bridge the gap between complex business challenges and innovative technology solutions, 
                  ensuring our clients achieve their strategic objectives with confidence and precision.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Value Proposition */}
          <div className="space-y-8">
            {/* Value Proposition */}
            <div className="bg-amber-50/30 rounded-2xl p-8 shadow-lg border border-amber-100/30 overflow-hidden group">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 group-hover:from-blue-50/50 group-hover:via-transparent group-hover:to-cyan-50/30 transition-all duration-700" />
              {/* Subtle color accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Why Choose Us</h3>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-100/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">📊</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">40% Cost Reduction</div>
                          <div className="text-slate-600 text-sm">Operational efficiency</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-100/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">📈</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">300% ROI</div>
                          <div className="text-slate-600 text-sm">Average client returns</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-100/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">🤝</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">99.9% Uptime</div>
                          <div className="text-slate-600 text-sm">System reliability</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base">
                    We deliver measurable business outcomes through cutting-edge technology solutions, 
                    ensuring long-term success and sustainable digital transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-amber-50/30 rounded-2xl p-8 border border-amber-100/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Core Values</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="group p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Mission-Driven</div>
                      <div className="text-sm text-slate-600">Strategic IT alignment with business goals</div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Client-Focused</div>
                      <div className="text-sm text-slate-600">Long-term partnership approach</div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Excellence</div>
                      <div className="text-sm text-slate-600">Industry-recognized expertise</div>
                    </div>
                  </div>
                </div>
                <div className="group p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Agile Delivery</div>
                      <div className="text-sm text-slate-600">Rapid, iterative deployment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & CTA */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-amber-50/30 rounded-2xl p-8 border border-amber-100/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Impact</h3>
              </div>
              <div className="space-y-4">
                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-slate-800 mb-2">75+</div>
                  <div className="text-sm text-slate-600 font-medium">Certified Engineers</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-slate-800 mb-2">25</div>
                  <div className="text-sm text-slate-600 font-medium">Global Markets</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
                  <div className="text-sm text-slate-600 font-medium">Enterprise Clients</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-slate-800 mb-2">24/7</div>
                  <div className="text-sm text-slate-600 font-medium">Support Coverage</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-amber-50/30 rounded-2xl p-8 shadow-lg border border-amber-100/30 text-center overflow-hidden group">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 group-hover:from-blue-50/50 group-hover:via-transparent group-hover:to-cyan-50/30 transition-all duration-700" />
              {/* Subtle color accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Ready to Transform?</h3>
                <p className="text-slate-600 mb-6 group-hover:text-slate-700 transition-colors duration-300">Let's discuss how we can help achieve your business goals</p>
                <a href="#contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Project
                  <Zap className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

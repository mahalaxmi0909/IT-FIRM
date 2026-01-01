import { Code2, Smartphone, Brain, Cloud, Shield, Database, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Enterprise Software',
    description: 'Custom enterprise applications built with scalable architectures, microservices, and cloud-native technologies for mission-critical operations.',
    details: {
      overview: 'We design and develop custom enterprise software solutions that address complex business challenges. Our approach combines modern architectural patterns with industry best practices to deliver scalable, maintainable, and secure applications.',
      features: [
        'Microservices architecture for scalability',
        'API-first design for seamless integration',
        'Real-time analytics and reporting',
        'Multi-tenant SaaS capabilities',
        'Enterprise-grade security compliance',
        'Automated testing and CI/CD pipelines'
      ],
      technologies: ['.NET Core', 'Java Spring Boot', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      process: 'Our development process follows Agile methodologies with 2-week sprints, ensuring continuous delivery and client feedback integration throughout the project lifecycle.'
    }
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Secure cross-platform mobile applications with offline capabilities, real-time sync, and enterprise-grade security features.',
    details: {
      overview: 'We create powerful mobile applications that deliver exceptional user experiences while maintaining enterprise-level security and performance standards across iOS and Android platforms.',
      features: [
        'Cross-platform development with React Native',
        'Offline-first architecture',
        'Biometric authentication',
        'Real-time synchronization',
        'Push notifications and analytics',
        'Enterprise app store deployment'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Mobile', 'GraphQL'],
      process: 'Our mobile development process includes comprehensive testing across devices, performance optimization, and adherence to platform-specific guidelines for optimal user experience.'
    }
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions, machine learning models, and AI-powered analytics to optimize business processes.',
    details: {
      overview: 'We leverage cutting-edge AI technologies to automate business processes, extract insights from data, and create intelligent systems that adapt and learn from user behavior.',
      features: [
        'Machine learning model development',
        'Natural language processing',
        'Predictive analytics',
        'Computer vision solutions',
        'Robotic process automation (RPA)',
        'AI-powered chatbots and virtual assistants'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Azure ML', 'AWS SageMaker', 'OpenAI API'],
      process: 'Our AI development follows a data-driven approach, from data collection and preprocessing to model training, deployment, and continuous monitoring for optimal performance.'
    }
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Multi-cloud strategy implementation, container orchestration, and DevOps pipelines for scalable cloud deployments.',
    details: {
      overview: 'We design and implement robust cloud infrastructure solutions that provide scalability, reliability, and cost optimization for enterprise applications.',
      features: [
        'Multi-cloud strategy (AWS, Azure, GCP)',
        'Container orchestration with Kubernetes',
        'Infrastructure as Code (Terraform)',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup solutions',
        'Cost optimization and monitoring'
      ],


      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
      process: 'Our cloud implementation follows a phased approach: assessment, design, migration, optimization, and ongoing management with 24/7 monitoring and support.'
    }
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security assessments, penetration testing, and compliance frameworks to protect enterprise assets.',
    details: {
      overview: 'We provide comprehensive cybersecurity solutions to protect your digital assets, ensure compliance, and maintain business continuity in the face of evolving threats.',
      features: [
        'Security assessments and audits',
        'Penetration testing',
        'Compliance management (SOC 2, ISO 27001)',
        'Security monitoring and incident response',
        'Employee security training programs',
        'Data encryption and access control'
      ],
      technologies: ['SIEM solutions', 'Firewall management', 'Endpoint protection', 'Vulnerability scanners', 'Compliance frameworks'],
      process: 'Our security approach follows the NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, and Recover, with continuous monitoring and improvement.'
    }
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Big data solutions, business intelligence dashboards, and predictive analytics for data-driven decision making.',
    details: {
      overview: 'We transform raw data into actionable insights through advanced analytics, visualization, and machine learning solutions that drive informed business decisions.',
      features: [
        'Data warehousing and ETL pipelines',
        'Business intelligence dashboards',
        'Real-time analytics',
        'Predictive modeling',
        'Data visualization',
        'Data governance and quality management'
      ],
      technologies: ['Apache Spark', 'Tableau', 'Power BI', 'Snowflake', 'Databricks', 'Python', 'R', 'SQL'],
      process: 'Our data analytics process includes data discovery, architecture design, implementation, and training to ensure your team can leverage insights effectively.'
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-100/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-slate-100/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-50/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Moving gradient lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-slide-right" />
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-slide-right" style={{ animationDelay: '1s' }} />
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-slide-right" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-slide-right" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-slide-right" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-slide-right" style={{ animationDelay: '5s' }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
         
          
          
          <div className="relative z-10">
           
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Services</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions designed for scalability, security, and performance.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-amber-50/30 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 hover:shadow-2xl hover:bg-amber-50/40 hover:border-blue-200 transition-all duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 group-hover:from-blue-50/50 group-hover:via-transparent group-hover:to-cyan-50/30 transition-all duration-700" />
                {/* Subtle color accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="relative">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-all duration-300 group"
                    >
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                    
                    {/* Underline animation */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              </div>
             
             
              
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-3xl" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl" />
        
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              {selectedService && (
                <>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {selectedService.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              Detailed information about {selectedService?.title} services including features, technologies, and our development process.
            </DialogDescription>
          </DialogHeader>
          
          {selectedService && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Overview</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedService.details.overview}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedService.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Our Process</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedService.details.process}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="#contact">
                    Get Started with {selectedService.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;

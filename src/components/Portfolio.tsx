import { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    image: portfolio1,
    title: 'E-Commerce Platform',
    category: 'Mobile App',
    description: 'A complete e-commerce solution with secure payment integration, real-time inventory, and AI-powered product recommendations.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    fullDescription: 'We developed a comprehensive e-commerce platform that revolutionized our client\'s online retail presence. The solution features secure payment processing through Stripe, real-time inventory management, and an AI-powered recommendation engine that increased average order value by 35%.',
    client: 'RetailMax Inc.',
    duration: '6 months',
    teamSize: '8 developers',
    results: [
      '150% increase in online sales',
      '35% higher average order value',
      '99.9% uptime achieved',
      '4.8/5 app store rating',
    ],
    challenge: 'The client needed to modernize their outdated e-commerce system while maintaining seamless operations during the transition.',
    solution: 'We implemented a phased migration approach with parallel systems, ensuring zero downtime while gradually transitioning users to the new platform.',
  },
  {
    image: portfolio2,
    title: 'Analytics Dashboard',
    category: 'Web Application',
    description: 'Enterprise-grade analytics platform providing real-time insights, custom reporting, and predictive analytics for Fortune 500 clients.',
    technologies: ['React', 'Python', 'PostgreSQL', 'AWS'],
    fullDescription: 'Built an enterprise analytics dashboard that processes millions of data points in real-time, providing actionable insights through intuitive visualizations and AI-driven predictive analytics.',
    client: 'DataCorp Analytics',
    duration: '8 months',
    teamSize: '12 developers',
    results: [
      '60% faster decision making',
      '10M+ daily data points processed',
      '200+ custom report templates',
      '45% reduction in manual reporting',
    ],
    challenge: 'Processing and visualizing massive datasets in real-time while maintaining sub-second response times across all dashboard interactions.',
    solution: 'Implemented a distributed data processing pipeline with intelligent caching and progressive loading strategies to ensure optimal performance at scale.',
  },
  {
    image: portfolio3,
    title: 'HealthTech Platform',
    category: 'AI Solution',
    description: 'AI-powered healthcare management system with patient monitoring, automated diagnostics, and telemedicine capabilities.',
    technologies: ['Next.js', 'TensorFlow', 'FastAPI', 'GCP'],
    fullDescription: 'Developed a cutting-edge healthcare platform that leverages artificial intelligence for patient monitoring, diagnostic assistance, and telemedicine services, improving healthcare accessibility and outcomes.',
    client: 'MedCare Solutions',
    duration: '12 months',
    teamSize: '15 developers',
    results: [
      '40% faster diagnosis times',
      '500K+ patients monitored',
      '95% diagnostic accuracy',
      'HIPAA compliant infrastructure',
    ],
    challenge: 'Creating an AI system that meets strict healthcare compliance requirements while providing accurate diagnostic assistance to medical professionals.',
    solution: 'Built a HIPAA-compliant infrastructure with end-to-end encryption and developed AI models trained on anonymized medical data with continuous validation by healthcare experts.',
  },
];

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  fullDescription: string;
  client: string;
  duration: string;
  teamSize: string;
  results: string[];
  challenge: string;
  solution: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-amber-50/20 relative overflow-hidden">
      {/* Background Gradient matching WhyChooseUs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(200,80%,50%)]/5" />
      {/* Background Moving Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-amber-200/8 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-amber-50/15 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-amber-100/10 rounded-full blur-2xl animate-float-delayed" />
        
        {/* Moving gradient lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200/15 to-transparent animate-slide-horizontal" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-100/10 to-transparent animate-slide-horizontal-delayed" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200/12 to-transparent animate-slide-horizontal" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-100/15 to-transparent animate-slide-horizontal-delayed" />
        
        {/* Subtle moving dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-300/15 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-amber-200/12 rounded-full animate-pulse-slow-delayed" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-amber-300/10 rounded-full animate-pulse-slow" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-lg tracking-wider uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Case Studies &
            <span className="gradient-text"> Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-amber-50/30 rounded-2xl overflow-hidden card-hover cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in border border-amber-100/30"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 transform transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 transform transition-all duration-300 group-hover:translate-x-1">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 transform transition-all duration-300 group-hover:translate-x-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs bg-secondary text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50 transform transition-all duration-300 group-hover:translate-x-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] bg-card border-border">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {selectedProject.category}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription>
                    Detailed case study of {selectedProject.title} project including challenges, solutions, technologies used, and results achieved.
                  </DialogDescription>
                </DialogHeader>

                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden my-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{selectedProject.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{selectedProject.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{selectedProject.client}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-semibold mb-2 text-primary">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-semibold mb-2 text-primary">Our Solution</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-md text-sm bg-secondary text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;

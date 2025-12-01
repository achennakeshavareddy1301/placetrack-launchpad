import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Briefcase,
  LayoutGrid,
  Sparkles,
  BarChart3,
  MessageSquare,
  FileText,
} from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Smart Application Manager',
    description: 'Track all companies in one place. Add role, mode, deadlines, resume version.',
    color: 'bg-primary/10 text-primary',
    iconBg: 'from-primary to-primary/70',
  },
  {
    icon: LayoutGrid,
    title: 'Visual Placement Pipeline',
    description: 'Beautiful Kanban UI. Drag-drop between Applied → Offer → Rejected.',
    color: 'bg-purple/10 text-purple',
    iconBg: 'from-purple to-purple/70',
  },
  {
    icon: Sparkles,
    title: 'Resume Intelligence',
    description: 'Upload JD and resume versions. AI predicts the best-fit resume.',
    badge: 'AI-powered (Preview)',
    color: 'bg-accent/10 text-accent',
    iconBg: 'from-accent to-accent/70',
  },
  {
    icon: BarChart3,
    title: 'Placement Analytics Dashboard',
    description: 'Shortlist %, Rejections, Role-wise trends. Weekly/monthly progress.',
    color: 'bg-primary/10 text-primary',
    iconBg: 'from-primary to-primary/70',
  },
  {
    icon: MessageSquare,
    title: 'Interview Memory Hub',
    description: 'Save HR contacts. Notes from each round. Questions asked.',
    color: 'bg-purple/10 text-purple',
    iconBg: 'from-purple to-purple/70',
  },
  {
    icon: FileText,
    title: 'Resume Version Control',
    description: 'Manage multiple resume versions. Track which resume worked best.',
    color: 'bg-accent/10 text-accent',
    iconBg: 'from-accent to-accent/70',
  },
];

export function FeaturesGrid() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Designed for serious{' '}
            <span className="gradient-text">placement grinding</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to stay organized and land your dream job.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-card rounded-2xl border border-border/50 p-6 h-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute -top-3 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-purple text-[10px] font-semibold text-primary-foreground shadow-glow">
                      <Sparkles className="w-2.5 h-2.5" />
                      {feature.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

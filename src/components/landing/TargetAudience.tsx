import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Briefcase, Users, Code } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Final-year engineering students',
    description: 'Track campus placements and off-campus opportunities in one place.',
  },
  {
    icon: Briefcase,
    title: 'Off-campus job hunters',
    description: 'Manage multiple applications across different companies seamlessly.',
  },
  {
    icon: Users,
    title: 'Referral applicants',
    description: 'Keep track of referral statuses, contacts, and follow-ups.',
  },
  {
    icon: Code,
    title: 'Tech bootcamp candidates',
    description: 'Organize your job search after completing your bootcamp.',
  },
];

export function TargetAudience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="for-students"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who is <span className="gradient-text">PlaceTrack</span> for?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for students who are serious about their placement journey.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl border border-border/50 p-6 h-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 text-center">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 border border-border/50">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

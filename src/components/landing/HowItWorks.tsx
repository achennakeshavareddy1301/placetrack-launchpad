import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ClipboardList, LayoutGrid, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Add Your Applications',
    description: 'Students log company name, role, deadlines, mode (on/off campus), resume used, HR contact.',
    color: 'from-primary to-primary/70',
  },
  {
    icon: LayoutGrid,
    title: 'Track Progress Visually',
    description: 'Drag-and-drop Kanban board for all status stages from Applied to Offer.',
    color: 'from-purple to-purple/70',
  },
  {
    icon: BarChart3,
    title: 'See Your Journey Clearly',
    description: 'Progress snapshots, deadlines, and analytics at a glance to stay on top.',
    color: 'from-accent to-accent/70',
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How PlaceTrack works
          </h2>
          <p className="text-lg text-muted-foreground">
            A single hub to manage your entire placement journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-card rounded-2xl border border-border/50 p-8 h-full shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground">
                  Step {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
      </div>
    </section>
  );
}

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutDashboard } from 'lucide-react';

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-purple/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-card rounded-3xl border border-border/50 p-8 sm:p-12 lg:p-16 shadow-soft-xl text-center relative overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple/10 to-transparent rounded-full blur-2xl" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Free to use
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to organize your entire{' '}
              <span className="gradient-text">placement journey?</span>
            </h2>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start tracking your applications like a pro. Join thousands of students
              already using PlaceTrack.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" className="group">
                Start using PlaceTrack
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" className="group">
                <LayoutDashboard className="w-4 h-4" />
                View Example Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

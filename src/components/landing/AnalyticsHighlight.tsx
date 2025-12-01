import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, Target, Award, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'Total Applications', value: '31', icon: Target, color: 'text-primary' },
  { label: 'Shortlist Rate', value: '42%', icon: TrendingUp, color: 'text-accent' },
  { label: 'Offers Received', value: '2', icon: Award, color: 'text-purple' },
];

export function AnalyticsHighlight() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="analytics"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Know exactly where{' '}
              <span className="gradient-text">you stand</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get real-time insights into your placement journey. Track your progress,
              identify patterns, and make data-driven decisions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-card rounded-xl border border-border/50 p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mock Analytics Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft-xl">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">Progress Overview</h3>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Applications
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    Shortlists
                  </span>
                </div>
              </div>

              {/* Mock Chart */}
              <div className="relative h-48 flex items-end gap-3 mb-6">
                {[
                  { app: 4, short: 1 },
                  { app: 6, short: 2 },
                  { app: 3, short: 1 },
                  { app: 8, short: 4 },
                  { app: 5, short: 2 },
                  { app: 7, short: 3 },
                  { app: 4, short: 2 },
                ].map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                    <div className="w-full flex flex-col gap-1">
                      <div
                        className="w-full bg-primary/20 rounded-t-sm transition-all duration-500 hover:bg-primary/30"
                        style={{ height: `${data.app * 15}px` }}
                      />
                      <div
                        className="w-full bg-accent rounded-b-sm transition-all duration-500 hover:bg-accent/80"
                        style={{ height: `${data.short * 15}px` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation Card */}
              <div className="bg-gradient-to-r from-primary/5 to-purple/5 rounded-xl p-4 border border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      AI Insight
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your shortlist rate is higher for Backend roles. Consider focusing more applications there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

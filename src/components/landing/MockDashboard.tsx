import { Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

const kanbanColumns = [
  { name: 'Applied', count: 12, color: 'bg-muted-foreground/20' },
  { name: 'Test', count: 5, color: 'bg-purple/20' },
  { name: 'Shortlist', count: 8, color: 'bg-primary/20' },
  { name: 'Interview', count: 4, color: 'bg-accent/20' },
  { name: 'Offer', count: 2, color: 'bg-accent' },
];

export function MockDashboard() {
  return (
    <div className="relative">
      {/* Main Card Container */}
      <div className="relative bg-card rounded-2xl shadow-soft-xl border border-border/50 p-6 animate-float-slow">
        {/* Kanban Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground text-sm">Application Pipeline</h3>
            <span className="text-xs text-muted-foreground">31 total</span>
          </div>
          
          <div className="flex gap-2">
            {kanbanColumns.map((col) => (
              <div key={col.name} className="flex-1">
                <div className="space-y-2">
                  <div
                    className={`h-16 rounded-lg ${col.color} flex items-end justify-center pb-2 transition-all hover:scale-105`}
                  >
                    <span className="text-xs font-medium text-foreground/70">{col.count}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground text-center truncate">{col.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-5" />

        {/* Mini Analytics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-3 h-3 text-accent" />
              <span className="text-[10px] text-muted-foreground">Shortlist Rate</span>
            </div>
            <p className="text-lg font-bold text-foreground">42%</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-3 h-3 text-primary" />
              <span className="text-[10px] text-muted-foreground">Applications</span>
            </div>
            <p className="text-lg font-bold text-foreground">31</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3 h-3 text-purple" />
              <span className="text-[10px] text-muted-foreground">Offers</span>
            </div>
            <p className="text-lg font-bold text-foreground">2</p>
          </div>
        </div>
      </div>

      {/* Floating Resume Score Card */}
      <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-soft-lg border border-border/50 p-4 w-48 animate-float">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="text-xs font-medium text-foreground">Resume Fit Score</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold gradient-text">87%</span>
          <span className="text-[10px] text-muted-foreground pb-1">match</span>
        </div>
        <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-[87%] bg-gradient-to-r from-primary to-purple rounded-full" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" />
          Powered by Gemini AI (Preview)
        </p>
      </div>

      {/* Floating Analytics Mini Chart */}
      <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-soft-lg border border-border/50 p-4 w-40 animate-float delay-300">
        <p className="text-[10px] text-muted-foreground mb-2">Weekly Progress</p>
        <div className="flex items-end gap-1 h-12">
          {[3, 5, 4, 7, 6, 8, 5].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-sm transition-all hover:from-primary/60"
              style={{ height: `${h * 10}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[8px] text-muted-foreground">Mon</span>
          <span className="text-[8px] text-muted-foreground">Sun</span>
        </div>
      </div>
    </div>
  );
}

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Building2, User, Calendar, FileText, CheckCircle2 } from 'lucide-react';

const mockInterviews = [
  {
    company: 'Google',
    role: 'SDE Intern',
    round: 'Tech Round 1',
    date: 'Nov 15, 2024',
    hr: 'Sarah M.',
    status: 'Cleared',
    notes: 'DSA focus - Trees & Graphs. Asked about time complexity.',
    questions: ['Implement LRU Cache', 'System design basics'],
  },
  {
    company: 'Microsoft',
    role: 'SWE',
    round: 'HR Round',
    date: 'Nov 18, 2024',
    hr: 'John D.',
    status: 'Pending',
    notes: 'Behavioral questions. STAR method worked well.',
    questions: ['Tell me about a challenge', 'Why Microsoft?'],
  },
  {
    company: 'Amazon',
    role: 'SDE-1',
    round: 'Tech Round 2',
    date: 'Nov 20, 2024',
    hr: 'Mike R.',
    status: 'Scheduled',
    notes: 'Prepare LP stories. Focus on customer obsession.',
    questions: ['Leadership principles', 'System design'],
  },
];

const statusColors: Record<string, string> = {
  Cleared: 'bg-accent/10 text-accent border-accent/20',
  Pending: 'bg-purple/10 text-purple border-purple/20',
  Scheduled: 'bg-primary/10 text-primary border-primary/20',
};

export function InterviewNotes() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your personal interview{' '}
            <span className="gradient-text">memory vault</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Never forget important interview details. Save notes, questions, and contacts.
          </p>
        </div>

        {/* Interview Cards */}
        <div className="grid gap-4 max-w-4xl mx-auto">
          {mockInterviews.map((interview, index) => (
            <div
              key={`${interview.company}-${interview.round}`}
              className={`bg-card rounded-xl border border-border/50 p-5 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Company & Role */}
                <div className="flex items-center gap-4 lg:w-1/4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center border border-border/50">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{interview.company}</h4>
                    <p className="text-sm text-muted-foreground">{interview.role}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap items-center gap-4 lg:flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span>{interview.round}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{interview.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{interview.hr}</span>
                  </div>
                </div>

                {/* Status */}
                <div className="lg:w-auto">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                      statusColors[interview.status]
                    }`}
                  >
                    {interview.status === 'Cleared' && <CheckCircle2 className="w-3 h-3" />}
                    {interview.status}
                  </span>
                </div>
              </div>

              {/* Notes & Questions */}
              <div className="mt-4 pt-4 border-t border-border/50 grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Notes</p>
                  <p className="text-sm text-foreground">{interview.notes}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Questions</p>
                  <div className="flex flex-wrap gap-2">
                    {interview.questions.map((q) => (
                      <span
                        key={q}
                        className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

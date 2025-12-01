const footerLinks = [
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                PlaceTrack
              </span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              The all-in-one placement management OS for ambitious students.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PlaceTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

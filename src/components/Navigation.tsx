interface NavLinkItem {
  href: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { href: '#craft', label: 'The Craft' },
  { href: '#artisans', label: 'Our Artisans' },
  { href: '#collection', label: 'Collection' },
];

const Navigation = () => {
  const whatsappUrl = "https://wa.me/6386005089?text=I%20would%20like%20to%20request%20an%20appointment";

  return (
    <nav className="fixed top-0 w-full z-40 px-8 py-6 flex justify-between items-center bg-cream/80 backdrop-blur-sm border-b border-charcoal/5">
      <div className="flex items-center gap-3">
        {/* Logo Mark */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center shadow-gold">
          <span className="text-charcoal font-serif text-lg font-semibold">M</span>
        </div>
        <div className="font-serif text-lg tracking-tight">
          <span className="text-charcoal">Modern</span>{' '}
          <span className="text-gold">Silk Arts</span>
        </div>
      </div>

      <div className="hidden md:flex gap-12 text-label text-charcoal/60">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-charcoal transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-label text-gold hover:text-charcoal transition-colors duration-300"
      >
        Request Appointment
      </a>
    </nav>
  );
};

export default Navigation;

interface FooterLink {
  href: string;
  label: string;
}

const exploreLinks: FooterLink[] = [
  { href: '#craft', label: 'The Craft' },
  { href: '#artisans', label: 'Our Artisans' },
  { href: '#collection', label: 'Collection' },
];

const Footer = () => {
  const whatsappUrl = "https://wa.me/6386005089?text=I%20would%20like%20to%20discuss%20my%20saree%20requirements";

  return (
    <footer className="border-t border-charcoal/5 py-16 px-8 bg-cream-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center">
                <span className="text-charcoal font-serif text-sm font-semibold">M</span>
              </div>
              <p className="font-serif text-lg">Modern Silk Arts</p>
            </div>
            <p className="text-label text-charcoal/60">Est. 1960, Varanasi</p>
          </div>

          <div>
            <p className="text-label text-charcoal/40 mb-4">Explore</p>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body text-charcoal/70 hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label text-charcoal/40 mb-4">Direct Connection</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-serif text-lg font-semibold text-charcoal bg-gold px-6 py-2 hover:bg-charcoal hover:text-gold transition-all duration-300"
            >
              Start on WhatsApp
            </a>
          </div>

          <div>
            <p className="text-label text-charcoal/40 mb-4">Banarasi Heritage</p>
            <p className="text-label text-charcoal/60">
              Authentic Banarasi Legacy
              <br />
              Handwoven since 1960
              <br />
              Direct to You
            </p>
          </div>
        </div>

        <div className="border-t border-charcoal/5 pt-8 text-center">
          <p className="text-label text-charcoal/50">
            © 2026 Modern Silk Arts. Every saree is a statement. Every patron becomes family.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

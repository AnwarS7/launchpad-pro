interface Generation {
  year: string;
  title: string;
  description: string;
  isActive: boolean;
}

const generations: Generation[] = [
  {
    year: '1960 - Founder',
    title: 'The Original Vision',
    description:
      'Our patriarch arrived with a conviction: pure materials, pure patience. He rejected power-looms when they became profitable. He trained his sons for five years before allowing their first independent piece.',
    isActive: true,
  },
  {
    year: '1990 - Refinement',
    title: 'The Documentation Era',
    description:
      'His generation brought accountability. They documented every thread source, every weaving technique, every quality checkpoint. Profit never altered precision.',
    isActive: false,
  },
  {
    year: '2010 - Science',
    title: 'The Verification Movement',
    description:
      'Digital testing joined traditional wisdom. Every saree now has verified provenance. We made transparency the standard, not the exception.',
    isActive: false,
  },
  {
    year: '2026 - Direct Access',
    title: 'The Concierge Model',
    description:
      'You no longer buy from retailers. You consult with us directly. Personal styling, lifetime authentication, and the stories behind your saree.',
    isActive: true,
  },
];

const ArtisansSection = () => {
  return (
    <section id="artisans" className="py-32 px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 reveal-scroll">
          <span className="text-label text-gold block mb-4">
            The Hands Behind The Loom
          </span>
          <h2 className="text-headline">Five Generations, One Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {generations.map((gen, index) => (
            <div
              key={index}
              className={`reveal-scroll space-y-6 ${
                gen.isActive ? 'timeline-active' : 'timeline-inactive'
              }`}
            >
              <div>
                <p
                  className={`text-label ${
                    gen.isActive ? 'text-gold' : 'text-charcoal/50'
                  }`}
                >
                  {gen.year}
                </p>
                <h3 className="text-title mt-2">{gen.title}</h3>
              </div>
              <p className="text-body text-charcoal/70">{gen.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisansSection;

interface TrustItem {
  icon: string;
  title: string;
  desc: string;
}

const trustItems: TrustItem[] = [
  {
    icon: '✓',
    title: 'Pure Silk Promise',
    desc: 'Five generations of expertise. We stake our reputation on 100% authentic Banarasi silk, verified through our master craftsmen.',
  },
  {
    icon: '▶',
    title: 'Video Authentication',
    desc: 'Watch the weaving process from loom to finish. See your artisan.',
  },
  {
    icon: '◆',
    title: 'Lifetime Guarantee',
    desc: 'Any issue? Free restoration. Our commitment extends beyond the sale.',
  },
  {
    icon: '→',
    title: 'Direct Traceability',
    desc: 'Know the name of the weaver. Know the location. Know the story.',
  },
];

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    value: '5',
    label: 'Generations of Mastery',
    sublabel: 'Since 1960. Same family. Same standards.',
  },
  {
    value: '168',
    label: 'Hours Per Saree',
    sublabel: 'Not all time is created equal. Ours is pure mastery.',
  },
  {
    value: '₹15K+',
    label: 'Investment, Not Expense',
    sublabel: 'Heirlooms appreciate. You become a keeper of heritage.',
  },
  {
    value: '1000+',
    label: 'Masterpieces Delivered',
    sublabel: 'Cherished by families across generations. Your legacy awaits.',
  },
];

const VerificationSection = () => {
  return (
    <section className="py-24 px-8 bg-gradient-cream border-t border-charcoal/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal-scroll text-center">
          <span className="text-label text-gold">Our Promise</span>
          <h2 className="text-headline mt-4 text-charcoal">
            Verified. Documented. Guaranteed.
          </h2>
          <p className="text-body text-charcoal/60 mt-6 max-w-2xl mx-auto">
            Every piece comes with complete traceability. We show you exactly where your saree was born.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Trust Metrics */}
          <div className="space-y-8">
            {trustItems.map((item, i) => (
              <div key={i} className="reveal-scroll flex gap-6 items-start">
                <div className="text-gold font-serif text-3xl flex-shrink-0 pt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                  <p className="text-body text-charcoal/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Statistics */}
          <div className="bg-charcoal text-cream p-12 rounded-sm space-y-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={i < stats.length - 1 ? 'border-b border-cream/20 pb-8' : ''}
              >
                <p className="font-serif text-6xl font-light text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-label text-cream">{stat.label}</p>
                <p className="text-label text-cream/70 mt-2">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;

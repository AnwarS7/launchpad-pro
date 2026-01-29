interface CollectionItem {
  name: string;
  description: string;
  price: string;
  lead: string;
}

const collectionItems: CollectionItem[] = [
  {
    name: 'Pure Katan',
    description: 'Premium handwoven silk saree with traditional Zari borders and intricate patterns',
    price: '₹15,000+',
    lead: '4 weeks',
  },
  {
    name: 'Pure Silk Heritage',
    description: 'Finest pure silk with elaborate weaving, reserved for special occasions',
    price: '₹20,000+',
    lead: '5-6 weeks',
  },
  {
    name: 'The Heirloom Series',
    description: 'Custom commissions with personalized design for your most important life moments',
    price: 'From ₹25,000',
    lead: '8-10 weeks',
  },
];

const CollectionSection = () => {
  return (
    <section id="collection" className="py-32 px-8 bg-cream-white/50 border-t border-charcoal/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 reveal-scroll">
          <span className="text-label text-gold block mb-4">Curated Pieces</span>
          <h2 className="text-headline">Available Now</h2>
          <p className="text-body text-charcoal/60 mt-6 max-w-2xl">
            Limited pieces. Each unique. Each traceable to the artisan's hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collectionItems.map((item, index) => (
            <div key={index} className="reveal-scroll luxury-card">
              <h3 className="text-title text-charcoal">{item.name}</h3>
              <p className="text-body text-charcoal/70 mt-4">{item.description}</p>
              <div className="space-y-2 pt-6 mt-6 border-t border-charcoal/5">
                <p className="font-serif text-2xl font-semibold text-gold">{item.price}</p>
                <p className="text-label text-charcoal/50">Lead time: {item.lead}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;

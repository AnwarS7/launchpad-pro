interface CollectionItem {
  name: string;
  description: string;
  price: string;
  lead: string;
  image: string;
}

const collectionItems: CollectionItem[] = [
  {
    name: 'Pure Katan',
    description: 'Premium handwoven silk saree with traditional Zari borders and intricate patterns',
    price: '₹15,000+',
    lead: '4 weeks',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod%201%20sq-q1xa5GXoOB7wXySGOxRPKZjnokWWJI.jpg',
  },
  {
    name: 'Pure Silk Heritage',
    description: 'Finest pure silk with elaborate weaving, reserved for special occasions',
    price: '₹20,000+',
    lead: '5-6 weeks',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod%20sq-9pSpMH9Ob3H2LL70teXHhwaVJuxVf3.jpg',
  },
  {
    name: 'The Heirloom Series',
    description: 'Custom commissions with personalized design for your most important life moments',
    price: 'From ₹25,000',
    lead: '8-10 weeks',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod%201-eBOEM8QwFYGfGV7www9SYbo2Rcnupr.webp',
  },
];

const CollectionSection = () => {
  const whatsappUrl = "https://wa.me/6386005089?text=I%20am%20interested%20in%20";
  
  const handleCardClick = (itemName: string) => {
    window.open(`${whatsappUrl}${encodeURIComponent(itemName)}`, '_blank');
  };

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
            <div 
              key={index} 
              className="reveal-scroll luxury-card saree-fold group cursor-pointer" 
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handleCardClick(item.name)}
            >
              {/* Saree image with shimmer effect and fold animation */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-sm -mx-8 -mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover silk-shimmer group-hover:scale-105 transition-transform duration-700 saree-fold-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-title text-charcoal">{item.name}</h3>
              <p className="text-body text-charcoal/70 mt-4">{item.description}</p>
              <div className="space-y-2 pt-6 mt-6 border-t border-charcoal/5">
                <p className="font-serif text-2xl font-semibold text-gold">{item.price}</p>
                <p className="text-label text-charcoal/50">Lead time: {item.lead}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5">
                <button className="w-full text-center font-serif text-sm text-gold hover:text-charcoal transition-colors">
                  Inquire on WhatsApp →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;

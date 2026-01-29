const CTASection = () => {
  const whatsappUrl = "https://wa.me/6386005089?text=I%20want%20to%20discuss%20my%20perfect%20Banarasi%20saree";

  return (
    <section className="py-40 px-8 bg-cream relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10 reveal-scroll">
        {/* Headline */}
        <div className="space-y-6">
          <h2 className="text-display text-charcoal">This is the moment.</h2>
          <p className="font-serif text-3xl text-charcoal/70 font-light">
            Your heirloom begins with a conversation.
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-body text-charcoal/70">
            Our concierge doesn't just sell sarees. We understand the weight of your moment—the wedding, the milestone, the memory you want to carry forever. We listen. We design. We handcraft. Then we deliver something that becomes part of your family story.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="pt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow inline-block"
          >
            <div className="relative px-16 py-6 bg-charcoal text-gold font-serif text-2xl hover:bg-gold hover:text-charcoal transition-all duration-500">
              Begin Your Journey
            </div>
          </a>
        </div>

        {/* Secondary Info */}
        <div className="pt-8 space-y-4">
          <p className="text-label text-gold">Direct WhatsApp Connection</p>
          <p className="text-label text-charcoal/60">
            Average response: 15 minutes • Personalized consultation • No obligations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

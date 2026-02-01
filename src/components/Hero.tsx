const Hero = () => {
  const whatsappUrl = "https://wa.me/6386005089?text=I%20would%20like%20to%20schedule%20a%20private%20consultation";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pt-24 overflow-hidden">
      {/* Craftsman background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner-NtZjyB5YSwtQcXhnDJ0vFXYh3wTXwB.jpg"
          alt="Master craftsman at loom"
          className="w-full h-full object-cover silk-shimmer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/50 to-cream/80" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 reveal-scroll relative z-10 pt-20">
        <div className="silk-float" style={{ animationDelay: '0.1s' }}>
          <span className="text-label text-gold">Est. 1960 • Varanasi</span>
        </div>

        <div className="silk-float" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-display">
            One Hundred Sixty Eight Hours of{' '}
            <span className="text-gold fabric-glow inline-block">Pure Silk</span>
          </h1>
        </div>

        <div className="silk-float" style={{ animationDelay: '0.3s' }}>
          <p className="text-body text-charcoal/70 max-w-2xl mx-auto text-lg">
            A single saree. Seven days of hand-weaving. Five generations of unwavering precision.
            No shortcuts. No industrial looms. Just the mathematics of beauty.
          </p>
        </div>

        <div className="silk-float pt-8" style={{ animationDelay: '0.4s' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-xl text-gold gold-underline hover:text-charcoal transition-colors duration-500"
          >
            Begin Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

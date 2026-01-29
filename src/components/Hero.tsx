const Hero = () => {
  const whatsappUrl = "https://wa.me/6386005089?text=I%20would%20like%20to%20schedule%20a%20private%20consultation";

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-24">
      <div className="max-w-4xl mx-auto text-center space-y-12 reveal-scroll">
        <div className="hero-anim opacity-0 translate-y-10">
          <span className="text-label text-gold">Est. 1960 • Varanasi</span>
        </div>

        <div className="hero-anim opacity-0 translate-y-10">
          <h1 className="text-display">
            One Hundred Sixty Eight Hours of{' '}
            <span className="text-gold">Pure Silk</span>
          </h1>
        </div>

        <div className="hero-anim opacity-0 translate-y-10">
          <p className="text-body text-charcoal/70 max-w-2xl mx-auto text-lg">
            A single saree. Seven days of hand-weaving. Five generations of unwavering precision.
            No shortcuts. No industrial looms. Just the mathematics of beauty.
          </p>
        </div>

        <div className="hero-anim opacity-0 translate-y-10 pt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-xl text-gold gold-underline"
          >
            Begin Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

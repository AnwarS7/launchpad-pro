const CraftSection = () => {
  return (
    <section id="craft" className="py-32 px-8 border-t border-charcoal/5 bg-cream-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal-scroll space-y-8">
            <span className="text-label text-gold block">The Process</span>
            <h2 className="text-headline">
              Why Seven Days Cannot Become Six
            </h2>
            <div className="space-y-6 text-body text-charcoal/70">
              <p>
                Modern Indian sarees are made in 24 hours. Ours take a week. This isn't obstinacy—it's physics.
              </p>
              <p>
                Pure silk requires different tension. Pure Zari needs different speed. Our weavers maintain hand-consistency
                that machines cannot replicate. Each thread is visible. Each pattern is intentional.
              </p>
              <p className="text-charcoal font-semibold">
                The drape you feel is that time. The confidence you wear is earned.
              </p>
            </div>
          </div>

          <div className="reveal-scroll bg-charcoal/5 aspect-square rounded-sm flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="font-serif text-6xl text-gold">168</div>
              <p className="text-label text-charcoal/60">Hours of Weaving</p>
              <p className="text-label text-charcoal/40">Per Saree, No Exception</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;

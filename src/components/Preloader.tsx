const Preloader = () => {
  return (
    <div
      id="preloader"
      className="fixed inset-0 z-50 bg-cream flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="w-24 h-24 mx-auto mb-6 loom-needle-animate">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-siqbJWvn3uDLGSlyqOUFIMUfPKrNze.png"
            alt="Modern Silk Arts Logo"
            className="w-full h-full"
          />
        </div>
        <h1
          id="loader-text"
          className="font-serif text-5xl text-charcoal opacity-0"
        >
          Modern Silk Arts
        </h1>
        <div className="w-48 h-px bg-charcoal/20 relative overflow-hidden mx-auto">
          <div
            id="loader-line"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal to-transparent"
            style={{ transform: 'translateX(-100%)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

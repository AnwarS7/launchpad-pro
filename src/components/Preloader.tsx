const Preloader = () => {
  return (
    <div
      id="preloader"
      className="fixed inset-0 z-50 bg-cream flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        <h1
          id="loader-text"
          className="font-serif text-5xl text-charcoal opacity-0"
        >
          The Loom Masters
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

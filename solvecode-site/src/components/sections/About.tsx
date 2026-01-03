export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-transparent to-[#0f0f0f]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">About SolveCode</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            SolveCode is a technology company specializing in building
            high-quality, scalable web applications. We combine engineering
            excellence with a strong product mindset to deliver solutions that
            not only work but excel in performance, security, and user
            experience.
          </p>
          <p className="text-gray-400 text-center mt-6">
            Our team focuses on modern technologies and best practices to ensure
            your applications are built to last and scale with your business
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}

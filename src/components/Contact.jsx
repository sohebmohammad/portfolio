export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-gray-500 text-sm">Have a project in mind? Let's talk.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {/* Contact info */}
        <div className="flex flex-col gap-4">
          {[
            {
              label: "Email",
              value: "sohebmohammadd@gmail.com",
              href: "mailto:sohebmohammadd@gmail.com",
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              label: "GitHub",
              value: "github.com/sohebmohammad",
              href: "https://github.com/sohebmohammad",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/sohebmohammad",
              href: "https://linkedin.com/in/sohebmohammad",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
          ].map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1e1f28] border border-[#2e303a] rounded-xl px-4 py-3 hover:border-purple-600/40 transition-colors group"
            >
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors">{icon}</span>
              <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Quick message form */}
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#1e1f28] border border-[#2e303a] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            className="bg-[#1e1f28] border border-[#2e303a] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600/50 transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Your message"
            className="bg-[#1e1f28] border border-[#2e303a] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

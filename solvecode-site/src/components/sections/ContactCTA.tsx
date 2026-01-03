import { Mail, Instagram, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-blue-600/10 to-transparent">
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Ready to start your next project ? Get in touch and let's discuss how
            we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:solvecodeorg@gmail.com"
              className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-3 group"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>

            <a
              href="https://www.instagram.com/solvecode_/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            <a
              href="https://wa.me/351939142970"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

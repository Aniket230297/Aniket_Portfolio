import { Linkedin, Github, Mail } from "lucide-react";

const Contact = () => (
    <section id="contact" className="bg-gray-100 py-20 px-6 text-black">
        <div className="max-w-xl mx-auto text-center">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold mb-6 relative inline-block after:block after:h-1 after:w-24 after:bg-yellow-500 after:mx-auto after:mt-2">
                Contact
            </h2>

            {/* Message */}
            <p className="text-gray-700 mb-8">
                I'm currently open to freelance, full-time, and remote opportunities.
                Feel free to reach out and let's build something awesome together!
            </p>

            {/* Contact Info */}
            <div className="flex justify-center gap-6 mb-6">
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketkule231997@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-yellow-600 transition"
                >
                    <Mail size={24} />
                </a>

                <a
                    href="https://www.linkedin.com/in/aniket-kule-a7358714b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-yellow-600 transition"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="https://github.com/Aniket230297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-yellow-600 transition"
                >
                    <Github size={24} />
                </a>
            </div>

            {/* Optional: Contact Form */}
            <form
                action="https://formsubmit.co/aniketkule231997@gmail.com"
                method="POST"
                className="flex flex-col gap-4"
            >
                <input type="hidden" name="_subject" value="New Contact Message from Portfolio" />
                <input type="hidden" name="_captcha" value="false" />

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="px-4 py-2 border rounded-md"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="px-4 py-2 border rounded-md"
                />
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="px-4 py-2 border rounded-md"
                />
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
                >
                    Send Message
                </button>
            </form>

        </div>
    </section>
);

export default Contact;

const About = () => (
  <section id="about" className="bg-gradient-to-b from-yellow-50 to-white py-20 px-6 text-center text-black">
    <div className="max-w-3xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-6 relative inline-block after:block after:h-1 after:w-24 after:bg-yellow-500 after:mx-auto after:mt-2">
        About Me
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        I’m a <span className="font-semibold text-yellow-600">Frontend Developer</span> with
        <span className="font-semibold text-yellow-600"> 1 year of experience</span> building modern,
        responsive websites using <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>,
        <span className="font-semibold"> JavaScript</span>, and <span className="font-semibold">React</span>.
        I love solving real-world UI problems and constantly improving through learning and experimentation.
      </p>

      {/* Fun Line or Quote */}
      <p className="text-sm text-gray-500 mt-6 italic">
        "I turn coffee into code and design into delightful user experiences ☕💻"
      </p>
    </div>
  </section>
);

export default About;

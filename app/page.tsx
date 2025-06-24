import React, { useEffect, useState, useRef } from 'react';

const gradientTextClass = "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent";

const fadeInClass = "transition-opacity duration-1000 ease-out opacity-0";
const fadeInActiveClass = "opacity-100";

function useOnScreen(ref: React.RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if(ref.current){
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

const Section: React.FC<{title: string; subtitle?: string; children: React.ReactNode; delay?: number;}> = ({ title, subtitle, children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section
      ref={ref}
      className={\`max-w-5xl mx-auto my-16 p-6 border border-gray-700 rounded-lg \${onScreen ? fadeInActiveClass : fadeInClass}\`}
      style={{transitionDelay: \`\${delay}ms\`}}
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
    >
      <h2 id={title.replace(/\s+/g, '-').toLowerCase()} className={\`text-4xl font-extrabold mb-4 \${gradientTextClass}\`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-lg text-gray-400 mb-6">
          {subtitle}
        </h3>
      )}
      <div className="prose prose-invert max-w-none text-gray-300">
        {children}
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{icon: React.ReactNode; title: string; description: string;}> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 my-4">
    <div className="text-cyan-400 text-4xl flex-shrink-0">{icon}</div>
    <div>
      <h4 className="text-xl font-semibold mb-1">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  // Large content helper: generate dummy paragraphs
  const dummyParagraph = (num: number) =>
    Array(num)
      .fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in aliquet metus, nec convallis ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      )
      .map((text, i) => <p key={i} className="mb-4">{text}</p>);

  return (
    <main className="min-h-screen bg-black text-gray-200 font-sans px-4 sm:px-6 lg:px-8 selection:bg-pink-500 selection:text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className={`text-6xl sm:text-7xl font-extrabold mb-6 ${gradientTextClass} animate-gradient-text`}>
          NXT BALKAN
        </h1>
        <p className="max-w-xl text-gray-400 text-lg sm:text-xl mb-10 animate-fadeIn">
          Welcome to the future of innovation and excellence – the NXT Balkan platform.
          Revolutionizing tech and culture in the Balkans & beyond.
        </p>
        <button
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-black font-bold uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </section>

      {/* Multiple Sections with content and animations */}
      <Section title="About NXT Balkan" subtitle="Empowering the Balkan tech ecosystem with innovation">
        {dummyParagraph(5)}
      </Section>

      <Section title="Our Mission" subtitle="Driving Progress Through Technology and Collaboration" delay={100}>
        <p>
          At NXT Balkan, our mission is to cultivate a thriving ecosystem of innovation,
          technology, and creative problem-solving. We believe in harnessing the power 
          of the Balkan region's talent and resources to achieve extraordinary results.
        </p>
        {dummyParagraph(4)}
      </Section>

      <Section title="Key Features" delay={200}>
        <FeatureItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          title="Lightning Speed"
          description="Optimize your workflow with blazing fast performance and response times."
        />
        <FeatureItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>}
          title="Real-Time Analytics"
          description="Make data-driven decisions instantly with comprehensive analytics tools."
        />
        <FeatureItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-7 4h6a2 2 0 002-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>}
          title="Robust Security"
          description="Your data is protected with industry-leading security protocols and encryption."
        />
      </Section>

      <Section title="Our Projects" delay={300}>
        <p>
          We are proud to host and support numerous groundbreaking projects across the Balkans.
          From AI-driven startups to sustainable energy solutions, NXT Balkan is at the forefront.
        </p>
        {dummyParagraph(6)}
      </Section>

      <Section title="Community Impact" delay={400}>
        <p>
          By fostering an inclusive community and hosting regular hackathons, workshops, and mentoring,
          we create opportunities for growth, learning, and networking.
        </p>
        {dummyParagraph(5)}
      </Section>

      <Section title="Partnerships & Collaborations" delay={500}>
        <p>
          Building bridges between technology and business, academia and industry, to create a powerful
          network for success.
        </p>
        {dummyParagraph(4)}
      </Section>

      <Section title="Future Vision" delay={600}>
        <p>
          Embracing emerging technologies and continuously evolving to lead the region into a new era of
          digital transformation.
        </p>
        {dummyParagraph(5)}
      </Section>

      <Section title="Get Involved" delay={700}>
        <p>
          Join us in shaping the future. Engage, contribute, and innovate with NXT Balkan.
        </p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Become a member</li>
          <li>Participate in events</li>
          <li>Submit your project</li>
          <li>Volunteer and mentor</li>
          <li>Spread the word</li>
        </ul>
      </Section>

      <Section title="Contact Us" delay={800}>
        <p>
          We are here to help and collaborate. Reach out to us through the following channels:
        </p>
        <address className="not-italic mb-8">
          Email: <a href="mailto:contact@nxtbalkan.com" className="text-cyan-400 hover:underline">contact@nxtbalkan.com</a><br />
          Phone: <a href="tel:+1234567890" className="text-cyan-400 hover:underline">+1 234 567 890</a><br />
          Address: 123 Innovation Road, Tech City, Balkania
        </address>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NXT Balkan. All rights reserved.
      </footer>

      <style jsx>{`
        /* Custom animations */

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-text {
          animation: gradientShift 8s ease infinite;
          background-size: 200% 200%;
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default Home;



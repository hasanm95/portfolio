import { Navbar, Hero, About, Experience, Projects, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <main id="main-content" className="px-4 md:px-6">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

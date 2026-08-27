import Image from "next/image";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="font-display text-headline-md font-bold text-primary tracking-tighter">
            ARCHITECT.IO
          </div>
          <div className="hidden md:flex space-x-6">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#projects">Projects</a>
            <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#experience">Experience</a>
            <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#analytics-section">Analytics</a>
            <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#notes">Notes</a>
            <a className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
          </div>
          <div>
            <button className="btn-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:scale-95 transition-transform duration-200">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[100px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full space-y-32">
        {/* 1. Hero Section */}
        <section className="relative min-h-[614px] flex items-center justify-center" id="hero">
          <div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl opacity-20">
            <div 
              className="bg-cover bg-center w-full h-full" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOwMyADl1BF574H-8bkLGvwOhM-4jAbkOXxtTPf0EfZwNmahSjZk8irEuAg8UbH-8h5undv4oBs62eX5vKdjGxf7AUAs4O62r_1ec2o-LvIuNSobWS0Q2GTXRxsvgNP2O2rPbYbMpLWrZf25iJ3a278EMGvRkExzUEdMvgHUeP5jUDVhcgx3OOcqV6XYAA9OykB3S77f3KL2gqHPdeyqszLrWmAT94SBQIpEME24x6-bp92WJ3qIXiKg')" }}
            ></div>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl text-center space-y-6">
            <img 
              alt="Professional headshot of a software engineer" 
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-surface-container-highest shadow-lg mb-4" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCghakWYUAuKgzcLBCpHeg4Xzq-q8maDwqpS1yZgAUpxlLhd8sxeNwaltGHhaDbqMds6MiRwCl4xKj1CH2OmXAWdV1NYagQxrqHHGTvHk7VUkhv__x9m348tIH0ehJILVKzOD_9ufkeSR4pERj01uE6SaHioaORLitEl2We44Pfkfy40ZESeHk6H7ibLEufQkqEny5816eWb-UVZFrqutADG5HF2u_Z-aDIKr56FAEGa34so--Wf2qJCA"
            />
            <h1 className="font-display text-headline-lg-mobile md:text-display text-primary">
              Principal Systems Engineer
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Architecting scalable, resilient distributed systems. Over 15 years bridging the gap between high-level architectural vision and concrete technical implementation.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button className="btn-primary font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                View Projects
              </button>
              <button className="btn-ghost font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined">description</span>
                Resume
              </button>
            </div>
          </div>
        </section>

        {/* 2. Analytics Dashboard */}
        <Analytics />

        {/* 3. Projects Showcase */}
        <section className="space-y-8" id="projects">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Web Development Projects</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Kumpulan tugas mata kuliah pemrograman web, dari HTML dasar hingga integrasi database.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="btn-ghost px-3 py-1 rounded-full font-label-sm text-label-sm">All</button>
              <button className="btn-ghost px-3 py-1 rounded-full font-label-sm text-label-sm">HTML/CSS</button>
              <button className="btn-ghost px-3 py-1 rounded-full font-label-sm text-label-sm">React/Next.js</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Project 1: Amikom Event Hub */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col">
              <div className="h-56 w-full bg-surface-container relative">
                <img 
                  className="object-cover object-top w-full h-full opacity-90" 
                  alt="Amikom Event Hub Landing Page" 
                  src="/images/eventamikom.webp"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Amikom Event Hub</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Platform pemesanan tiket event konser musik dan workshop teknologi, terintegrasi dengan sistem database dan framework modern.
                </p>
                <div className="flex gap-4">
                  <a href="https://eventamikom-3373.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 text-center">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    Live Demo
                  </a>
                  <a href="https://github.com/nailahalidya/eventamikom-3373" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 text-center">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Alidya Tour */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col">
              <div className="h-56 w-full bg-surface-container relative">
                <img 
                  className="object-cover object-top w-full h-full opacity-90" 
                  alt="Alidya Tour Landing Page" 
                  src="/images/alidyatour.webp"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Alidya Tour & Travel</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Website company profile untuk layanan rental mobil lepas kunci dan paket tour liburan di wilayah Yogyakarta. 
                </p>
                <div className="flex gap-4">
                  <a href="https://alidyatour.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 text-center">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    Live Demo
                  </a>
                  <a href="https://github.com/nailahalidya/alidyatour" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 text-center">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Vetria Pet Care */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col">
              <div className="h-56 w-full bg-surface-container relative">
                <img 
                  className="object-cover object-top w-full h-full opacity-90" 
                  alt="Vetria Pet Care Landing Page" 
                  src="/images/uaspwlvetria.webp"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Vetria Pet Care & Shop</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Sistem manajemen layanan grooming, konsultasi vet, dan toko aksesoris hewan. (Tugas UAS Pemrograman Web Lanjut).
                </p>
                <div className="flex gap-4">
                  <button disabled className="bg-surface-variant text-outline flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
                    <span className="material-symbols-outlined text-[18px]">pending</span>
                    Belum di-hosting
                  </button>
                  <a href="https://github.com/nailahalidya/uaspwlvetria" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 text-center">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Justisia */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col">
              <div className="h-56 w-full bg-surface-container relative">
                <img 
                  className="object-cover object-top w-full h-full opacity-90" 
                  alt="Kantor Hukum Kota Justisia" 
                  src="/images/justisia.webp"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Kantor Hukum Kota (Justisia)</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Landing page profesional untuk biro hukum dan konsultasi legal. Proyek dasar berfokus pada HTML/CSS responsif.
                </p>
                <div className="flex gap-4">
                  <a href="https://jazzy-kelpie-dc3be7.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 text-center">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Interactive Sticky Wall */}
        <section className="space-y-8" id="notes">
          <h2 className="font-headline-md text-headline-md text-on-surface">Collaborator Board</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Leave a note. Stored locally.</p>
          <div className="glass-card rounded-xl p-8 min-h-[400px] relative overflow-hidden bg-surface-container-lowest/50" id="sticky-wall">
            <div className="sticky-note absolute top-10 left-10 w-48 h-48 p-4 rounded-sm bg-[#fef08a] text-black font-body-md transform rotate-2">
              "Brilliant architecture on the Nexus project!" - Sarah, Tech Lead
            </div>
            <div className="sticky-note absolute top-32 left-64 w-48 h-48 p-4 rounded-sm bg-[#bae6fd] text-black font-body-md transform -rotate-3">
              "Looking forward to our next collaboration." - Alex
            </div>
          </div>
          {/* Note Input Form */}
          <div className="flex gap-4 items-center">
            <input className="flex-grow bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Type a message..." type="text"/>
            <select className="bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-md text-on-surface">
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
              <option value="pink">Pink</option>
            </select>
            <button className="btn-primary px-6 py-2 rounded-lg font-label-md text-label-md">Pin Note</button>
          </div>
        </section>

        {/* 5. Certificates & Journey */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop" id="experience">
          {/* Left: Milestones Timeline */}
          <div className="space-y-8">
            <h2 className="font-headline-md text-headline-md text-on-surface">Professional Journey</h2>
            <div className="relative pl-8 border-l border-outline-variant/30 space-y-12">
              <div className="timeline-item relative">
                <div className="timeline-node absolute -left-[47px] top-0 w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant/50 flex items-center justify-center transition-all duration-300 z-10">
                  <span className="material-symbols-outlined text-[16px] text-primary">corporate_fare</span>
                </div>
                <h3 className="font-headline-md text-body-lg text-primary">Principal Engineer @ TechCorp</h3>
                <p className="font-label-sm text-label-sm text-outline mb-2">2019 - Present</p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Spearheaded the migration to a micro-frontend architecture, reducing load times by 40%. Led a team of 15 senior developers.
                </p>
              </div>
              <div className="timeline-item relative">
                <div className="timeline-node absolute -left-[47px] top-0 w-8 h-8 rounded-full bg-surface-container-high border-2 border-outline-variant/50 flex items-center justify-center transition-all duration-300 z-10">
                  <span className="material-symbols-outlined text-[16px] text-primary">domain</span>
                </div>
                <h3 className="font-headline-md text-body-lg text-primary">Senior Staff Architect @ Innovate.io</h3>
                <p className="font-label-sm text-label-sm text-outline mb-2">2014 - 2019</p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Designed the core event-driven infrastructure supporting 10M+ daily active users.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Certificates Gallery */}
          <div className="md:col-span-2 space-y-8 mt-12 md:mt-0">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-headline-md text-on-surface">Sertifikat</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <a href="/asset-baru/Anggota humas pimaposma 2025.pdf" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border border-outline-variant/30">
                <div className="h-48 w-full bg-surface-container flex items-center justify-center relative group">
                  {/* Placeholder image (replace src when images are ready) */}
                  <span className="material-symbols-outlined text-[48px] text-primary/50 group-hover:scale-110 transition-transform">picture_as_pdf</span>
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t border-outline-variant/30 flex flex-col">
                  <h4 className="font-headline-sm text-label-lg font-bold text-on-surface uppercase mb-1 line-clamp-2">Anggota Humas</h4>
                  <p className="font-body-sm text-body-sm text-outline">PIMAPOSMA 2025</p>
                </div>
              </a>

              {/* Card 2 */}
              <a href="/asset-baru/STaff depertemen aspirasi himasi.pdf" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border border-outline-variant/30">
                <div className="h-48 w-full bg-surface-container flex items-center justify-center relative group">
                  <span className="material-symbols-outlined text-[48px] text-primary/50 group-hover:scale-110 transition-transform">picture_as_pdf</span>
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t border-outline-variant/30 flex flex-col">
                  <h4 className="font-headline-sm text-label-lg font-bold text-on-surface uppercase mb-1 line-clamp-2">Staff Departemen Aspirasi</h4>
                  <p className="font-body-sm text-body-sm text-outline">HIMASI</p>
                </div>
              </a>

              {/* Card 3 */}
              <a href="/asset-baru/divisi konsum ppm.pdf" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border border-outline-variant/30">
                <div className="h-48 w-full bg-surface-container flex items-center justify-center relative group">
                  <span className="material-symbols-outlined text-[48px] text-primary/50 group-hover:scale-110 transition-transform">picture_as_pdf</span>
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t border-outline-variant/30 flex flex-col">
                  <h4 className="font-headline-sm text-label-lg font-bold text-on-surface uppercase mb-1 line-clamp-2">Divisi Konsumsi</h4>
                  <p className="font-body-sm text-body-sm text-outline">PPM</p>
                </div>
              </a>

              {/* Card 4 */}
              <a href="/asset-baru/E Sertifikat Nailah Putri Alidya PIMAPOSMA 2024.pdf" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border border-outline-variant/30">
                <div className="h-48 w-full bg-surface-container flex items-center justify-center relative group">
                  <span className="material-symbols-outlined text-[48px] text-primary/50 group-hover:scale-110 transition-transform">picture_as_pdf</span>
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t border-outline-variant/30 flex flex-col">
                  <h4 className="font-headline-sm text-label-lg font-bold text-on-surface uppercase mb-1 line-clamp-2">Sertifikat Peserta</h4>
                  <p className="font-body-sm text-body-sm text-outline">PIMAPOSMA 2024</p>
                </div>
              </a>
              
              {/* Card 5 */}
              <a href="/asset-baru/[24.12.3373]  E-Sertifikat Launching Gemasi 2025.pdf" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border border-outline-variant/30">
                <div className="h-48 w-full bg-surface-container flex items-center justify-center relative group">
                  <span className="material-symbols-outlined text-[48px] text-primary/50 group-hover:scale-110 transition-transform">picture_as_pdf</span>
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t border-outline-variant/30 flex flex-col">
                  <h4 className="font-headline-sm text-label-lg font-bold text-on-surface uppercase mb-1 line-clamp-2">Sertifikat Launching</h4>
                  <p className="font-body-sm text-body-sm text-outline">GEMASI 2025</p>
                </div>
              </a>

              {/* Card 6 */}
              <a href="/asset-baru/sertif pserta ppm.pdf" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border border-outline-variant/30">
                <div className="h-48 w-full bg-surface-container flex items-center justify-center relative group">
                  <span className="material-symbols-outlined text-[48px] text-primary/50 group-hover:scale-110 transition-transform">picture_as_pdf</span>
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t border-outline-variant/30 flex flex-col">
                  <h4 className="font-headline-sm text-label-lg font-bold text-on-surface uppercase mb-1 line-clamp-2">Sertifikat Peserta</h4>
                  <p className="font-body-sm text-body-sm text-outline">PPM</p>
                </div>
              </a>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="font-display text-label-md font-bold text-on-surface">
            ARCHITECT.IO
          </div>
          <div className="font-label-sm text-label-sm text-secondary">
            © 2024 Principal Engineer Portfolio. Built with precision.
          </div>
          <div className="flex gap-4">
            <a className="font-label-sm text-label-sm text-outline hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(78,222,163,0.5)] transition-all duration-300 hover:translate-y-[-2px]" href="#">LinkedIn</a>
            <a className="font-label-sm text-label-sm text-outline hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(78,222,163,0.5)] transition-all duration-300 hover:translate-y-[-2px]" href="#">GitHub</a>
            <a className="font-label-sm text-label-sm text-outline hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(78,222,163,0.5)] transition-all duration-300 hover:translate-y-[-2px]" href="#">Twitter</a>
            <a className="font-label-sm text-label-sm text-outline hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(78,222,163,0.5)] transition-all duration-300 hover:translate-y-[-2px]" href="#">Resume</a>
          </div>
        </div>
      </footer>
    </>
  );
}

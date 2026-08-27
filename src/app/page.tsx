import Image from "next/image";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-paper-white)]/80 backdrop-blur-xl border-b border-[var(--color-fold-shadow)] shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="font-display text-xl md:text-2xl font-bold text-[var(--color-ink-black)] tracking-tighter">
            ARCHITECT.IO
          </div>
          <div className="hidden md:flex space-x-8">
            <a className="text-[var(--color-ink-black)] font-bold border-b-2 border-[var(--color-ink-black)] pb-1 font-body text-sm hover:opacity-80 transition-opacity duration-300" href="#projects">Projects</a>
            <a className="text-[var(--color-steel-grey)] font-medium font-body text-sm hover:text-[var(--color-ink-black)] transition-colors duration-300" href="#experience">Experience</a>
            <a className="text-[var(--color-steel-grey)] font-medium font-body text-sm hover:text-[var(--color-ink-black)] transition-colors duration-300" href="#analytics-section">Analytics</a>
            <a className="text-[var(--color-steel-grey)] font-medium font-body text-sm hover:text-[var(--color-ink-black)] transition-colors duration-300" href="#notes">Notes</a>
            <a className="text-[var(--color-steel-grey)] font-medium font-body text-sm hover:text-[var(--color-ink-black)] transition-colors duration-300" href="#contact">Contact</a>
          </div>
          <div>
            <button className="btn-primary font-body text-sm px-5 py-2 hover:scale-[0.98] transition-transform duration-200">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[100px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full space-y-32">
        
        {/* 1. Hero Section */}
        <section className="relative w-full flex items-center justify-center pt-8" id="hero">
          <div className="origami-card w-full p-8 md:p-20 flex flex-col items-center justify-center text-center space-y-10 min-h-[500px] relative overflow-hidden">
            {/* Background Dots Pattern for texture (Origami tessellation hint) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Pill Badge (Sharp variant) */}
            <div className="relative z-10">
              <span className="inline-block border border-[var(--color-fold-shadow)] px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--color-steel-grey)] uppercase bg-white">
                Mahasiswa Sistem Informasi
              </span>
            </div>

            {/* Giant Greeting with Inline Photo */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-display text-[3.5rem] md:text-[6rem] font-bold text-[var(--color-ink-black)] leading-tight tracking-tight">
              <span>Hi,</span>
              <div className="w-32 h-32 md:w-40 md:h-40 relative transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-md border border-[var(--color-fold-shadow)] p-1 bg-white">
                <img 
                  src="/images/nailah.webp" 
                  alt="Nailah Putri Alidya" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span>I'm Nailah!</span>
            </div>

            {/* Description */}
            <p className="relative z-10 font-body text-base md:text-lg text-[var(--color-steel-grey)] max-w-3xl mx-auto leading-relaxed">
              Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan pada pengembangan website dan aplikasi web dinamis. Saya berfokus pada membangun antarmuka yang responsif, menulis kode yang terstruktur, serta menciptakan pengalaman pengguna yang intuitif. Portfolio ini mendokumentasikan berbagai project dan eksperimen yang saya kerjakan selama mempelajari Pemrograman Web Lanjut, menggunakan HTML, CSS, JavaScript, MySQL, dan Laravel.
            </p>
            
            {/* Call to Action */}
            <div className="relative z-10 pt-4 flex gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                Lihat Portfolio
              </a>
              <a href="#contact" className="btn-ghost flex items-center gap-2">
                Hubungi Saya
              </a>
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
              <a href="/asset-baru/Anggota humas pimaposma 2025.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border-2 border-[#121212]">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                  <img src="/images/cert-humas.webp" alt="Sertifikat Anggota Humas" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-label-sm shadow-md">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#121212] flex flex-col bg-white">
                  <h4 className="font-headline-sm text-label-lg font-extrabold text-[#121212] uppercase mb-1 line-clamp-2">Anggota Humas</h4>
                  <p className="font-body-sm text-body-sm text-gray-600">PIMAPOSMA 2025</p>
                </div>
              </a>

              {/* Card 2 */}
              <a href="/asset-baru/STaff depertemen aspirasi himasi.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border-2 border-[#121212]">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                  <img src="/images/cert-aspirasi.webp" alt="Sertifikat Staff Aspirasi" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-label-sm shadow-md">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#121212] flex flex-col bg-white">
                  <h4 className="font-headline-sm text-label-lg font-extrabold text-[#121212] uppercase mb-1 line-clamp-2">Staff Departemen Aspirasi</h4>
                  <p className="font-body-sm text-body-sm text-gray-600">HIMASI</p>
                </div>
              </a>

              {/* Card 3 */}
              <a href="/asset-baru/divisi konsum ppm.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border-2 border-[#121212]">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                  <img src="/images/cert-konsumsi.webp" alt="Sertifikat Divisi Konsumsi" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-label-sm shadow-md">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#121212] flex flex-col bg-white">
                  <h4 className="font-headline-sm text-label-lg font-extrabold text-[#121212] uppercase mb-1 line-clamp-2">Divisi Konsumsi</h4>
                  <p className="font-body-sm text-body-sm text-gray-600">PPM</p>
                </div>
              </a>

              {/* Card 4 */}
              <a href="/asset-baru/E Sertifikat Nailah Putri Alidya PIMAPOSMA 2024.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border-2 border-[#121212]">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                  <img src="/images/cert-pimaposma24.webp" alt="Sertifikat PIMAPOSMA 2024" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-label-sm shadow-md">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#121212] flex flex-col bg-white">
                  <h4 className="font-headline-sm text-label-lg font-extrabold text-[#121212] uppercase mb-1 line-clamp-2">Sertifikat Peserta</h4>
                  <p className="font-body-sm text-body-sm text-gray-600">PIMAPOSMA 2024</p>
                </div>
              </a>
              
              {/* Card 5 */}
              <a href="/asset-baru/[24.12.3373]  E-Sertifikat Launching Gemasi 2025.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border-2 border-[#121212]">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                  <img src="/images/cert-gemasi.webp" alt="Sertifikat GEMASI 2025" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-label-sm shadow-md">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#121212] flex flex-col bg-white">
                  <h4 className="font-headline-sm text-label-lg font-extrabold text-[#121212] uppercase mb-1 line-clamp-2">Sertifikat Launching</h4>
                  <p className="font-body-sm text-body-sm text-gray-600">GEMASI 2025</p>
                </div>
              </a>

              {/* Card 6 */}
              <a href="/asset-baru/sertif pserta ppm.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform border-2 border-[#121212]">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                  <img src="/images/cert-ppm.webp" alt="Sertifikat Peserta PPM" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-label-sm shadow-md">Buka PDF</span>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#121212] flex flex-col bg-white">
                  <h4 className="font-headline-sm text-label-lg font-extrabold text-[#121212] uppercase mb-1 line-clamp-2">Sertifikat Peserta</h4>
                  <p className="font-body-sm text-body-sm text-gray-600">PPM</p>
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

"use client";
import Image from "next/image";
import Analytics from "@/components/Analytics";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "hero";
      
      // Calculate which section is currently most visible
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        // If the section is near the top of the viewport (with an offset for the navbar)
        if (sectionTop <= 200) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "experience", label: "Certificates" },
  ];

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-surface)]/80 backdrop-blur-xl border-b border-[rgba(238,240,230,0.06)] shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="font-display text-xl md:text-2xl font-bold text-[var(--color-bone)] tracking-tighter uppercase">
            NPA
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-body text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-[var(--color-volt-lime)] font-bold border-b-2 border-[var(--color-volt-lime)] pb-1"
                    : "text-[var(--color-secondary)] font-medium hover:text-[var(--color-bone)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <button className="btn-primary">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[120px] pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-32 md:space-y-48">
        
        {/* 1. Hero Section */}
        <section className="relative w-full flex items-center justify-center pt-8" id="hero">
          <div className="arcade-card w-full p-8 md:p-20 flex flex-col items-center justify-center text-center space-y-10 min-h-[500px] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            {/* Pill Badge (Arcade Night style - sharp edge, uppercase mono) */}
            <div className="relative z-10">
              <span className="inline-block border border-[rgba(238,240,230,0.18)] px-4 py-1.5 label-mono text-[var(--color-bone)]">
                MAHASISWA SISTEM INFORMASI
              </span>
            </div>

            {/* Giant Greeting with Inline Photo */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-display text-[4rem] md:text-[5.5rem] font-bold text-[var(--color-bone)] leading-[0.92] tracking-[-0.02em] uppercase">
              <span>Hi,</span>
              <div className="w-32 h-32 md:w-40 md:h-40 relative transform hover:rotate-0 transition-transform duration-320 shadow-none border border-[rgba(238,240,230,0.18)] p-1 bg-[var(--color-surface-lift)]">
                <img 
                  src="/images/nailah.webp" 
                  alt="Nailah Putri Alidya" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-320"
                />
              </div>
              <span>I'm Nailah!</span>
            </div>

            {/* Description */}
            <p className="relative z-10 font-body text-[0.9375rem] text-[rgba(238,240,230,0.6)] max-w-2xl mx-auto leading-[1.55]">
              Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan pada pengembangan website dan aplikasi web dinamis. Saya berfokus pada membangun antarmuka yang responsif, menulis kode yang terstruktur, serta menciptakan pengalaman pengguna yang intuitif.
            </p>
            
            {/* Call to Action */}
            <div className="relative z-10 pt-4 flex gap-4">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                Lihat Portfolio
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                Hubungi Saya
              </a>
            </div>
          </div>
        </section>

        {/* 1.5 About & Skills Section (from user screenshot) */}
        <section className="space-y-8" id="about">
          <h2 className="font-display text-[3rem] font-bold text-[var(--color-bone)] uppercase tracking-tight">About & Skills</h2>
          <div className="w-full h-px bg-[rgba(238,240,230,0.06)] mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Quote Box */}
            <div className="arcade-card relative p-8 md:p-12 border border-[rgba(238,240,230,0.18)]">
              {/* Quote Icon Badge */}
              <div className="absolute -top-6 -left-4 md:-left-6 w-12 h-12 rounded-none bg-[var(--color-volt-lime)] flex items-center justify-center border-2 border-[var(--color-surface)] z-10">
                <span className="font-display text-2xl font-bold text-[var(--color-surface)]">"</span>
              </div>
              <p className="font-body text-[0.9375rem] text-[var(--color-bone)] leading-[1.55]">
                I am a Web Developer specializing in designing end-to-end digital products. I have deep expertise in the JavaScript ecosystem (React.js) for creating dynamic interfaces, combined with the robustness of PHP, Laravel, and MySQL for scalable system architecture. My main focus is bridging highly functional code with premium UI/UX standards, ensuring every application not only operates flawlessly but also provides a highly intuitive and engaging user experience.
              </p>
            </div>
            
            {/* Right: Skills Badges */}
            <div className="flex flex-wrap gap-4 items-center justify-start md:justify-center">
              <span className="btn-primary hover:transform-none !cursor-default">JAVASCRIPT & REACT.JS</span>
              <span className="btn-secondary hover:transform-none !cursor-default">MYSQL / SQL DATABASE</span>
              
              <span className="btn-primary hover:transform-none !cursor-default">LARAVEL FRAMEWORK</span>
              <span className="btn-secondary hover:transform-none !cursor-default">C++ PROGRAMMING</span>
              
              <span className="btn-primary hover:transform-none !cursor-default">HTML, CSS & PHP</span>
              <span className="btn-secondary hover:transform-none !cursor-default">UI/UX & WEB DESIGN</span>
              
              <span className="btn-primary hover:transform-none !cursor-default">MEDIA & COMMUNICATION</span>
            </div>
          </div>
        </section>

        {/* 3. Projects Showcase */}
        <section className="space-y-12 md:space-y-16" id="projects">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[rgba(238,240,230,0.06)] pb-6">
            <div>
              <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-[var(--color-bone)] uppercase tracking-tight leading-none">Web Development Projects</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Project 1: Amikom Event Hub */}
            <div className="arcade-card overflow-hidden flex flex-col h-full">
              <div className="h-72 w-full bg-[#11120f] relative border-b border-[rgba(238,240,230,0.06)]">
                <img 
                  className="object-cover object-[center_12%] w-full h-full opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-320" 
                  alt="Amikom Event Hub Landing Page" 
                  src="/images/eventamikom.webp"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col bg-[var(--color-surface)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-[1.875rem] text-[var(--color-bone)] uppercase leading-[1.15] tracking-tight">Amikom Event Hub</h3>
                </div>
                <p className="font-body text-[0.9375rem] text-[rgba(238,240,230,0.6)] flex-grow mb-8 leading-[1.55]">
                  Platform pemesanan tiket event konser musik dan workshop teknologi, terintegrasi dengan sistem database dan framework modern.
                </p>
                <div className="flex gap-4">
                  <a href="https://eventamikom-3373.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center">
                    Live Demo
                  </a>
                  <a href="https://github.com/nailahalidya/eventamikom-3373" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Alidya Tour */}
            <div className="arcade-card overflow-hidden flex flex-col h-full">
              <div className="h-72 w-full bg-[#11120f] relative border-b border-[rgba(238,240,230,0.06)]">
                <img 
                  className="object-cover object-[center_12%] w-full h-full opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-320" 
                  alt="Alidya Tour Landing Page" 
                  src="/images/alidyatour.webp"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col bg-[var(--color-surface)]">
                <h3 className="font-display text-[1.875rem] text-[var(--color-bone)] uppercase leading-[1.15] tracking-tight mb-2">Alidya Tour & Travel</h3>
                <p className="font-body text-[0.9375rem] text-[rgba(238,240,230,0.6)] flex-grow mb-8 leading-[1.55]">
                  Website company profile untuk layanan rental mobil lepas kunci dan paket tour liburan di wilayah Yogyakarta. 
                </p>
                <div className="flex gap-4">
                  <a href="https://alidyatour.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center">
                    Live Demo
                  </a>
                  <a href="https://github.com/nailahalidya/alidyatour" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Vetria Pet Care */}
            <div className="arcade-card overflow-hidden flex flex-col h-full">
              <div className="h-72 w-full bg-[#11120f] relative border-b border-[rgba(238,240,230,0.06)]">
                <img 
                  className="object-cover object-[center_12%] w-full h-full opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-320" 
                  alt="Vetria Pet Care Landing Page" 
                  src="/images/uaspwlvetria.webp"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col bg-[var(--color-surface)]">
                <h3 className="font-display text-[1.875rem] text-[var(--color-bone)] uppercase leading-[1.15] tracking-tight mb-2">Vetria Pet Care & Shop</h3>
                <p className="font-body text-[0.9375rem] text-[rgba(238,240,230,0.6)] flex-grow mb-8 leading-[1.55]">
                  Sistem manajemen layanan grooming, konsultasi vet, dan toko aksesoris hewan. (Tugas UAS Pemrograman Web Lanjut).
                </p>
                <div className="flex gap-4">
                  <button disabled className="bg-transparent border border-[rgba(238,240,230,0.1)] text-[rgba(238,240,230,0.4)] flex-1 text-center font-mono text-[13px] uppercase tracking-widest cursor-not-allowed">
                    Belum Hosting
                  </button>
                  <a href="https://github.com/nailahalidya/uaspwlvetria" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Justisia */}
            <div className="arcade-card overflow-hidden flex flex-col h-full">
              <div className="h-72 w-full bg-[#11120f] relative border-b border-[rgba(238,240,230,0.06)]">
                <img 
                  className="object-cover object-[center_12%] w-full h-full opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-320" 
                  alt="Kantor Hukum Kota Justisia" 
                  src="/images/justisia.webp"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col bg-[var(--color-surface)]">
                <h3 className="font-display text-[1.875rem] text-[var(--color-bone)] uppercase leading-[1.15] tracking-tight mb-2">Kantor Hukum Kota (Justisia)</h3>
                <p className="font-body text-[0.9375rem] text-[rgba(238,240,230,0.6)] flex-grow mb-8 leading-[1.55]">
                  Landing page profesional untuk biro hukum dan konsultasi legal. Proyek dasar berfokus pada HTML/CSS responsif.
                </p>
                <div className="flex gap-4">
                  <a href="https://jazzy-kelpie-dc3be7.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Certificates Gallery */}
        <section className="space-y-12 md:space-y-16" id="experience">
          <div className="flex items-center justify-between border-b border-[rgba(238,240,230,0.06)] pb-6">
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-[var(--color-bone)] uppercase tracking-tight leading-none">Sertifikat & Pencapaian</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              
              {/* Card 1 */}
              <a href="/asset-baru/Anggota humas pimaposma 2025.pdf" target="_blank" rel="noopener noreferrer" className="arcade-card group flex flex-col hover:border-[var(--color-volt-lime)] border-[rgba(238,240,230,0.06)]">
                <div className="aspect-[3/4] w-full bg-[var(--color-surface-lift)] flex items-center justify-center relative overflow-hidden border-b border-[rgba(238,240,230,0.06)]">
                  <img src="/images/cert-humas.webp" alt="Sertifikat Anggota Humas" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-320 grayscale-[20%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-320">
                    <span className="bg-[var(--color-volt-lime)] text-[var(--color-surface)] px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-widest">Lihat PDF</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col bg-[var(--color-surface)]">
                  <h4 className="font-mono text-[13px] font-bold text-[var(--color-bone)] uppercase tracking-widest mb-1 truncate">Anggota Humas</h4>
                  <p className="font-mono text-[11px] text-[rgba(238,240,230,0.6)]">PIMAPOSMA 2025</p>
                </div>
              </a>

              {/* Card 2 */}
              <a href="/asset-baru/STaff depertemen aspirasi himasi.pdf" target="_blank" rel="noopener noreferrer" className="arcade-card group flex flex-col hover:border-[var(--color-volt-lime)] border-[rgba(238,240,230,0.06)]">
                <div className="aspect-[3/4] w-full bg-[var(--color-surface-lift)] flex items-center justify-center relative overflow-hidden border-b border-[rgba(238,240,230,0.06)]">
                  <img src="/images/cert-aspirasi.webp" alt="Sertifikat Staff Aspirasi" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-320 grayscale-[20%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-320">
                    <span className="bg-[var(--color-volt-lime)] text-[var(--color-surface)] px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-widest">Lihat PDF</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col bg-[var(--color-surface)]">
                  <h4 className="font-mono text-[13px] font-bold text-[var(--color-bone)] uppercase tracking-widest mb-1 truncate">Staff Aspirasi</h4>
                  <p className="font-mono text-[11px] text-[rgba(238,240,230,0.6)]">HIMASI</p>
                </div>
              </a>

              {/* Card 3 */}
              <a href="/asset-baru/divisi konsum ppm.pdf" target="_blank" rel="noopener noreferrer" className="arcade-card group flex flex-col hover:border-[var(--color-volt-lime)] border-[rgba(238,240,230,0.06)]">
                <div className="aspect-[3/4] w-full bg-[var(--color-surface-lift)] flex items-center justify-center relative overflow-hidden border-b border-[rgba(238,240,230,0.06)]">
                  <img src="/images/cert-konsumsi.webp" alt="Sertifikat Divisi Konsumsi" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-320 grayscale-[20%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-320">
                    <span className="bg-[var(--color-volt-lime)] text-[var(--color-surface)] px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-widest">Lihat PDF</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col bg-[var(--color-surface)]">
                  <h4 className="font-mono text-[13px] font-bold text-[var(--color-bone)] uppercase tracking-widest mb-1 truncate">Divisi Konsumsi</h4>
                  <p className="font-mono text-[11px] text-[rgba(238,240,230,0.6)]">PPM</p>
                </div>
              </a>

              {/* Card 4 */}
              <a href="/asset-baru/E Sertifikat Nailah Putri Alidya PIMAPOSMA 2024.pdf" target="_blank" rel="noopener noreferrer" className="arcade-card group flex flex-col hover:border-[var(--color-volt-lime)] border-[rgba(238,240,230,0.06)]">
                <div className="aspect-[3/4] w-full bg-[var(--color-surface-lift)] flex items-center justify-center relative overflow-hidden border-b border-[rgba(238,240,230,0.06)]">
                  <img src="/images/cert-pimaposma24.webp" alt="Sertifikat PIMAPOSMA 2024" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-320 grayscale-[20%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-320">
                    <span className="bg-[var(--color-volt-lime)] text-[var(--color-surface)] px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-widest">Lihat PDF</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col bg-[var(--color-surface)]">
                  <h4 className="font-mono text-[13px] font-bold text-[var(--color-bone)] uppercase tracking-widest mb-1 truncate">Peserta PIMAPOSMA</h4>
                  <p className="font-mono text-[11px] text-[rgba(238,240,230,0.6)]">2024</p>
                </div>
              </a>
              
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-surface)] w-full py-12 border-t border-[rgba(238,240,230,0.06)]">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-6">
          <div className="font-display text-xl font-bold text-[var(--color-bone)] uppercase tracking-tighter">
            NPA
          </div>
          <div className="font-mono text-[12px] text-[rgba(238,240,230,0.6)] uppercase tracking-widest">
            © 2026 NAILAH PUTRI ALIDYA.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-0">
            <a className="font-mono text-[12px] text-[rgba(238,240,230,0.6)] hover:text-[var(--color-volt-lime)] transition-colors duration-200 uppercase tracking-widest" href="https://www.linkedin.com/in/nailah-putri-alidya-42576a3b4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-mono text-[12px] text-[rgba(238,240,230,0.6)] hover:text-[var(--color-volt-lime)] transition-colors duration-200 uppercase tracking-widest" href="https://github.com/nailahalidya" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="font-mono text-[12px] text-[rgba(238,240,230,0.6)] hover:text-[var(--color-volt-lime)] transition-colors duration-200 uppercase tracking-widest" href="https://www.instagram.com/nailahald?igsi=MTJmaHZmbXN4dTd5YQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="font-mono text-[12px] text-[rgba(238,240,230,0.6)] hover:text-[var(--color-volt-lime)] transition-colors duration-200 uppercase tracking-widest" href="mailto:nailah.alidya0907@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}

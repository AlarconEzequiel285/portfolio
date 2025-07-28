import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-bold zoomonhover text">
                projects
              </a>
              <a href="#about-me" className="text-gray-300 hover:text-white transition-colors font-bold zoomonhover">
                about me
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=alarcon.ezequiel285@gmail.com" className="text-gray-300 hover:text-white transition-colors font-bold zoomonhover">
                contact me
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="pt-16">
        <div className="p-8">
          {/* Quien soy */}
            <div className="flex items-start justify-center">
              <div className="max-w-3xl w-full">
                <div className="flex items-center justify-between mb-8">
                <div className="w-20 h-20 mr-6 relative">
                <Image
                src="/images/image1.jpeg"
                alt="its me"
                fill
                className="rounded object-cover"
                />
               </div>
                {/* Texto principal */}
                <div className="flex-1">
                  <h1 className="text-4xl md:text-4xl text-white mb-4 relative">
                    <span className="animate-drop-word">hi,</span>{" "}
                    <span className="animate-drop-word" style={{animationDelay: '0.2s'}}>i'm</span>{" "}
                    <span className="animate-drop-word" style={{animationDelay: '0.4s'}}>ezequiel</span>
                    <div className="absolute bottom--1 left-0 h-0.5 bg-white animate-underline"></div>
                  </h1>
                  <h2 className="text-gray-300">
                    university programmer, full stack developer
                  </h2>
                </div>

                {/* Redes Sociales / Contact me */}
                <div className="ml-8">
                  <div className="flex gap-1">
                    <a href="https://www.linkedin.com/in/alarconezequiel" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-700 text-white p-2 rounded transition-colors">
                    <FaLinkedinIn size={15} />
                    </a>
                    <a href="https://github.com/AlarconEzequiel285" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-700 text-white p-2 rounded transition-colors">
                    <FaGithub size={15} />
                    </a>
                    <a href="https://x.com/ourangelhood" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-700 text-white p-2 rounded transition-colors">
                    <FaXTwitter size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Descripción debajo */}
              <div className="relative overflow-hidden">
                <p className="text-lg leading-relaxed animate-text-sweep">
                 I build interactive web applications using modern technologies, such as React, Next.js, Tailwind CSS, and TypeScript. I'm very entusiastic about exploring creativity and innovation, always willing to learn new stuff. Driven by a desire to push the boundaries of web interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

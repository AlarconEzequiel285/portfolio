"use client";

import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiJavascript, SiMariadb, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useRef } from 'react';
import { useState } from "react";


export default function Home() {
  // Redirección en la seccion de My Projects sin usar href.
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

    // Redirección en la seccion de ABOUT ME sin usar href.
    const aboutmeRef = useRef<HTMLDivElement>(null);
    const scrollToAbout = () => {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  //Hover iluminado que sigue al mouse por ahora en seccion about me
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              <button onClick={scrollToProjects} className="text-gray-300 hover:text-white transition-colors font-bold zoomonhover text">
                projects
              </button>
              <button onClick={scrollToAbout} className="text-gray-300 hover:text-white transition-colors font-bold zoomonhover text">
                about me
              </button>
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

          {/* Tech-Stack */}
          <div className="mt-16">
            <div className="flex items-start justify-center">
              <div className="max-w-3xl w-full">
                <div className="flex items-center justify-between mb-8">
                  {/* Título principal */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl text-white animate-color-sweep">
                        tech-stack
                      </h1>
                      <h2 className="text-gray-300 text-sm relative top-[4px]">
                       - learning and working with
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Contenido de Tech-Stack */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiReact className="text-cyan-400 text-xl" />
                      React
                    </div>
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiNodedotjs className="text-green-400 text-xl" />
                      Node.js
                    </div>
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiTypescript className="text-blue-400 text-xl" />
                      TypeScript.js
                    </div>
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiJavascript className="text-yellow-400 text-xl" />
                      JavaScript.js
                    </div>
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiMariadb className="text-blue-400 text-xl" />
                      MariaDB
                    </div>
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiNextdotjs className="text-black-400 text-xl" />
                      Next.js
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <SiGithub className="text-white-400 text-xl" />
                      Git
                    </div>
                    <div className="flex items-center border border-gray-700 bg-transparent gap-2 px-3 py-1.5 rounded-full font-bold text-white text-sm shadow transition select-none tech-slide-hover"> 
                      <TbBrandFramerMotion className="text-pink-400 text-xl" />
                      Framer-Motion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* My Projects */}
          <div ref={projectsRef} className="mt-16">
            <div className="flex items-start justify-center">
              <div className="max-w-3xl w-full">
                <div className="flex items-center justify-between mb-8">
                  {/* Título principal */}
                  <div className="flex-1">
                    <div className="flex items-center justify-center">
                      <h1 className="text-xl font-bold" style={{ color: "#f5d487" }}>
                        projects i'm working/worked on
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Contenido de My Projects */}
                <div>
                  <p className="text-gray-300 text-xs">
                    a project will be added soon, sorry :C
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div ref={aboutmeRef} className="mt-16">
            <div className="flex items-start justify-center">
              <div className="max-w-3xl w-full">
                {/* Contenedor principal con hover tracking */}
                <div
                  className="relative border border-gray-800 rounded-lg p-6 overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  {/* Efecto hover que sigue al mouse */}
                  <div
                    className={`pointer-events-none absolute w-60 h-60 rounded-full bg-yellow-400 blur-[75px] transition-opacity duration-2000 ease-out ${
                      hovering ? 'opacity-25' : 'opacity-0'
                    }`}
                    style={{
                      left: mousePos.x - 120,
                      top: mousePos.y - 120,
                    }}
                  />

                  <div className="flex items-start gap-7 relative z-10">
                    {/* Foto */}
                    <div className="w-60 h-30 relative flex-shrink-0">
                      <div>
                        <Image 
                          src="/images/image2.jpeg"
                          alt="yea its still me"
                          fill
                          className="rounded object-cover translate-y-10"
                          quality={100}
                        />
                      </div>
                    </div>

                    {/* Línea divisoria */}
                    <div className="w-px h-50 bg-gray-800"></div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <h2 className="text-xl text-white font-bold mb-3">about me</h2>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        i'm ezequiel alarcon, from corrientes, argentina. web developer and ai enthusiastic (willing to learn more about it). besides being a it-guy,
                        i enjoy being a gym-guy too. my favourite hobbies are watching movies pretending to be a cinephile and make (or try atleast) make good outfits. i'm 
                        always trying to keep learning and build new things. currently focusing on deep-learning React, UI/UX and some Backend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


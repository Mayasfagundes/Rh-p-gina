// Estrutura recomendada:
// /components
// /styles
// /assets
// /scripts
//
// Separar futuramente:
// Hero.jsx
// ScrollShowcase.jsx
// Footer.jsx
// animations.js
// main.css

import { useEffect, useState } from 'react'

export default function KWRGestaoRH() {
  const [activeCard, setActiveCard] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    {
      title: 'RH estratégico com presença forte',
      description:
        'Transformamos processos desorganizados em uma operação estruturada, humana e eficiente.',
      details:
        'A KWR atua organizando processos internos, lideranças, comunicação e rotina operacional para empresas que precisam crescer com estrutura.',
    },
    {
      title: 'Menos caos. Mais clareza.',
      description:
        'Fluxos organizados, contratação inteligente e acompanhamento contínuo para empresas em crescimento.',
      details:
        'Cada etapa do RH é desenhada para reduzir retrabalho, aumentar previsibilidade e melhorar a experiência da equipe.',
    },
    {
      title: 'Experiência premium para empresas',
      description:
        'Um atendimento próximo, visual sofisticado e processos modernos que elevam a percepção do seu negócio.',
      details:
        'A proposta é unir gestão eficiente com posicionamento elegante e moderno para transmitir confiança imediatamente.',
    },
  ]

  const showcaseCards = [
    {
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      title: 'Recrutamento moderno',
      text: 'Processos humanos, rápidos e estratégicos.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      title: 'Organização operacional',
      text: 'Estrutura profissional para empresas em crescimento.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      title: 'Consultoria estratégica',
      text: 'Decisões mais inteligentes para o RH.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      title: 'Treinamento de equipes',
      text: 'Lideranças mais fortes e preparadas.',
    },
  ]

  const services = [
    {
      title: 'Estruturação de RH',
      text: 'Mapeamento de processos, organização operacional e definição de rotina estratégica.',
    },
    {
      title: 'Recrutamento & Seleção',
      text: 'Contratações mais assertivas com foco em cultura, perfil e resultado.',
    },
    {
      title: 'Treinamentos',
      text: 'Desenvolvimento contínuo de lideranças e equipes.',
    },
    {
      title: 'Consultoria Estratégica',
      text: 'Tomada de decisão baseada em organização, dados e visão de crescimento.',
    },
  ]

  return (
    <div id="top" className="bg-[#120B08] text-[#F6EEE8] overflow-x-hidden scroll-smooth">
      <div
        className="fixed top-0 left-0 h-1 bg-[#C58B5C] z-[9999] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <Hero scrollToSection={scrollToSection} />

      <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 border-t border-[#3B251B]">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-[#C58B5C] text-xs mb-6">
              Gestão humana moderna
            </p>

            <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-8">
              Um RH que transmite confiança antes mesmo da primeira reunião.
            </h2>

            <p className="text-lg text-[#D5C2B7] leading-relaxed max-w-xl">
              Inspirado em experiências premium e interfaces modernas, o site da KWR entrega elegância,
              movimento e autoridade para transformar visitantes em clientes.
            </p>
          </div>

          <div className="grid gap-6">
            {sections.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`text-left group rounded-[2rem] border backdrop-blur-sm p-8 transition-all duration-500 ${
                  activeCard === index
                    ? 'border-[#C58B5C] bg-[#2A1811] scale-[1.02]'
                    : 'border-[#4D3124] bg-[#1B110D]/70 hover:scale-[1.02] hover:border-[#C58B5C]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C58B5C] text-sm tracking-[0.2em] uppercase">
                    0{index + 1}
                  </span>

                  <div className={`w-12 h-12 rounded-full bg-[#2A1A14] flex items-center justify-center transition duration-500 ${activeCard === index ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </div>

                <h3 className="text-3xl font-serif mb-4">{item.title}</h3>

                <p className="text-[#CDB8AA] leading-relaxed mb-4">{item.description}</p>

                {activeCard === index && (
                  <div className="pt-4 border-t border-[#4D3124]">
                    <p className="text-[#E7D8CE] leading-relaxed">{item.details}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <ScrollShowcase showcaseCards={showcaseCards} />

      <section id="services" className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-[#120B08] to-[#1A100C] border-t border-[#3B251B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#C58B5C] text-xs mb-4">
                Serviços
              </p>

              <h2 className="text-5xl md:text-7xl font-serif leading-tight max-w-3xl">
                Experiências de RH que fazem empresas crescerem com estrutura.
              </h2>
            </div>

            <p className="text-[#CDB8AA] max-w-xl text-lg leading-relaxed self-end">
              Cada detalhe do site foi pensado para passar sofisticação, organização e uma percepção premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-[#4B3023] bg-[#1A120E] min-h-[360px] p-8 hover:-translate-y-3 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#C58B5C]/0 to-[#C58B5C]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[#C58B5C] text-6xl font-serif opacity-30">
                      0{index + 1}
                    </span>

                    <h3 className="text-3xl font-serif mt-8 mb-5">{service.title}</h3>
                  </div>

                  <p className="text-[#D0BFB3] leading-relaxed">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection />

      <section className="relative py-32 px-6 md:px-20 border-t border-[#3B251B] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,139,92,0.15),_transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#C58B5C] text-xs mb-6">
            Resultado
          </p>

          <h2 className="text-5xl md:text-8xl font-serif leading-[0.95] mb-10">
            O RH da sua empresa pode parecer tão premium quanto a marca que você quer construir.
          </h2>

          <p className="text-lg md:text-xl text-[#D0BFB3] max-w-3xl mx-auto leading-relaxed mb-12">
            Um site elegante, interativo e memorável transmite autoridade instantânea.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 rounded-full bg-[#C58B5C] text-[#1A100C] font-semibold hover:scale-105 transition duration-300">
              Solicitar proposta
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="px-10 py-5 rounded-full border border-[#C58B5C]/40 hover:bg-[#C58B5C]/10 transition duration-300"
            >
              Conhecer serviços
            </button>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

function Hero({ scrollToSection }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0E0806] flex items-center group cursor-default">
      <div className="absolute inset-0 overflow-hidden will-change-transform">
        <div className="absolute inset-0 scale-[1.08] group-hover:scale-[1.12] transition-transform duration-[4000ms] ease-out" />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 group-hover:scale-110 transition-transform duration-[5000ms] ease-out"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-people-working-in-an-office-1560082161422?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,139,92,0.18),transparent_40%)] group-hover:scale-110 transition-transform duration-[4000ms]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0E0806]/70 to-[#0E0806]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#C58B5C]/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <div className="absolute top-[18%] left-[8%] w-[320px] h-[320px] rounded-full bg-[#C58B5C]/10 blur-3xl animate-pulse" />
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#C58B5C] animate-pulse" />

            <span className="text-xs uppercase tracking-[0.35em] text-[#E8D9CF]">
              KWR Gestão de RH
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-end">
            <div>
              <h1 className="font-serif text-[4.5rem] sm:text-[6rem] lg:text-[8rem] leading-[0.86] tracking-[-0.05em] max-w-5xl mb-10 opacity-0 animate-[heroReveal_1.4s_ease_forwards]">
                RH estratégico
                <br />
                com presença
                <br />
                premium.
              </h1>

              <p className="text-[#D9C9BE] text-lg md:text-2xl leading-relaxed max-w-2xl mb-14 opacity-0 animate-[heroReveal_1.8s_ease_forwards]">
                Estrutura, posicionamento e experiência sofisticada para empresas que querem crescer com organização e autoridade.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-[heroReveal_2.2s_ease_forwards]">
                <button
                  onClick={() => scrollToSection('services')}
                  className="group relative overflow-hidden rounded-full bg-[#C58B5C] px-10 py-5 text-[#140D09] font-semibold hover:scale-105 transition-all duration-500"
                >
                  <span className="relative z-10">Conhecer serviços</span>

                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-500" />
                </button>

                <button
                  onClick={() => scrollToSection('about')}
                  className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 hover:bg-white/10 transition-all duration-500"
                >
                  Ver apresentação
                </button>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-6 items-end">
              <div className="w-full backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-700 shadow-2xl shadow-black/30">
                <p className="text-[#C58B5C] uppercase tracking-[0.25em] text-xs mb-5">
                  Experiência
                </p>

                <h3 className="text-5xl font-serif mb-4">
                  Premium
                </h3>

                <p className="text-[#D9C9BE] leading-relaxed text-lg">
                  Um posicionamento elegante que transmite confiança desde o primeiro contato.
                </p>
              </div>

              <div className="w-[85%] backdrop-blur-2xl bg-[#C58B5C]/10 border border-[#C58B5C]/20 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-700 shadow-2xl shadow-[#C58B5C]/10">
                <p className="text-[#C58B5C] uppercase tracking-[0.25em] text-xs mb-5">
                  Resultado
                </p>

                <h3 className="text-6xl font-serif mb-4">
                  98%
                </h3>

                <p className="text-[#E9DDD5] leading-relaxed">
                  Satisfação média em projetos de estruturação e consultoria estratégica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-px h-20 bg-gradient-to-b from-[#C58B5C] to-transparent" />

        <span className="text-[#C58B5C] uppercase tracking-[0.4em] text-xs animate-pulse">
          Scroll
        </span>
      </div>
    </section>
  )
}

function ScrollShowcase({ showcaseCards }) {
  return (
    <section className="relative h-[110vh] bg-[#120B08] border-t border-[#3B251B] overflow-hidden">
      <div className="sticky top-0 h-[85vh] flex items-center overflow-hidden">
        <div className="flex gap-8 px-10 w-max animate-[scrollCards_28s_linear_infinite]">
          {showcaseCards.map((item, index) => (
            <div
              key={index}
              className="w-[420px] h-[620px] rounded-[2.5rem] overflow-hidden relative border border-[#4D3124] bg-[#1A100C]"
            >
              <img
                src={item.image}
                alt="Showcase"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-10">
                <p className="uppercase tracking-[0.3em] text-[#C58B5C] text-xs mb-4">
                  KWR Experience
                </p>

                <h3 className="text-4xl font-serif mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-[#E0D3CB] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroReveal {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.98);
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }


        @keyframes slowZoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.15);
          }
        }


        @keyframes scrollCards {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-40%);
          }
        }
      `}</style>
    </section>
  )
}

function ParallaxSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-t border-[#3B251B]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center scale-125" />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-5xl text-center px-6">
        <p className="uppercase tracking-[0.4em] text-[#C58B5C] text-xs mb-8">
          Interatividade
        </p>

        <h2 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-10">
          Sensação de profundidade, movimento e elegância.
        </h2>

        <p className="text-[#DCCBC0] text-xl leading-relaxed max-w-3xl mx-auto">
          O visitante não apenas navega. Ele sente a marca enquanto explora o conteúdo.
        </p>
      </div>
    </section>
  )
}

function Footer({ scrollToSection }) {
  return (
    <footer className="border-t border-[#3B251B] px-6 md:px-20 py-16 bg-[#0D0705]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#8B4C2B] flex items-center justify-center text-white font-serif text-xl">
              KWR
            </div>

            <div>
              <h3 className="text-2xl font-serif">KWR Gestão de RH</h3>
            </div>
          </div>

          <p className="text-[#CDB8AA] max-w-md leading-relaxed">
            Estrutura, estratégia e experiência premium para empresas que desejam crescer com organização.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-[#D8C8BE]">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#C58B5C] text-xs mb-5">
              Navegação
            </p>

            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('top')} className="hover:text-[#C58B5C] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#C58B5C] transition">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#C58B5C] transition">
                  Consultoria
                </button>
              </li>
              <li>
                <button className="hover:text-[#C58B5C] transition">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-[#C58B5C] text-xs mb-5">
              Contato
            </p>

            <ul className="space-y-3">
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>E-mail</li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-[#C58B5C] text-xs mb-5">
              Experiência
            </p>

            <ul className="space-y-3">
              <li>Scroll Effects</li>
              <li>Parallax</li>
              <li>Glassmorphism</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

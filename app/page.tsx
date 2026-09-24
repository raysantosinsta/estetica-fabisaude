import { Carousel } from "@/components/Carousel";
import { FadeIn } from "@/components/FadeIn";
import { FAQItem } from "@/components/FAQItem";
import {
  MessageCircle,
  ShieldCheck,
  Star
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "5585985199849";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma avaliação.`;

  const faqs = [
    { id: "1", q: "Os procedimentos doem?", a: "Trabalhamos com tecnologias minimamente invasivas e técnicas de conforto. A maioria das pacientes relata apenas um leve desconforto suportável." },
    { id: "2", q: "Quanto tempo dura cada sessão?", a: "Depende do tratamento escolhido, mas em média as sessões duram entre 40 minutos a 1 hora." },
    { id: "3", q: "Como funciona a avaliação inicial?", a: "Na avaliação, analisamos suas queixas, histórico de saúde e objetivos para montar um plano de tratamento 100% exclusivo." },
    { id: "4", q: "Vocês parcelam no cartão?", a: "Sim! Oferecemos opções flexíveis de pagamento e parcelamento no cartão de crédito." }
  ];

  return (
    <div className="min-h-screen bg-[var(--brand-offwhite)] text-[var(--foreground)] font-sans selection:bg-[var(--brand-gold)] selection:text-white">

      {/* 1. Primeira Dobra (Hero Section) */}
      <section className="relative w-full h-screen min-h-[600px] px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Video Container (posicionado no fundo absoluto) */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Overlay básico para leitura */}
          <div className="absolute inset-0 bg-[#FDFBF7]/50 backdrop-blur-[2px]" />
          {/* Efeito de Vinheta (Escurecendo as bordas) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.6)_120%)] pointer-events-none" />
        </div>

        {/* Conteúdo da Hero (precisa ter z-index maior que o fundo absoluto) */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">


          <FadeIn delay={0.2} direction="up">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-zinc-900 leading-tight">
              Recupere a firmeza da sua pele e <br className="hidden md:block" />
              <span className="font-semibold text-[var(--brand-rosegold)]">realce sua autoestima</span> <br className="hidden md:block" />
              sem procedimentos invasivos.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl font-light">
              Tratamentos faciais e corporais de alta tecnologia. Agende sua avaliação personalizada com especialistas que entendem você.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg shadow-[#B76E79]/30 hover:shadow-[#B76E79]/50"
              style={{ backgroundColor: 'var(--brand-rosegold)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Quero agendar minha avaliação
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="mt-12 flex items-center justify-center gap-4 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--brand-offwhite)] bg-zinc-200 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--brand-accent-1)] to-[var(--brand-accent-2)]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-[var(--brand-gold)]">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="font-medium">Mais de 500 pacientes transformadas</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Seção de Benefícios */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">Nós entendemos o que você procura</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Sabemos como a flacidez, manchas, gordura localizada e os sinais do tempo podem incomodar. Nossa clínica é a solução definitiva para o seu bem-estar.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Card 1: Largo (Tecnologia) */}
            <FadeIn delay={0.2} direction="up" className="md:col-span-2">
              <div className="relative p-8 h-full rounded-3xl border border-zinc-100 overflow-hidden group transition-all hover:shadow-lg">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-[url('/clinic_tech.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                {/* Overlay Darker for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-zinc-900/40" />


                <h3 className="text-2xl font-semibold mb-3 text-white relative z-10">Tecnologia de Ponta</h3>
                <p className="text-zinc-200 leading-relaxed max-w-md relative z-10">Equipamentos modernos, seguros e aprovados pela Anvisa para garantir resultados incrivelmente rápidos e duradouros.</p>
              </div>
            </FadeIn>

            {/* Card 2: Quadrado (Humanizado) */}
            <FadeIn delay={0.3} direction="up" className="md:col-span-1">
              <div className="p-8 h-full rounded-3xl bg-zinc-900 text-white border border-zinc-800 flex flex-col justify-between group transition-all hover:shadow-xl hover:shadow-[var(--brand-rosegold)]/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[var(--brand-rosegold)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atendimento Humanizado</h3>
                  <p className="text-zinc-400 text-sm">Ouvimos suas queixas com empatia antes de qualquer indicação clínica.</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Quadrado (Segurança) */}
            <FadeIn delay={0.4} direction="up" className="md:col-span-1">
              <div className="relative p-8 h-full rounded-3xl bg-white border border-zinc-100 overflow-hidden flex flex-col justify-end transition-all hover:shadow-md hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--brand-rosegold)]" />
                <ShieldCheck className="w-10 h-10 text-zinc-300 mb-auto" />
                <h3 className="text-xl font-semibold mb-2 text-zinc-800">Segurança Total</h3>
                <p className="text-zinc-500 text-sm">Procedimentos guiados pelas melhores práticas médicas.</p>
              </div>
            </FadeIn>

            {/* Card 4: Largo (Protocolos) */}
            <FadeIn delay={0.5} direction="up" className="md:col-span-2">
              <div className="relative p-8 h-full rounded-3xl bg-[var(--brand-rosegold)] text-white overflow-hidden group transition-all hover:shadow-lg">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4 w-max backdrop-blur-md">
                    EXCLUSIVIDADE
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Protocolos Personalizados</h3>
                  <p className="text-white/80 max-w-md">Esqueça os pacotes engessados. Criamos tratamentos combinados exclusivos para o seu tipo de pele e objetivos corporais.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Vitrine de Tratamentos */}
      <section className="py-24 px-6 bg-[var(--brand-offwhite)]">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">Nossos Principais Tratamentos</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Procedimentos de alta eficácia selecionados para entregar os melhores resultados visíveis.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Harmonização Facial", desc: "Equilíbrio e simetria para o seu rosto com resultados naturais e duradouros.", benefit: "Rosto rejuvenescido e traços realçados.", img: "/facial_harmony.jpg" },
              { name: "Lipo sem Cortes", desc: "Redução de medidas e gordura localizada através de tecnologia avançada não invasiva.", benefit: "Resultados visíveis já nas primeiras sessões.", img: "/lipo_massage.jpg" },
              { name: "Rejuvenescimento", desc: "Estímulo de colágeno para tratar flacidez, rugas e linhas de expressão.", benefit: "Pele mais firme, iluminada e jovem.", img: "/rejuvenation.jpg" }
            ].map((tratamento, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col h-full group">
                  <div className="h-56 w-full relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${tratamento.img})` }}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-semibold text-zinc-800 mb-2">{tratamento.name}</h3>
                    <p className="text-zinc-600 mb-4 flex-1">{tratamento.desc}</p>
                    <div className="bg-[var(--brand-gold)]/10 p-3 rounded-lg mb-6">
                      <span className="text-sm font-medium text-[var(--brand-gold-dark)]">  {tratamento.benefit}</span>
                    </div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-rosegold)] font-medium hover:text-[var(--brand-rosegold-dark)] transition-colors inline-flex items-center gap-1">
                      Quero saber mais <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3.1 Prova Social (Antes e Depois) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">Resultados que transformam vidas</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Não prometemos milagres, entregamos ciência e técnica. Veja as transformações reais de nossas pacientes.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="up" className="w-full">
            <Carousel images={[
              { id: 1, src: "/prova1.jpeg", alt: "Resultado 1" },
              { id: 2, src: "/prova2.jpeg", alt: "Resultado 2" },
              { id: 3, src: "/prova3.jpeg", alt: "Resultado 3" },
              { id: 4, src: "/prova4.jpeg", alt: "Resultado 4" },
            ]} />
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="mt-16 text-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-[var(--brand-rosegold)] border-2 border-[var(--brand-rosegold)] font-medium text-lg rounded-full hover:bg-[var(--brand-rosegold)] hover:text-white transition-all shadow-lg hover:shadow-[#B76E79]/30">
                Quero meu resultado <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* 4.1 Autoridade */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <FadeIn delay={0.1} direction="left" className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--brand-gold)]/10 rounded-full blur-3xl" />
              <img src="/doctor.jpg" alt="Dra. Especialista" className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-[200px]">
                <div className="flex text-[var(--brand-gold)] mb-2">
                  {[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 fill-current"/>)}
                </div>
                <p className="text-sm text-zinc-600 font-medium">"A melhor experiência estética que já tive."</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right" className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-offwhite)] text-[var(--brand-rosegold-dark)] text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Segurança e Ciência
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-zinc-800 mb-6">Em mãos de quem realmente entende.</h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Com mais de 10 anos de experiência e centenas de protocolos realizados com sucesso, a nossa filosofia é realçar a sua beleza de forma natural, segura e ética.
            </p>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Cada rosto é único, e seu plano de tratamento também deve ser.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-[var(--brand-rosegold)] rounded-full" />
              <div>
                <h4 className="text-xl font-semibold text-zinc-800">Dra. Fabíola Saúde</h4>
                <p className="text-zinc-500">Especialista em Harmonização Facial</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4.2 Localização */}
      <section className="py-24 px-6 bg-[var(--brand-offwhite)] border-t border-zinc-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <FadeIn delay={0.1} direction="up" className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">Onde estamos</h2>
            <p className="text-lg text-zinc-600 mb-8">
              Um ambiente projetado para o seu conforto, biossegurança e relaxamento desde o primeiro momento.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-gold)]/10 text-[var(--brand-gold-dark)] flex items-center justify-center shrink-0">
                  <span className="font-semibold text-lg">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-800">Endereço</h4>
                  <p className="text-zinc-600">Av. Beira Mar, 1000 - Meireles, Fortaleza - CE</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-gold)]/10 text-[var(--brand-gold-dark)] flex items-center justify-center shrink-0">
                  <span className="font-semibold text-lg">🚗</span>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-800">Estacionamento</h4>
                  <p className="text-zinc-600">Manobrista no local e estacionamento privativo gratuito.</p>
                </div>
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block font-medium text-[var(--brand-rosegold)] hover:underline">
              Como chegar &rarr;
            </a>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="w-full md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-zinc-200 h-[400px]">
              <img src="/clinic_location.jpg" alt="Nossa clínica" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. FAQ com a11y e Framer Motion */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">Dúvidas Frequentes</h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.id} delay={0.2 + (i * 0.1)} direction="left">
                <FAQItem id={faq.id} question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-zinc-900 text-white pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 border-b border-zinc-800 pb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-[var(--brand-offwhite)]">
              Sua melhor versão <span className="text-[var(--brand-gold)] font-semibold">começa aqui.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">Dê o primeiro passo hoje e agende sua avaliação.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium text-lg rounded-full transition-colors"
              style={{ backgroundColor: 'var(--brand-rosegold)' }}
            >
              Falar com especialista no WhatsApp
            </a>
          </FadeIn>
        </div>
      </footer>

      {/* Botão Flutuante */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
        style={{ willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
}

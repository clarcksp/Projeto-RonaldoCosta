export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Sobre Mim
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
          <p>
            Em 2003, iniciei minha trajetória profissional como estagiário em uma grande empresa
            do setor automotivo. Desde então, venho construindo uma carreira pautada na tecnologia,
            gestão estratégica e na busca constante por inovação.
          </p>

          <p>
            Em 2006, fundei a <strong>Inside Soluções e Gestão de TI</strong>, empresa que se consolidou
            como parceira de confiança em infraestrutura tecnológica, telefonia em nuvem e automação
            de processos empresariais.
          </p>

          <p>
            Hoje, lidero um time altamente capacitado que atende mais de <strong>300 empresas</strong> em
            todo o Estado de São Paulo, oferecendo soluções em TI corporativa, VoIP, certificação digital
            e sistemas de atendimento omnichannel.
          </p>

          <p className="text-xl font-medium text-gray-900 pt-4">
            Acredito que tecnologia só faz sentido quando simplifica o trabalho, conecta pessoas e
            gera resultados reais. Por isso, cada projeto é desenhado para entregar eficiência,
            segurança e valor sustentável para nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

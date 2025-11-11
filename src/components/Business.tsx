import { ExternalLink } from 'lucide-react';

interface BusinessCardProps {
  name: string;
  description: string;
  solutions?: string;
  links: string[];
  logo?: string;
}

function BusinessCard({ name, description, solutions, links, logo }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
      {logo && (
        <div className="mb-6 flex items-center justify-center h-20">
          <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      {solutions && (
        <p className="text-sm text-gray-600 mb-4">
          <strong>Soluções:</strong> {solutions}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={`https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-medium"
          >
            {link}
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Business() {
  const businesses = [
    {
      name: 'Inside Soluções e Gestão de TI',
      description:
        'Empresa especializada em gestão de tecnologia, telefonia VoIP e automação corporativa, com foco em performance, segurança e atendimento humanizado.',
      solutions: 'Gestão de TI (MSP), Suporte técnico, PABX em nuvem (Yeastar & 3CX), Certificados Digitais',
      links: ['insideconsultoria.com.br', 'inside.gru.br'],
      logo: '/Logo Retangular.jpg',
    },
    {
      name: 'InVoIP',
      description:
        'Plataforma de telefonia em nuvem desenvolvida para empresas que buscam eficiência e controle em suas comunicações corporativas.',
      links: ['invoip.com.br'],
      logo: '/Logo InVoip Sem Fundo.png',
    },
    {
      name: 'InsideChat',
      description:
        'Sistema de atendimento omnichannel que centraliza mensagens de WhatsApp, Instagram, Telegram e Facebook, com foco em produtividade e experiência do cliente.',
      links: ['insidechat.com.br'],
      logo: '/InsideChat Novo Logo Horizontal.png',
    },
    {
      name: 'Inside.Dev',
      description:
        'Hub de desenvolvimento interno da Inside, responsável por criar soluções sob medida em integrações, automações e dashboards empresariais.',
      links: ['inside.dev.br'],
      logo: '/Logo Inside.Dev Novo2.2 (Personalizado).png',
    },
    {
      name: 'InCommerce',
      description:
        'Plataforma de e-commerce e automação de vendas B2B/B2C com foco em performance e integração total com sistemas corporativos.',
      links: ['incommerce.com.br'],
    },
    {
      name: 'Uputin',
      description:
        'Nossa plataforma de hospedagem de sites e soluções de presença digital.',
      links: ['uputin.com.br'],
      logo: '/logo uputin just.png',
    },
  ];

  return (
    <section id="negocios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Principais Atuações
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Grupo Inside: Ecossistema completo de soluções tecnológicas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, idx) => (
            <BusinessCard key={idx} {...business} />
          ))}
        </div>
      </div>
    </section>
  );
}

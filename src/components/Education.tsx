import { GraduationCap, Award, ExternalLink } from 'lucide-react';

interface CertificationProps {
  name: string;
  link?: string;
}

function Certification({ name, link }: CertificationProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 hover:shadow-md transition-shadow border border-orange-100">
      <div className="flex items-start gap-3">
        <Award className="text-orange-500 flex-shrink-0 mt-1" size={20} />
        <div className="flex-1">
          <p className="text-gray-800 font-medium">{name}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm mt-1"
            >
              Ver Credencial
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const certifications = [
    {
      name: 'Yeastar Certified Cloud Associate',
      link: 'https://media.licdn.com/dms/image/v2/D4E2DAQE6ZOeKCs8rIQ/profile-treasury-image-shrink_800_800/B4EZWzEAK1HUAc-/0/1742465926619?e=1763478000&v=beta&t=KVOs1wf91pADIadcfzfgFiRerHABOZl5Rr-vw4mlT3A',
    },
    {
      name: 'Yeastar Certified Technician',
      link: 'https://media.licdn.com/dms/image/v2/D4D2DAQHrq6D9Ey9vAg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730891355160?e=1763478000&v=beta&t=Vloa_m8EgJQgPcsUJ8oEgegYy1jU3k9mnWkT52UYC6Q',
    },
    {
      name: '3CX Advanced Certified Engineer (v16)',
    },
    {
      name: 'UBIQUITI ENTERPRISE WIRELESS ADMIN (UEWA)',
      link: 'https://drive.google.com/file/d/13UZyXm-b4UhLuvAwvT-M4B1Z9hf54On2/view?usp=sharing',
    },
    {
      name: 'UNIFI NETWORK SPECIALIST (UNS)',
      link: 'https://drive.google.com/file/d/1UOLr3s4U4TPH8z8DXgsGdXf3p8xHOGKK/view?usp=sharing',
    },
    {
      name: 'PfSense firewall como concentrador VPN em cloud AWS',
      link: 'https://drive.google.com/file/d/1fYjDKmLoFEx-u2az1nmv6zVtFOeVn789/view?usp=sharing',
    },
    {
      name: 'Leadership Journey: A Evolução da Liderança (FIAP)',
      link: 'https://www2.fiap.com.br/inscricaoworkshopdobem/ImagemCertificado/38FACA64-64F6-49F5-B128-3B50825095E3',
    },
    {
      name: 'Estratégia Tributária (Digilivro)',
    },
  ];

  return (
    <section id="formacao" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="text-orange-500 mr-4" size={40} />
          <h2 className="text-4xl font-bold text-gray-900">
            Formação e Certificações
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Formação Acadêmica
            </h3>
            <p className="text-gray-700 text-lg">
              Centro Universitário Eniac
            </p>
            <p className="text-gray-600">2004 - 2007</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Conhecimentos Técnicos
            </h3>
            <p className="text-gray-700">
              MCSE, Windows Server, Linux, VMware, Citrix, Active Directory, Microsoft SQL Server
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Certificações em Destaque
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <Certification key={idx} {...cert} />
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Cursos de Gestão (Sebrae)
          </h3>
          <p className="text-gray-700">
            Descomplique - Inovação, PROGRAMA SEBRAE-SP DE TICS, Empreenda,
            Equipe Motivada, Gestão de Pessoas, Marketing, entre outros.
          </p>
        </div>
      </div>
    </section>
  );
}

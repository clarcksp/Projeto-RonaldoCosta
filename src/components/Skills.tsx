import { Code, Server, Network, Users, Cpu } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string;
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-orange-100 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{skills}</p>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      icon: <Network className="text-orange-500" size={24} />,
      title: 'Telecom e VoIP',
      skills: 'Yeastar, 3CX, IP PBX, Cloud PBX, Protocolos SIP, PABX Virtual',
    },
    {
      icon: <Server className="text-orange-500" size={24} />,
      title: 'Infra & Servidores',
      skills: 'Windows Server, Linux Server, VMware ESX, Citrix, Active Directory',
    },
    {
      icon: <Network className="text-orange-500" size={24} />,
      title: 'Redes e Segurança',
      skills: 'PfSense, Ubiquiti (Unifi), VPN, AWS Cloud',
    },
    {
      icon: <Users className="text-orange-500" size={24} />,
      title: 'Gestão e Negócios',
      skills: 'Planejamento Estratégico, Liderança de Equipe, Negociação',
    },
    {
      icon: <Cpu className="text-orange-500" size={24} />,
      title: 'Automação',
      skills: 'N8N, Integrações via API, Dashboards',
    },
    {
      icon: <Code className="text-orange-500" size={24} />,
      title: 'Desenvolvimento',
      skills: 'Soluções sob medida, Integrações, Automação de processos',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Competências Técnicas
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Expertise consolidada ao longo de mais de 20 anos de atuação
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

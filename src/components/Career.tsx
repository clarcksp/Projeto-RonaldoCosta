import { Briefcase } from 'lucide-react';

interface CareerItemProps {
  title: string;
  company: string;
  period: string;
  isFirst?: boolean;
}

function CareerItem({ title, company, period, isFirst }: CareerItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div
        className={`absolute left-0 top-0 w-4 h-4 rounded-full ${
          isFirst ? 'bg-orange-500' : 'bg-gray-400'
        }`}
      ></div>
      <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gray-300 last:hidden"></div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-orange-500 font-semibold mb-2">{company}</p>
        <p className="text-gray-600 text-sm">{period}</p>
      </div>
    </div>
  );
}

export default function Career() {
  const careerHistory = [
    {
      title: 'Sócio Proprietário',
      company: 'Inside Soluções e Gestão de T.I',
      period: 'Jan de 2006 - o momento',
    },
    {
      title: 'Sócio Fundador',
      company: 'MaisQ Limpeza',
      period: 'Jan de 2013 - Nov de 2019',
    },
    {
      title: 'Suporte Técnico em Informática',
      company: 'G&B Auto Peças Alternativas',
      period: 'Mar de 2003 - Dez de 2005',
    },
  ];

  return (
    <section id="trajetoria" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="text-orange-500 mr-4" size={40} />
          <h2 className="text-4xl font-bold text-gray-900">
            Trajetória Profissional
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {careerHistory.map((item, idx) => (
            <CareerItem key={idx} {...item} isFirst={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

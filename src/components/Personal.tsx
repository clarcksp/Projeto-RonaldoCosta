import { Heart } from 'lucide-react';

export default function Personal() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <Heart className="text-orange-500" size={48} />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            O Propósito
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Minha base e inspiração vêm da minha família. Sou marido e sócio da <strong>Telma</strong>,
            com quem tenho o privilégio de compartilhar a jornada empreendedora, e pai orgulhoso do
            <strong> Davi</strong> e do <strong>Arthur</strong>, que são minha maior motivação diária.
            A família é a fonte de inspiração, equilíbrio e propósito por trás de cada conquista profissional.
          </p>
        </div>
      </div>
    </section>
  );
}

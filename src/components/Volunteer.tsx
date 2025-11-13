import { Heart, ExternalLink } from 'lucide-react';

export default function Volunteer() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Heart className="text-red-500 mr-4" size={40} />
          <h2 className="text-4xl font-bold text-gray-900">
            Trabalho Voluntário
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Coordenador de Imagem Pública
            </h3>
            <p className="text-blue-600 font-semibold text-lg mb-2">
              Rotary Clube Guarulhos
            </p>
            <p className="text-gray-600">Jul de 2021 - Jun de 2023</p>
          </div>

          <div className="mb-6 border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Protocolo
            </h3>
            <p className="text-blue-600 font-semibold text-lg mb-2">
              Rotary Clube Guarulhos
            </p>
            <p className="text-gray-600">Jul de 2024 - Jun de 2025</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Reconhecimentos
            </h4>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <p className="text-gray-700 mb-4">
                Ações em prol das enchentes ocorridas no Litoral Norte de São Paulo
              </p>
              <a
                href="https://drive.google.com/file/d/1F5sQXRQl5f2-xtai3C4xZYYvRtRR56K9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Ver Certificado
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

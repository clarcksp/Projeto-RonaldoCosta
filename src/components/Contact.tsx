import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      const masked = maskPhone(value);
      setFormData((prev) => ({ ...prev, [name]: masked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const maskPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://zeus.n8n.insidechat.com.br/webhook/fale-com-ronaldo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          mensagem: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Não foi possível enviar sua mensagem. Tente novamente.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Mail className="text-orange-400" size={48} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Vamos Conectar?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seja para discutir um novo projeto, explorar parcerias estratégicas ou falar sobre
            inovação em T.I. e Telecom, estou a um clique de distância. Preencha o formulário
            abaixo e minha automação (via Zeus N8N) garantirá que eu receba sua mensagem instantaneamente.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  placeholder="(11) 91234-5678"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa (Opcional)
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  placeholder="Sua empresa"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                Sua Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 resize-none"
                placeholder="Conte-me sobre seu projeto ou ideia..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-orange-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <Send size={20} />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-3 bg-green-50 text-green-800 p-4 rounded-lg">
                <CheckCircle size={24} />
                <p className="font-medium">Mensagem enviada com sucesso! Responderei em breve.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 bg-red-50 text-red-800 p-4 rounded-lg">
                <AlertCircle size={24} />
                <p className="font-medium">{errorMessage}</p>
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Ou envie um e-mail direto para:{' '}
              <a
                href="mailto:ronaldo@insideconsultoria.com.br"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                ronaldo@insideconsultoria.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

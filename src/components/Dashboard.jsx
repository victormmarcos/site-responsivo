import React, { useState } from 'react';

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/fcc60632-ad45-4c4b-8cb3-4999e5fc8b9b.jpg",
    "/img/R360-Machine-Health-Monitoring_2024_1200x628.jpg",
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] bg-gray-50">
      <main className="grid place-items-center p-10">
        <div className="max-w-5xl grid gap-10 text-center">
          
          <h1 className="text-4xl font-bold text-green-500">
            Esse é seu Dashboard Synergy
          </h1>

          
          <p className="text-lg text-gray-700 leading-relaxed">
            O Dashboard Synergy é a interface central para visualização e análise dos dados capturados pelo ESP32 e processados por algoritmos avançados em Python. Aqui, você terá acesso a informações detalhadas sobre o consumo energético da sua indústria, incluindo padrões de uso, identificação de desperdícios e insights práticos para otimização.
            <br />
            <br />
            Com gráficos interativos, relatórios personalizados e atualizações em tempo real, o Dashboard oferece uma visão completa e intuitiva do desempenho energético da sua operação. Tudo isso para que você tome decisões estratégicas que reduzem custos, aumentam a eficiência e contribuem para a sustentabilidade da sua empresa.
          </p>

          
          <div className="relative flex flex-col items-center justify-center w-full max-w-4xl">
            
            <div className="overflow-hidden rounded-lg w-full max-w-4xl">
              <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-auto transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Botões de Navegação */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &#9664;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &#9654;
            </button>

            
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

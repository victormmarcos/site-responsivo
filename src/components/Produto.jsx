import React from 'react';

const Produto = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] bg-gray-50">
      <main className="grid place-items-center p-10">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-green-500">
            Synergy: Reduza Custos e Consuma Energia com Inteligência
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            O Synergy é a solução ideal para empresas que buscam reduzir custos e otimizar o consumo de energia. Com ele,
            você monitora em tempo real o uso energético da sua operação, identifica desperdícios e recebe recomendações
            práticas para melhorar a eficiência.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">
            Juntos, transformamos o futuro energético.
          </h2>
          <img src="/img/bbc28cf6-1b6c-4b44-8901-a7edaa8b70b9.jpg" alt="Prototipo" />
        </div>
      </main>
    </div>
  );
};

export default Produto;

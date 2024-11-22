import React from 'react';

const Header = ({ userName, onLogout }) => {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Synergy</h1>
        <nav className="space-x-4">
          <a href="/Home" className="hover:underline">Home</a>
          <a href="/Produto" className="hover:underline">O Produto</a>
          <a href="/Dashboard" className="hover:underline">Dashboard</a>
          <a href="/SobreNós" className="hover:underline">Sobre Nós</a>
        </nav>
        <div className="flex items-center space-x-4">
          {userName ? (
            <>
              <span>Bem-vindo, {userName}!</span>
              <button
                onClick={onLogout}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md"
              >
                Sair
              </button>
            </>
          ) : (
            <a href="/Login" className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md">
              Entrar
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

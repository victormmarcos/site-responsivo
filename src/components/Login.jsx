import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    if (userName.trim()) {
      onLogin(userName);
    } else {
      alert('Por favor, insira um nome válido.');
    }
  };

  return (
    <div className="grid place-items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-6">Login</h1>   
        <input
          type="text"
          placeholder="Digite seu nome"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;

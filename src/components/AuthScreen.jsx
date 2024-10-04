import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "/Users/ivan/Documents/faculdade/todolist-react/todolist2/meu-projeto/src/components/AuthScreen.css";

function AuthScreen() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const navigate = useNavigate();

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onSwitch={setCurrentScreen}
            onLogin={() => navigate("/app")}
          />
        );
      case "signup":
        return <SignUpScreen onSwitch={setCurrentScreen} />;
      case "forgotPassword":
        return <ForgotPasswordScreen onSwitch={setCurrentScreen} />;
      default:
        return (
          <LoginScreen
            onSwitch={setCurrentScreen}
            onLogin={() => navigate("/app")}
          />
        );
    }
  };

  return <div className="auth-container">{renderScreen()}</div>;
}

function LoginScreen({ onSwitch, onLogin }) {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      <div className="links">
        <button onClick={() => onSwitch("signup")}>Criar Conta</button>
        <button onClick={() => onSwitch("forgotPassword")}>
          Esqueci minha senha
        </button>
      </div>
    </div>
  );
}

function SignUpScreen({ onSwitch }) {
  return (
    <div className="form-container">
      <h2>Criar Conta</h2>
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="links">
        <button onClick={() => onSwitch("login")}>Já tenho conta</button>
      </div>
    </div>
  );
}

function ForgotPasswordScreen({ onSwitch }) {
  return (
    <div className="form-container">
      <h2>Recuperar Senha</h2>
      <form>
        <input type="email" placeholder="Insira seu email" />
        <button type="submit">Recuperar Senha</button>
      </form>
      <div className="links">
        <button onClick={() => onSwitch("login")}>Voltar ao Login</button>
      </div>
    </div>
  );
}

export default AuthScreen;

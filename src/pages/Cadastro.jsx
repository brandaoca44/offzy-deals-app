import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Cadastro({ setUsuarioLogado, jaLogado }) {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  if (jaLogado) {
    return <Navigate to="/" replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nTrim = nome.trim();
    const eTrim = email.trim();
    const sTrim = senha.trim();
    if (!nTrim || !eTrim || !sTrim) {
      setErro("Preencha nome, email e senha.");
      return;
    }
    setErro("");
    setUsuarioLogado(true);
    navigate("/", { replace: true });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh"
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          border: "1px solid var(--border)",
          width: "350px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            color: "var(--text)",
            fontWeight: "600"
          }}
        >
          Criar Conta
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Nome"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              marginBottom: "15px",
              boxSizing: "border-box"
            }}
          />

          <input
            type="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              marginBottom: "15px",
              boxSizing: "border-box"
            }}
          />

          <input
            placeholder="Senha"
            type="password"
            autoComplete="new-password"
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              marginBottom: erro ? "8px" : "20px",
              boxSizing: "border-box"
            }}
          />

          {erro ? (
            <p
              role="alert"
              style={{
                color: "#b91c1c",
                fontSize: "14px",
                margin: "0 0 12px 0"
              }}
            >
              {erro}
            </p>
          ) : null}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Criar Conta
          </button>
        </form>

        <p style={{ marginTop: "16px", fontSize: "14px", textAlign: "center" }}>
          <Link to="/login" style={{ color: "var(--primary)" }}>
            Já tenho conta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;

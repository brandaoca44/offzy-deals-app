import { Link } from "react-router-dom";

function Navbar({ usuarioLogado, onLogout }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        borderBottom: "1px solid var(--primary-light)",
        background: "var(--primary)",
        color: "#ffffff"
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: "800",
          color: "#ffffff"
        }}
      >
        Offzy
      </h1>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          Feed
        </Link>

        {usuarioLogado ? (
          <>
            <Link to="/perfil" style={{ color: "#ffffff", textDecoration: "none" }}>
              Perfil
            </Link>
            <button
              type="button"
              onClick={onLogout}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.6)",
                background: "transparent",
                color: "#ffffff",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "#ffffff", textDecoration: "none" }}>
              Login
            </Link>
            <Link to="/cadastro" style={{ color: "#ffffff", textDecoration: "none" }}>
              Cadastro
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

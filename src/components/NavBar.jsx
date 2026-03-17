import { Link } from "react-router-dom";

function Navbar() {
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

      {/* Logo */}
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

      {/* Links */}
      <div style={{ display: "flex", gap: "20px" }}>

        <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          Feed
        </Link>

        <Link to="/login" style={{ color: "#ffffff", textDecoration: "none" }}>
          Login
        </Link>

        <Link to="/cadastro" style={{ color: "#ffffff", textDecoration: "none" }}>
          Cadastro
        </Link>

        <Link to="/perfil" style={{ color: "#ffffff", textDecoration: "none" }}>
          Perfil
        </Link>

      </div>

    </div>
  );
}

export default Navbar;
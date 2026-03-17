import NovaOferta from "../components/NovaOferta";

function Perfil({ adicionarOferta }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "var(--background)"
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto"
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "var(--text)",
            marginBottom: "24px",
            textAlign: "center"
          }}
        >
          Minha Conta
        </h1>

        <div
          style={{
            background: "#fff",
            border: "1px solid #d1d5db",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "var(--text)",
              marginBottom: "8px"
            }}
          >
            Publicar nova oferta
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              marginBottom: "24px"
            }}
          >
            Compartilhe uma promoção com a comunidade da Offzy.
          </p>

          <NovaOferta adicionarOferta={adicionarOferta} />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
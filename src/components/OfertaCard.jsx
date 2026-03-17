import { useState } from "react";

function OfertaCard({ oferta, usuarioLogado }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function curtir() {
    setLikes(likes + 1);
  }

  function naoCurtir() {
    setDislikes(dislikes + 1);
  }

  let desconto = null;

  if (oferta.precoAntigo) {
    const antigo = parseFloat(oferta.precoAntigo.replace(/[^\d]/g, ""));
    const atual = parseFloat(oferta.preco.replace(/[^\d]/g, ""));

    if (antigo > atual) {
      desconto = Math.round(((antigo - atual) / antigo) * 100);
    }
  }

  return (
<div
  style={{
    background: "var(--card)",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    width: "100%"
  }}
>
      <img
  src={oferta.imagem || "https://via.placeholder.com/500x250"}
  alt={oferta.titulo}
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
    display: "block"
  }}
/>

      <h3
        style={{
          marginBottom: "8px",
          color: "var(--text)",
          fontWeight: "600",
          fontSize: "24px"
        }}
      >
        {oferta.titulo}
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "8px"
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#16a34a"
          }}
        >
          {oferta.preco}
        </span>

        {oferta.precoAntigo && (
          <span
            style={{
              fontSize: "14px",
              color: "#888",
              textDecoration: "line-through"
            }}
          >
            {oferta.precoAntigo}
          </span>
        )}

        {desconto && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#fff",
              background: "#16a34a",
              padding: "4px 8px",
              borderRadius: "999px"
            }}
          >
            -{desconto}%
          </span>
        )}
      </div>

      <p
        style={{
          color: "#666",
          marginBottom: "12px"
        }}
      >
        {oferta.loja}
      </p>

      <a
        href={usuarioLogado ? oferta.link : "/login"}
        target={usuarioLogado ? "_blank" : "_self"}
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "8px 14px",
          background: "var(--primary)",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "14px"
        }}
      >
        {usuarioLogado ? "Ver oferta ⚡" : "Entrar para ver 🔒"}
      </a>

      <div
        style={{
          display: "flex",
          gap: "8px"
        }}
      >
        <button
          onClick={curtir}
          style={{
            padding: "5px 10px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "#fff",
            fontSize: "12px"
          }}
        >
          👍 {likes}
        </button>

        <button
          onClick={naoCurtir}
          style={{
            padding: "5px 10px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "#fff",
            fontSize: "12px"
          }}
        >
          👎 {dislikes}
        </button>

        <button
          style={{
            padding: "5px 10px",
            borderRadius: "999px",
            border: "1px solid #ef4444",
            background: "#fff",
            color: "#ef4444",
            fontSize: "12px"
          }}
        >
          🚨
        </button>
      </div>
    </div>
  );
}

export default OfertaCard;
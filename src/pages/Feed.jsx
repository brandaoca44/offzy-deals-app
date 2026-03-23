import { useState } from "react";

import OfertaCard from "../components/OfertaCard";
import Categorias from "../components/Categorias";

function Feed({ usuarioLogado, ofertas, onVotar }) {
  const [categoria, setCategoria] = useState("Todas");
  const [busca, setBusca] = useState("");

  function selecionarCategoria(cat) {
    setCategoria(cat);
  }

  const ofertasFiltradas = ofertas
    .filter((o) => categoria === "Todas" || o.categoria === categoria)
    .filter((o) =>
      o.titulo.toLowerCase().includes(busca.toLowerCase())
    );

  const ofertasOrdenadas = [...ofertasFiltradas].sort((a, b) => {
    const scoreA = (a.likes || 0) - (a.dislikes || 0);
    const scoreB = (b.likes || 0) - (b.dislikes || 0);
    return scoreB - scoreA;
  });

  return (
    <div
      className="feed-layout"
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "240px minmax(0, 700px) 260px",
        justifyContent: "center",
        gap: "24px",
        padding: "24px 0",
        alignItems: "start"
      }}
    >
      <div className="categories-column">
        <Categorias
          selecionarCategoria={selecionarCategoria}
          categoriaAtiva={categoria}
        />
      </div>

      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              margin: "0 0 14px 0",
              fontSize: "24px",
              color: "var(--text)"
            }}
          >
            Ofertas em Destaque
          </h2>

          <input
            type="text"
            placeholder="🔎 Buscar ofertas, produtos ou lojas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 18px",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              outline: "none",
              fontSize: "15px",
              background: "#fff"
            }}
          />
        </div>

        <div>
          {ofertasOrdenadas.map((oferta) => (
            <OfertaCard
              key={oferta.id}
              oferta={oferta}
              usuarioLogado={usuarioLogado}
              onVotar={onVotar}
            />
          ))}
        </div>
      </div>

      <div
        className="ads-column"
        style={{
          position: "sticky",
          top: "20px"
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}
        >
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: "16px",
              color: "var(--text)"
            }}
          >
            Espaço publicitário
          </h3>

          <div
            style={{
              width: "100%",
              height: "250px",
              borderRadius: "10px",
              border: "1px dashed #cbd5e1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748b",
              fontSize: "14px",
              background: "#fafafa"
            }}
          >
            Seu anúncio aqui
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;

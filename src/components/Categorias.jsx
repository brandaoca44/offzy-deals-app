function Categorias({ selecionarCategoria, categoriaAtiva }) {
  const categorias = [
    "Todas",
    "Tecnologia",
    "Casa",
    "Cosméticos",
    "Ferramentas",
    "Carros",
    "Games",
    "Roupas",
    "Joias"
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "24px 20px",
        borderRight: "1px solid var(--border)",
        minHeight: "100%"
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "700",
          color: "var(--text)"
        }}
      >
        Categorias
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        {categorias.map((cat) => {
          const ativa = categoriaAtiva === cat;

          return (
            <button
              key={cat}
              onClick={() => selecionarCategoria(cat)}
              style={{
                textAlign: "left",
                padding: "10px 12px",
                borderRadius: "10px",
                border: ativa ? "1px solid var(--primary)" : "1px solid transparent",
                background: ativa ? "rgba(124,58,237,0.10)" : "transparent",
                color: ativa ? "var(--primary)" : "var(--text)",
                fontWeight: ativa ? "700" : "500",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categorias;
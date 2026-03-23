import { useState } from "react";

import { isSafePublicHttpsUrl } from "../utils/urls";

function NovaOferta({ adicionarOferta }) {
  const [form, setForm] = useState({
    titulo: "",
    preco: "",
    precoAntigo: "",
    loja: "",
    categoria: "",
    link: "",
    imagem: ""
  });
  const [erro, setErro] = useState("");

  function atualizarCampo(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (erro) setErro("");
  }

  function publicarOferta(e) {
    e.preventDefault();

    if (
      !form.titulo ||
      !form.preco ||
      !form.loja ||
      !form.categoria ||
      !form.link
    ) {
      setErro("Preencha os campos obrigatórios.");
      return;
    }

    if (!isSafePublicHttpsUrl(form.link)) {
      setErro("O link da oferta deve ser uma URL https válida (sem usuário/senha na URL).");
      return;
    }

    if (form.imagem.trim() && !isSafePublicHttpsUrl(form.imagem)) {
      setErro("A imagem, se informada, deve ser uma URL https válida.");
      return;
    }

    adicionarOferta(form);

    setForm({
      titulo: "",
      preco: "",
      precoAntigo: "",
      loja: "",
      categoria: "",
      link: "",
      imagem: ""
    });
    setErro("");
    alert("Oferta publicada com sucesso.");
  }

  return (
    <form
      onSubmit={publicarOferta}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}
    >
      {erro ? (
        <p
          role="alert"
          style={{
            margin: 0,
            padding: "12px",
            borderRadius: "8px",
            background: "#fef2f2",
            color: "#b91c1c",
            fontSize: "14px",
            border: "1px solid #fecaca"
          }}
        >
          {erro}
        </p>
      ) : null}

      <div>
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "600",
            color: "var(--text)"
          }}
        >
          Título da oferta
        </label>

        <input
          name="titulo"
          type="text"
          placeholder="Ex: SSD Kingston NV2 1TB"
          value={form.titulo}
          onChange={atualizarCampo}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px"
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--text)"
            }}
          >
            Preço atual
          </label>

          <input
            name="preco"
            type="text"
            placeholder="Ex: R$199"
            value={form.preco}
            onChange={atualizarCampo}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--text)"
            }}
          >
            Preço antigo
          </label>

          <input
            name="precoAntigo"
            type="text"
            placeholder="Ex: R$299"
            value={form.precoAntigo}
            onChange={atualizarCampo}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px"
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--text)"
            }}
          >
            Loja
          </label>

          <input
            name="loja"
            type="text"
            placeholder="Ex: Amazon"
            value={form.loja}
            onChange={atualizarCampo}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--text)"
            }}
          >
            Categoria
          </label>

          <input
            name="categoria"
            type="text"
            placeholder="Ex: Tecnologia"
            value={form.categoria}
            onChange={atualizarCampo}
          />
        </div>
      </div>

      <div>
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "600",
            color: "var(--text)"
          }}
        >
          Link da oferta (https)
        </label>

        <input
          name="link"
          type="url"
          inputMode="url"
          placeholder="https://..."
          value={form.link}
          onChange={atualizarCampo}
        />
      </div>

      <div>
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "600",
            color: "var(--text)"
          }}
        >
          Imagem do produto (https, opcional)
        </label>

        <input
          name="imagem"
          type="url"
          inputMode="url"
          placeholder="https://..."
          value={form.imagem}
          onChange={atualizarCampo}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: "8px",
          alignSelf: "flex-start",
          padding: "12px 18px",
          border: "none",
          borderRadius: "10px",
          background: "var(--primary)",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(124,58,237,0.22)"
        }}
      >
        Publicar oferta
      </button>
    </form>
  );
}

export default NovaOferta;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";

import { ofertas as ofertasIniciais } from "./data/ofertas";

const STORAGE_OFERTAS = "offzy_ofertas";
const STORAGE_SESSAO = "offzy_sessao";

function normalizarListaOfertas(lista) {
  if (!Array.isArray(lista)) return null;
  return lista.map((o) => ({
    ...o,
    likes: typeof o.likes === "number" ? o.likes : 0,
    dislikes: typeof o.dislikes === "number" ? o.dislikes : 0
  }));
}

function carregarOfertasSalvas(fallback) {
  const fallbackOk = normalizarListaOfertas(fallback) ?? fallback;
  try {
    const raw = localStorage.getItem(STORAGE_OFERTAS);
    if (!raw) return fallbackOk;
    const parsed = JSON.parse(raw);
    const normalizado = normalizarListaOfertas(parsed);
    return normalizado ?? fallbackOk;
  } catch {
    return fallbackOk;
  }
}

function carregarSessaoSalva() {
  try {
    return localStorage.getItem(STORAGE_SESSAO) === "1";
  } catch {
    return false;
  }
}

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(carregarSessaoSalva);
  const [ofertas, setOfertas] = useState(() =>
    carregarOfertasSalvas(ofertasIniciais)
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_OFERTAS, JSON.stringify(ofertas));
    } catch {
      /* quota excedida ou storage indisponível — app continua em memória */
    }
  }, [ofertas]);

  useEffect(() => {
    try {
      if (usuarioLogado) localStorage.setItem(STORAGE_SESSAO, "1");
      else localStorage.removeItem(STORAGE_SESSAO);
    } catch {
      /* ignora falha de persistência da sessão demo */
    }
  }, [usuarioLogado]);

  function adicionarOferta(novaOferta) {
    const ofertaFormatada = {
      id: Date.now(),
      titulo: novaOferta.titulo,
      preco: novaOferta.preco,
      precoAntigo: novaOferta.precoAntigo || "",
      loja: novaOferta.loja,
      categoria: novaOferta.categoria,
      imagem: novaOferta.imagem || "https://via.placeholder.com/500x250",
      likes: 0,
      dislikes: 0,
      link: novaOferta.link
    };

    setOfertas((prev) => [ofertaFormatada, ...prev]);
  }

  function registrarVoto(ofertaId, tipo) {
    setOfertas((prev) =>
      prev.map((o) => {
        if (o.id !== ofertaId) return o;
        if (tipo === "like") {
          return { ...o, likes: (o.likes ?? 0) + 1 };
        }
        if (tipo === "dislike") {
          return { ...o, dislikes: (o.dislikes ?? 0) + 1 };
        }
        return o;
      })
    );
  }

  function encerrarSessao() {
    setUsuarioLogado(false);
  }

  return (
    <BrowserRouter>
      <div
        style={{
          background: "var(--background)",
          color: "var(--text)",
          minHeight: "100vh"
        }}
      >
        <Navbar usuarioLogado={usuarioLogado} onLogout={encerrarSessao} />

        <Routes>
          <Route
            path="/"
            element={
              <Feed
                usuarioLogado={usuarioLogado}
                ofertas={ofertas}
                onVotar={registrarVoto}
              />
            }
          />

          <Route
            path="/login"
            element={
              <Login
                setUsuarioLogado={setUsuarioLogado}
                jaLogado={usuarioLogado}
              />
            }
          />

          <Route
            path="/cadastro"
            element={
              <Cadastro
                setUsuarioLogado={setUsuarioLogado}
                jaLogado={usuarioLogado}
              />
            }
          />

          <Route
            path="/perfil"
            element={
              usuarioLogado ? (
                <Perfil adicionarOferta={adicionarOferta} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

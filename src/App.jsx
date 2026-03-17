import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";

import { ofertas as ofertasIniciais } from "./data/ofertas";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [ofertas, setOfertas] = useState(() => {
    const ofertasSalvas = localStorage.getItem("offzy_ofertas");
    return ofertasSalvas ? JSON.parse(ofertasSalvas) : ofertasIniciais;
  });

  useEffect(() => {
    localStorage.setItem("offzy_ofertas", JSON.stringify(ofertas));
  }, [ofertas]);

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

  return (
    <BrowserRouter>
      <div
        style={{
          background: "var(--background)",
          color: "var(--text)",
          minHeight: "100vh"
        }}
      >
        <Navbar usuarioLogado={usuarioLogado} />

        <Routes>
          <Route
            path="/"
            element={
              <Feed
                usuarioLogado={usuarioLogado}
                ofertas={ofertas}
              />
            }
          />

          <Route
            path="/login"
            element={<Login setUsuarioLogado={setUsuarioLogado} />}
          />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route
            path="/perfil"
            element={<Perfil adicionarOferta={adicionarOferta} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
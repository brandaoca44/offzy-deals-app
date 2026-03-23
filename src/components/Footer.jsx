function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "22px 20px",
        borderTop: "1px solid var(--border)",
        background: "#fff"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          color: "#6b7280",
          fontSize: "13px",
          lineHeight: 1.4,
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap"
        }}
      >
        <div>Offzy &copy; {ano}. Todos os direitos reservados.</div>
        <div>Demo sem backend: dados e sessão no navegador.</div>
      </div>
    </footer>
  );
}

export default Footer;


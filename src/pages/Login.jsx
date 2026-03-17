function Login(){

  return(

    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"80vh"
    }}>

      <div style={{
        background:"#fff",
        padding:"40px",
        borderRadius:"12px",
        border:"1px solid var(--border)",
        width:"350px",
        boxShadow:"0 4px 12px rgba(0,0,0,0.05)"
      }}>

        <h2 style={{
  marginBottom:"25px",
  color:"var(--text)",
  fontWeight:"600"
}}>
  Entrar na conta
</h2>

        <input
          placeholder="Email"
          style={{
            width:"100%",
            padding:"10px",
            borderRadius:"8px",
            border:"1px solid var(--border)",
            marginBottom:"15px"
          }}
        />

        <input
          placeholder="Senha"
          type="password"
          style={{
            width:"100%",
            padding:"10px",
            borderRadius:"8px",
            border:"1px solid var(--border)",
            marginBottom:"20px"
          }}
        />

        <button
          style={{
            width:"100%",
            padding:"12px",
            background:"var(--primary)",
            color:"#fff",
            border:"none",
            borderRadius:"8px",
            fontWeight:"600",
            cursor:"pointer"
          }}
        >
          Entrar
        </button>

      </div>

    </div>

  )

}

export default Login
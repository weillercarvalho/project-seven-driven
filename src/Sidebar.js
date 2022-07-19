function SidebarBreak({src,name,purpose}) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={src} />
        <div class="texto">
          <div class="nome">{name}</div>
          <div class="razao">{purpose}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

function Sugestions({strong,text}) {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>{strong}</strong>
        {text}
      </div>
    </div>
  )
}

function Sidebar() {
  const sugestiontop = [
    {strong: "catanacomics", text:"Catana"},
  ];
  const sugestionbottom = [
    {src:"assets/img/bad.vibes.memes.svg", name:"bad.vibes.memes", purpose:"Segue você"},
    {src:"assets/img/chibirdart.svg", name:"chibirdart", purpose:"Segue você"},
    {src:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar", purpose:"Novo no Instagram"},
    {src:"assets/img/adorable_animals.svg", name:"adorable_animals", purpose:"Segue você"},
    {src:"assets/img/smallcutecats.svg", name:"smallcutecats", purpose:"Segue você"},
  ];

    return (
      <div class="sidebar">
        {sugestiontop.map((index) => <Sugestions strong={index.strong} texto={index.text}/>)}

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
            {sugestionbottom.map((index) => <SidebarBreak src={index.src} name={index.name} purpose={index.purpose}/>)}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}

export default Sidebar;
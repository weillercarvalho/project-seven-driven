function SidebarBreak(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.src} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

function Sidebar() {
    return (
      <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <SidebarBreak src="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você"/>

          <SidebarBreak src="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você"/>

          <SidebarBreak src="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram"/>

          <SidebarBreak src="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você"/>

          <SidebarBreak src="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você"/>

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
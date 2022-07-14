function StoryBreak(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.src} />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  )
}

function PostBreak(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.src} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.src2} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.src3} />
          <div class="texto">
            Curtido por <strong>{props.texto1}</strong> e <strong>{props.texto2}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}


function Middle() {
    return (
        <div class="esquerda">
            <div class="stories">
              <StoryBreak src="assets/img/9gag.svg" usuario="9gag"/>

              <StoryBreak src="assets/img/meowed.svg" usuario="meowed"/>

              <StoryBreak src="assets/img/barked.svg" usuario="barked"/>

              <StoryBreak src="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet"/>

              <StoryBreak src="assets/img/wawawicomics.svg" usuario="wawawicomics"/>

              <StoryBreak src="assets/img/respondeai.svg" usuario="respondeai"/>

              <StoryBreak src="assets/img/filomoderna.svg" usuario="filomoderna"/>

              <StoryBreak src="assets/img/memeriagourmet.svg" usuario="memeriagourmet"/>

              <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
              </div>
            </div>
            <div class="posts">
              <PostBreak src="assets/img/meowed.svg" usuario="meowed" src2="assets/img/gato-telefone.svg" src3="assets/img/respondeai.svg" texto1="respondeai" texto2="outras 101.523 pessoas"/>
              
              <PostBreak src="assets/img/barked.svg" usuario="barked" src2="assets/img/dog.svg" src3="assets/img/adorable_animals.svg" texto1="adorable_animals" texto2="outras 99.159 pessoas"/>
            </div>
        </div>
        
    )
}

export default Middle;
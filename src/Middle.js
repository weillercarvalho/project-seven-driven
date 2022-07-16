import React from 'react';

function PostBreak(props) {
  const [count, setCount] = React.useState("");
  const [counts, setCounts] = React.useState("heart-outline")
  function color() {
    if (counts === "heart-outline") {
      setCount("heart")
      setCounts("heart")
    } else {
      setCount("")
      setCounts("heart-outline")
    }
  }


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
        <img onClick={() => color()} src={props.src2} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon id={count} onClick={() => color()} name={counts}></ion-icon>
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


function Middle() {
  const story = [ 
    {src: "assets/img/9gag.svg", usuario: "9gag"},             
    {src: "assets/img/meowed.svg", usuario: "meowed"},
    {src: "assets/img/barked.svg", usuario: "barked"},
    {src: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {src: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {src: "assets/img/respondeai.svg", usuario: "respondeai"},
    {src: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {src: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"},
  ];

  const post = [
    {src: "assets/img/meowed.svg", usuario: "meowed", src2:"assets/img/gato-telefone.svg",
     src3:"assets/img/respondeai.svg", texto1:"respondeai", texto2:"outras 101.523 pessoas"},
    {src: "assets/img/barked.svg", usuario: "barked", src2:"assets/img/dog.svg",
     src3:"assets/img/adorable_animals.svg", texto1:"adorable_animals", texto2:"outras 99.159 pessoas"},
  ];

  return (
      <div class="esquerda">
          <div class="stories">
            {story.map((index) => <StoryBreak src={index.src} usuario={index.usuario}/>)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
          <div class="posts">
            {post.map((index) => <PostBreak src={index.src} usuario={index.usuario} src2={index.src2} 
            src3={index.src3} texto1={index.texto1} texto2={index.texto2}/>)}
          </div>
      </div>
        
    )
}

export default Middle;
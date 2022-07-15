function TopBreak(props) {
  return (
    <div class="container">
      <div class="logo">
        <ion-icon name={props.logo1}></ion-icon>
        <div class="separador"></div>
        <img src={props.image1} />
      </div>

      <div class="logo-mobile">
        <ion-icon name={props.logo1}></ion-icon>
      </div>

      <div class="instagram-mobile">
        <img src={props.image1} />
      </div>

      <div class="pesquisa">
        <input type="text" placeholder="Pesquisar" />
      </div>

      <div class="icones">
        <ion-icon name={props.logo2}></ion-icon>
        <ion-icon name={props.logo3}></ion-icon>
        <ion-icon name={props.logo4}></ion-icon>
        <ion-icon name={props.logo5}></ion-icon>
      </div>

      <div class="icones-mobile">
        <ion-icon name={props.logo2}></ion-icon>
      </div>
    </div>
  )
}



function Top() {
    return (      
    <div class="navbar">
      <TopBreak image1="assets/img/logo.png" logo1="logo-instagram" logo2="paper-plane-outline" logo3="compass-outline" logo4="heart-outline" logo5="person-outline"/>
    </div>)
}

export default Top;
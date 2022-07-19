function TopBreak({logo1,image1,logo2,logo3,logo4,logo5}) {
  return (
    <div class="container">
      <div class="logo">
        <ion-icon name={logo1}></ion-icon>
        <div class="separador"></div>
        <img src={image1} />
      </div>

      <div class="logo-mobile">
        <ion-icon name={logo1}></ion-icon>
      </div>

      <div class="instagram-mobile">
        <img src={image1} />
      </div>

      <div class="pesquisa">
        <input type="text" placeholder="Pesquisar" />
      </div>

      <div class="icones">
        <ion-icon name={logo2}></ion-icon>
        <ion-icon name={logo3}></ion-icon>
        <ion-icon name={logo4}></ion-icon>
        <ion-icon name={logo5}></ion-icon>
      </div>

      <div class="icones-mobile">
        <ion-icon name={logo2}></ion-icon>
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
function FooterBreak({logo1,logo2,logo3,logo4,logo5}) {
  return (
    <>
      <ion-icon name={logo1}></ion-icon>
      <ion-icon name={logo2}></ion-icon>
      <ion-icon name={logo3}></ion-icon>
      <ion-icon name={logo4}></ion-icon>
      <ion-icon name={logo5}></ion-icon>
    </>
  )
}

function Footer() {
    return (
      <div class="fundo-mobile">
        <FooterBreak logo1="home" logo2="search-outline" logo3="add-circle-outline" logo4="heart-outline" logo5="person-outline"/>
      </div>
    )
}

export default Footer;


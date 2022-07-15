function FooterBreak(props) {
  return (
    <>
      <ion-icon name={props.logo1}></ion-icon>
      <ion-icon name={props.logo2}></ion-icon>
      <ion-icon name={props.logo3}></ion-icon>
      <ion-icon name={props.logo4}></ion-icon>
      <ion-icon name={props.logo5}></ion-icon>
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


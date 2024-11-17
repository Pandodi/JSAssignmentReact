const HowDoesItWork = () => {
  return (
    <section className="how-does-it-work-section">
        <div className="container">
            <h1>How Does It Work?</h1>
            <div className="desktop-slideshow">
                <img src="./src/assets/images/desktop-slideshow-image-1.svg" alt="Showcase-image-1"/>
                <img src="./src/assets/images/desktop-slideshow-image-2.svg" alt="Showcase-image-2"/>
                <img src="./src/assets/images/desktop-slideshow-image-3.svg" alt="Showcase-image-3"/>
            </div>
            <div className="image-slideshow">
                <img id="slideshow-image-1" src="./src/assets/images/iPhone 12 Pro.svg" alt="phone-1"/>
                <img id="slideshow-main" src="./src/assets/images/HowdoesitworkPhone.svg" alt="PhoneDemonstration"/>    
                <img id="slideshow-image-2" src="./src/assets/images/iPhone 12 Pro (1).svg" alt="phone-2"/>
            </div>

            <div className="slideshow-tablet">
                <img src="./src/assets/images/tablet-slideshow1.svg" alt="Showcase-image-1"/>
                <img src="./src/assets/images/tablet-slideshow2.svg" alt="Showcase-image-2"/>
                <img src="./src/assets/images/tablet-slideshow3.svg" alt="Showcase-image-3"/>
            </div>
            <div className="tablet-instructions">
                <h2>Step 3. Transfers to people from your contact list</h2>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
            
            <h2 id="desktop-h2">Latest transaction history</h2>
            <p id="desktop-p">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
            <h2 id="mobile-h2" >Transfer to people from your contact list</h2>
            <p id="mobile-p" >Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>
    </section>
  )
}

export default HowDoesItWork
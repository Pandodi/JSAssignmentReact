const Showcase = ({onFeaturesClick}) => {
  return (
    <section className="showcase-section">
        <div className="section-container">
            <h1>Manage All Your Money In One App</h1>
            <span id="commercial-text" >We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</span>
            <div id="commercial-text-tablet">
                <span>We offer you a new generation of the mobile banking.</span>
                <span>Save, spend & manage money in your pocket.</span>
            </div>

            <div className="showcase-logos">
                <a className="apple-logo" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/images/appstore-light.svg.svg" alt="AppStore"/></a>
                <a className="google-logo" href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer"><img src="./src/assets/images/googleplay-light.svg.svg" alt="GooglePlay"/></a>

                <a className="apple-logo dark-mode" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/images/apple-logo-dark.svg" alt="AppStore-Dark"/></a>
                <a className="google-logo dark-mode" href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer"><img src="./src/assets/images/google-logo-dark.svg" alt="GooglePlay-Dark"/></a>
            </div>

            <div className="discover-more">
                <span onClick={onFeaturesClick} className="pointer"><img src="./src/assets/images/Icon.svg" alt="Chevron"/></span>
                <span onClick={onFeaturesClick} className="pointer dark-mode"><img src="./src/assets/images/chevron-dark-mode.svg" alt="Chevron"/></span>
                <span>Discover More</span>
            </div>
            <img id="phone-image" src="./src/assets/images/PhoneShowcase.svg" alt="PhoneShowCase"/>
        </div>

    </section>
  )
}

export default Showcase
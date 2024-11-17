import SubscribeForm from "./SubscribeForm"

SubscribeForm

const Subscribe = () => {


  return (
    <section className="subscribe-section">

      <div className="container">

        <div className="subscribe-attention">
            <img src="./src/assets/images/notification-icon-1.svg.svg" alt="RingTheBell!"/>
            <h1 id="subscribe-mobile-text">Subscribe to our newsletter</h1>
            <h1 id="subscribe-desktop-text">Subscribe to our newsletter to stay informed about latest updates</h1>
        </div>
      <SubscribeForm/>

      </div>
    </section>
  )
}

export default Subscribe
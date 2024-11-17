const HowDoesItWorkDesktop = ({onFaqClick}) => {
  return (
    <section className="how-does-it-work-2">
        <div className="container">
            <div className="box-1">
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li> <i className="fa-regular fa-circle-check"></i> &nbsp; Banking transactions are free for you</li>
                    <li> <i className="fa-regular fa-circle-check"></i> &nbsp; No monthly cash commission</li>
                    <li> <i className="fa-regular fa-circle-check"></i> &nbsp; Manage payments and transactions online</li>
                </ul>
                <button onClick={onFaqClick} className="learn-more-btn" >Learn More &nbsp; &nbsp; <i className="fas fa-arrow-right"></i> </button>
            </div>
            <div className="box-2">
                <img src="./src/assets/images/graph-image.svg" alt="graph-money"/>
            </div>
            <div className="box-3">
                <img src="./src/assets/images/contacts-image.svg" alt="contacts-image"/>
            </div>
            <div className="box-4">
                <h2>Receive payment from international bank details</h2>
                <div id="payment-section">
                    <img className="item1-icon" src="./src/assets/images/EasyPayments.svg" alt="EasyPayments"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/Easypayment-dark.svg" alt=""/>
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <div id="cashback-section">
                    <img className="item1-icon" src="./src/assets/images/Cashback.svg" alt="Cashback"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/cashback-dark.svg" alt=""/>
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
                <button onClick={onFaqClick} className="learn-more-btn" >Learn More &nbsp; &nbsp; <i className="fas fa-arrow-right" ></i> </button>
            </div>
        </div>
    </section>
  )
}

export default HowDoesItWorkDesktop
const Features = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="features-phone-image">
                <img src="./src/assets/images/PhoneFeatures.svg" alt="PhoneImage"/>
            </div>
            <div className="features-introduction">
                <h1>App Features</h1>
                <span className="features-text-phone">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</span>
            </div>
            
            <div className="features-items">
                <div className="item-container">
                        <img className="item1-icon" src="./src/assets/images/EasyPayments.svg" alt="EzPay"/>
                        <img className="item1-icon dark-mode" src="./src/assets/images/Easypayment-dark.svg" alt=""/>
                        <div className="text-box">
                            <h2>Easy Payments</h2>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                </div>
                <div className="item-container">
                    <img className="item1-icon" src="./src/assets/images/DataSecurity.svg" alt="Security"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/datasecurity-dark.svg" alt=""/>
                    <div className="text-box">
                        <h2>Data Security</h2>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                    </div>
                </div>
                <div className="item-container">
                    <img className="item1-icon" src="./src/assets/images/CostStatistics.svg" alt="Stats"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/coststatistics-dark.svg" alt=""/>
                    <div className="text-box">
                        <h2>Cost Statistics</h2>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>
                <div className="item-container">
                    <img className="item1-icon" src="./src/assets/images/Support.svg" alt="Support"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/support-dark.svg" alt=""/>
                    <div className="text-box">
                        <h2>Support 24/7</h2>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>
                <div className="item-container">
                    <img className="item1-icon" src="./src/assets/images/Cashback.svg" alt="Cashback"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/cashback-dark.svg" alt=""/>
                    <div className="text-box">
                        <h2>Regular Cashback</h2>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                </div>
                <div className="item-container">
                    <img className="item1-icon" src="./src/assets/images/Standards.svg" alt="Standards"/>
                    <img className="item1-icon dark-mode" src="./src/assets/images/standards-dark.svg" alt=""/>
                    <div className="text-box">
                        <h2>Top Standards</h2>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Features
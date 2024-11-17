import { useState, useEffect } from "react"
import FaqItem from "./FaqItem"
import { Link } from "react-router-dom"

const FAQ = () => {
    const [faqItems, setfaqItems] = useState([])
    
    const fetchData = async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setfaqItems(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    


    return (
    <section className="faq-section">
        <div className="container">
            <div className="faq-introduction">
                <h1>Any questions? Check out the FAQs</h1>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            <ul>
                {
                    faqItems.map((item) => (<FaqItem key={item.id} item={item} />))
                }
            </ul>

            <div className="contact-options">
                <div className="option">
                    <img src="./src/assets/images/phone-icon.svg" alt="PhoneIcon"/>
                    <p>Still have questions?</p>
                    <Link to="/contact"><span style={{ cursor: 'pointer'}} id="blue">Contact us &nbsp; &nbsp; &nbsp;<i id="blue" className="fas fa-arrow-right"></i></span></Link>
                </div>

                <div className="option">
                    <img src="./src/assets/images/chat-icon.svg" alt="ChatIcon"/>
                    <p>Don't like phone calls?</p>
                    <Link to="/contact"><span  style={{ cursor: 'pointer'}} id="green">Contact us &nbsp; &nbsp; &nbsp;<i id="green" className="fas fa-arrow-right"></i></span></Link>
                    
                </div>
            </div>
            <Link to="/contact"><button className="contact-us-button">Contact us now</button></Link>
            
        </div>
    </section>
  )
}

export default FAQ
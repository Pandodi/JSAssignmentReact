import { useState, useEffect } from "react"
import ReviewCard from "./ReviewCard"

const Testimonials = () => {
    const [reviewCards, setReviewCards] = useState([])

    const fetchData = async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setReviewCards(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="client-reviews">
            <div className="content">
                <div className="reviews-introduction">
                    <h2>Clients are Loving our App</h2>
                </div>
                
                {reviewCards.map((card) => (<ReviewCard key={card.id} card={card} />))}
            
            </div>
        </section>
  )
}

export default Testimonials
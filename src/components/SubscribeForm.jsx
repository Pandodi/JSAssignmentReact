import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState ({email: ''})
    const [error, setError] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [userEmail, setuserEmail] = useState()
  
    const validateForm = () => {
      const newError = {}

      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
        newError.email = "The email address you entered is invalid. Please try again."
      }

      setError(newError)
      return Object.keys(newError).length === 0;

    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                
            })

            if(!res.ok){
                console.log('An error occured')
            } else {
                console.log('Form successful')
            }
            
        if(validateForm()) {
            setSubmitted(true)
            setuserEmail(formData.email)
            setFormData({email: ''})

        }
    } 
    
    if (submitted) {
        return (
            <div className='success-subscribe'>
                <h1>Thank you for subscribing! <br/> Updates will be sent to {userEmail}</h1>
                <button className='ok-button' onClick={handleOk}>OK</button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="subscribe-form" method="get" noValidate>
            <input name="email" type="email" required placeholder= '&#xf0e0;      Your email' style={{ fontFamily: "Manrope, FontAwesome" }} value={formData.email} onChange={handleInputChange}/>
            <button style={{cursor: 'pointer'}} type='submit'>Subscribe</button>
            <p>{error.email && error.email}</p>
        </form>
  )
}

export default SubscribeForm
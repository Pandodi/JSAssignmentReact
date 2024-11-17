import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState ({fullName: '', email: '', specialist: ''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateForm = () => {
        const newErrors = {}
        if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
            newErrors.fullName = "Name must be at least 2 characters long with no numbers."    
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "The email address you entered is invalid. Please try again."
        }

        if ((formData.specialist==='')){
            newErrors.specialist = "Please choose a specialist."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
           
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
        
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
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
            setFormData({fullName: '', email: '', specialist: ''})
        }
    }

    if (submitted) {
        return (
            <div className='success-form-message'>
                <h1>Your request has been submitted.</h1>
                <p>We will get back to you as soon as we can!</p>
                <button onClick={handleOk}>OK</button>
            </div>
        )
    }
    
  return (
    <form onSubmit={handleSubmit} className='form-container' noValidate>
        <div className='form-headline'>
            <h1>Get Online Consultation</h1>
        </div>
        <div className='form-body'>
            <div className='form-field-input'>
                <p>Full name</p>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
                <span className='form-error-msg'>{errors.fullName && errors.fullName}</span>
            </div>
            <div className='form-field-input'>
                <p>Email address</p>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                <span className='form-error-msg' >{errors.email && errors.email}</span>
            </div>
            <div className='specialist-field'>
                <p>Specialist</p>
                <select className='custom-dropdown' id='customSelect' name="specialist" value={formData.specialist} onChange={handleInputChange}>
                    <option value="" disabled hidden>Choose a specialist</option>
                    <option>Consult</option>
                    <option>Advisor</option>
                    <option>Tech</option>
                    <option>Något</option>
                </select>
                <span className='form-error-msg'>{errors.specialist && errors.specialist}</span>
            </div>
        </div>
        <div className='form-btn'>
                <button type='submit'>Make an appointment</button>
        </div>
    </form>
  )
}

export default ContactForm
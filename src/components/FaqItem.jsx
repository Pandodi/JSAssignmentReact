import React, { useState } from 'react'


const FaqItem = ({item}) => {
    
    const [isExpanded, setisExpanded] = useState(false)

    const toggleExpanded = () => {
        setisExpanded(prevState => !prevState);
    }
    return (
        <li>
            <div className="faq-item">
                <div>
                    <h3 onClick={toggleExpanded}>{item.title}</h3>
                    
                    {isExpanded && (
                        <span className='faq-item-answer'>{item.content}</span>
                    )}
                </div>

                <img onClick={toggleExpanded} src={isExpanded ? "./src/assets/images/PilUpp.svg" : "./src/assets/images/PilNer.svg"} alt="Pil"/>
            </div>
        </li>
    )
}

export default FaqItem
import React, { useState, useEffect } from 'react'
import './RandomQuote.css'
import x_icon from '../Assets/x-social-media-logo-icon.svg'
import reload_icon from '../Assets/svgviewer-output.svg'
const RandomQuote = () => {
   
   useEffect(() => {
    async function loadQuotes() {
      const response = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      const data = await response.json();
      setQuotes(data.quotes); // store in state
    }
    loadQuotes();
  }, []);
    const twitter = ()=>{window.open(`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`)}
    const random = ()=>{
        const select = quotes[Math.floor(Math.random()* quotes.length)]
        Setquote(select)
    }
    const [quotes, setQuotes] = useState([]);
    const [quote, Setquote] = useState({quote: "Difficulties increase the nearer we get to the goal.",
        author: 'Johann Wolfgang von Goethe',
    })
    
  return (


    <div className='container'>
        <div className='quote'>{quote.quote}</div>
        <div>
            <div className='line'></div>
            <div className='bottom'>
                <div className='author'>- {quote.author}</div>
                <div className='icons'>
                    <img src={reload_icon} onClick={()=>{random()}} alt="" />
                    <img src={x_icon} onClick={()=>{twitter()}} alt="" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default RandomQuote
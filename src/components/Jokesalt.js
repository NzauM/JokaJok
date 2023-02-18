import { faE, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Jokesalt({jokes, searchedJokes}) {
    // const[myjokes, loadedJokes] = useState(jokes)
    // useEffect(()=>{
    //     loadedJokes(searchedJokes)
    // },[searchedJokes])
    const colors = ["city", "ski", "beach", "camping","cooking"]
    const randomInd = (arr) =>arr[Math.floor(Math.random() * arr.length)]
    console.log(randomInd(colors))
    console.log(searchedJokes)
      function saveJoke(data){
        console.log(data)
        fetch(" http://localhost:3000/jokes",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)            
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(`${data.category} has been saved`)
        })
    }

    const displayJokes = jokes.map((joke)=>{
        let jokeColor = randomInd(colors)
        return(
            <>

            <div  key={joke.id} style={{opacity: 1}} className="col-md-3 mb-5">
               
            <section className="card-section">
                <div className="card">
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <div className={`card-front__tp card-front__tp--${jokeColor} `}>
                                    <h2 className="card-front__heading">
                                    <u>Joke Category</u>
                                    </h2>
                                    <h2 className="card-front__heading">
                                    {joke.category}
                                    </h2>
                                    <p className="card-front__text-price">                                        
                                    </p>
                                </div>

                                <div className="card-front__bt">
                                    <p className={`card-front__text-view card-front__text-view--${jokeColor}`}>
                                        View Joke  
                                        
                                    </p>
                                    {/* <h1><FontAwesomeIcon icon={faEye} /></h1> */}
                                    
                                </div>
                            </div>

                            <div className="card-back">
                                <img src="https://picsum.photos/200/300"/>
                                {/* <video className="video__container" autoPlay muted loop>
                                    <source className="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                                </video> */}
                            </div>
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h3 className={`inside-page__heading inside-page__heading--${jokeColor}`}>
                                Category: {joke.category}
                            </h3>
                            <p className="inside-page__text ">
                            {joke.setup ? joke.setup : joke.joke} <span style={{color: jokeColor}}> <b>{joke.delivery}</b></span> 
                            </p>
                            <a href="#" onClick={(()=>{
                                            saveJoke(joke)
                                    })} className={`inside-page__btn inside-page__btn--${jokeColor}`}>Save Joke</a>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </>
        )
    })
    return (
        <>
        
        <div id="jokes"  className="row mt-5" >
            {displayJokes}
        </div>
        
        </>
        
    )
}

export default Jokesalt
import { faGrinSquintTears, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Card } from "react-bootstrap";


function Landing() {
    const colors = ["city", "ski", "beach", "camping", "cooking"]
    const randomInd = (arr) => arr[Math.floor(Math.random() * arr.length)]


    let jokeColor = randomInd(colors)
    return (
        <>
            <div style={{ height: "60vh" }}>
                <div className='row' style={{ /* backgroundImage: "url('./Vorderrhein.png')" */ paddingBottom: "20%"}}>
                    <div className='col-md-8 col-xl-7'>
                        {/* <img width={"90%"} src={'./haha.png'} /> */}
                        <img width={"50%"} src={'./yellow.png'} />
                    </div>
                    <div className="col-md-4 col-xl-4 mt-5 flipDivLg">
                        <div style={{ marginLeft: "10%", marginTop: "5"}}>
                            {/* <h1 >
                        Karibu  <span className="text-info">Joke Joke</span> Joker
                    </h1>
                    <p>
                        You can find the funniest jokes, save them, and try to complete puns.
                    </p> */}
                            <section className="card-section">
                                <div className="card2">
                                    <div className="flip-card2">
                                        <div className="flip-card__container2">
                                            <div className="card2-front">
                                                <div className={`card-front__tp2 card-front__tp--${jokeColor} `}>
                                                    {/* <h2 className="card-front__heading">
                                                        <u></u>
                                                    </h2> */}
                                                    <h2 className="card-front__heading">
                                                        JokaJoke
                                                    </h2>
                                                    <h2 className="card-front__heading">
                                                        /Jok' - a - Joke/ < FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
                                                    </h2>
                                                    <p className="card-front__text-price">
                                                        <i>A fun, Jokes app</i>
                                                        
                                                    </p>
                                                </div>

                                                <div className="card-front__bt" style={{justifyContent: "center"}} >
                                                   
                                                    <div className={`card-front__text-view`} style={{textAlign: "center", padding: 10}}>
                                                        <span style={{fontWeight: "lighter"}}> <i>/noun/: </i></span> A fun app where you can find funny jokes, save them for later use, and play pun games 
                                                        <br></br>
                                                        <a href="#" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "90%", display: "block", textAlign: "center", marginLeft: "5%"}}>Find Out more</a>
                                                        {/* 2. An app where you can View Jokes, to add to your blant pickup lines, save Jokes, to use later and try not to be the boring friend you are, or even Play Pun Games, to distract you from your suicidal thoughts <FontAwesomeIcon icon={faGrinSquintTears}></FontAwesomeIcon> */}
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div className={`card-back cardShade--${jokeColor}`} >
                                                <img className="landingImage__container mt-5" style={{backgroundColor: jokeColor}} src={'./dadjokes.jpg'}/>
                                                {/* <video className="video__container" autoPlay muted loop>
                                    <source className="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                                </video> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`inside-page2 cardShade--${jokeColor}`}>
                                        <div className={`inside-page2__container cardShade--${jokeColor}`}>
                                            <h3 className={`inside-page__heading`}>
                                                Karibu Joka Joke 
                                            </h3>
                                            <p className="inside-page__text ">
                                                Joka Joke is a fun app/game where you can sharpen your pun skills or lift up your moods. We have a wide array of jokes, from various categories. If you like a joke, you can save it, to keep it in a Dad-a-base(gerrit :)) so as to find it easily. If you love puns and dad jokes as much as I do, the Pun Masters game will blow your mind. Welcome to JokaJoke, we hope to make your day as you do ours :)
                                            </p>
                                            <a href="#jokes" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "30%"}}>View Jokes</a>
                                            <a href="/savedJokes" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "30%"}}>Save Jokes</a>
                                            <a href="/punmasters" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "30%"}}>Play Pun Masters</a>
                                            {/* <p className="inside-page__text ">
                                                All about JokaJoke
                                                {/* {joke.setup ? joke.setup : joke.joke} <span style={{color: jokeColor}}> <b>{joke.delivery}</b></span>  */}
                                            {/* </p> */} 
                                            {/* <div className="row">
                                                <div className="col-md-3">
                                                    <a href="#" className={`inside-page__btn--ski`}>View Jokes</a>
                                                </div>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-4">
                                                    <a href="#" className={`inside-page__btn inside-page__btn--city`}>See Saved Jokes</a>
                                                </div>
                                                <div className="col-md-4">
                                                    <a href="#" className={`inside-page__btn inside-page__btn--beach`}>Play Pun Masters</a>
                                                </div>
                                            </div> */}
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>

                    </div>
                    <div className="flipDivSm">
                    <div className="card2-frontx">
                                                <div className={`card-front__tp2 card-front__tp--${jokeColor} `}>
                                                    {/* <h2 className="card-front__heading">
                                                        <u></u>
                                                    </h2> */}
                                                    <h2 className="card-front__heading">
                                                        JokaJoke
                                                    </h2>
                                                    <h2 className="card-front__heading">
                                                        /Jok' - a - Joke/ < FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
                                                    </h2>
                                                    <p className="card-front__text-price">
                                                        <i>A fun, Jokes app</i>
                                                        
                                                    </p>
                                                </div>

                                                <div className="card-front__bt" style={{justifyContent: "center"}} >
                                                   
                                                    <div className={`card-front__text-view`} style={{textAlign: "center", padding: 10}}>
                                                        <span style={{fontWeight: "lighter"}}> <i>/noun/: </i></span> A fun app where you can find funny jokes, save them for later use, and play pun games 
                                                        <br></br>
                                                        <a href="#" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "90%", display: "block", textAlign: "center", marginLeft: "5%"}}>Find Out more</a>
                                                        {/* 2. An app where you can View Jokes, to add to your blant pickup lines, save Jokes, to use later and try not to be the boring friend you are, or even Play Pun Games, to distract you from your suicidal thoughts <FontAwesomeIcon icon={faGrinSquintTears}></FontAwesomeIcon> */}
                                                    </div>
                                                    
                                                </div>
                                            </div>
                    </div>
                    {/* <Card className={`cardShade--${jokeColor} flipDivSm`}>                    
                        
                        <div >
                            <div >
                                            <h3 className={`inside-page__heading`}>
                                                Karibu Joka Joke 
                                            </h3>
                                            <p className="inside-page__text ">
                                                Joka Joke is a fun app/game where you can sharpen your pun skills or lift up your moods. We have a wide array of jokes, from various categories. If you like a joke, you can save it, to keep it in a Dad-a-base(gerrit :)) so as to find it easily. If you love puns and dad jokes as much as I do, the Pun Masters game will blow your mind. Welcome to JokaJoke, we hope to make your day as you do ours :)
                                            </p>
                                            <a href="#jokes" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "30%"}}>View Jokes</a>
                                            <a href="/savedJokes" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "30%"}}>Save Jokes</a>
                                            <a href="/punmasters" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{width: "30%"}}>Play Pun Masters</a>                                
                                            
                                            
                                        </div> 
                                        </div>
                        </Card> */}
                                       
                                   
                    {/* </div> */}

                </div>
            </div>
            {/* <Alert variant="light">Hey there</Alert> */}
            
        </>
    )
}

export default Landing;
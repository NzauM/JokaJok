
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function PunMaster({ pun, getNextPun}) {
    const [showAnswer, setShowAnswer] = useState(false)
    // const[next, setNext] = useState(false)
    const punAnswer = pun.delivery
    function submitAnswer(event) {
        event.preventDefault()
        let userResp = (event.target.userAnswer.value)
        if (punAnswer.includes(userResp)) {
            alert("You are such a genius")
            alert(`The answer is ${punAnswer}`)
            setShowAnswer(true)
        }
        else {
            alert("Not yet there? Try Again?")
            event.target.userAnswer.value = ""
        }
    }
    console.log(pun)

    function handleNewPun(){
        getNextPun()
        setShowAnswer(false)
    }

    const colors = ["city", "ski", "beach", "camping", "cooking"]
    const randomInd = (arr) => arr[Math.floor(Math.random() * arr.length)]
    let jokeColor = randomInd(colors)
    return (
        <>
            <div className="row mb-5 p-5">
                <div className="col-md-7">
                    <img src={'./yellow.png'} />
                </div>
                <div className="col-md-4">
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
                                                Punmaster  😎🤏
                                            </h2>
                                            <h2 className="card-front__heading">
                                                {/* noun [ C ]  */}
                                            </h2>
                                            <p className="card-front__text-price">
                                                pʌnˈmɑː.stər/ pʌnˌmæs.tɚ < FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>

                                            </p>
                                        </div>

                                        <div className="card-front__bt" style={{ justifyContent: "center" }} >

                                            <div className={`card-front__text-view`} style={{ textAlign: "center", padding: 10 }}>
                                                <span style={{ fontWeight: "lighter" }}> <i>/noun/: </i></span> When someone is so good at making puns, and pissing you off, that they have earned the title of Pun Master. Normally Pun Masters are very proud of this title, but other people see nothing from it other than shame.
                                                <br></br>
                                                <a href="#" className={`inside-page__btn inside-page__btn--${jokeColor} `} style={{ width: "90%", display: "block", textAlign: "center", marginLeft: "5%" }}>Find Out more</a>
                                                {/* 2. An app where you can View Jokes, to add to your blant pickup lines, save Jokes, to use later and try not to be the boring friend you are, or even Play Pun Games, to distract you from your suicidal thoughts <FontAwesomeIcon icon={faGrinSquintTears}></FontAwesomeIcon> */}
                                            </div>

                                        </div>
                                    </div>

                                    <div className={`card-back cardShade--${jokeColor}`}>
                                        <img className="landingImage__container mt-4" style={{ backgroundColor: jokeColor }} src={'./cornyPun2.png'} />
                                        {/* <video className="video__container" autoPlay muted loop>
                                    <source className="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                                </video> */}
                                    </div>
                                </div>
                            </div>

                            <div className={`inside-page2 cardShade--${jokeColor}`} >
                                <div className="inside-page2__container">
                                    <h3 className={`inside-page__heading inside-page__heading--${jokeColor}`}>
                                        Welcome on Board Pun Master 😎🤏
                                    </h3>

                                    <p className="inside-page__text ">
                                        You will be given the first part of a joke, the joke setup. You will then keep on guessing what the punchline of the joke could be. If any word in your answer, exists in the punchline, you will have won, and achieved a pun master title. You can try as many times as you wish, but if you give up, Press on show answer to reveal the punchline.
                                    </p>
                                    <p className="inside-page__text ">
                                        Now, let's finish each other's sentences  🤓
                                    </p>
                                    <a href="#pungame" className={`inside-page__btn inside-page__btn--${jokeColor}`} style={{ width: "30%" }}>Let's Do this</a>


                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <div className="col-md-4"></div> */}
            </div>
            <vr></vr>
            {/* <div className="container"> */}
            <div className="row" id="pungame">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="courses-container">
                        <div className="course">
                            <div className={`course-preview cardShade--${jokeColor}`}>
                                <h6>Category: </h6>
                                <h2>{pun.category}</h2>

                            </div>
                            <div className="course-info mb-5 p-5">
                                <div className="progress-container">
                                    {/* <div className="progress"></div> */}
                                    <span>
                                        <a href="/punmasters" className={`inside-page__heading--${jokeColor}`}>Get a Different Pun <i className="fas fa-chevron-right"></i></a>
                                    </span>
                                </div>
                                <h6>SetUp</h6>
                                <h2>{pun.setup}</h2>
                                <button onClick={() => {
                                    setShowAnswer(true)
                                }} className={`punbtn mt-5 card-front__tp--${jokeColor}`}>Show Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="courses-container">
                        <div className="course">
                            <div className={`course-preview cardShade--${jokeColor}`}>
                                {showAnswer ?
                                    <div className={`course-preview cardShade--${jokeColor}`}>
                                        <h6>Punchline: </h6>
                                        <h2>{pun.delivery}</h2>

                                    </div> : <h2></h2>}

                            </div>
                            {showAnswer ? 
                                <div className="course-info mb-5 p-5">
                                    <div className="progress-container">
                                        {/* <div className="progress"></div> */}
                                        <span>
                                            <a href="#" className={`inside-page__heading--${jokeColor}`}> Punchline Trials <i className="fas fa-chevron-right"></i></a>
                                        </span>
                                    </div>
                                    <h2 > The Pun</h2>
                                    <p>{pun.setup} <span className={`inside-page__heading--${jokeColor}`}> {pun.delivery} </span></p>
                                    <button onClick={handleNewPun} className={`punbtn mt-5 card-front__tp--${jokeColor}`}>Try Next Pun</button>
                                    




                                </div> :
                                <div className="course-info mb-5 p-5">
                                <div className="progress-container">
                                    {/* <div className="progress"></div> */}
                                    <span>
                                        <a href="#" className={`inside-page__heading--${jokeColor}`}> Punchline Trials <i className="fas fa-chevron-right"></i></a>
                                    </span>
                                </div>
                                <h2> The Answer:  </h2>
                                <form onSubmit={submitAnswer} className="mb-5">
                                    <input className="form-control" name="userAnswer" type="text" placeholder="Enter your punchline"></input>
                                    <button type="submit" className={`punbtn mt-5 card-front__tp--${jokeColor}`}>Submit</button>
                                    {/* <button type="submit" className="btn-sm btn-outline-info badge badge-pill">Submit</button> */}
                                </form>

                            </div>
                                }

                        </div>
                    </div>
                </div>


                {/* <div className={`puncard cardShade--cooking`}>
                    <div className="card__icon"><i className="fas fa-bolt"></i></div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <p className="card__apply">
                        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
                    </p>
                </div> */}
                <div className="col-md-2"></div>

            </div>
            {/* </div> */}



        </>

    )
}

export default PunMaster;

{/* <div className="container mt-0">
            <p className="text-white">You will be shown the first part of a pun, try to guess any words that would complete the 2nd part</p>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <p>
                                Category:<span className='badge badge-pill btn-outline-info'>{pun.category}</span>
                            </p>
                        </div>
                        <div className="card-body cardWords">
                            <p className="card-text">{pun.setup}</p>
                            <a href="#" onClick={()=>{
                                    setShowAnswer(true)
                            }} className="btn btn-outline-info">Show Answer</a>
                        </div>
                        <div   className={showAnswer? 'card-footer': 'card-footer d-none'}>
                            <div class="alert alert-info" role="alert">
                                {pun.delivery}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                <div className="card">
                        <div className="card-header">
                            <p className='badge badge-pill btn-outline-info'>Try to Answer</p>
                            <h6>Enter any word you think would be in the Answer</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitAnswer}>
                            <input className="form-control" name="userAnswer" type="text" placeholder="Your answer"></input>
                                <button type="submit" className="btn-sm btn-outline-info badge badge-pill">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </div> */}
import React, { useState } from "react";

function PunMaster({ pun }) {
    const[showAnswer, setShowAnswer] = useState(false)
    const punAnswer = pun.delivery
    function submitAnswer(event){
        event.preventDefault()
        let userResp = (event.target.userAnswer.value)
        if(punAnswer.includes(userResp)){
            alert("You are such a genius")
            alert(`The answer is ${punAnswer}`)
            setShowAnswer(true)
        }
        else{
            alert("Not yet there? Try Again?")
            event.target.userAnswer.value = ""
        }
    }
    console.log(pun)
    return (
        <div className="container mt-0">
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
                            {/* <h5 class="card-title">Special title treatment</h5> */}
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
                        {/* <div className="card-footer">
                            <div class="alert alert-info" role="alert">
                                {pun.delivery}
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default PunMaster;
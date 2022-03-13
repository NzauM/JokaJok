import React from "react";

function SavedJokes({jokes}){
    console.log(jokes)
    const displayJokes = jokes.map((joke) => {
        return (
            <div  //style={{ marginRight: 10 + 'px' }} className='col-md-4 card mb-2'//
                key={joke.id} className= 'col-md-4 card mb-2'>
                <div className='card-body cardWords'>
                    {/* <div className='card-title'>
                    {joke.category}
                </div> */}


                    <div className=''>
                        {joke.setup ? joke.setup : joke.joke}
                    </div>
                    <div className='text-sm-center font-weight-bold'>
                        {joke.delivery}
                    </div>


                    <div className='card-footer'>
                        <div className="row">
                            <div className='col-6 text-small'>
                                <p className='badge badge-pill badge-info'>
                                {joke.category}
                                </p>
                               
                            </div>
                            {/* <div className='col-6'>
                                <button onClick={(()=>{
                                        saveJoke(joke)
                                })} className='btn btn-outline-info badge badge-pill'>Save</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='row'>
            {displayJokes}
        </div>
    )
}
export default SavedJokes;
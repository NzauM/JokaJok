import React from 'react';

function Jokes({ jokes }) {
    const displayJokes = jokes.map((joke) => {
        return (
            <div  //style={{ marginRight: 10 + 'px' }} //
             key={joke.id} className='col-md-4 card mb-2'>
                <div className='card-body'>
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
                                {joke.category}
                            </div>
                            <div className='col-6'>
                                {joke.type}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    console.log(jokes)
    return (
        <div className='row'>
            {displayJokes}
        </div>
    )
}

export default Jokes;
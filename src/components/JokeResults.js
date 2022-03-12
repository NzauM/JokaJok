import React from "react";

function JokeResults({jokes}) {
    return (
        <div  //style={{ marginRight: 10 + 'px' }} className='d-none col-md-4 card mb-2'//
            key={jokes.id} className={jokes ? 'card mb-2' : 'd-none col-md-4 card mb-2'}>
            <div className='card-body'>
                {/* <div className='card-title'>
                                {joke.category}
                            </div> */}


                <div className=''>
                    {jokes.setup ? jokes.setup : jokes.joke}
                </div>
                <div className='text-sm-center font-weight-bold'>
                    {jokes.delivery}
                </div>


                <div className='card-footer'>
                    <div className="row">
                        <div className='col-6 text-small'>
                            {jokes.category}
                        </div>
                        <div className='col-6'>
                            {jokes.type}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default JokeResults
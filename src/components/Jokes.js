import React from 'react';

function Jokes({ jokes,searchedJokes }) {
    console.log(jokes)
    // let displayJokes;
    // if (jokes.length > 1) {
        const displayJokes = jokes.map((joke) => {
            return (
                <div  //style={{ marginRight: 10 + 'px' }} className='col-md-4 card mb-2'//
                    key={joke.id} className={searchedJokes?'d-none col-md-4 card mb-2' : 'col-md-4 card mb-2'} >
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
    // }
    // else{
    //     displayJokes = ((jokes)=>{
    //         return (
    //             <div  //style={{ marginRight: 10 + 'px' }} //
    //                 key={jokes.id} className='col-md-4 card mb-2'>
    //                 <div className='card-body'>
    //                     {/* <div className='card-title'>
    //                     {joke.category}
    //                 </div> */}


    //                     <div className=''>
    //                         {jokes.setup ? jokes.setup : jokes.joke}
    //                     </div>
    //                     <div className='text-sm-center font-weight-bold'>
    //                         {jokes.delivery}
    //                     </div>


    //                     <div className='card-footer'>
    //                         <div className="row">
    //                             <div className='col-6 text-small'>
    //                                 {jokes.category}
    //                             </div>
    //                             <div className='col-6'>
    //                                 {jokes.type}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    console.log(displayJokes)
    return (
        <div className='row'>
            {displayJokes}
        </div>
    )
}

export default Jokes;
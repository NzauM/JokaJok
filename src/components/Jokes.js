import React from 'react';

function Jokes({ jokes,searchedJokes }) {
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
    console.log(jokes)
    // let displayJokes;
    // if (jokes.length > 1) {
        const displayJokes = jokes.map((joke) => {
            return (
                <div  // className='col-md-4 card mb-2'//
                    key={joke.id} className={searchedJokes?'d-none col-md-4 card mb-2 cardWords' : 'col-md-4 card mb-2'} >
                    <div className='card-body  cardWords'>
                        {/* <div className='card-title'>
                        {joke.category}
                    </div> */}


                        <div className='text-truncate'>
                            {joke.setup ? joke.setup : joke.joke}
                        </div>
                        <div className='text-truncate text-sm-center font-weight-bold'>
                            {joke.delivery}
                        </div>


                        <div className='card-footer'>
                            <div className="row">
                                <div className='col-6 text-small'>
                                    <p className='badge badge-pill badge-info'>
                                    {joke.category}
                                    </p>
                                   
                                </div>
                                <div className='col-6'>
                                    <button onClick={(()=>{
                                            saveJoke(joke)
                                    })} className='btn btn-outline-info badge badge-pill'>Save</button>
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

    // console.log(displayJokes)
    return (
        <div className='row'>
            {displayJokes}
        </div>
    )
}

export default Jokes;
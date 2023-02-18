import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Jokes from './components/Jokes';
import JokeCategories from './components/JokeCategories';
import Navbar from './components/Navbar';
import JokeResults from './components/JokeResults';
import RBNavbar from './components/RBNavbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SavedJokes from './components/SavedJokes';
import PunMaster from './components/PunMaster';
import Jokesalt from './components/Jokesalt';
import Landing from './components/Landing';

function App() {
  const [jokes, loadJokes] = useState([])
  const [category, setCategory] = useState("any")
  const [jokeCats, loadJokesCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchedJokes, loadSearchedJokes] = useState("")
  const [mysavedJokes, setSavedJokes] = useState([])
  const [myPun,loadPun] = useState([])
  const[nextPun, setNextPun] = useState(true)

  let myUrl = `https://v2.jokeapi.dev/joke/${category}?amount=9?type=twoPart`

  // if(searchTerm !== ""){
  function searchJokes(term) {
    if (term !== "") {
      setSearchTerm(term)
    }
    else {
      console.log(`search term is empty xxxx${term}xxx`)
    }
  }


  // }

  useEffect(()=>{
    fetch("https://v2.jokeapi.dev/joke/any?type=twopart")
      .then((resp)=>resp.json())
      .then((data)=>loadPun(data))
  },[nextPun])


  useEffect(()=>{
      fetch("http://localhost:3000/jokes")
        .then((resp)=>resp.json())
        .then((data)=>{
          console.log(data)
          setSavedJokes(data)
        })
  },[])


  useEffect(() => {
    if (searchTerm !== "") {
      myUrl = `https://v2.jokeapi.dev/joke/Any?contains=${searchTerm}`
    }
    console.log(myUrl)
    fetch(myUrl)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.amount > 1) {
          console.log(data.jokes)
          console.log(myUrl)
          loadJokes(data.jokes)
        }
        else {
          console.log(data)
          loadSearchedJokes(data)
        }
        console.log(data)
        // loadJokes(data.jokes)
      })
    // return function cleanup() {
    //   setSearchTerm("");
    // };
  }, [category, searchTerm]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/categories")
      .then((resp) => resp.json())
      .then((data) => {
        loadJokesCategories(data.categories)
      })
  }, [])

  // useEffect(()=>{
  //   fetch(`https://v2.jokeapi.dev/joke/Any?contains=${searchTerm}`)
  //     .then((resp)=>resp.json())
  //     .then((data)=>{
  //       loadJokes(data.jokes)
  //     })

  //     // return function cleanup() {
  //     //   setSearchTerm("");
  //     // };
  // },[searchTerm])

  const categories = jokeCats.map((category, index) => {
    return (
      <button onClick={() => {
        setCategory(category)
      }} className="btn btn-outline-info badge-pill badge d-block mb-2" key={index} >
        {category}
      </button>
    )
  })

  const styles = {
      backgroundImage: `url(Vorderrhein.png)`,
      opacity: 0.7,
      zIndex: -1
      // height: '100vh',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
  }

  function handleGetNext(){
    setNextPun(!nextPun)
  }




  return (

    <div className="App" >
      {/* <div style={{backgroundImage: "url('./Vorderrhein.png')"}}> */}

      {/* <Jokesalt jokes={jokes} searchedJokes = {searchedJokes}/> */}
      {/* <Navbar onSearch={searchJokes} /> */}

      
      
      <Router>
      <RBNavbar onSearch={searchJokes}/>  
      
      
        <Switch>
          <Route exact path="/savedJokes">
          {/* <header className="App-header "> */}
        {/* <h1 className='text-white'><u> Saved Jokes</u></h1> */}
        <SavedJokes jokes={mysavedJokes}/>
        {/* <div className='row'> */}
          {/* <div className={searchedJokes? 'col-md-2 d-none':'col-md-2 text-white'}> */}
            {/* <JokeCategories categories={jokeCats}/> */}
            {/* {categories} */}
          {/* </div>
          <div className='col-md-9'>
          <SavedJokes jokes={mysavedJokes}/>
          </div> */}
         


        {/* </div> */}
          
          {/* </header> */}
        </Route>
        <Route exact path="/punmasters">
        <PunMaster pun={myPun} getNextPun={handleGetNext}/>
        {/* <div className='row'>
          <div className={searchedJokes? 'col-md-2 d-none':'col-md-2 text-white'}>
          </div>
          <div className='col-md-9'>
          <PunMaster pun={myPun}/>
          </div>


        </div> */}
          
          {/* </header> */}
        </Route>
        <Route exact path="/">
        <Landing/>
        <Jokesalt jokes={jokes} searchedJokes = {searchedJokes}/>
          
        {/* <header className="App-header ">
        <h1 className='text-white'><u> You're welcome to JokaJoke</u></h1>
        <div className='row'>
          <div className={searchedJokes? 'col-md-2 d-none':'col-md-2 text-white'}>
            {categories}
          </div>
          <div className='col-md-9'>
            <JokeResults jokes= {searchedJokes}/>
            <Jokes jokes={jokes} searchedJokes = {searchedJokes}/>
          </div>


        </div>
        </header> */}
        </Route>
        </Switch>
      </Router>
      {/* </div> */}
      </div>
     
  );
}

export default App;

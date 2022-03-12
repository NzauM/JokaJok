import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Jokes from './components/Jokes';
import JokeCategories from './components/JokeCategories';
import Navbar from './components/Navbar';
import JokeResults from './components/JokeResults';

function App() {
  const [jokes, loadJokes] = useState([])
  const [category, setCategory] = useState("any")
  const [jokeCats, loadJokesCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchedJokes, loadSearchedJokes] = useState("")

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
      }} className="btn btn-primary badge d-block mb-2" key={index} >
        {category}
      </button>
    )
  })




  return (
    <div className="App ">
      <Navbar onSearch={searchJokes} />
      <header className="App-header ">
        <h1 className='text-white'><u> You're welcome to JokaJoke</u></h1>
        <div className='row'>
          <div className={searchedJokes? 'col-md-2 d-none':'col-md-2 text-white'}>
            {/* <JokeCategories categories={jokeCats}/> */}
            {categories}
          </div>
          <div className='col-md-9'>
            <JokeResults jokes= {searchedJokes}/>
            <Jokes jokes={jokes} searchedJokes = {searchedJokes}/>
          </div>


        </div>



        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

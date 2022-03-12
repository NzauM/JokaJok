import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Jokes from './components/Jokes';
import JokeCategories from './components/JokeCategories';

function App() {
  const [jokes, loadJokes] = useState([])
  const[category, setCategory] = useState("any")
  const[jokeCats, loadJokesCategories] = useState([])

  const url = `https://v2.jokeapi.dev/joke/${category}?amount=12?type=twoPart`


  useEffect(()=>{
    fetch(url)
      .then((resp)=>resp.json())
      .then((data)=>{
        // console.log(data.jokes)
        loadJokes(data.jokes)
      })
  },[category]);

  useEffect(()=>{
    fetch("https://v2.jokeapi.dev/categories")
      .then((resp)=>resp.json())
      .then((data)=>{
        loadJokesCategories(data.categories)
      })
  },[])

  const categories = jokeCats.map((category, index)=>{
    return(
        <button onClick={()=>{
            setCategory(category)
        }} className="btn btn-primary badge d-block mb-2" key={index} >
            {category}
            </button>
    )
})

  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>You're welcome to JokaJoke</h1>
        <div className='row'>
          <div className='col-md-2 text-white'>
          {/* <JokeCategories categories={jokeCats}/> */}
          {categories}
            </div>
            <div className='col-md-9'>
            <Jokes jokes={jokes}/>
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

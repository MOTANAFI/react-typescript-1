
import Greet from './components/Greet'
import './App.css'
import Person from './components/Person'
import PersonList from './components/PersonList'



function App() {
  const personName = {
    first: "Mohamed",
    last: 'Taha'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Weyne'
    },
    {
    first: 'John',
    last: 'Wick'
    },
    {
      first: 'Mickael',
      last: 'Jackson'
    }
  ]

  return (
    <div>
      <h1>hellow typescript</h1>
      <Greet name='mohamed' messageCount={30} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
     
    </div>
  )
}

export default App

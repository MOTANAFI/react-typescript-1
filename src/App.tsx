
import Greet from './components/Greet'
import './App.css'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'



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
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
      <Heading>Oscar goes to Leonardo Dicaprio!!</Heading>

      </Oscar>
     
    </div>
  )
}

export default App

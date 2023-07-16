
import Greet from './components/Greet'
import './App.css'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import Counter from './components/state/Counter'
import { ThemeContextProvider } from './components/context/ThemeContext'
import Box from './components/context/Box'



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
    <ThemeContextProvider>

    <div>
      <h1>hellow typescript</h1>
      <Greet name='mohamed' messageCount={30} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
      <Heading>Oscar goes to Leonardo Dicaprio!!</Heading>
      <Button handleClick={(event, id) => console.log('Button clicked', event, id)}/>
      </Oscar>
      <Input value="" handleChange={(event) => console.log(event)}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
      <Counter />
      <Box />
     
    </div>
    </ThemeContextProvider>
  )
}

export default App

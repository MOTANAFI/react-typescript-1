
import {Greet} from './components/Greet'
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
import User from './components/context/User'
import  {ClassCounter} from "./components/class/Counter";
import { Private } from './components/auth/Private'
import Profile from './components/auth/Profile'
import {List} from "./components/generics/List"
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from './components/templateLiterals/Toast'
import { CustomButton } from './components/html/Button'
import { Text } from './components/polymorphic/Text'



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
      <User />
      <ClassCounter message='come home now!!'/>
      <Private isLoggedIn={true} component={Profile}/>
      {/* <List 
      items={['FastX', 'John Wick', 'Ip Man']}
      onClick={(item) => console.log(item)}
      />
      <List 
      items={[1,2,3,4,5]}
      onClick={(item) => console.log(item)}
      /> */}
      <List 
      items={[
        {
          id: 1,
          first: 'Beka',
          last: 'Lakeer'
        },
        {
          id: 2,
          first: 'John',
          last: 'Mewa'
        },
        {
          id: 3,
          first: 'Mickael',
          last: 'Mee'
        },
        {
          id: 4,
          first: 'Lone',
          last: 'Wolf'
        },
      ]}
      onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position='center'/>
      <CustomButton variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
        </CustomButton>
        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p' size='md'>Paragraph</Text>
        <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
     
    </div>
    </ThemeContextProvider>
  )
}

export default App

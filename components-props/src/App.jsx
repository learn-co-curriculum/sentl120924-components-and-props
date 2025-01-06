import './App.css'
import Greeting from './Greeting'
import ProjectsList from './ProjectsList'

function App() {

  return (
    <div>
      <Greeting name="Laura" color="green"/>
      <Greeting name="Enoch" color="blue"/>
      <Greeting name="Aidan" color="red" />
      <Greeting name="Adrian" color="black"/>
      <ProjectsList />
    </div>
  )
}

export default App

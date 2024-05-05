import { Button } from '@chakra-ui/react'
import './App.css'
import Presentation from './organisms/Presentation/Presentation'
import Card from './molecules/Card/Card'

function App() {
  return (
    <>
      <Presentation/>
      <Button>Boton</Button>
      <Card title={'title'}>
        <div>tarjeta</div>
      </Card>
    </>
  )
}

export default App

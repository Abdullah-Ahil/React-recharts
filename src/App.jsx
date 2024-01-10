
import './App.css'
import './components/components.css'
import AreaGraph from './components/AreaGraph'
import BarGraph from './components/BarGraph'
import LineGraph from './components/LineGraph'

function App() {


  return (
    <div className='container'>
      <LineGraph/>
      <BarGraph/>
      <AreaGraph/>
    
    </div>
  )
}

export default App

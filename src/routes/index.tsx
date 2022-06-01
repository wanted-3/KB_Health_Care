import Health from './Health'
import Layout from 'components/layout'
import Graph from './Graph'
import Home from './Home'

const App = () => {
  return (
    <Layout>
      <Home />
      <Graph />
      <Health />
    </Layout>
  )
}

export default App

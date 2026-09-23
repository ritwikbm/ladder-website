import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import ForHirers from './pages/ForHirers'
import ForWorkers from './pages/ForWorkers'
import Safety from './pages/Safety'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/for-hirers" element={<ForHirers />} />
        <Route path="/for-workers" element={<ForWorkers />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>
    </Routes>
  )
}
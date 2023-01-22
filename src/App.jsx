import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' //การเรียงลำดับ BrowserRouter ตรงเริ่มที่ Router=>Routes=>Route ตามลำดับเท่านั้น

//------------ components--------------//
import Header from './components/Herder/Header'
import Home from './components/Home/Home'
import { Provider } from 'react-redux'
import store from './store/Store'
import MovieDetali from './components/MovieDetali/MovieDetali'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetali />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
        </Provider>
    </div>
  )
}

export default App

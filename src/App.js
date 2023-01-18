import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import AboutPage from "./components/pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"

import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App

import Rating from './components/Rating'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Thankyou from './components/Thankyou';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Rating />} />
          <Route path='/thank-you' element={<Thankyou />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import './App.css';

function App() {
  const caption = 'Triiiples';

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage caption={caption} />} />
          <Route path="about" element={<AboutPage caption={caption} />} />
          <Route path="contact" element={<ContactPage caption={caption} />} />
          <Route path="*" element={<main style={{ padding: "1rem" }}>
              <h3>Error 404! Page doesn't exist</h3><p>Oops! You landed on a page that does not exist</p></main>}
          />
          
          {/* <Route element={<PrivateRoutes />}> */}
            {/* <Route path="/dashboard" element={<Dashboard caption={caption} />} /> */}
            {/* <Route path="/" element={<OtherPage />} /> */}
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="dashboard" element={<Dashboard />} />

                  // Using path="*"" means "match anything", so this route
                  //       acts like a catch-all for URLs that we don't have explicit
                  //       routes for.
                  <Route path="*" element={<NoMatch />} />
                </Route>
              </Routes>
            </Suspense>
          </Router>
          <Routes>
        */}
      </header>
    </div>
  );
}

export default App;

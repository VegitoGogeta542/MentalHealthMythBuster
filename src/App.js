import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './main.css';
import './App.css';
import './components/border_hover.css';
import HoverButton from './components/HoverButton';
import SplitScreen from './components/split_screen';
import ContinueButton from './components/continue_button';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/story1"
          element={
            <SplitScreen
              myth="Myth 1: Mental illness is rare"
              correctAnswer="False"
              fact="Fact: 1 in 5 people experience mental health challenges. Do not be ashamed to seek therapy if you think you have a mental illness. 1/5 people with mental illnesses have suicidal thoughts. If you ever even have a slight thought like this please do not be afraid to confide in someone."
            />
          }
        />
        <Route
          path="/story2"
          element={
            <SplitScreen
              myth="Myth 2: Therapy is only for severe issues"
              correctAnswer="False"
              fact="Fact: Therapy helps with everyday stress and challenges. If you or anyone you know is in distress, please seek professional therapy, it helps more than the common person believe. Therapy has a wide range of applications, which is not just for mental health issues, and is useful in many scenarios. Seeking therapy is a step toward maintaining proper well-being. Call 988 if you need any instant help."
            />
          }
        />
        <Route
          path="/story3"
          element={
            <SplitScreen
              myth="Myth 3: People with mental illnesses can't work"
              correctAnswer="False"
              fact="Fact: Many individuals with mental illnesses lead successful professional lives. If you have a mental illness do not be discouraged. Several just like you are very succesful due to their hardwork. Never give up on your dreams."
            />
          }
        />
        <Route
          path="/story4"
          element={
            <SplitScreen
              myth="Myth 4: Children don't experience mental health issues"
              correctAnswer="False"
              fact="Fact: Children can and do experience mental health challenges. Many mental disorders even start developing when you are a child. If you see any signs of a mental illness in you or another child, seek professional therapy. "
            />
          }
        />
      </Routes>
    </Router>
  );
}

function TitleScreen() {
  return (
    <div
      className="font-sour-gummy"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      {/* Title Container */}
      <div
        style={{
          marginBottom: '50px',
          textAlign: 'center',
        }}
      >
        <Link
          to="/"
          className="font-sour-gummy"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '60px',
          }}
        >
          Mental Health MythBuster
        </Link>
      </div>

      {/* Button Container */}
      <div className="quadrantbutton">
        <Link to="/home">
          <button className="start-button">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}



function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Two columns
        gridTemplateRows: "1fr 1fr", // Two rows
        height: "100vh", // Full screen height
        width: "100vw", // Full screen width
      }}
    >
      {/* Quadrant 1 */}
      <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HoverButton title="Myth 1" link="/story1" />
      </div>

      {/* Quadrant 2 */}
      <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HoverButton title="Myth 2" link="/story2" />
      </div>

      {/* Quadrant 3 */}
      <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HoverButton title="Myth 3" link="/story3" />
      </div>

      {/* Quadrant 4 */}
      <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HoverButton title="Myth 4" link="/story4" />
      </div>
    </div>
  );
}




export default App;

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
              fact="Fact: 1 in 5 people experience mental health challenges."
            />
          }
        />
        <Route
          path="/story2"
          element={
            <SplitScreen
              myth="Myth 2: Therapy is only for severe issues"
              correctAnswer="False"
              fact="Fact: Therapy helps with everyday stress and challenges."
            />
          }
        />
        {/* Existing Routes */}
        <Route
          path="/story3"
          element={
            <SplitScreen
              myth="Myth 3: People with mental illnesses can't work"
              correctAnswer="False"
              fact="Fact: Many individuals with mental illnesses lead successful professional lives."
            />
          }
        />
        <Route
          path="/story4"
          element={
            <SplitScreen
              myth="Myth 4: Children don't experience mental health issues"
              correctAnswer="False"
              fact="Fact: Children can and do experience mental health challenges."
            />
          }
        />
        {/* New Myth Routes */}
        <Route
          path="/story5"
          element={
            <SplitScreen
              myth="Myth 5: Mental health problems are a sign of weakness"
              correctAnswer="False"
              fact="Fact: Mental health challenges are not a sign of personal weakness; they are medical conditions. They are more a combination of genetical, and environmental factors. Experiencing these problems is part of life as a human, so do not be ashamed."
            />
          }
        />
        <Route
          path="/story6"
          element={
            <SplitScreen
              myth="Myth 6: You can just snap out of a mental illness"
              correctAnswer="False"
              fact="Fact: Mental illnesses often require treatment, support, and time to manage effectively. Mental illnesses should not be taken lightly like this ever. This mindset can affect the person that has the mental illness severely. It can cause them to feel like they are not wanted. This will worsen the condition. Always be kind for no reason."
            />
          }
        />
        <Route
          path="/story7"
          element={
            <SplitScreen
              myth="Myth 7: Only veterans have PTSD"
              correctAnswer="False"
              fact="Fact: PTSD can affect anyone who has experienced or witnessed a traumatic event. If you ever feel like you have experienced trauma and it is affecting you, seek professional help. Stay strong in your mind and always know you are wanted and loved in this world."
            />
          }
        />
        <Route
          path="/story8"
          element={
            <SplitScreen
              myth="Myth 8: Medication is the only solution for mental illnesses"
              correctAnswer="False"
              fact="Fact: Many treatments, including therapy and lifestyle changes, are effective for mental health challenges. Medication is realistically only a temporary solution. Other methods are much more long-term and provide more benefits."
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
        gridTemplateColumns: "repeat(4, 1fr)", // Four columns
        gridTemplateRows: "repeat(2, 1fr)",   // Two rows
        gap: "20px",                         // Spacing between quadrants
        padding: "20px",
        height: "100vh",                     // Full screen height
        width: "100vw",                      // Full screen width
      }}
    >
      {/* Myth 1 to Myth 8 */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div
          key={`myth-${num}`}
          className="App"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <HoverButton title={`Myth ${num}`} link={`/story${num}`} />
        </div>
      ))}
    </div>
    
  );
}




export default App;

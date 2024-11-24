import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./main.css";
import "./App.css";
import "./components/border_hover.css";
import HoverButton from "./components/HoverButton";
import SplitScreen from "./components/split_screen";

function App() {
  const myths = [
    {
      id: 1,
      myth: "Myth 1: Mental illness is rare",
      correctAnswer: "False",
      fact: "Fact: 1 in 5 people experience mental health challenges.. Mental health is common.. Everyone should support those with challenges.. Never be ashamed to share if you have a mental health problem.",
    },
    {
      id: 2,
      myth: "Myth 2: Therapy is only for severe issues",
      correctAnswer: "False",
      fact: "Fact: Therapy helps with everyday stress and challenges.. It's not just for severe mental health issues.. It benefits everyone.. Therapy is helpful even without a mental health issue and is highly recommended.",
    },
    {
      id: 3,
      myth: "Myth 3: People with mental illnesses can't work",
      correctAnswer: "False",
      fact: "Fact: Many individuals with mental illnesses lead successful professional lives.. They contribute significantly to society.. Support and understanding are key.. Do not be discouraged if you have a mental health problem.. Always chase your dreams.",
    },
    {
      id: 4,
      myth: "Myth 4: Children don't experience mental health issues",
      correctAnswer: "False",
      fact: "Fact: Children can and do experience mental health challenges.. Early support is crucial.. Educating parents is vital. Lots of mental health issues develop when you are a child, so do not be afraid or ashamed.",
    },
    {
      id: 5,
      myth: "Myth 5: Mental health problems are a sign of weakness",
      correctAnswer: "False",
      fact: "Fact: Mental health challenges are not a sign of personal weakness; they are medical conditions. They are more a combination of genetic and environmental factors. Experiencing these problems is part of life as a human, so do not be ashamed.",
    },
    {
      id: 6,
      myth: "Myth 6: You can just snap out of a mental illness",
      correctAnswer: "False",
      fact: "Fact: Mental illnesses often require treatment, support, and time to manage effectively. Mental illnesses should not be taken lightly like this ever. This mindset can affect the person that has the mental illness severely. It can cause them to feel like they are not wanted. This will worsen the condition. Always be kind for no reason.",
    },
    {
      id: 7,
      myth: "Myth 7: Only veterans have PTSD",
      correctAnswer: "False",
      fact: "Fact: PTSD can affect anyone who has experienced or witnessed a traumatic event. If you ever feel like you have experienced trauma and it is affecting you, seek professional help. Stay strong in your mind and always know you are wanted and loved in this world.",
    },
    {
      id: 8,
      myth: "Myth 8: Medication is the only solution for mental illnesses",
      correctAnswer: "False",
      fact: "Fact: Many treatments, including therapy and lifestyle changes, are effective for mental health challenges. Medication is realistically only a temporary solution. Other methods are much more long-term and provide more benefits.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const mythsPerPage = 4; // Number of myths per page
  const displayedMyths = myths.slice(
    (currentPage - 1) * mythsPerPage,
    currentPage * mythsPerPage
  );

  return (
    <Router>
      <Routes>
        {/* Title Screen */}
        <Route path="/" element={<TitleScreen />} />

        {/* Home (Myths Display with Pagination) */}
        <Route
          path="/home"
          element={
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                gridTemplateRows: "repeat(2, 1fr)", // Two rows
                gap: "20px",
                padding: "20px",
                height: "100vh",
                width: "100vw",
              }}
            >
              {displayedMyths.map((myth) => (
                <div key={myth.id} style={{ textAlign: "center" }}>
                  {/* Display only "Myth 1," "Myth 2," etc. */}
                  <HoverButton title={`Myth ${myth.id}`} link={`/story${myth.id}`} />
                </div>
              ))}

              {/* Pagination */}
              <div
                style={{
                  gridColumn: "span 2",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    style={navButtonStyle}
                  >
                    Previous Page
                  </button>
                )}
                {currentPage < Math.ceil(myths.length / mythsPerPage) && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    style={navButtonStyle}
                  >
                    Next Page
                  </button>
                )}
              </div>
            </div>
          }
        />

        {/* Individual Myth Stories */}
        {myths.map((myth) => (
          <Route
            key={myth.id}
            path={`/story${myth.id}`}
            element={
              <SplitScreen
                myth={myth.myth}
                correctAnswer={myth.correctAnswer}
                fact={myth.fact}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

const navButtonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  borderRadius: "5px",
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

function TitleScreen() {
  return (
    <div
      className="font-sour-gummy"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {/* Title Container */}
      <div
        style={{
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          className="font-sour-gummy"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "60px",
          }}
        >
          Mental Health MythBuster
        </Link>
      </div>

      {/* Button Container */}
      <div className="quadrantbutton">
        <Link to="/home">
          <button className="start-button">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default App;

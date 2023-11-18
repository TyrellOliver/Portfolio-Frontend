import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Pages

function App() {

  return (
    <Router>
      <Route>
        <Routes path="/"  element={""}/>
        <Routes path="/plants"  element={""}/>
        <Routes path="/plants/:index"  element={""}/>
        <Routes path="/plants/:index/edit"  element={""}/>
        <Routes path="/plants/new"  element={""}/>
        <Routes path="*"  element={""}/>
      </Route>
    </Router>
  );
}

export default App;

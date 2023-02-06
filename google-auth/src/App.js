import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Authentication</h1>
      <form>
        <input type="email" name="name" placeholder="Email" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button>Sign In</button> &nbsp; &nbsp;
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;

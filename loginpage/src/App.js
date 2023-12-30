
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="logo-box">
     <img src="./logo.png" alt="logo" className="logo"/> 
     <h2>Sign in to Twitter</h2>
     <button>
     <img src="./google.png" alt="logo" />
     Sign in with Google 
     </button>

     <button>
     <img src="./apple.png" alt="logo" />
     Sign in with Apple
     </button>

     <hr></hr>
<span>Or</span>

<form>
  <input type="text" placeholder="Phone Email or Username"/>
  <button>Next</button>
</form>

<button>Forget password</button>
<p>
  Don't have an account <a>Sign Up</a>
</p>
    </div>
    </div>
  );
}

export default App;

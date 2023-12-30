import './App.css';

function App() {
  return (
    <div className="container">
   <nav>
    <img src="images/logo.png" className="logo" alt="logo"/>
    <ul>
<li>
  <a href="www.google.com">Travel Guide</a>
</li>

<li>
  <a href="www.facebook.com">Famous places</a>
</li>

<li>
  <a href="www.instagram.com">Contact-us</a>
</li>
    </ul>

    <button className="btn">
      <img src="images/icon.png" alt="icon"/>
      Bookings
    </button>

   </nav>
   <div className="content">
        <h1>
          Beautiful
          <br />
          Places to explore
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <form>
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <p></p>
    </div>
  );
}

export default App;


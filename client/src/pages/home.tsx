

export default function Home() {
    return (
      <div>
        <div className="hero">
          <h1 className="hero-text">Dinner and a Movie</h1>
        </div>
        <div className="tabs">
          <button className="tab">Movies</button>
          <button className="tab">Meals</button>
        </div>
        <div className="cards">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
        </div>
      </div>
    );
  }
export default function Favorites() {
    const favoriteItems = [
      { id: 1, type: "Movie", name: "Inception" },
      { id: 2, type: "Meal", name: "Spaghetti Carbonara" },
      { id: 3, type: "Movie", name: "The Dark Knight" },
      { id: 4, type: "Meal", name: "Chicken Alfredo" },
    ];
  
    const pairings = ["Inception + Carbonara", "The Dark Knight + Alfredo"];
  
    return (
      <div className="favorites container">
        <h2 className="text-center mb-4">Your Favorites</h2>
        <div className="grid-container row">
          {favoriteItems.map((item) => (
            <div key={item.id} className="col-md-6 grid-item">
              <h3>{item.type}</h3>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-4">Favorite Pairings:</h3>
        <ul>
          {pairings.map((pairing, index) => (
            <li key={index}>{pairing}</li>
          ))}
        </ul>
      </div>
    );
  }
export default function Favorites() {
    return (
      <div className="container">
        <div className="text-center my-5">
          <h1 className="display-4">Your Favorites</h1>
        </div>
  
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-primary mx-2">Movies</button>
          <button className="btn btn-secondary mx-2">Meals</button>
        </div>
  
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">Card 1</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">Card 2</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">Card 3</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">Card 4</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
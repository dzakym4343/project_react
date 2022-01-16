
import "./App.css";
import "./Assets/App.scss"

function App() {

  return (
   <div className="container"> 
    <div className="header">header</div>
    
    <div className="section">
      <div className="card section-body-1">1</div>
      <div className="card section-body-2">2</div>
      <div className="card section-body-3">3</div>
      <div className="card section-body-4">4</div>
      <div className="card section-body-5">5</div>
      <div className="card section-body-6">6</div>
    </div>
    
    <div className="body">
      <div className="body-anak body-1">1</div>
      <div className="body-anak body-2">
        <div className="body-2-anak">1</div>
        <div className="body-2-anak">2</div>
      </div>
      <div className="body-anak body-3">
        <div className="body-3-anak">1</div>
        <div className="body-3-anak">2</div>
        <div className="body-3-anak">3</div>
        <div className="body-3-anak">4</div>
        <div className="body-3-anak">5</div>
      </div>
    </div>

    </div>
  );
}

export default App;

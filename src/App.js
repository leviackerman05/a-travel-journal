import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cardArr = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section>{cardArr}</section>
    </div>
  );
}

export default App;

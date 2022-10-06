import "../App.css";
import Count from "./count/Index";
import Title from "./title/Index";

function Home() {
  return (
    <div className="App">
      <h1>Bienvenido al desafío de Carlos Martinez</h1>
      <div className="Components">
        <Count />
        <Title />
      </div>
    </div>
  );
}

export default Home;

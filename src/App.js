import "./styles.css";
import { CardList } from "./card-list.component";
import data from "./data";

export default function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Products</h1>
      <CardList products={data} />
    </div>
  );
}

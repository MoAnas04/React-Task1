import "./styles.css";
import { useEffect, useState } from "react";
import { CardList } from "./card-list.component";
import { SearchBox } from "./searchBox.component";

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [showProducts, setShowProducts] = useState(products);
  const handleChange = (event) => {
    setSearchField(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchField.toLowerCase())
    );
    setShowProducts(filteredProducts);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => {
        setProducts(data);
        setShowProducts(data);
      });
    });
  }, []);
  return (
    <div className="App">
      <h1>Products</h1>
      <SearchBox placeholder="search product" handleChange={handleChange} />
      <CardList products={showProducts} />
    </div>
  );
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default function RenderingList() {
  const listItems = products.map((product) => {
    return (
      <li key={product.id} className="ml-5">
        {product.title}
      </li>
    );
  });

  return (
    <div className="component">
      <h1 className="font-bold">Grocery List</h1>
      <ul className="list-decimal">{listItems}</ul>
    </div>
  );
}

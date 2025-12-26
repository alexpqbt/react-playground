function MyButton() {
  return (
    <button className="bg-gray-200 outline-1 outline-solid">
      This is a boring ass button
    </button>
  );
}

export default function QuickStart() {
  return (
    <div className="component">
      <h1>Welcome to quickstart!</h1>
      <MyButton />
    </div>
  );
}

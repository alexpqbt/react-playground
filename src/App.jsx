import "./App.css";
import QuickStart from "./playground/quickstart/QuickStart";
import Profile from "./playground/quickstart/DisplayingData";
import ConditionalRendering from "./playground/quickstart/ConditionalRendering";
import RenderingList from "./playground/quickstart/RenderingList";

function App() {
  return (
    <div className="m-10">
      <h1 className="font-bold text-lg">
        I am following the{" "}
        <a href="https://react.dev/learn" className="text-violet-500 underline">
          documentation.
        </a>
      </h1>

      <div className="playground">
        <QuickStart />
        <Profile />
        <ConditionalRendering />
        <RenderingList />
      </div>
    </div>
  );
}

export default App;

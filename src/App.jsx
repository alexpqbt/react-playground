import "./App.css";
import QuickStart from "./playground/learn/QuickStart";
import Profile from "./playground/learn/DisplayingData";
import ConditionalRendering from "./playground/learn/ConditionalRendering";
import RenderingList from "./playground/learn/RenderingList";

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

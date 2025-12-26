import { useState } from "react";

function AdminPanel() {
  return (
    <div>
      <h1>Imagine this as an admin panel</h1>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h1>Imagine this as a login form</h1>
    </div>
  );
}

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [count, setCount] = useState(0);

  // let content;
  // if (isLoggedIn) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }

  // return <div className="component">{content}</div>;

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
    setCount(count + 1);
  }

  return (
    <div className="component">
      <button
        onClick={handleClick}
        className="bg-gray-200 outline-1 outline-solid cursor-pointer"
      >
        is logged in?
      </button>
      <span className="ml-1">ive clicked this button {count} times</span>
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
    </div>
  );
}

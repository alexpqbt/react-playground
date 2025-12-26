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
  const isLoggedIn = true;

  // let content;
  // if (isLoggedIn) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }

  // return <div className="component">{content}</div>;

  return (
    <div className="component">
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
    </div>
  );
}

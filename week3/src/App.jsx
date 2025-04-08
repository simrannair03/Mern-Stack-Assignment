import { useState } from 'react';

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState('');
  return (
    <div className="w-full max-w-md p-6 bg-white rounded shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">Text Updater</h2>
      <input
        type="text"
        className="border border-gray-400 p-2 rounded w-full text-black bg-gray-100 placeholder-gray-500"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-gray-700 text-center">You typed: {text}</p>
    </div>
  );
}

// 2. Console Form Component
function ConsoleForm() {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">Console Form</h2>
      <input
        type="text"
        className="border border-gray-400 p-2 rounded w-full text-black bg-gray-100 placeholder-gray-500"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Submit
      </button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="w-full max-w-md border p-6 rounded shadow-md bg-white mb-8 text-center">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// 4. Custom Button Component
function CustomButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="w-full max-w-md mb-8">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Click Me
      </button>
    </div>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">Login Form</h2>
      <input
        type="email"
        className="border border-gray-400 p-2 rounded w-full text-black bg-gray-100 placeholder-gray-500 mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-400 p-2 rounded w-full text-black bg-gray-100 placeholder-gray-500 mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Login
      </button>
    </form>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-10 text-center">React +Tailwind Application</h1>
      <TextUpdater />
      <ConsoleForm />
      <UserCard name="Simran" email="simran@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}

export default App;

import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Text Updater</h1>
      <input
        type="text"
        placeholder="Type something..."
        className="border-2 border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:border-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;

function Button({ label }) {
    const handleClick = () => {
      console.log("Button clicked!");
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  

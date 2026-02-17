const Button = ({ children }) => {
  return (
    <>
      <button className="bg-medium-green group text-[16px] hover:bg-white hover:text-black font-semibold font-inter rounded-[10px] text-black  flex items-center gap-2 py-2 sm:py-4 px-3 sm:px-6 hover:drop-shadow-[0_0_25px_rgba(0,255,0,0.9)] hover:scale-101  transition-all duration-300 ease-in-out">
        {children}
      </button>
    </>
  );
};

export default Button;

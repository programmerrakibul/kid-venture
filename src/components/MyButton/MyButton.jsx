const MyButton = ({
  children,
  handleClick,
  disable = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      disabled={disable}
      onClick={handleClick}
      className={`btn bg-linear-to-br from-primary/60 hover:from-primary/75 to-secondary/60 hover:to-secondary/75 duration-300 transition-colors text-white ${className} border-none shadow-none disabled:bg-gray-300 disabled:bg-none disabled:pointer-events-auto disabled:cursor-not-allowed`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MyButton;

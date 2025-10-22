const Title = ({ children, className }) => {
  return (
    <h3
      className={`font-bold text-3xl text-neutral ${
        className ? className : ""
      }`}
    >
      {children}
    </h3>
  );
};

export default Title;

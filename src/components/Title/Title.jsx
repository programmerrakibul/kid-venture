const Title = ({ children, className = "" }) => {
  return (
    <h3 className={`font-bold text-2xl md:text-3xl text-neutral ${className}`}>
      {children}
    </h3>
  );
};

export default Title;

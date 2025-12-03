const Input = ({
  type,
  name,
  holder,
  className = "",
  required = true,
  ...rest
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className={`input bg-transparent outline-primary/35 border-primary/35 ${className}`}
      placeholder={holder}
      required={required}
      {...rest}
    />
  );
};

export default Input;

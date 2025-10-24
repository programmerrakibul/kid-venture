const Input = ({
  type,
  name,
  holder,
  className = "",
  required = true,
  onChange = undefined,
  defaultValue = undefined,
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className={`input bg-transparent outline-primary/35 border-primary/35 ${className}`}
      placeholder={holder}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default Input;

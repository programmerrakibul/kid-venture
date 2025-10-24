const Label = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`label text-neutral font-semibold ${
        className ? className : ""
      }`}
    >
      {children}
    </label>
  );
};

export default Label;

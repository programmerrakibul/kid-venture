const Avatar = ({ src, alt, className }) => {
  return (
    <div className="avatar">
      <div
        className={`ring-primary ring-offset-base-100 rounded-full ring-2 bg-primary-content ${className}`}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;

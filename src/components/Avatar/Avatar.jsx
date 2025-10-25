const Avatar = ({ src, alt, className = "" }) => {
  return (
    <div className="avatar group">
      <div
        className={`ring-primary ring-offset-base-100 rounded-full ring-2 bg-primary-content shadow-[0_0_9px_5px] shadow-indigo-500/50 group-hover:shadow-indigo-600 transition-shadow duration-300 ${className}`}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;

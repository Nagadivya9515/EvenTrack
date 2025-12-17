const EventScrollCard = ({ title, content,explore, image }) => {
  return (
    <div
      className="
        w-[360px] 
        h-[260px] 
        flex-shrink-0 
        relative 
        overflow-hidden 
        bg-cover 
        bg-center rounded-2xl overflow-hidden
      "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative lines */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-12 h-[1px] bg-white/70"></div>
        <div className="absolute bottom-6 right-6 w-16 h-[1px] bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end items-start text-white">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-md font-semibold">{content}</p>
        <p className="text-md font-semibold">{explore}</p>
      </div>
    </div>
    
  );
};

export default EventScrollCard;

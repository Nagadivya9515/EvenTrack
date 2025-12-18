export default function PackageCard({ image, title, category, content }) {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">
      
      {/* Image with pastel overlay */}
      <div className="relative h-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Pastel overlay */}
        <div className="absolute inset-0 bg-purple-200/30"></div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/80 text-xs px-2 py-1 rounded">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{content}</p>
      </div>
    </div>
  );
}
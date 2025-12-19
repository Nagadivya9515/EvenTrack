import { Link, useLocation, useParams } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const { eventType } = useParams();

  const formatText = (text) =>
    text
      ?.replace(/([A-Z])/g, " $1")
      .replace(/^./, (s) => s.toUpperCase());

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">Venora</Link>

      {location.pathname.includes("packages") && (
        <>
          <span className="mx-2">/</span>
          <Link to="/packages" className="hover:underline">
            Packages
          </Link>
        </>
      )}

      {eventType && (
        <>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">
            {formatText(eventType)}
          </span>
        </>
      )}
    </nav>
  );
}

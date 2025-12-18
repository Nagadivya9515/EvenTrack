const QuickActionCard = ({ title, description }) => {
  return (
    <div className="border rounded-xl p-5 hover:shadow transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default QuickActionCard;

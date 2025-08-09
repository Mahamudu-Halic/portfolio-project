const InfoCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-between gap-2 w-full py-2 border-b border-b-gray-500 text-sm lg:text-base ${className}`}
    >
      <p className="">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default InfoCard;

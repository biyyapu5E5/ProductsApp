import Star from "./Star";

export default function StarRating({ value = 0, total = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }, (_, i) => {
        const starValue = i + 1;

        let fillPercent = 0;

        if (value >= starValue) {
          fillPercent = 100;
        } else if (value > i && value < starValue) {
          fillPercent = (value - i) * 100;
        }

        return <Star key={i} fillPercent={fillPercent} color={"red"} />;
      })}
    </div>
  );
}

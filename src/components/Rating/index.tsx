import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/form.type";
import { useStep } from "../../hook/step";
import { StarRating } from "../../styles/components/Rating.styles";

const ratingStep = 4;

export function Rating() {
  const { step } = useStep();
  const { setValue, watch } = useFormContext<Partial<FormData>>();
  const rating = watch("rating");

  if (step === ratingStep)
    return (
      <StarRating>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            // selected={star <= (rating || 0)}
            onClick={() => {
              setValue("rating", star);
            }}
            style={{ cursor: "pointer", fontSize: "24px" }}
          >
            {star <= (rating || 0) ? "★" : "☆"}
          </span>
        ))}
      </StarRating>
    );
  return null;
}

Rating.index = ratingStep;

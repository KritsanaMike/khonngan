import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  readonly?: boolean;
  onChange?: (rating: number) => void;
  showCount?: boolean;
  count?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxStars = 5, 
  size = 16, 
  readonly = true, 
  onChange,
  showCount = false,
  count
}) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const isFilled = i <= rating;
    stars.push(
      <button
        key={i}
        type="button"
        disabled={readonly}
        onClick={() => !readonly && onChange && onChange(i)}
        className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110 transition-transform'}`}
      >
        <Star 
          size={size} 
          className={`${isFilled ? 'text-secondary fill-secondary' : 'text-gray-300'}`} 
          strokeWidth={isFilled ? 0 : 2}
        />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-1">{stars}</div>
      {showCount && count !== undefined && (
        <span className="text-xs text-gray-400 ml-1">({count} รีวิว)</span>
      )}
    </div>
  );
};
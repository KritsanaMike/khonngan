import React, { useState, useRef, useEffect } from 'react';

interface OTPInputProps {
  length?: number;
  onChange: (otp: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length = 4, onChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Focus next input
    if (element.value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex justify-center gap-4">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          ref={(el) => { inputRefs.current[index] = el; }}
          value={data}
          maxLength={1}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`w-14 h-14 border-2 rounded-xl text-center text-2xl font-bold focus:outline-none transition-all
            ${data 
              ? 'border-secondary bg-orange-50 text-primary' 
              : 'border-gray-200 bg-gray-50 text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
            }`}
        />
      ))}
    </div>
  );
};
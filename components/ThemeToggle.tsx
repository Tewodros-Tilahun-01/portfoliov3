"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-15 grid place-items-center rounded-full bg-tertiary">
        <div className="size-15" />
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="size-15 grid place-items-center rounded-full bg-tertiary text-primary hover:bg-accent transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <path
            fill="#00005"
            d="M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z"
            transform="translate(-1737 -98)"
          ></path>
        </svg>
      ) : (
        <svg
          fill="#fff"
          width="24px"
          height="24px"
          viewBox="0 0 9 9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              d="M4.5 6.563a2.063 2.063 0 1 0 0 -4.125 2.063 2.063 0 0 0 0 4.125m0 0.563a2.625 2.625 0 1 0 0 -5.25 2.625 2.625 0 0 0 0 5.25m4.5 -2.625a0.281 0.281 0 0 1 -0.281 0.281h-0.938a0.281 0.281 0 0 1 0 -0.563h0.938A0.281 0.281 0 0 1 9 4.5M1.5 4.5a0.281 0.281 0 0 1 -0.281 0.281H0.281a0.281 0.281 0 0 1 0 -0.563h0.938A0.281 0.281 0 0 1 1.5 4.5m6.182 -3.182a0.281 0.281 0 0 1 0 0.398l-0.663 0.663a0.281 0.281 0 0 1 -0.398 -0.398l0.663 -0.663a0.281 0.281 0 0 1 0.398 0M2.379 6.621a0.281 0.281 0 0 1 0 0.398l-0.663 0.663a0.281 0.281 0 1 1 -0.398 -0.398l0.663 -0.663a0.281 0.281 0 0 1 0.398 0M4.5 0a0.281 0.281 0 0 1 0.281 0.281v0.938a0.281 0.281 0 0 1 -0.563 0V0.281A0.281 0.281 0 0 1 4.5 0m0 7.5a0.281 0.281 0 0 1 0.281 0.281v0.938a0.281 0.281 0 0 1 -0.563 0v-0.938A0.281 0.281 0 0 1 4.5 7.5M1.318 1.318a0.281 0.281 0 0 1 0.398 0l0.663 0.663a0.281 0.281 0 1 1 -0.398 0.398L1.318 1.716a0.281 0.281 0 0 1 0 -0.398m5.303 5.303a0.281 0.281 0 0 1 0.398 0l0.663 0.663a0.281 0.281 0 0 1 -0.398 0.398l-0.663 -0.663a0.281 0.281 0 0 1 0 -0.398"
            />
          </g>
        </svg>
      )}
    </button>
  );
}

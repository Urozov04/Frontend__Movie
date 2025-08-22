import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/header/EMBLEM.svg";
import movie from "../../shared/assets/header/MO VIE.png";
import { Moon, Sun } from "lucide-react";
import Search from "../../pages/search";

const Header = () => {
  const [mood, setMood] = useState(false);
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setMood((p) => !p);
  };
  return (
    <header className="py-4 dark:bg-[#000000]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-1">
          <img src={logo} className="" alt="logo" />
          <img src={movie} />
        </div>
        <div>
          <NavLink
            end={true}
            to={"/"}
            className={({ isActive }) =>
              `text-[18px] py-1 px-8 text-black dark:text-white ${
                isActive ? "bg-[dodgerblue]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"movie"}
            className={({ isActive }) =>
              `text-[18px] py-1 px-8 text-black dark:text-white ${
                isActive ? "bg-[dodgerblue] text-[white]" : ""
              }`
            }
          >
            All Movie
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"search"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[var(--color-py)]"
                  : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
              } transition-all flex flex-col justify-center items-center gap-2`
            }
          >
            <Search />
            {/* <span>Search</span> */}
          </NavLink>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-white flex justify-center items-center">
            <select className="bg-transparent outline-none cursor-pointer">
              <option value="rus">🇷🇺 Ру</option>
              <option value="uz">🇺🇿 Uz</option>
              <option value="eng">🇺🇸 En</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F] font-medium text-[16px] text-white cursor-pointer">
              Войти
            </button>

            <div onClick={toggle}>
              {!mood ? (
                <Moon className="text-black" />
              ) : (
                <Sun className="text-yellow-200" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);

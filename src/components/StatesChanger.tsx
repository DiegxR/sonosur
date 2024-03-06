import React from 'react'
import { usePathname, useRouter } from "next/navigation";
const locations = [
  { name: "Caribe", path: "caribe" },
  { name: "Pacífico", path: "pacifico" },
  { name: "Andina", path: "andina" },
  { name: "Orinoquia", path: "orinoquia" },
  { name: "Amazonas", path: "amazonas" },
];
const StatesChanger = () => {
    const path = usePathname();
    const router = useRouter();
  return (
    <section className="relative">
            <ul className="flex absolute -top-[17px] w-full justify-between">
              {locations.map((location) => (
                <li
                  onClick={() => router.push(`/${location.path}`)}
                  className="flex cursor-pointer group flex-col items-center justify-center"
                >
                  <span
                    className={`icon-[mdi--circle] text-[35px] ${
                      `/${location.path}` === path ? "-translate-y-[14px]" : ""
                    } group-hover:-translate-y-[14px] transition-transform duration-300  text-[#FFD522]`}
                  ></span>
                  <p
                    className={`text-white group-hover:-translate-y-[13px] ${
                      `/${location.path}` === path ? "-translate-y-[17px]" : ""
                    } transition-transform duration-700`}
                  >
                    {location.name}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t-[2.4px]   border-white"></div>
    </section>
  )
}

export default StatesChanger
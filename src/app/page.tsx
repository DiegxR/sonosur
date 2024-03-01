"use client";
import Image from "next/image";
import bg from "../../public/images/amazonas.png";
import { useRouter } from "next/navigation";
const locations = [
  { name: "Caribe", path: 'caribe' },
  { name: "Pacífico", path: 'pacifico' },
  { name: "Andina", path: 'andina' },
  { name: "Orinoquia", path: 'orinoquia' },
  { name: "Amazonas", path: 'amazonas' },
];
export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className="w-full h-[100%]  ">
        <section
          className="w-full flex flex-col justify-between  px-[12%] py-20"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "70vh",
          }}
        >
          <div>
            <Image
              width={200}
              height={100}
              src="/images/Logo sono sur.png"
              alt=""
            />
            <article className="flex flex-col mt-10 gap-3 font-semibold text-white">
              <div className="flex gap-2 items-center">
                <span className="icon-[mdi--circle] text-2xl text-[#D5DDCE]"></span>
                <h4>Descarga contenidos</h4>
              </div>
              <div className="border-t-[1px] w-[200px] border-white"></div>
              <div className="flex gap-2 items-center">
                <span className="icon-[mdi--circle] text-2xl text-[#D5DDCE]"></span>
                <h4>Conocer más</h4>
              </div>
            </article>
          </div>
          <section className="relative">
            <ul className="flex absolute -top-[17px] w-full justify-between">
              {locations.map((location) => (
                <li
                  onClick={() => router.replace(`/${location.path}`)}
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  <span className="icon-[mdi--circle] text-[35px] hover:animate-spin text-[#FFD522]"></span>
                  <p className="text-white">{location.name}</p>
                </li>
              ))}
            </ul>
            <div className="border-t-[2.4px]   border-white"></div>
          </section>
        </section>
      </section>
      <section className="p-[10%] h-[50vh] w-full bg-[#0F1B27]">
        
      </section>
    </>
  );
}

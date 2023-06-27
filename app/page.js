import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main
      className="
        bg-gray-300
        w-full
        h-[100vh]
        grid
        md:grid-cols-2
        gap-4
        ">
      <div
        className="
          bg-gray-400
          hidden
          md:flex
          md:flex-col
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:`url('img/unsaac.jpg')`
        }}
        >
          <div
            className="
              bg-[rgba(255,255,255,0.6)]
              rounded-full
              p-5
          ">
            <Image
              src="/img/asdu_logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="
                w-auto
                px-5
                py-2
              "
            />
            <div
              className="
                text-xl
                md:text-2xl
                font-medium
                text-center
                px-5
                py-2
                text-gray-600

            ">
              CIRCULO DE ESTUDIOS
            </div>
            <div
              className="
                  text-xl
                  md:text-5xl
                  font-bold
                  text-center
                  px-5
                  py-2
                text-red-600

              ">
              ASDU
            </div>
          </div>
      </div>
      <Chat/>
    </main>
  )
}

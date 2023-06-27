import Image from "next/image";

const Logo = () => {
  return ( 
    <div className="
        px-4
        py-3
        sm:p-1
        absolute
        top-0
        left-1/2
        transform
        -translate-x-1/2
        w-full
        md:w-auto
      ">
      <div
        className="
          py-2
          bg-gray-700
          rounded-lg
          md:bg-[rgba(0,0,0,0.6)]
          md:rounded-full
          w-full
          md:w-auto
          md:p-5
          "
      >
        

        <div className="
        flex
        gap-x-3
        flex-row
        justify-center
        items-center
        sm:flex-col
        w-auto
        ">
          <Image
            src="/img/asdu_logo.png"
            alt="Logo"
            width={250}
            height={250}
            className="
            hidden
            md:block
            w-auto
            px-3
            md:px-5
            py-2
            md:mx-auto


            "
          />
          <div
            className="
              block
              text-lg
              md:text-xl
              font-medium
              text-center
              px-2
              md:p-1
              text-gray-300
              ">
            CIRCULO DE ESTUDIOS
          </div>
          <div
            className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-center
                    px-2
                    md:px-5
                  text-red-600

                ">
            ASDU
          </div>
        </div>

      </div>
    </div>
   );
}
 
export default Logo;
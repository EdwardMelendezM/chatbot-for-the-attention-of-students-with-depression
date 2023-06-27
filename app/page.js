import Chat from "./components/Chat";
import Logo from './components/Logo'

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
        "
      >
      <Logo />
        
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
      </div>
      <Chat/>
    </main>
  )
}

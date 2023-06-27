'use client'
import {useChat} from 'ai/react'

const Chat = () => {
  const { messages,input,handleSubmit,handleInputChange }  = useChat();

  return (
    <div
      className='
        relative
        flex
        flex-col
        w-full
        h-[100vh]
        py-4
        
      '
    >
      <div className="
        flex
        flex-col
        items-start
        justify-end
        w-full
        h-screen
        px-10
        md:px-8
        pl-6
        pb-24
        pt-14
        overflow-y-auto
      ">
        {
          messages.map((message) => {
            const isAbuelita = message.role !== 'user'
            return (
              <div
                key={message.id}
                className='
                  py-1
                '
              >
                <p className=' text-sm'>
                  {isAbuelita ? '👩‍🦱 ' : '🙋 '}
                  <span
                    className={`
                      ${isAbuelita ? 'text-gray-600' : 'text-gray-700 '}`}
                    >
                    {message.content}
                  </span>
                </p>
              </div>
            )
          })
        }
      </div>
      
      <form
        onSubmit={handleSubmit}
        className='
          absolute
          w-full
          py-6
          bottom-1
          flex
          gap-x-3
          justify-center
          items-center
          px-4
        '
      >
        <input
          type="text"
          name='contet'
          value={input}
          onChange={handleInputChange}
          placeholder='Abuelita dime cosas bonitas'
          className='
            w-full
            max-w-[450px]
            px-4
            py-2
            border
            border-gray-400
            rounded-full
            shadow-2xl
            bottom-7
            left-6
            outline-none
            text-sm

          '
        />
        <button
          className='
            py-3
            px-4
            bg-gray-700
            rounded-full 
            text-gray-100
            hover:bg-gray-600
            transition
          '
        >Enviar</button>
      </form>
    </div>
  );
}

export default Chat;
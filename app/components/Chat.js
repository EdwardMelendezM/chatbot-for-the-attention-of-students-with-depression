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
        px-4
        pl-6
        pb-24
        pt-12

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
                <p className=' text-lg'>
                  {isAbuelita ? '👩‍🦱 ' : '🙋 '}
                  <span
                    className={`
                      ${isAbuelita ? 'text-yellow-500' : 'text-gray-600 '}`}
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

          '
        />
        <button
          className='
            py-4
            px-5
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
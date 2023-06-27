import { Configuration,OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from "ai";

// Primero vamos a crear el cliente de Open Ai


// Le decimos a vercer donde queremos ejecutar
// Este endpoint
export const runtime = 'edge'

// -> edge por que tiene mejor rendimiento
// Soporta streaming de datos
// -> request : milisegundos

// -> default tiene peor rendimiento
// no soporta streaming de datos
// pero tiene mayor compatibilidad
// con paquetes de Node
// -> requests: segundos


// Poniendo la api de open Ai en el cliente
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

//
const openai = new OpenAIApi(config)


export async function POST(request) {

  const response = await openai.createChatCompletion({
    model:'gpt-3.5-turbo',
    messages: [
      {
        role:'system',
        content:'Comportate como si fueses mi abuela regañandome por no ir a la universidad a estudiar programacion'
      },
      {
        role: 'user',
        content: 'Abuela no me quiero levantar'
      }
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  //Transformar la respuesta de OpenAi en un text-stream
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)

}
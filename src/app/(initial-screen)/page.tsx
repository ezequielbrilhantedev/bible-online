import { BookOpen } from 'lucide-react'
import Link from 'next/link'

export default async function InitialScreen() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex justify-center fixed z-10 bg-zinc-100 mb-80 w-48 text-center">
        <BookOpen size={90} />
      </div>
      <div className="border-2 border-gray-400 w-[33rem] h-64 flex items-center justify-center">
        <h1 className="text-9xl uppercase font-semibold">Bíblia</h1>
      </div>
      <div className="fixed z-10 bg-zinc-100 mb-[-11rem] w-48 text-center">
        <p className="text-red-700 text-4xl uppercase">online</p>
      </div>
      <br />
      <br />
      <div>
        <Link href="/home">
          <p className="font-semibold text-2xl">Clique aqui</p>
        </Link>
      </div>
    </div>
  )
}

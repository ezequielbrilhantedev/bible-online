import { BookProps } from '@/data/types/books'
import { SearchIcon } from 'lucide-react'

async function getBooks(): Promise<BookProps[]> {
  const response = await fetch('https://www.abibliadigital.com.br/api/books', {
    cache: 'force-cache',
  })
  const data = await response.json()

  return data
}

export default async function Home() {
  const book = await getBooks()

  return (
    <div className="py">
      <div className="flex justify-center">
        <span className="flex border bg-gray-300 w-[39rem] gap-2 px-4 h-12 items-center rounded-3xl">
          <SearchIcon />
          <input
            type="search"
            name=""
            id="search-book"
            placeholder="Pesquisar livro"
            className="bg-transparent border-none outline-none w-full"
          />
        </span>
      </div>

      <div className="px-40 py-20 grid grid-cols-3 gap-8 ">
        {book.map((book) => {
          return (
            <div className=" w-full h-32" key={book.name}>
              <p className="flex justify-center items-center text-center flex-col bg-gray-300 uppercase text-xl font-semibold h-full rounded-lg cursor-pointer">
                {book.name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

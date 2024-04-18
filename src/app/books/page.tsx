import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

interface BookProps {
  name: string
  abbrev: { pt: string }
}

async function getBooks(): Promise<BookProps[]> {
  const response = await fetch('https://www.abibliadigital.com.br/api/books', {
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60,
    },
  })
  const data = await response.json()

  return data
}

export default async function Books() {
  const books = await getBooks()

  return (
    <div className=" bg-zinc-900">
      <div className="flex justify-center pt-8">
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

      <div className="mobile:w-full mobile:px-4 mobile:py-2 px-40 py-20 grid grid-cols-3 mobile:grid-cols-1 gap-8 mobile:gap-4">
        {books.map((book) => {
          return (
            <div className="w-full desktop:w-[300px] h-32" key={book.name}>
              <Link href={`books/${book.abbrev.pt}`}>
                <div className="border bg-zinc-600 h-full rounded-lg flex flex-col text-center justify-center cursor-pointer hover:bg-zinc-200 hover:text-black">
                  <p className="uppercase text-4xl text-white">
                    {book.abbrev.pt}
                  </p>
                  <p className="text-2xl text-white">{book.name}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

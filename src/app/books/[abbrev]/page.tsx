import { BookProps } from '@/data/types/books'
// import { Metadata } from 'next'
import Link from 'next/link'

interface Book {
  params: {
    abbrev: string
  }
  // chapters: number[]
}

async function getBook(abbrev: string): Promise<BookProps> {
  const response = await fetch(
    `https://www.abibliadigital.com.br/api/books/${abbrev}`,
    {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60,
      },
    },
  )
  const data = await response.json()

  return data
}

// export async function generateMetadata({ params }: Book): Promise<Metadata> {
//   const book = await getBook(params.abbrev)

//   return {
//     title: book.abbrev,
//   }
// }

export default async function AbbrevBook({ params }: Book) {
  const book = await getBook(params.abbrev)

  const qtdChapters = book.chapters

  const arrayChapters: number[] = []
  for (let i = 1; i < qtdChapters; i++) {
    arrayChapters.push(i)
  }

  return (
    <div className="h-screen bg-zinc-900">
      <header>
        <div className="flex justify-between px-12 pt-4">
          <h1 className="text-5xl text-blue-400 font-bold">Bíblia Online</h1>
          <div>
            <Link href="/books">
              <p className="text-white">Página Inicial</p>
            </Link>
          </div>
        </div>
      </header>

      <div className="mobile:px-8 px-40 pt-24 flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-white font-extrabold text-5xl text-center">
            {book.name}
          </h1>
          <div className="pt-24">
            <p className="text-white font-bold text-3xl text-center">
              Capítulos
            </p>
          </div>
          <div className="grid grid-cols-10 mobile:grid-cols-5 gap-4 mobile:gap-2 pt-8">
            {arrayChapters.map((chapter) => (
              <div
                className="border mobile:w-8 mobile:h-8 w-20 h-20 cursor-pointer hover:bg-blue-400"
                key={chapter}
              >
                <p className="text-white text-center h-full flex items-center justify-center desktop:text-2xl">
                  {chapter}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

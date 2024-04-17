import { BookProps } from '@/data/types/books'
import { Metadata } from 'next'

interface Book {
  params: {
    abbrev: string
  }
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

export async function generateMetadata({ params }: Book): Promise<Metadata> {
  const book = await getBook(params.abbrev)

  return {
    title: book.abbrev,
  }
}

export default async function AbbrevBook({ params }: Book) {
  const book = await getBook(params.abbrev)

  return (
    <div className="h-screen bg-zinc-900">
      <header>
        <div className="flex justify-between">
          <h1 className="text-5xl text-blue-400">Bíblia Online</h1>
          <div>
            <p className="text-white">Página Inicial</p>
          </div>
        </div>
      </header>
      <h1 className="text-white">{book.name}</h1>
    </div>
  )
}

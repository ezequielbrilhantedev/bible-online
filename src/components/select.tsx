// 'use client'

// import { useEffect, useState } from 'react'

// interface BookProps {
//   // eslint-disable-next-line no-use-before-define
//   abbrev: Abbrev
//   author: string
//   chapters: number
//   group: string
//   name: string
//   testament: string
// }
// interface Abbrev {
//   pt: string
//   en: string
// }

// // async function getBooks(): Promise<BookProps[]> {
// //   const response = await fetch('https://www.abibliadigital.com.br/api/books')
// //   const data = await response.json()

// //   return data
// // }

// export async function Select() {
//   const [selectedBook, setSelectedBook] = useState('')
//   const [books, setBooks] = useState<BookProps[]>([])
//   const [chapters, setChapters] = useState<BookProps[]>([])

//   useEffect(() => {
//     async function getBooks() {
//       const response = await fetch(
//         'https://www.abibliadigital.com.br/api/books',
//       )
//         .then((res) => res.json())
//         .then((data) => data)

//       setBooks(response)
//     }
//   }, [])

//   return (
//     <div className="flex gap-4">
//       <pre>{JSON.stringify(books.map((book) => book.name))}</pre>
//       {/* <select name="book" value={selectedBook} className="w-60" onChange={handleBookSelect}>
//         <option>{book.}</option>
//       </select>

//       <select name="" id="" className="w-60">
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//         <option value="">4</option>
//         <option value="">5</option>
//       </select> */}
//     </div>
//   )
// }

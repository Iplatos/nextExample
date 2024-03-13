// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const booksDB: BookType[] = [
  {id:1, title: "name"},
  {id:2, title: "title2"},
  {id:3, title: "nameDodo"}
]

type BookType = {
  id:number
  title:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookType[]>
) {
  if (req.method === "GET"){
    let books = booksDB
    const term = req.query.term as string
if (term) {
  books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
}


    res.status(200).json(books)}
}

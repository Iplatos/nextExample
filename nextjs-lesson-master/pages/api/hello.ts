// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type BooksType = {
  id:number
  title:string
}

const BooksDB:BooksType[] = [
  {id:1, title:"name1"},
  {id:2, title:"superName"},
  {id:3, title:"name3"},
  {id:4, title:"name4"}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BooksType[]>
) {
  if(req.method==="GET") {
    let books = BooksDB
    const term = req.query.term
    if (term){
      let newArr = books.filter(book=>book.title===term)
      res.status(200).json(newArr)
    }
    res.status(200).json(BooksDB)
  }
}
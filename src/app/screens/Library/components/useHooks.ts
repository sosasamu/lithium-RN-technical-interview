import { Book } from '@interfaces/book'
import { getBooks } from '@redux/books/actions'
import { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

// Use hooks is a hook that encapsulates the necessary hooks to make the component functional
export function useHooks() {
  const dispatch = useDispatch()

  const books: Book[]= useSelector((state: RootStateOrAny) => state.booksStore.books)
  const loading: boolean = useSelector((state: RootStateOrAny) => state.booksStore.loading)

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  return { books, loading }
}

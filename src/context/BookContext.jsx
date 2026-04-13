import React, { Children, createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../utils/localDB';

export const BookContext = createContext();


const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB())
    const [wishlist, setWishlist] = useState([])

    // useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB()
    //     console.log(getAllReadListFromLocalDB, "getAllReadListFromLocalDB")
    //     setReadList(getAllReadListFromLocalDB)
    // }, [])


    const handleMarkAsRead = (currentBook) => {


        addReadListToLocalDB(currentBook)
        const isExistBook = readList.find(book => book.bookId === currentBook.bookId)

        if (isExistBook) {
            toast.error("the book is already exist in  list")
        } else {
            setReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} is added to the list`)
        }

        console.log(currentBook, wishlist, "book")
    }

    const handleWishlist = (currentBook) => {


        const isExistInReadList = readList.find(book => book.bookId === currentBook.bookId)
        if (isExistInReadList) {
            toast.error("this book is already in read list")
            return;
        }
        const isExistBook = wishlist.find(book => book.bookId === currentBook.bookId)

        if (isExistBook) {
            toast.error("the book is already exist in wishlist")
        } else {
            setWishlist([...wishlist, currentBook])
            toast.success(`${currentBook.bookName} is added to the wish list`)
        }

        console.log(currentBook, readList, "book")
    }




    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishlist
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
}

export default BookProvider
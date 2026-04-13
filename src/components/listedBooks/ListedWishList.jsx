import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../context/BookContext'
import BookCard from '../ui/BookCard'

const ListedWishList = ({ sortingType }) => {
    const { wishlist } = useContext(BookContext)
    console.log(wishlist, "wishlist")

    const [filteredWishList, setFilteredWishList] = useState(wishlist)
    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages,)
                console.log(sortedData, "sorted")
                setFilteredWishList(sortedData)
            } else if (sortingType === 'rating') {
                const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating,)
                console.log(sortedData, "sorted")
                setFilteredWishList(sortedData)
            }
        }
    }, [sortingType, wishlist])

    if (filteredWishList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No wishlist data found</h2>
            </div>
        )
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    filteredWishList.map((book, ind) => (
                        <BookCard key={ind} book={book} />

                    ))
                }
            </div>

        </div>
    )
}

export default ListedWishList
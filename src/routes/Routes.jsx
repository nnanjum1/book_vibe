import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorpages/ErrorPage";
import BookDetails from "../components/bookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/bookDetails/:bookId",
                element: <BookDetails />,
                loader: () => fetch("/booksData.json")
            }
        ],
        errorElement: <ErrorPage />
    },
])
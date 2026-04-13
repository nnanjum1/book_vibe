import React, { useContext } from "react";
import Hero from "../../components/homepage/Hero.jsx";
import AllBooks from "../../components/homepage/AllBooks.jsx";
import { BookContext } from "../../context/BookContext.jsx";

const Home = () => {


    const bookContext = useContext(BookContext);
    console.log(bookContext, "bookContext")
    return (
        <div>
            <Hero />
            <AllBooks />
        </div>
    );
};

export default Home;
const express = require("express");

//Database
const database = require("./database");
//intialize express
const booky = express();

/*
route               /
Description         get all the books
access              public
parameter           none
methods             get
*/

booky.get("/",(req,res)=>{
    return res.json({books: database.books});
});

/*
route               /is
Description         get specific book on ISBN
access              public
parameter           isbn
methods             get
*/
booky.get("/is/:isbn",(req,res)=>{
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if(getSpecificBook.length === 0){
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
    }

    return res.json({book: getSpecificBook})
});


/*
route               /c
Description         get specific book on category
access              public
parameter           category
methods             get
*/

booky.get("/c/:category",(req,res)=>{
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )
    if(getSpecificBook.length===0){
        return res.json({error:`No book found for the category of ${req.params.category}`})
    }
    return res.json({book: getSpecificBook});
});


/*
route               /lan
Description         get specific book on language
access              public
parameter           language
methods             get
*/

booky.get("/lan/:language",(req,res)=>{
    const getSpecificBook = database.books.filter(
        (book) => book.language.includes(req.params.language)
    )
    if(getSpecificBook.length===0){
        return res.json({error:`No book found for the language of ${req.params.language}`})
    }
    return res.json({book: getSpecificBook});
});


/*
route               /author
Description         get all authors
access              public
parameter           none
methods             get
*/


booky.get("/author", (req,res) =>{
    return res.json({authors: database.author});
});

/*
route               /author
Description         get specified author based on id
access              public
parameter           id
methods             get
*/

booky.get("/author/:id",(req,res)=>{
    const getSpecificAuthor = database.author.filter(
        (author) => author.id==req.params.id
    );

    if(getSpecificAuthor.length === 0){
        return res.json({error: `No author found for the id of ${req.params.id}`
    });
    }

    return res.json({author: getSpecificAuthor
    });
});


/*
route               /author/book
Description         get all authors based on specified book 
access              public
parameter           isbn
methods             get
*/

booky.get("/author/book/:isbn", (req,res) =>{
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    );
    if(getSpecificAuthor.length === 0){
        return res.json({error: `No author found for the book of ${req.params.isbn}`
    });
    }
    return res.json({authors: getSpecificAuthor});
});

/*
route               /publication
Description         get all publications
access              public
parameter           none
methods             get
*/

booky.get("/publication",(req,res)=>{
    return res.json({publication: database.publication});
});

/*
route               /publication/id
Description         get specific publications
access              public
parameter           id
methods             get
*/

booky.get("/publication/:id",(req,res)=>{
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.id==req.params.id
    );

    if(getSpecificPublication.length === 0){
        return res.json({error: `No publication found for the id of ${req.params.id}`
    });
    }

    return res.json({publication: getSpecificPublication
    });
});


/*
route               /publication/book
Description         get publication based on specified book 
access              public
parameter           isbn
methods             get
*/

booky.get("/publication/books/:isbn", (req,res) =>{
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.books.includes(req.params.isbn)
    );
    if(getSpecificPublication.length === 0){
        return res.json({error: `No publication found for the book of ${req.params.isbn}`
    });
    }
    return res.json({publication: getSpecificPublication});
});




booky.listen(4000,() => {
    console.log("server is up and running");

});
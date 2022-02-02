import { Book } from '../models/book.js'
import { Profile } from '../models/profile.js'

export {

    
    
  newBook as new,
    index,

}


  function index(req, res) {
    Book.find({}, function(err, book) {
      res.render('book/index', {
        book: book,
        title: 'All Book'
      })
    })
  }

  function newBook(req, res) {
    res.render('book/new', {
      title: "Add Book"
    })
  }

 
  
  
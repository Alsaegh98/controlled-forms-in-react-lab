import { useState } from 'react'; 
import '../app.css'; 

const Bookshelf = () => { 
    const [books, setBooks] = useState([ 
        { title: 'Fourth Wing', author: 'Rebecca Yarros' }, 
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
     ]);

      const [newBook, setNewBook] = useState({ title: '', author: '' }); 
      
      const handleInputChange = (e) => { const { name, value } = e.target; 
      
      setNewBook({ ...newBook, [name]: value });
    
    }; 
    
    const handleSubmit = (e) => { e.preventDefault(); setBooks([...books, newBook]); 
        setNewBook({ title: '', author: '' });
    
    }; 
    
    return ( 
    
    <div className="bookshelfDiv"> 
    <div className="formDiv"> 

        <h3>Add a Book</h3> 

        <form onSubmit={handleSubmit}>
             <input type="text" 
             name="title" 
             value={newBook.title} onChange={handleInputChange} 
             placeholder="Title" required /> 
             <input type="text" 
             name="author" 
             value={newBook.author} onChange={handleInputChange} 
             placeholder="Author" 
             required /> 
             <button type="submit">Add Book</button> 
             </form> 
             </div> 
             <div className="bookCardsDiv"> 
                {books.map((book, index) => ( 
                    <div key={index} className="bookCard"> 
                    <h3>{book.title}</h3> 
                    <p>by {book.author}</p> 
                    </div> 
                    ))} 
                    
                    </div> 
                    
                    </div> 
                    ); 
                }; 
                
                export default Bookshelf;
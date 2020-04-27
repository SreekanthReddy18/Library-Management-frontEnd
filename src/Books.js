import React, { useState, useEffect } from 'react';
import LibraryService from './LibraryService';
import './App.css';
import {Table} from 'react-bootstrap';

function Books(props) {
    const[books, setBooks] = useState([]);

    useEffect(() => {
  
      LibraryService.retrieveAllBooks().then(
    response => {
        console.log(response);
        setBooks(response.data);
    }
  );
  
    },[]);
    return(
                <div className="container">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Isbn</th>
                                <th>Cost($)</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(
                                    book =>
                                        <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.isbn}</td>
                                            <td>{book.cost}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
    );
}

export default Books;
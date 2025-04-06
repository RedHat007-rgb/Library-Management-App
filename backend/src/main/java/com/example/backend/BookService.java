package com.example.backend;

import java.util.ArrayList;
import java.util.List;

public interface BookService {


    public String addBook(Book book);
    public String updateBook(String ISBN,Book book);
    public String deleteBook(String title);
    public List<Book> getAllBooks();
}

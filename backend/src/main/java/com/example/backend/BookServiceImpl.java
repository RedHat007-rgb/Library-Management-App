package com.example.backend;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements  BookService{

    private  List<Book> library =new ArrayList<>();
    @Override
    public String addBook(Book book) {
        for(int i=0;i<library.size();i++){
            if(library.get(i).getTitle().equalsIgnoreCase(book.getTitle())){
                return " Book found already";
            }
        }
        library.add(book);
        return book.getTitle()+"has been added in library.";
    }

    @Override
    public String updateBook(String ISBN,Book book) {
        for(int i=0;i<library.size();i++){
            if(library.get(i).getISBN().equalsIgnoreCase(ISBN)) {
                library.set(i, book);
                return "Your Book has been updated";
            }
        }
        return "No book found by the given ISBN";

    }

    @Override
    public String deleteBook(String title) {
        for(int i=0;i<library.size();i++){
            if(library.get(i).getTitle().equalsIgnoreCase(title)) {
                library.remove(i);
                return "Your book has been successfully removed.";
            }
        }
        return "No book found by the given title";

    }

    @Override
    public List<Book> getAllBooks() {
        return library;
    }
}

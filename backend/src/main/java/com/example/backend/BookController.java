package com.example.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private BookService bookService;
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/all")
    public List<Book> getallBooks(){
         return bookService.getAllBooks();

    }

    @PostMapping("/create")
    public  String addBook(@RequestBody Book book){
        String message=bookService.addBook(book);
        return message;
    }

    @DeleteMapping("/{title}")
    public String deleteBook(@PathVariable String title){
        String message=bookService.deleteBook(title);
        return message;
    }
    @PutMapping("/update/{ISBN}")
    public String updateBook(@PathVariable String ISBN,@RequestBody Book book){
        String message=bookService.updateBook(ISBN,book);
        return message;
    }





}

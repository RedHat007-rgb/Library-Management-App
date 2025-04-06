package com.example.backend;



public class Book {
    private String title;
    private String author;
    private String ISBN;

    public Book(){}

    public Book(String title,String author,String ISBN){
        this.author=author;
        this.title=title;
        this.ISBN=ISBN;
    }

    public Book(Book other){
        this.title=other.title;
        this.author=other.author;
        this.ISBN=other.ISBN;
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", ISBN='" + ISBN + '\'' +
                '}';
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }




}

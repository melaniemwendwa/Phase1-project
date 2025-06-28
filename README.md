# Phase1-project

# 📚 Colleen Hoover Books (Single Page Application)

This is a simple, interactive single-page web application built with **HTML**, **CSS**, and **JavaScript**. The app showcases a collection of books by the popular author **Colleen Hoover**. Users can browse through the books, filter them by genre, search by title or author, and view detailed information about each book.

> 🔧 This project was created as part of a coding assignment that required fetching data from a local JSON server, implementing interactivity with event listeners, and organizing logic using JavaScript functions and array methods.

---

## 🧠 Project Objectives

The project meets the following guidelines:

-  Uses **HTML/CSS/JS** .
-  Fetches data from a **JSON server (`db.json`)** using **asynchronous JavaScript**.
-  Runs entirely on a **single HTML page** (no reloads or redirects).
-  Uses **at least 3 distinct event listeners**.
-  Implements **array iteration** using `.map()`, `.filter()`, and `.forEach()`.
-  Follows **DRY** coding principles using clean, reusable functions.

---

## 🚀 Features

### 🔍 Search
Users can search for books by typing keywords from the **title** or **author** in the search input. The book list updates in real-time as they type.

### 🎯 Filter by Genre
A dropdown allows users to filter books by genre, such as **Romance**, **Thriller**, or **Young Adult**.

### 🖼️ Book Cards
Each book is displayed as a card with an image, title, and author. Clicking on a card opens a sidebar with more detailed information.

### 📖 Book Detail View
The sidebar shows:
- Full-size image
- Title, author, genre, and publication year
- A detailed summary/description

### 🧠 Smart Interactions
- Clicking the **X button** in the sidebar closes the detail view.
- Book list layout adjusts responsively for smaller screens.


### How to run this project
- clone the repository
- install json server if not already installed using this: npm install -g json-server
- start the json server using : json-server --watch db.json
- open index.html in your browser.


import { BookDAO } from "./BookDAO";
import { BorrowRecordDAO } from "./BorrowRecordDAO";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO(bookDAO);

bookDAO.addBook("ISBN-201", "Clean Code", "Robert C. Martin");
bookDAO.addBook("ISBN-202", "Design Patterns", "Erich Gamma");

console.log("--- รายการหนังสือทั้งหมด ---");
const books = bookDAO.findAll();
books.forEach((b) => console.log(b.getInfo()));

console.log("\n--- ทำการยืมหนังสือ ---");
const res1 = borrowRecordDAO.borrowBook("John Doe", "ISBN-201");
console.log(`John ยืม ISBN-201: ${res1 ? "สำเร็จ" : "ล้มเหลว"}`);

const res2 = borrowRecordDAO.borrowBook("Jane Doe", "ISBN-201");
console.log(`Jane ยืม ISBN-201 ซ้ำ: ${res2 ? "สำเร็จ" : "ล้มเหลว (หนังสือถูกยืมไปแล้ว)"}`);

console.log("\n--- สถานะหนังสือล่าสุด ---");
const updatedBook = bookDAO.findBookByIsbn("ISBN-201");
if (updatedBook) {
    console.log(updatedBook.getInfo());
}
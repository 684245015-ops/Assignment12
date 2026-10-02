import { BaseDAO } from "./BaseDAO";
import { BookDAO } from "./BookDAO";

export class BorrowRecordDAO extends BaseDAO {
    private bookDAO: BookDAO;

    constructor(bookDAO: BookDAO) {
        super();
        this.bookDAO = bookDAO;
    }

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS borrow_records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                borrowerName TEXT NOT NULL,
                bookIsbn TEXT NOT NULL,
                borrowDate TEXT NOT NULL
            )
        `);
    }

    public borrowBook(borrowerName: string, isbn: string): boolean {
        // 1. ค้นหาหนังสือ
        const book = this.bookDAO.findBookByIsbn(isbn);
        if (!book) {
            return false;
        }

        if (!book.getIsAvailable()) {
            return false;
        }

        try {
            const today = new Date().toISOString().split("T")[0];
            
            const stmt = this.db.prepare(
                "INSERT INTO borrow_records (borrowerName, bookIsbn, borrowDate) VALUES (?, ?, ?)"
            );
            stmt.run(borrowerName, isbn, today);

            this.bookDAO.updateAvailability(isbn, false);
            
            return true;
        } catch (error) {
            return false;
        }
    }
}
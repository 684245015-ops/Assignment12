export class BorrowRecord {
    constructor(
        private id: number | undefined,
        private borrowerName: string,
        private bookIsbn: string,
        private borrowDate: string
    ) {}

    public getId() { return this.id; }
    public getBorrowerName() { return this.borrowerName; }
    public getBookIsbn() { return this.bookIsbn; }
    public getBorrowDate() { return this.borrowDate; }
}
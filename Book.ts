export class Book {
    constructor(
        private id: number | undefined,
        private isbn: string,
        private title: string,
        private author: string,
        private isAvailable: boolean
    ) {}

    public getId() { return this.id; }
    public getIsbn() { return this.isbn; }
    public getTitle() { return this.title; }
    public getAuthor() { return this.author; }
    public getIsAvailable() { return this.isAvailable; }

    public setIsAvailable(status: boolean) { this.isAvailable = status; }

    public getInfo(): string {
        const statusStr = this.isAvailable ? "Available" : "Borrowed";
        return `[${this.isbn}] ${this.title} by ${this.author} - Status: ${statusStr}`;
    }
}
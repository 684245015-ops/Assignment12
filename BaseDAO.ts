import Database from "better-sqlite3";

export abstract class BaseDAO {
    protected db: Database.Database;

    constructor(dbpath: string = "library.db") {
        this.db = new Database(dbpath);
        this.initTable();
    }

    protected abstract initTable(): void;
}
import { Injectable } from '@angular/core';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Test } from './database/entities/test.entity';

@Injectable({ providedIn: 'root' })
export class TestService {
    public connection: Promise<Connection>;

    constructor() {
        this.connection = createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '91939',
            database: 'test',
            entities: [Test],
        });
    }
}

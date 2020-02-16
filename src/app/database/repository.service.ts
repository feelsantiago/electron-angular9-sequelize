import { Inject, Injectable } from '@angular/core';
import { Connection } from 'typeorm';
import { BbConnectionToken } from './database.provider';

@Injectable()
export class RepositoryService {
    constructor(@Inject(BbConnectionToken) private readonly connection: Connection) {
        console.log(connection);
    }

    public get Tests(): Connection {
        return this.connection;
    }
}

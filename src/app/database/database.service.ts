import { Injectable } from '@angular/core';
import { Sequelize } from 'sequelize-typescript';
import { AppConfig } from '../../environments/environment';
import { Test } from './models/test.model';

const { database } = AppConfig;

@Injectable()
export class DatabaseService {
    private readonly connection: Sequelize;

    constructor() {
        this.connection = new Sequelize({
            database: database.schema,
            dialect: 'mysql',
            username: database.username,
            password: database.password,
        });

        this.connection.addModels([Test]);
    }

    public sync(): Promise<Sequelize> {
        return this.connection.sync();
    }
}

import { FactoryProvider, InjectionToken } from '@angular/core';
import { createConnection } from 'typeorm';
import { AppConfig } from '../../environments/environment';
import { Test } from './entities/test.entity';

export const BbConnectionToken = new InjectionToken<string>('DbConnection');
export const TestModelToken = new InjectionToken<string>('TestMode');

const { database } = AppConfig;

export const providers: Array<FactoryProvider> = [
    {
        provide: BbConnectionToken,
        useFactory: async () => {},
        // createConnection({
        //     type: 'mysql',
        //     host: database.host,
        //     port: database.port,
        //     username: database.username,
        //     password: database.password,
        //     entities: [`${__dirname}/entities/*.js`],
        //     synchronize: true,
        //     logging: true,
        // }),
    },
];

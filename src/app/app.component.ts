import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronService } from './core/services';
import { AppConfig } from '../environments/environment';
import { Test } from './database/models/test.model';
import { DatabaseService } from './database/database.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        public electronService: ElectronService,
        private translate: TranslateService,
        private databaseProvide: DatabaseService,
    ) {
        translate.setDefaultLang('en');
    }

    public async ngOnInit(): Promise<void> {
        await this.databaseProvide.sync();

        const test = new Test({ name: 'asdasd', description: 'asdasd' });
        const result = await test.save();
        console.log(result);
    }
}

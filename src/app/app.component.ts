import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronService } from './core/services';
import { AppConfig } from '../environments/environment';
import { RepositoryService } from './database/repository.service';
import { TestService } from './test.service';
import { Test } from './database/entities/test.entity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        public electronService: ElectronService,
        private translate: TranslateService,
        private testService: TestService,
    ) {
        translate.setDefaultLang('en');
    }

    public async ngOnInit(): Promise<void> {
        // const result = await this.repositoryService.Tests.manager.save({ title: 'test', description: 'description' });

        const connection = await this.testService.connection;
        const test = new Test();
        test.name = 'asd';
        test.description = 'asdasd';
        const result = await connection.manager.save(test);
        console.log(result);
    }
}

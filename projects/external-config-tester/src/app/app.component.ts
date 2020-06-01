import {Component} from '@angular/core';
import {ConfigService} from 'external-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(public configService: ConfigService) {
    }
}

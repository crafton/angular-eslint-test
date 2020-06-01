import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConfigService} from 'external-config';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers: [
        ConfigService,
        { provide: APP_INITIALIZER, useFactory: preloadConfig, deps: [ConfigService], multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function preloadConfig(config: ConfigService) {
    return () => config.init();
}

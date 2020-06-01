import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    [key: string]: any;

    constructor(private httpClient: HttpClient) {
    }

    init(configFile?: string) {
        return this.httpClient.get(configFile || 'assets/config/config.json').pipe(
            tap(body => {
                Object.keys(body).forEach(propertyName => this[propertyName] = body[propertyName]);
            })
        ).toPromise();
    }

    isDebugEnabled(key: string): boolean {
        if (this.debug && this.debug[key]) {
            return true;
        }
    }
}

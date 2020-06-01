import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

describe('ConfigService', () => {

    let service: ConfigService;
    let httpSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
        // Inject both the service-to-test and its (spy) dependency
        service = new ConfigService(httpSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should load config properties into local map', () => {
        httpSpy.get.and.returnValue(of({someProp: 'someValue'}));
        service.init();
        expect(httpSpy.get).toHaveBeenCalledWith('assets/config/config.json');
        expect(service.someProp).toEqual('someValue');
    });
});

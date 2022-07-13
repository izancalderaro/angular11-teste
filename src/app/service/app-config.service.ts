import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
/** */
  // public static settings: AppConfig = null;
  public static settings: AppConfig = {
                                        urlSso: '',
                                        urlToken:''
                                       };

  constructor(private _http: HttpClient) { }

    load() {
    const jsonFile = 'assets/config/config.json';
    return this._http
      .get(jsonFile)
      .pipe(
        tap((response: AppConfig) =>
          AppConfigService.settings = response
        )
      )
      .toPromise();
  }
}

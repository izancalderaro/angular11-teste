import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { UserSouGov } from '../models/user-sougov-model';

import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class SougovService {
  /**
   *
   */
  urlAuthorize: any;

  ex_req =
    'https://sso.staging.acesso.gov.br/authorize?response_type=code&amp;client_id=ec4318d6-f797-4d65-b4f7-39a33bf4d544&amp;scope=openid+(email/phone)+profile&amp;redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&amp;nonce=3ed8657fd74c&amp;state=358578ce6728b%';

  ex_header: HttpHeaders = new HttpHeaders();

  constructor(private _http: HttpClient, private _appconfig: AppConfigService) {
    /** */
    this._appconfig.load().then((app) => (this.urlAuthorize = app.urlSso));
    this.ex_header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.ex_header.append('Authorization', 'Basic ' + 'token');
  }

  login(user: UserSouGov): Observable<any> {
    /** */
    const url = `?response_type=${user.response_type}&client_id=${user.client_id}&scope=${user.scope}&redirect_uri=${user.redirect_uri}&nonce=${user.nonce}&state=${user.state}`;

    return this._http
      .get<any>(`${this.urlAuthorize}${url}`)
      .pipe(shareReplay());
  }
}

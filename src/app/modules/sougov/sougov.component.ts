import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { UserSouGov } from 'src/app/models/user-sougov-model';
import { AppConfigService } from 'src/app/service/app-config.service';

@Component({
  selector: 'app-sougov',
  templateUrl: './sougov.component.html',
  styleUrls: ['./sougov.component.scss']
})
export class SougovComponent implements OnInit {
/**
 *
 */
  aparencia: MatFormFieldAppearance = 'legacy'

  ex_req = 'https://sso.staging.acesso.gov.br/authorize?response_type=code&amp;client_id=ec4318d6-f797-4d65-b4f7-39a33bf4d544&amp;scope=openid+(email/phone)+profile&amp;redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&amp;nonce=3ed8657fd74c&amp;state=358578ce6728b%'

  ex_header: HttpHeaders = new HttpHeaders({
  'Content-Type':'application/x-www-form-urlencoded',
   'Authorization': 'Basic ZWM0MzE4ZDYtZjc5Ny00ZDY1LWI0ZjctMzlhMzNiZjRkNTQ0OkFJSDRoaXBfTUJYcVJkWEVQSVJkWkdBX2dRdjdWRWZqYlRFT2NWMHlFQll4aE1iYUJzS0xwSzRzdUVkSU5FcS1kNzlyYWpaZ3I0SGJuVUM2WlRXV1lJOA=='})

  user_info: UserSouGov = new UserSouGov()

  constructor(private _appconfig: AppConfigService) { }

  ngOnInit(): void {

    console.log();

  }

  onSubmit(){}

}


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';



@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {
/**
 *
*/
  formData = new FormData();
  apiUrl = 'https://gateway.stg.cloud.pje.jus.br/previdenciario-api';
  endPoint = '/api/v1/intimacao-judicial/4.0.1/extrair';
  header: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.header =  new HttpHeaders({
      'Accept': '*/*',
      'X-PDPJ-CPF-USUARIO-OPERADOR':'93758798412',
      'Authorization': 'bearer ' + this.getToken(),
      // 'Content-Type':'multipart/form-data, boundary=X-PREVIDENCIARIO',

    })
  }

  ngOnInit(): void {/** */}

  carregaHtml(event: any) {
    /** */

    const file: File = event.target.files[0]
    this.formData.append('file', file)
  }

  enviaHtml() {

    this.envioService().subscribe(
      result => console.log(result)
    )
 }

  envioService(): Observable<any> {
    /** */
    return this._http.post<any>(`${this.apiUrl}${this.endPoint}`,
      this.formData,
      { headers: this.header }).pipe(shareReplay())

  }

  getToken(): string {
    /** */
    const token = '';

    return token
  }

}

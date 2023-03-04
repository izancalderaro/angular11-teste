import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
})
export class FormDataComponent implements OnInit {
  /**
   *
   */
  formData = new FormData();
  apiUrl = '';
  endPoint = '';
  header: HttpHeaders;
  file: string = '';

  constructor(private _http: HttpClient) {
    /** */
    this.header = new HttpHeaders({});
    this.header.append('Accept', '*/*');
    this.header.append('Authorization', 'bearer ' + this.getToken());
  }

  ngOnInit(): void {
    /** */
  }

  carregaHtml(evento: any) {
    /** */

    const file: File = evento.target.files[0];

    this.formData.append('file', file);

    this.file = file.name;
  }

  enviaHtml() {
    this.envioService().subscribe((result: any) => console.log(result));
  }

  envioService(): Observable<any> {
    /** */
    return this._http
      .post<any>(`${this.apiUrl}${this.endPoint}`, this.formData, {
        headers: this.header,
      })
      .pipe(shareReplay());
  }

  getToken(): string {
    /** */
    const token = '';

    return token;
  }
}

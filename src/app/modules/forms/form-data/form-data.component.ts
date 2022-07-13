
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
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1dnJEZ1hCS21FLTdFb3J2a0U1TXU5VmxJZF9JU2dsMnY3QWYyM25EdkRVIn0.eyJleHAiOjE2NTc3MzE3NzAsImlhdCI6MTY1NzY4ODU3MCwianRpIjoiN2QxYjVjNmEtNzljOC00YzJjLTkyNDYtYzY1MTUwOWE1MGE3IiwiaXNzIjoiaHR0cHM6Ly9zc28uc3RnLmNsb3VkLnBqZS5qdXMuYnIvYXV0aC9yZWFsbXMvcGplIiwiYXVkIjpbImp1TVAtYmFja2VuZCIsImFjY291bnQiXSwic3ViIjoiYmRiMTE3YWMtNTQ0Ny00NjBkLTkwYWMtNTZlMjQyYmFjNGQ2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibm90aWZpY2FjYW8iLCJzZXNzaW9uX3N0YXRlIjoiNDJlNmRjNjUtOTQyZC00YTVlLWFmNzItMzUzMjkzZWM0YWE5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsianVNUC1iYWNrZW5kIjp7InJvbGVzIjpbImFjZXNzb0FQSSJdfSwiTk9USUZJQ0FDQU8iOnsicm9sZXMiOlsiQWRtaW5pc3RyYWRvckNOSiIsIlRyaWJ1bmFsIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ikl6YW4gQ2FsZGVyYXJvIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNjcwODQwMTAyOTciLCJnaXZlbl9uYW1lIjoiSXphbiIsImNvcnBvcmF0aXZvIjpbeyJzZXFfdXN1YXJpbyI6MTEyNjA2LCJub21fdXN1YXJpbyI6IklaQU4gRkFCUsOtQ0lPIE5FVkVTIENBTERFUkFSTyIsIm51bV9jcGYiOiI2NzA4NDAxMDI5NyIsInNlcV9vcmdhbyI6MSwic2lnX3RpcG9fY2FyZ28iOiJURVIiLCJmbGdfYXRpdm8iOiJOIiwic2VxX3Npc3RlbWEiOjExMywic2VxX3BlcmZpbCI6Mzk4LCJkc2Nfb3JnYW8iOiJDb25zZWxobyBOYWNpb25hbCBkZSBKdXN0acOnYSIsImRzY190cmlidW5hbF9wYWkiOiJDb25zZWxobyBOYWNpb25hbCBkZSBKdXN0acOnYSIsInNlcV90cmlidW5hbF9wYWkiOjEsImRzY19lbWFpbCI6Iml6YW4uY2FsZGVyYXJvQGNuai5qdXMuYnIiLCJkc2NfcGVyZmlsIjoiQWRtaW5pc3RyYWRvckNOSiIsImRzY19zaXN0ZW1hIjoiU2VydmnDp28gZGUgTm90aWZpY2HDp8O1ZXMiLCJkc2Nfc2lzdGVtYV9zaWdsYSI6Ik5PVElGSUNBQ0FPIn0seyJzZXFfdXN1YXJpbyI6MTEyNjA2LCJub21fdXN1YXJpbyI6IklaQU4gRkFCUsOtQ0lPIE5FVkVTIENBTERFUkFSTyIsIm51bV9jcGYiOiI2NzA4NDAxMDI5NyIsInNlcV9vcmdhbyI6MSwic2lnX3RpcG9fY2FyZ28iOiJURVIiLCJmbGdfYXRpdm8iOiJOIiwic2VxX3Npc3RlbWEiOjExMywic2VxX3BlcmZpbCI6Mzk5LCJkc2Nfb3JnYW8iOiJDb25zZWxobyBOYWNpb25hbCBkZSBKdXN0acOnYSIsImRzY190cmlidW5hbF9wYWkiOiJDb25zZWxobyBOYWNpb25hbCBkZSBKdXN0acOnYSIsInNlcV90cmlidW5hbF9wYWkiOjEsImRzY19lbWFpbCI6Iml6YW4uY2FsZGVyYXJvQGNuai5qdXMuYnIiLCJkc2NfcGVyZmlsIjoiVHJpYnVuYWwiLCJkc2Nfc2lzdGVtYSI6IlNlcnZpw6dvIGRlIE5vdGlmaWNhw6fDtWVzIiwiZHNjX3Npc3RlbWFfc2lnbGEiOiJOT1RJRklDQUNBTyJ9LHsic2VxX3VzdWFyaW8iOjExMjYwNiwibm9tX3VzdWFyaW8iOiJJWkFOIEZBQlLDrUNJTyBORVZFUyBDQUxERVJBUk8iLCJudW1fY3BmIjoiNjcwODQwMTAyOTciLCJzZXFfb3JnYW8iOjEyNzI4LCJzaWdfdGlwb19jYXJnbyI6IlRFUiIsImZsZ19hdGl2byI6Ik4iLCJzZXFfc2lzdGVtYSI6MTEzLCJzZXFfcGVyZmlsIjozOTksImRzY19vcmdhbyI6IlN1cGVyaW9yIFRyaWJ1bmFsIGRlIEp1c3Rpw6dhIiwiZHNjX3RyaWJ1bmFsX3BhaSI6IlN1cGVyaW9yIFRyaWJ1bmFsIGRlIEp1c3Rpw6dhIiwic2VxX3RyaWJ1bmFsX3BhaSI6MTI3MjgsImRzY19lbWFpbCI6Iml6YW4uY2FsZGVyYXJvQGNuai5qdXMuYnIiLCJkc2NfcGVyZmlsIjoiVHJpYnVuYWwiLCJkc2Nfc2lzdGVtYSI6IlNlcnZpw6dvIGRlIE5vdGlmaWNhw6fDtWVzIiwiZHNjX3Npc3RlbWFfc2lnbGEiOiJOT1RJRklDQUNBTyJ9LHsic2VxX3VzdWFyaW8iOjExMjYwNiwibm9tX3VzdWFyaW8iOiJJWkFOIEZBQlLDrUNJTyBORVZFUyBDQUxERVJBUk8iLCJudW1fY3BmIjoiNjcwODQwMTAyOTciLCJzZXFfb3JnYW8iOjEyOTkxLCJzaWdfdGlwb19jYXJnbyI6IlRFUiIsImZsZ19hdGl2byI6Ik4iLCJzZXFfc2lzdGVtYSI6MTEzLCJzZXFfcGVyZmlsIjozOTksImRzY19vcmdhbyI6IlRyaWJ1bmFsIFN1cGVyaW9yIEVsZWl0b3JhbCIsImRzY190cmlidW5hbF9wYWkiOiJUcmlidW5hbCBTdXBlcmlvciBFbGVpdG9yYWwiLCJzZXFfdHJpYnVuYWxfcGFpIjoxMjk5MSwiZHNjX2VtYWlsIjoiaXphbi5jYWxkZXJhcm9AY25qLmp1cy5iciIsImRzY19wZXJmaWwiOiJUcmlidW5hbCIsImRzY19zaXN0ZW1hIjoiU2VydmnDp28gZGUgTm90aWZpY2HDp8O1ZXMiLCJkc2Nfc2lzdGVtYV9zaWdsYSI6Ik5PVElGSUNBQ0FPIn0seyJzZXFfdXN1YXJpbyI6MTEyNjA2LCJub21fdXN1YXJpbyI6IklaQU4gRkFCUsOtQ0lPIE5FVkVTIENBTERFUkFSTyIsIm51bV9jcGYiOiI2NzA4NDAxMDI5NyIsInNlcV9vcmdhbyI6MTM2MDYsInNpZ190aXBvX2NhcmdvIjoiVEVSIiwiZmxnX2F0aXZvIjoiTiIsInNlcV9zaXN0ZW1hIjoxMTMsInNlcV9wZXJmaWwiOjM5OSwiZHNjX29yZ2FvIjoiVHJpYnVuYWlzIGRlIEp1c3Rpw6dhIEVzdGFkdWFpcyIsImRzY190cmlidW5hbF9wYWkiOiJUcmlidW5haXMgZGUgSnVzdGnDp2EgRXN0YWR1YWlzIiwic2VxX3RyaWJ1bmFsX3BhaSI6MTM2MDYsImRzY19lbWFpbCI6Iml6YW4uY2FsZGVyYXJvQGNuai5qdXMuYnIiLCJkc2NfcGVyZmlsIjoiVHJpYnVuYWwiLCJkc2Nfc2lzdGVtYSI6IlNlcnZpw6dvIGRlIE5vdGlmaWNhw6fDtWVzIiwiZHNjX3Npc3RlbWFfc2lnbGEiOiJOT1RJRklDQUNBTyJ9XSwiZmFtaWx5X25hbWUiOiJDYWxkZXJhcm8iLCJlbWFpbCI6Iml6YW4uY2FsZGVyYXJvQGNuai5qdXMuYnIifQ.GF8PU9a4Co8YjyFYicQ7PQ8zmO0YTg-hjMs0euQmPNYkEiq2HCpIo55aczj8mF9rEd_Zebsn3iPETrLTYv-WHfe66tODgFj7qN1YNpmCDD5LPtnhFaozKT74ki6zYTZ9kNtKOccnjP7IAFe8azUvQcjuG4jb1Hm2aQ6T18uqOrehBcMc43lzprlrcRD5-Mn8HmS9x36MrbxZObCEZjYiag_wNJ20Tm2tLmLmFcrlVZPIVrxuAo199DgVbwAbkIi8Z_xOb37YEHMZRmCMp0gw72UeVeQCGEsMPFHp9fNn1_s8Hu5aJBJLNYYfBnEcilUwWeocz70psIOKSXoO4ck4sA';

    return token
  }

}
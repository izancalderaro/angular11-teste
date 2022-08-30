import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import * as fs from 'fs';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.scss'],
})
export class ArquivoComponent implements OnInit {
  /** */
  color0: string = 'default';
  color1: ThemePalette = 'primary';
  color2: ThemePalette = 'accent';
  color3: ThemePalette = 'warn';

  /**Delimitadores
   *
   * @params ¥
   * Unicode number:U+00A5
   * HTML-code: &#165;
   *
   * @params £
   * Unicode number: U+00A3
   * HTML-code: &#163;
   *
   * */

  separador: string = '';
  delimitador: string = '';
  fim: string = 'FIM' + this.separador + this.delimitador;
  //Tipo de registros
  deletado: string = 'E';
  header: string = 'H';
  detail: string = 'D';
  trailer: string = 'T';

  constructor() {}

  ngOnInit(): void {
    fs.writeFile('c:/sip.txt', this.fim, (erro) => {
      if (erro) console.info('Erro gerado' + erro);
    });
  }

  lerArquivo() {}

  gerarArquivo() {}

  apagarArquivo() {}
}

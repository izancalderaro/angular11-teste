import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

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

  constructor() {}

  ngOnInit(): void {}

  lerArquivo() {}

  gerarArquivo() {}

  apagarArquivo() {}
}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [style({opacity: 0, transform: 'translate(-50px, 0)'}), animate('500ms 0s ease-in-out')])

    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [ style({opacity: 0, transform: 'translate(50px, 0)'}), animate('500ms 0s ease-in-out')])

    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  constructor() {}

  ngOnInit(): void {

  }

}

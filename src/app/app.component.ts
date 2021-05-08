import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder/Inbox', icon: 'home' },
    { title: 'Para Instituições', url: 'para-instituicoes', icon: 'clipboard' },
    { title: 'Para Estudantes', url: 'perfil', icon: 'school' },
    { title: 'Pesquisa', url: 'pesquisa', icon: 'school' },
  ];
  public labels = ['Sobre', 'Central de Ajuda'];
  public nome: string = 'Bruno Silva';
  public email: string = 'bruno.silva1847@etec.sp.gov.br';
  constructor() {}
}

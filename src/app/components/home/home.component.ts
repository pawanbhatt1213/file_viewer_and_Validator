import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apps: Application[];
  constructor() {
    this.apps = [
      {
        appId: '1',
        appName: 'Waap',
        appDescription: 'WhatsApp'
      },
      {
        appId: '2',
        appName: 'Tapp',
        appDescription: 'Twitter'
      },
      {
        appId: '3',
        appName: 'Mapp',
        appDescription: 'Messanger'
      },
      {
        appId: '4',
        appName: 'Kryptop',
        appDescription: 'KakaoTalk'
      }
      
    ]
  }

  ngOnInit() {
  }

}
interface Application {
  appId: string;
  appName: string;
  appDescription: string;
}

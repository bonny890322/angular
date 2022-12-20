import { ConfigService } from './../_services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public configSvc: ConfigService
  ) { }

  ngOnInit(): void {
    this.configSvc.run(); // 呼叫在 service 建立的方法
  }

}

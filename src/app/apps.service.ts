import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsoleReporter } from 'jasmine';
import { Observable } from 'rxjs';
import {tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private http: HttpClient) {

  }

  public getIpDetails(): Observable<any> {
    console.log(` In the service . . .`);
    return this.http.get('http://ipinfo.io');
  }
}

import { Component } from '@angular/core';
import { AppsService } from './apps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularUtility';

  constructor(private service: AppsService){}


  onClear(): void {

  }

  onGetIP(): any {
    this.service.getIpDetails().subscribe(d => {
      console.log(d);
    });
  }
}

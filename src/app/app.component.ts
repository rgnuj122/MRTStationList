import { Component } from '@angular/core';
// Constant
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MRTStationList';
  /**
  * �Ҧ��C���쯸���W�����
  *
  * @memberof AppComponent
  */
  list = stationList;

}

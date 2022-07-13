import { Component } from '@angular/core';
import { ELEMENT_DATA, EXTENDED_DATA } from './mock-data';
import { animate, style, transition, trigger, state, AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('splitAnimation', [state('reduce', style({ width: '60%' })),
    state('full', style({ width: '100%' })),
    transition('reduce => full', animate('300ms ease-in')),
    transition('full => reduce', animate('300ms ease-out'))])]
})
export class AppComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'email',
    'gender'
  ];
  hiddenColumns: string[] = ['mobile'];
  dataSource = ELEMENT_DATA;
  extendedDataSource = EXTENDED_DATA;
  isSplitActive = false;
  buttonText = 'Minimise'

  split = () => {
    this.isSplitActive = !this.isSplitActive;
    this.buttonText = this.isSplitActive ? 'Expand' : 'Minimise';
  };
}

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  gender: string;
  ip_address: string;
}

export interface HiddenElement {
  mobile: string;
  description: string;
}

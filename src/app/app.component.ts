import { Component } from '@angular/core';
import { ELEMENT_DATA, EXTENDED_DATA } from './mock-data';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('splitAnimation', [
      state('reduce', style({ width: '60%' })),
      state('full', style({ width: '100%' })),
      transition('reduce => full', animate('300ms ease-in')),
      transition('full => reduce', animate('300ms ease-out')),
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('1000ms'),
      ]),
    ]),
  ],
})
export class AppComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'email',
    'gender',
    'ip_address',
  ];
  hiddenColumns: string[] = ['mobile', 'description'];
  dataSource = ELEMENT_DATA;
  extendedDataSource = EXTENDED_DATA;
  isSplitActive = false;
  buttonText = 'Minimise';
  delayedSplit = false;

  split = () => {
    this.isSplitActive = !this.isSplitActive;
    this.buttonText = this.isSplitActive ? 'Expand' : 'Minimise';
    if (this.isSplitActive) {
      setTimeout(() => (this.delayedSplit = true), 350);
    } else {
      this.delayedSplit = false;
    }
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

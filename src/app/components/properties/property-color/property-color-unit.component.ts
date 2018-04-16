import {Component, Input} from '@angular/core';
import {LocaleData} from '../../../i18n/locale-data';

@Component({
  selector   : 'app-color-unit-property-panel',
  templateUrl: './property-color-unit.component.html',
  styleUrls  : ['property-color-unit.component.scss'],
})
export class PropertyColorUnitComponent {
  @Input() public colorData: particlejs.ColorData;

  constructor(public localeData: LocaleData) {
  }

}

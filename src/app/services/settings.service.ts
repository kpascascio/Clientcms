import { Injectable } from '@angular/core';
import { Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false
  };

  constructor() { }

  getSettings() {
    return this.settings;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      ``;
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Cannot save data');
    }
  }
  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Cannot get data from localStorage');
      return null;
    }
  }
}

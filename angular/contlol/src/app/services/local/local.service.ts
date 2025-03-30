import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public checkStorage(key: string) {
    if (localStorage.getItem(key)) {
      return true;
    } else return false;
  }

  public getData(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}

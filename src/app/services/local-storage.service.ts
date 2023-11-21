import { Injectable } from '@angular/core';
import { usuario } from '../models/date';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  static setItem(key: string, value: usuario): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string, password: string): any {
    if(localStorage.getItem(key)){
      const data = JSON.parse(localStorage.getItem(key) ?? "");
      if (data?.password == password) {
        return data;
      }
    }
  }

  static removeItem(key: string, password: string): any {
    if (this.getItem(key, password).password == password) {
      localStorage.removeItem(key);
      localStorage.removeItem('session');
      return true;
    }
    return false;
  }

  static saveSession(key: string, usuario: string, password: string, page: string): void {
    localStorage.setItem('session', JSON.stringify({ usuario, password, page }));
  }

  static getSession(): any {
    return localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session') ?? "") : null;
  }

  static getTransaction(key: string): any {
    const data = JSON.parse(localStorage.getItem(key) ?? "");
    return data?.transactions;
  }

  static clearSession(): void {
    localStorage.removeItem('session');
  }

  static FuncaoparaverificarseJaExite(key: string): any {
    return localStorage.getItem(key) ? false : true;
  }
}
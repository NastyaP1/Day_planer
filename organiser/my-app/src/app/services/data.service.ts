import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {

  private password =  "";

  constructor() { }

  updateAndGetAuthHeader(method: string, uri: string) {
    const digestHeaderArgs = sessionStorage.getItem('authHeader').split(',');
    const userPassword = sessionStorage.getItem('userPassword');

    let username, realm, nonce, response, qop, nc, cnonce;
    let scheme = digestHeaderArgs[0].split(/\s/)[0];

    for (let i = 0; i < digestHeaderArgs.length; i++) {
      const equalIndex = digestHeaderArgs[i].indexOf('=');

      let key = digestHeaderArgs[i].substring(0, equalIndex);
      let val = digestHeaderArgs[i].substring(equalIndex + 1);
      val = val.replace(/['"]+/g, '');
      key = key.trim();

      switch (key) {
        case 'Digest username': username = val; break;
        case 'realm': realm = val; break;
        case 'nonce': nonce = val; break;
        case 'uri': uri = val; break;
        case 'qop': qop = val; break;
        case 'nc': nc = val; break;
        case 'cnonce': cnonce = val; break;
      }
    }

    nc++;
    response = this.formulateResponse(username, userPassword, method, realm, nonce, uri, cnonce, qop, nc);

    const updatedAuthHeader = scheme + ' ' +
      'username="' + username + '", ' +
      'realm="' + realm + '", ' +
      'nonce="' + nonce + '", ' +
      'uri="' + uri + '", ' +
      'response="' + response + '", ' +
      'qop=' + qop + ', ' +
      'nc=' + ('00000000' + nc).slice(-8) + ', ' +
      'cnonce="' + cnonce + '"';

    sessionStorage.setItem('authHeader', updatedAuthHeader);
    return updatedAuthHeader;
  }

  formulateResponse(username: string, password: string, method: string, realm: string,
    nonce: string, uri: string, cnonce: string, qop: string, nc: number) {
    const CryptoJS = require('crypto-js');

    const HA1 = CryptoJS.MD5(username + ':' + realm + ':' + CryptoJS.MD5(password)).toString();
    const HA2 = CryptoJS.MD5(method + ':' + uri).toString();

    const response = CryptoJS.MD5(HA1 + ':' +
      nonce + ':' +
      ('00000000' + nc).slice(-8) + ':' +
      cnonce + ':' +
      qop + ':' +
      HA2).toString();

    return response;
  }

  generateCnonce() {
    const characters = 'abcdef0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
      const randNum = Math.round(Math.random() * characters.length);
      token += characters.substr(randNum, 1);
    }
    return token;
  }
}
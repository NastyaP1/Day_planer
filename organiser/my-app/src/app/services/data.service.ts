import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

{ providedIn: 'root' }
export class DataService {
public linkName$ = new BehaviorSubject<String>("/assets/img/man.png");
}
import { Injectable } from '@angular/core';
import{Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees:Employee[]=[];

  constructor() { }

  create(b:Employee)
  {
    this.employees.push(b);
  }
  
}

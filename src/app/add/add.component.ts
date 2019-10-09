import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    name:string;
    date:Date;
    address:string;
    phone:number;
    newemployee:Employee;
  constructor(private svc:DataService) { }

  ngOnInit() {
  }

  createEmployee(){
    this.newemployee=new Employee(this.name,this.date,this.address,this.phone);
    this.svc.create(this.newemployee);
  }

}

import { DOCUMENT } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a='Home componenet';
  b ='10';
  status='true';

  document:any;
  User: any;

  constructor(@Inject(DOCUMENT) document:Document,private testserv: TestService){
    this.document = document;
  }
   
  name:any;

  mobiles=['Redmi','Iphone','Nokia']
  name1= 'bhanu';
  name2= 'LOHI';
  todaydate= new Date;
  perfomance = 2;
  money= 9856;

  user:User[]=[];


  ngOnInit(): void {
    prompt('Hi Please enter in to this Page')
  }
  printdata(){
    // alert(this.testserv.gettodaysdate());
    // alert(this.testserv.getMyName());
  }
  getalluserinformation(){
    this.testserv.getallusers().subscribe(user=>{
      this.user=user;
    });
  }

}

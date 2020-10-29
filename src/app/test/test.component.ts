import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})

export class TestComponent implements OnInit {

  
  public name="Piyush";
  public myId="testId";
  public isdisable=true
  
  public successClass="text-success";
  public hasError=false
  public isSpecial=true
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public greeting=""

  public displayName=true
  public Firstname="Piyush"
   public color="red"; 
   public colors=['red','blue','green']
   public date=new Date();

  @Input() public parentData;
  //@Input('parentData') public fn;
  //now you can access the recieving data from varibale fn

  @Output() public childEvent =new EventEmitter();

   constructor() { }
   ngOnInit(): void {
  }
  greetUser(){
    return "Hello "+ this.name
  }
  onclick(event){
    console.log(event)
    this.greeting="Welcome to angular"
  }
  logmessage(myInput){
    console.log(myInput)
  }
  fireevent(){
    this.childEvent.emit('hey to sending data from child to parent')
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  
  clicked:boolean = false;
  overflow: boolean = false;
  @Output() notify = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }
  onHover(): void {
    const test = document.querySelector('.inner');
    test.classList.toggle('inner-hover');
  }

  onClick(): void {
    
    this.clicked = true;
    const test = document.querySelector('.inner');
    test.classList.add('inner-active');
    this.notify.emit(this.clicked);
    this.delay(700).then(any=>{
      this.overflow=true
   });
    
  }

}

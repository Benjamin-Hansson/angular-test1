import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
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
    const test = document.querySelector('.placeholder-inner');
    test.classList.toggle('placeholder-inner-hover');
  }

  onClick(): void {
    
    this.clicked = true;
    const test = document.querySelector('.placeholder-inner');
    test.classList.add('placeholder-inner-active');
    this.notify.emit(this.clicked);
    this.delay(700).then(any=>{
      this.overflow=true
   });
    
  }
}

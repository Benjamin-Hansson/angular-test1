import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
    const test = document.querySelector('.about-inner');
    test.classList.toggle('about-inner-hover');
  }

  onClick(): void {
    
    this.clicked = true;
    const test = document.querySelector('.about-inner');
    test.classList.add('about-inner-active');
    this.notify.emit(this.clicked);
    this.delay(700).then(any=>{
      this.overflow=true
   });
    
  }
}

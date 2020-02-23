import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor() { }
  _notify: boolean;
  block: boolean = false;

  get notify(): boolean {
    return this._notify;
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  @Input() set notify(val: boolean){
    this._notify = val;
    if(val) {
      this.delay(1000).then(any=>{
        this.block=true
     });

    }
  }

  ngOnInit(): void {
  }

}

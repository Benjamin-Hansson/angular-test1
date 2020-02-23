import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-website';
  largeName: boolean = false;

  onNotify(clicked: boolean){
    console.log("clicked");
    this.largeName = clicked

    if (this.largeName){
      const layoutSelector = document.querySelector('.layout');
      layoutSelector.classList.add('layout-active');
    }

  }
}

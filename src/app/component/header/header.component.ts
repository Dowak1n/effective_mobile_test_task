import { Component} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  logOut() {
    if (sessionStorage.getItem('SessionStatus') === 'true') {
      sessionStorage.setItem('SessionStatus','false')
    }
  }
}

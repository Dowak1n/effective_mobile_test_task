import { Component} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserSessionManager } from 'src/app/shared/services/user-session.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  constructor(private authService: AuthService, protected userSession: UserSessionManager){}

  logOut() {
    this.authService.logout()
  }
}

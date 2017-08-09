import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesServices: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.resgister(this.email, this.password)
      .then((res) => {
        this.flashMessagesServices.show('New user registered', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesServices.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/register']);
      });
  }
}

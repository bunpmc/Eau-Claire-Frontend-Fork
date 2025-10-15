import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { Login } from './auth/login/login';
import { ForgetPassword } from './auth/forget-password/forget-password';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, Login, ForgetPassword],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eau-claire-farm-management');
}

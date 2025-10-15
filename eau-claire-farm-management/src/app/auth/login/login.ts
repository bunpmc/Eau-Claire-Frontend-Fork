import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { AuthService } from '../../core/services/auth.service';
import { UiService } from '../../shared/services/ui.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // form: FormGroup;
  // loading = false;

  // constructor(
  //   private fb: FormBuilder,
  //   private auth: AuthService,
  //   private ui: UiService,
  //   private router: Router
  // ) {
  //   this.form = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]]
  //   });
  // }

  // onSubmit() {
  //   if (this.form.invalid) {
  //     this.loading = true;
  //     this.auth.login(this.form.value.email, this.form.value.password).subscribe({
  //       next: () => {
  //         this.ui.showToast('Login successful', 'success');
  //         this.router.navigate(['/dashboard']);
  //         this.loading = false;
  //       },
  //       error: (err) => {
  //         this.ui.showToast('Login failed: ' + err.message, 'error');
  //         this.loading = false;
  //       }
  //     });
  //   }
  // }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs';
// import { User } from '../models/user.model';
// import { StorageService } from './storage.service';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//     private currentUserSubject = new BehaviorSubject<User | null>(null);
//     public currentUser$ = this.currentUserSubject.asObservable();

//     constructor(private http: HttpClient, private storage: StorageService) {
//         const token = this.storage.getToken();
//         if (token) {
//             this.currentUserSubject.next({ email: '', role: '' });
//         }
//     }

//     login(email: string, password: string): Observable<User> {
//         return this.http.post<{ token: string; user: User }>('/api/auth/login', { email, password })
//             .pipe(
//                 map(response => {
//                     this.storage.setToken(response.token);
//                     this.currentUserSubject.next(response.user);
//                     return response.user;
//                 })
//             );
//     }

//     logout(): void {
//         this.storage.clearToken();
//         this.currentUserSubject.next(null);
//     }

//     isLoggedIn(): boolean {
//         return !!this.storage.getToken();
//     }
// }
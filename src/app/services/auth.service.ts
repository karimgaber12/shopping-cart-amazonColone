/*import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false

  constructor(private firebaseAuth : AngularFireModule, private ngZone: NgZone,
    private router:Router) { }

    async signIn(email: string, password : string){
      await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then(res=>{
        this.isLoggedIn = true
        localStorage.setItem('user',JSON.stringify(res.user))
      })
  
}
*/
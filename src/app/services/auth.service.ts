import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userFirebase: any;
  toastController: any;
  
  mailLogueado : any = ''; 
  constructor(private auth:AngularFireAuth,private router: Router) { }
  async register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch(
      e => this.thrownErrorsRegister(e.code)
    )
  }

  async login(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
      .then(
        e=>{
          this.loginExitoso('Bienvenido nuevamente!');
          this.mailLogueado = e.user?.email;
          this.router.navigate(['/home']);
        }
      )
      .catch( e =>
        this.thrownErrorsRegister(e.code)
      )
  }

  logout(){    
    this.router.navigate(['/login']);
    return this.auth.signOut();
  }

  obtenerUsuarioLogueado(){
    return this.auth.authState
  }

  async enviarMailParaVerificar(){
    return this.auth.currentUser.then(
      user=>{
        return user?.sendEmailVerification();
      }
    )
  }

  loginExitoso(message:string){
    this.presentToast({
      message: message,
      duration: 3500,
      color: 'warning',
      icon: 'person-outline'
    })
  }
  
  async presentToast(opts: ToastOptions){
    const toast = await this.toastController.create(opts);
    toast.present();
  }
  thrownErrorsRegister(type: any){
    this.presentToast({
      message: type,
      duration: 3500,
      color: 'warning',
      icon: 'person-outline'
    })
  }

}
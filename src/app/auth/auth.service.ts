import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signUp(email: string, password: string) {
    const apiKey = 'AIzaSyDQSNbZxTl62NUdkkxO2Y_ZlVPiPltiXc4';
    return this.httpClient.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }
}

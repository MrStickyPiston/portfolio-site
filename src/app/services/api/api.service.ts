import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  async post(endpoint: string, payload: object) {
    let response;

    try {
      response = await lastValueFrom(this.http.post(environment.api_url + endpoint, JSON.stringify(payload)));
    } catch (e: any) {
      console.error(e)

      return {
        success: false,
        error: e
      }
    }

    return {
      success: true,
      response: response
    }
  }
}

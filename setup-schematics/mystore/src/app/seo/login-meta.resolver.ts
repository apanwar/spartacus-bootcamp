import { Injectable } from '@angular/core';
import { ContentPageMetaResolver } from '@spartacus/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginPageMetaResolver extends ContentPageMetaResolver {
  pageTemplate = 'LoginPageTemplate';

  resolveTitle(): Observable<string> {
    return of('Custom Login Page Title');
  }
}

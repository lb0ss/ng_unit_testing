import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './reducers';

@Component({
  selector: 'user-greeting',
  template: ` <div>Greetings, {{ username$ | async }}!</div> `,
})
export class UserGreetingComponent {
  username$ = this.store.select(fromAuth.getUsername);

  constructor(private store: Store<fromAuth.State>) {}
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
import { Observable } from 'rxjs';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-search-listing',
  templateUrl: './generic-search-listing.component.html',
  styles: [],
})
export class GenericSearchListingComponent<T extends Names> {
  constructor() {}

  @Input() type!: T;

  page$!: Observable<Type<T>[]>;
}

type Names = 'user' | 'group' | 'servicePrincipal';
type Type<T extends Names> = T extends 'user'
  ? { user: 'user' }
  : T extends 'group'
  ? { group: 'group' }
  : T extends 'servicePrincipal'
  ? { servicePrincipal: 'servicePrincipal' }
  : never;

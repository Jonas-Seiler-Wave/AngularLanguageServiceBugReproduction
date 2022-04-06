import { Observable } from 'rxjs';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-listing',
  templateUrl: './search-listing.component.html',
  styles: [],
})
export class SearchListingComponent {
  constructor() {}

  @Input() type!: Names;

  page$!: Observable<Type<'user'>[]>;
}

type Names = 'user' | 'group' | 'servicePrincipal';
type Type<T extends Names> = T extends 'user'
  ? { user: 'user' }
  : T extends 'group'
  ? { group: 'group' }
  : T extends 'servicePrincipal'
  ? { servicePrincipal: 'servicePrincipal' }
  : never;
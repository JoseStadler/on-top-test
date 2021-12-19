import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Client } from '../shared/models/client.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private _subject = new BehaviorSubject<Client>({ name: 'Jose Stadler' });

	client$: Observable<Client> = this._subject
		.asObservable()
		.pipe(filter((client) => !!client));

	isLoggedIn$: Observable<boolean> = this.client$.pipe(
		map((client) => !!client)
	);
}

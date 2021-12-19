import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
	selector: 'app-top-navbar',
	templateUrl: './top-navbar.component.html',
	styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
	menus = [
		{ route: 'contracts', icon: 'contracts', name: 'Contracts' },
		{ route: 'documents', icon: 'documents', name: 'Documents' },
		{ route: 'payout', icon: 'payout', name: 'Payout' },
		{ route: 'time', icon: 'time', name: 'Time' },
	];
	isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

	constructor(private authService: AuthService) {}

	ngOnInit() {}
}

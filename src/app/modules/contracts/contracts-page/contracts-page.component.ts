import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { Contract } from 'src/app/shared/models/contract.model';

@Component({
	selector: 'app-contracts-page',
	templateUrl: './contracts-page.component.html',
	styleUrls: ['./contracts-page.component.scss'],
})
export class ContractsPageComponent implements OnInit, OnDestroy {
	displayedColumns: string[] = this._initTableColumns();
	dataSource: Contract[] = this._initTableData();
	clientName$: Observable<string> = this._getClientName();
	subscription: Subscription | undefined;
	filtersOpen = false;
	breakpointReached = false;

	constructor(
		private auth: AuthService,
		public breakpointObserver: BreakpointObserver
	) {}

	ngOnInit() {
		this._initBreakPointObserver();
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	getUlStyle(status: string): { [key: string]: string } {
		if (status == 'Active') {
			return { 'background': 'rgba(54, 207, 130, 0.18)' };
		} else {
			return { 'background': 'rgba(242, 157, 66, 0.3)' };
		}
	}

	getLiStyle(status: string): { [key: string]: string } {
		if (status == 'Active') {
			return { 'color': '#36CF82' };
		} else {
			return { 'color': '#F29D42' };
		}
	}

	getTrStyle(): { [key: string]: string } | null {
		if (this.breakpointReached) {
			return null;
		}
		return { 'padding': '10px 13px 10px 15px' };
	}

	private _getClientName(): Observable<string> {
		return this.auth.client$.pipe(map((client) => client.name));
	}

	private _initBreakPointObserver() {
		this.subscription = this.breakpointObserver
			.observe(['(max-width: 768px)'])
			.subscribe((state: BreakpointState) => {
				if (state.matches) {
					this.filtersOpen = false;
					this.breakpointReached = false;
				} else {
					this.filtersOpen = true;
					this.breakpointReached = true;
				}
			});
	}

	private _initTableColumns(): string[] {
		return [
			'contractor_name',
			'type',
			'start_date',
			'ammount',
			'status',
			'actions',
		];
	}

	private _initTableData(): Contract[] {
		return [
			{
				contractor: { name: 'Darlene Robertson', profilePhotoUrl: 'assets/images/contractor1.png' },
				type: 'Traditional',
				startDate: new Date('03/04/2021'),
				ammount: 200,
				status: 'Active',
			},
			{
				contractor: { name: 'Darlene Robertson', profilePhotoUrl: 'assets/images/contractor2.png' },
				type: 'Traditional',
				startDate: new Date('03/04/2021'),
				ammount: 200,
				status: 'Active',
			},
			{
				contractor: { name: 'Darlene Robertson', profilePhotoUrl: 'assets/images/contractor3.png' },
				type: 'Traditional',
				startDate: new Date('03/04/2021'),
				ammount: 200,
				status: 'Signature pending',
			}
		];
	}
}

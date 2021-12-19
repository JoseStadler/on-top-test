import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './core/top-navbar/top-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './core/chat/chat.component';

@NgModule({
	declarations: [AppComponent, TopNavbarComponent, ChatComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MatToolbarModule,
		MatIconModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	readonly svgIcons: string[] = [
		'documents',
		'on-top-brand',
		'contracts',
		'payout',
		'time',
		'remove_icon',
		'edit',
		'sign',
		'view_summary',
		'delete',
	];

	constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
		this.svgIcons.forEach((svgIcon) =>
			this._registrySVGIcon({
				svgIconName: svgIcon,
				matIconRegistry,
				domSanitizer,
			})
		);
	}

	private _registrySVGIcon(registerData: {
		svgIconName: string;
		matIconRegistry: MatIconRegistry;
		domSanitizer: DomSanitizer;
	}): void {
		registerData.matIconRegistry.addSvgIcon(
			registerData.svgIconName,
			registerData.domSanitizer.bypassSecurityTrustResourceUrl(
				`assets/images/${registerData.svgIconName}.svg`
			)
		);
	}
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { ContractsPageComponent } from './contracts-page/contracts-page.component';
import { ContractsRoutingModule } from './contracts.routing';

@NgModule({
	declarations: [ContractsPageComponent],
	imports: [
		ContractsRoutingModule,
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatTableModule,
		MatMenuModule,
		MatCardModule,
	],
	providers: [],
})
export class ContractsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'contracts', pathMatch: 'full' },
	{
		path: 'contracts',
		loadChildren: () =>
			import('./modules/contracts/contracts.module').then(
				(module) => module.ContractsModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

import { Contractor } from './contractor.model';

export class Contract {
	contractor: Contractor = new Contractor();
	type: string = '';
	startDate: Date = new Date();
	ammount: number = 0;
	status: string = '';
}

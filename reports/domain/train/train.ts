namespace $ {
	export enum $mpk_tss_reports_domain_train_status {
		ready = 'ready',
		warning = 'warning',
		error = 'error',
		unknown = 'unknown',
	}

	export enum $mpk_tss_reports_domain_train_load {
		free = 'free',
		full = 'full',
	}

	export enum $mpk_tss_reports_domain_train_violation {
		slider = 'slider',
		glider = 'glider',
	}

	export class $mpk_tss_reports_domain_train_wheel extends $mol_object {
		id(): string { return void 0 }
		status(): $mpk_tss_reports_domain_train_status { return void 0 }
		force_vertical(): number { return void 0 }
		force_horizontal(): number { return void 0 }
	}

	export class $mpk_tss_reports_domain_train_axle extends $mol_object {
		id(): string { return void 0 }
		number(): number { return void 0 }
		wheel_left(): $mpk_tss_reports_domain_train_wheel { return void 0 }
		wheel_right(): $mpk_tss_reports_domain_train_wheel { return void 0 }
	}
	
	export class $mpk_tss_reports_domain_train_carriage extends $mol_object {
		id(): string { return void 0 }
		place(): number { return void 0 }
		status(): $mpk_tss_reports_domain_train_status { return void 0 }
		load(): $mpk_tss_reports_domain_train_load { return void 0 }
		// Measured speed at time point, km/h
		speed(): number { return void 0 }
		violation(): $mpk_tss_reports_domain_train_violation | null { return void 0}
		axes(): $mpk_tss_reports_domain_train_axle[] { return [] }
	}

	export class $mpk_tss_reports_domain_train extends $mol_object {
		id(): string { return void 0 }
		status(): $mpk_tss_reports_domain_train_status { return void 0}
		updated(): $mol_time_moment | null { return void 0 }
		carriages(): $mpk_tss_reports_domain_train_carriage[] { return [] }
		carriage(id: string): $mpk_tss_reports_domain_train_carriage { return void 0}
	}
}

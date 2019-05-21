namespace $ {
	export type $mpk_tss_pereferial_domain_unit_type = string

	export type $mpk_tss_pereferial_domain_unit_parameter_value = {
		type: 'string'
		value: string
	} | {
		type: 'status'
		value: $mpk_tss_pereferial_domain_unit_status
	}

	export class $mpk_tss_pereferial_domain_unit_parameter extends $mol_object {
		name(): string { return void 0 }
		value(): $mpk_tss_pereferial_domain_unit_parameter_value | null { return void 0}
		updated(): $mol_time_moment | null { return void 0}
	}

	export enum $mpk_tss_pereferial_domain_unit_status {
		ready = 'ready',
		error = 'error',
		not_responding = 'not_responding',
		inactive = 'inactive',
		unknown = 'unknown',
	}

	export class $mpk_tss_pereferial_domain_unit extends $mol_object {
		id() : string { return void 0 }
		type(): $mpk_tss_pereferial_domain_unit_type { return void 0 }
		element(): string { return void 0 }
		status(): $mpk_tss_pereferial_domain_unit_status { return void 0}
 
		parameters(): $mpk_tss_pereferial_domain_unit_parameter[] { return [] }
	}
}


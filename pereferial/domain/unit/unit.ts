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
		name(): string { throw new $mpk_tss_todo }
		value(): $mpk_tss_pereferial_domain_unit_parameter_value | null { throw new $mpk_tss_todo }
		updated(): $mol_time_moment | null { throw new $mpk_tss_todo}
	}

	export enum $mpk_tss_pereferial_domain_unit_status {
		ready = 'ready',
		error = 'error',
		not_responding = 'not_responding',
		inactive = 'inactive',
		unknown = 'unknown',
	}

	export class $mpk_tss_pereferial_domain_unit extends $mol_object {
		id() : string { throw new $mpk_tss_todo }
		type(): $mpk_tss_pereferial_domain_unit_type { throw new $mpk_tss_todo }
		element(): string { throw new $mpk_tss_todo }
		status(): $mpk_tss_pereferial_domain_unit_status { throw new $mpk_tss_todo }
 
		parameters(): $mpk_tss_pereferial_domain_unit_parameter[] { return [] }
	}
}


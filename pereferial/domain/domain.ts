namespace $ {
	export class $mpk_tss_pereferial_domain extends $mol_object {
		unit(id: string): $mpk_tss_pereferial_domain_unit {
			throw new $mpk_tss_todo
		}
		units(): $mpk_tss_pereferial_domain_unit[] {
			throw new $mpk_tss_todo
		}
	}

	export type $mpk_tss_pereferial_domain_type = string

	export type $mpk_tss_pereferial_domain_parameter_value = {
		type: 'string'
		value: string
	} | {
		type: 'status'
		value: $mpk_tss_pereferial_domain_status
	}

	export class $mpk_tss_pereferial_domain_parameter extends $mol_object {
		name(): string { throw new $mpk_tss_todo }
		value(): $mpk_tss_pereferial_domain_parameter_value | null { throw new $mpk_tss_todo }
		updated(): $mol_time_moment | null { throw new $mpk_tss_todo}
	}

	export enum $mpk_tss_pereferial_domain_status {
		ready = 'ready',
		error = 'error',
		not_responding = 'not_responding',
		inactive = 'inactive',
		unknown = 'unknown',
	}

	export class $mpk_tss_pereferial_domain_unit extends $mol_object {
		id() : string { throw new $mpk_tss_todo }
		type(): $mpk_tss_pereferial_domain_type { throw new $mpk_tss_todo }
		element(): string { throw new $mpk_tss_todo }
		status(): $mpk_tss_pereferial_domain_status { throw new $mpk_tss_todo }
 
		parameters(): $mpk_tss_pereferial_domain_parameter[] { return [] }
	}
}

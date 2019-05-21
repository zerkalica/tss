namespace $ {
	export type $mpk_tss_pereferials_domain_unit_type = string

	export type $mpk_tss_pereferials_domain_unit_parameter_value = {
		type: 'string'
		value: string
	} | {
		type: 'status'
		value: $mpk_tss_pereferials_domain_unit_status
	}

	export class $mpk_tss_pereferials_domain_unit_parameter extends $mol_object {
		name(): string { return void 0 }
		value(): $mpk_tss_pereferials_domain_unit_parameter_value | null { return void 0}
		updated(): $mol_time_moment | null { return void 0}
	}

	export enum $mpk_tss_pereferials_domain_unit_status {
		ready = 'ready',
		error = 'error',
		not_responding = 'not_responding',
		inactive = 'inactive',
		unknown = 'unknown',
	}

	export class $mpk_tss_pereferials_domain_unit extends $mol_object {
		id() : string { return void 0 }
		type(): $mpk_tss_pereferials_domain_unit_type { return void 0 }
		element(): string { return void 0}
		status(): $mpk_tss_pereferials_domain_unit_status { return void 0}

		parameters(): $mpk_tss_pereferials_domain_unit_parameter[] { return [] }
	}

	export class $mpk_tss_pereferials_domain extends $mol_object {
		unit(id: string): $mpk_tss_pereferials_domain_unit {
			throw new Error('implement')
		}
		units(): $mpk_tss_pereferials_domain_unit[] {
			throw new Error('implement')
		}
	}

	export class $mpk_tss_pereferials_domain_mock extends $mpk_tss_pereferials_domain {
		max_units() {
			return 10
		}

		@ $mol_mem_key
		unit( id : string ) {
			const status = $mpk_tss_pereferials_domain_stub_unit_status()
			return $mpk_tss_pereferials_domain_unit.make({
				id : $mol_const(id) ,
				element: $mol_const($mpk_tss_stub_unit_name()),
				type: $mol_const($mpk_tss_stub_unit_type()),
				parameters: $mol_const($mpk_tss_pereferials_domain_stub_unit_parameters(status
				)),
				status: $mol_const(status),
			})
		}

		@ $mol_mem
		units() {
			var next : $mpk_tss_pereferials_domain_unit[] = []
			const max = this.max_units()
			for( var i = 1 ; i <= max ; ++i ) {
				next.push( this.unit( ( i * 123456789 % 987654321 ).toString( 16 ).toUpperCase() ) )
			}
			return next
		}
	}
}


namespace $ {
	export type $mpk_tss_pereferials_domain_unit_type = string

	export class $mpk_tss_pereferials_domain_unit_parameter extends $mol_object {
		name(): string { return void 0 }
		value(): string | null { return void 0}
		updated(): $mol_time_moment | null { return void 0}
	}

	export class $mpk_tss_pereferials_domain_unit extends $mol_object {
		id() : string { return void 0 }
		type(): $mpk_tss_pereferials_domain_unit_type { return void 0 }
		element(): string { return void 0}
		parameters(): $mpk_tss_pereferials_domain_unit_parameter[] { return [] }
		status(): $mpk_tss_domain_status { return void 0}
	}

	export class $mpk_tss_pereferials_domain extends $mol_object {
		unit(id: string): $mpk_tss_pereferials_domain_unit {
			throw new Error('implement')
		}
		units(): $mpk_tss_pereferials_domain_unit[] {
			throw new Error('implement')
		}
	}

	export function $mpk_tss_pereferials_domain_stub_unit(): $mpk_tss_pereferials_domain_unit_parameter {
		const name = $mol_stub_select_random( [ 'State' , 'Power source' , 'Voltage', 'Bat. level', 'Bat. time' ])
		let value: string = 'unknown'
		switch (name) {
			case 'State':
				value = $mpk_tss_stub_status()
				break
			case 'Power source':
				value = $mol_stub_select_random(['Line', 'Internal'])
				break
			case 'Voltage':
				value = $mol_stub_select_random(['3V', '6V', '12V', '231V'])
				break
			case 'Bat. level':
				value = $mol_stub_select_random(['100%', '50%', '5%'])
			case 'Bat. time':
				value = $mol_stub_select_random(['11m', '22m', '40m', '1day'])
				break
		}

		return $mpk_tss_pereferials_domain_unit_parameter.make({
			name: $mol_const(name),
			value: $mol_const(value),
			updated: $mol_const($mol_stub_time()),
		})
	}

	export class $mpk_tss_pereferials_domain_mock extends $mpk_tss_pereferials_domain {
		max_parameters() {
			return 5
		}

		max_units() {
			return 10
		}

		@ $mol_mem_key
		unit( id : string ) {
			const parameters: $mpk_tss_pereferials_domain_unit_parameter[] = []
			const max = this.max_parameters()
			for (let i = 0; i < max; i++) {
				parameters.push($mpk_tss_pereferials_domain_stub_unit())
			}

			return $mpk_tss_pereferials_domain_unit.make({
				id : $mol_const( id ) ,
				element: $mol_const($mpk_tss_stub_unit_name()),
				type: $mol_const($mpk_tss_stub_unit_type()),
				parameters: $mol_const(parameters),
				status: $mol_const($mpk_tss_stub_status()),
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

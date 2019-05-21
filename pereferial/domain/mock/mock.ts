namespace $ {
	export class $mpk_tss_pereferial_domain_mock extends $mpk_tss_pereferial_domain {
		max_units() {
			return 4
		}

		@ $mol_mem_key
		unit( id : string ) {
			const status = $mpk_tss_pereferial_domain_mock_stub_status()
			return $mpk_tss_pereferial_domain_unit.make({
				id : $mol_const(id) ,
				element: $mol_const($mpk_tss_pereferial_domain_mock_stub_name()),
				type: $mol_const($mpk_tss_pereferial_domain_mock_stub_type()),
				parameters: $mol_const($mpk_tss_pereferial_domain_mock_stub_parameters(status)),
				status: $mol_const(status),
			})
		}

		@ $mol_mem
		units() {
			var next : $mpk_tss_pereferial_domain_unit[] = []
			const max = this.max_units()
			for( var i = 1 ; i <= max ; ++i ) {
				next.push( this.unit( ( i * 123456789 % 987654321 ).toString( 16 ).toUpperCase() ) )
			}
			return next
		}
	}

	function $mpk_tss_pereferial_domain_mock_stub_status() {
		return $mol_stub_select_random( [
			'ready', 'error', 'not_responding', 'inactive', 'unknown'
		] as $mpk_tss_pereferial_domain_unit_status[])
	}

	function $mpk_tss_pereferial_domain_mock_stub_type() {
		return $mol_stub_select_random( [ 'UPS' ] )
	}

	function $mpk_tss_pereferial_domain_mock_stub_name() {
		const firm = $mol_stub_select_random( [
			'Shtil 1103L',
			'Shtil 1104M',
		] )
		const number = $mol_stub_select_random( [ 'N1', 'N2', 'N3', 'N4' ] )

		return `${firm} ${number}`
	}


	function $mpk_tss_pereferial_domain_mock_stub_parameters(
		status: $mpk_tss_pereferial_domain_unit_status
	): $mpk_tss_pereferial_domain_unit_parameter[] {
		const unknown = status === $mpk_tss_pereferial_domain_unit_status.not_responding

		const mc = <V>(arg: V) => $mol_const(unknown ? null : arg)
		const str = (value: string) => mc({type: 'string', value} as $mpk_tss_pereferial_domain_unit_parameter_value)

		return [
			$mpk_tss_pereferial_domain_unit_parameter.make({
				name: $mol_const('State'),
				value: $mol_const(
					{
						type: 'status',
						value: status,
					} as $mpk_tss_pereferial_domain_unit_parameter_value
				),
				updated: $mol_const($mol_stub_time(60)),
			}),

			$mpk_tss_pereferial_domain_unit_parameter.make({
				name: $mol_const('Power source'),
				value: str($mol_stub_select_random(['Line', 'Internal'])),
				updated: mc($mol_stub_time(60)),
			}),

			$mpk_tss_pereferial_domain_unit_parameter.make({
				name: $mol_const('Voltage'),
				value: str(String(200 + Math.ceil(Math.random() * 10)) + 'V'),
				updated: mc($mol_stub_time(60)),
			}),

			$mpk_tss_pereferial_domain_unit_parameter.make({
				name: $mol_const('Bat. level'),
				value: str(String(Math.ceil(Math.random() * 100)) + '%'),
				updated: mc($mol_stub_time(60)),
			}),
			$mpk_tss_pereferial_domain_unit_parameter.make({
				name: $mol_const('Bat. time'),
				value: str(String(10 + Math.ceil(Math.random() * 360)) + 'm'),
				updated: mc($mol_stub_time(60)),
			}),
		]
	}
}

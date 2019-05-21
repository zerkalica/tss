namespace $ {
	export function $mpk_tss_pereferials_domain_stub_unit_status() {
		return $mol_stub_select_random( [
			'ready', 'error', 'not_responding', 'inactive', 'unknown'
		] as $mpk_tss_pereferials_domain_unit_status[])
	}

	export function $mpk_tss_pereferials_domain_stub_unit_parameters(
		status: $mpk_tss_pereferials_domain_unit_status
	): $mpk_tss_pereferials_domain_unit_parameter[] {
		const unknown = status === $mpk_tss_pereferials_domain_unit_status.not_responding

		const mc = <V>(arg: V) => $mol_const(unknown ? null : arg)
		const str = (value: string) => mc({type: 'string', value} as $mpk_tss_pereferials_domain_unit_parameter_value)

		return [
			$mpk_tss_pereferials_domain_unit_parameter.make({
				name: $mol_const('State'),
				value: $mol_const(
					{
						type: 'status',
						value: status,
					} as $mpk_tss_pereferials_domain_unit_parameter_value
				),
				updated: $mol_const($mol_stub_time(60)),
			}),

			$mpk_tss_pereferials_domain_unit_parameter.make({
				name: $mol_const('Power source'),
				value: str($mol_stub_select_random(['Line', 'Internal'])),
				updated: mc($mol_stub_time(60)),
			}),

			$mpk_tss_pereferials_domain_unit_parameter.make({
				name: $mol_const('Voltage'),
				value: str(String(200 + Math.ceil(Math.random() * 10)) + 'V'),
				updated: mc($mol_stub_time(60)),
			}),

			$mpk_tss_pereferials_domain_unit_parameter.make({
				name: $mol_const('Bat. level'),
				value: str(String(Math.ceil(Math.random() * 100)) + '%'),
				updated: mc($mol_stub_time(60)),
			}),
			$mpk_tss_pereferials_domain_unit_parameter.make({
				name: $mol_const('Bat. time'),
				value: str(String(10 + Math.ceil(Math.random() * 360)) + 'm'),
				updated: mc($mol_stub_time(60)),
			}),
		]
	}
}

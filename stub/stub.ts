namespace $ {
	export function $mpk_tss_stub_unit_type() {
		return $mol_stub_select_random( [ 'UPS' , 'AVR' ] )
	}

	export function $mpk_tss_stub_unit_name() {
		const firm = $mol_stub_select_random( [
			'Shtil 1103L',
			'Shtil 1104M',
			'AVR Electricity system'
		] )
		const number = $mol_stub_select_random( [ 'N1', 'N2', 'N3', 'N4' ] )

		return `${firm} ${number}`
	}

	export function $mpk_tss_stub_status(): $mpk_tss_domain_status {
		return $mol_stub_select_random( [ 'ready' , 'error' , 'warning', 'unknown', 'nr' ] as $mpk_tss_domain_status[] )
	}
}

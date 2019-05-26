namespace $ {
	
	export class $mpk_tss_pereferial_domain_mock extends $mpk_tss_pereferial_domain {
		max_units() { return 4 }

		@ $mol_mem_key
		unit(id : string): $mpk_tss_pereferial_domain_unit {
			return $mpk_tss_pereferial_domain_mock_ups.make({ id: $mol_const(id) })
		}

		@ $mol_mem
		units() {
			return $mpk_tss_stub_ids(this.max_units())
				.map(id => this.unit(id))
				.sort((unitA, unitB) => {
					const a = unitA.status()
					const b = unitB.status()
					const aw = $mpk_tss_pereferial_domain_status_weights[a]
					const bw = $mpk_tss_pereferial_domain_status_weights[b]

					if (aw === bw) return 0
					if (aw > bw) return 1
					if (aw < bw) return -1
				})
		}
	}

	class $mpk_tss_pereferial_domain_mock_ups extends $mpk_tss_pereferial_domain_ups {
		@$mpk_tss_stub_mem
		status() {
			return $mpk_tss_pereferial_domain_mock_stub_status()
		}

		@$mpk_tss_stub_mem
		name() {
			const firm = $mol_stub_select_random( [
				'Shtil 1103L',
				'Shtil 1104M',
			] )
			const number = $mol_stub_select_random( [ 'N1', 'N2', 'N3', 'N4' ] )
	
			return `${firm} ${number}`
		}

		@$mpk_tss_stub_mem
		updated(next?: $mol_time_moment) {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mol_stub_time(-60)
		}

		@$mpk_tss_stub_mem
		power_source() {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mol_stub_select_random(['Line', 'Internal'] as $mpk_tss_pereferial_domain_ups_power_source[])
		}

		@$mpk_tss_stub_mem
		voltage(): number {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mpk_tss_stub_number(0, 250)
		}

		@$mpk_tss_stub_mem
		battery_level(): number {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mpk_tss_stub_number(0, 100)
		}
		@$mpk_tss_stub_mem
		battery_time(): $mol_time_duration {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return new $mol_time_duration({minute: $mpk_tss_stub_number(0, 300)})
		}
	}

	function $mpk_tss_pereferial_domain_mock_stub_status() {
		return $mol_stub_select_random( [
			'ready', 'error', 'not_responding', 'inactive', 'unknown'
		] as $mpk_tss_pereferial_domain_status[])
	}
}

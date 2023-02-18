namespace $ {
	
	export class $mpk_tss_pereferial_domain_mock_units extends $mpk_tss_pereferial_domain_units {
		max_units() { return 4 }

		@ $mol_mem_key
		unit(id : string) {
			return $mpk_tss_pereferial_domain_mock_ups.make({ id: $mol_const(id) })
		}

		@ $mol_mem
		/* protected */ units_all() {
			return $mpk_tss_stub_ids(this.max_units())
				.map(id => this.unit(id))
				.sort((unitA, unitB) => {
					const a = unitA.status()
					const b = unitB.status()
					const aw = $mpk_tss_pereferial_domain_status_weights[a]
					const bw = $mpk_tss_pereferial_domain_status_weights[b]

					if (aw > bw) return 1
					if (aw < bw) return -1

					return 0;
				})
		}

		@$mol_mem
		units() {
			const filter = this.filter_name().toUpperCase()
			return this.units_all()
				.filter(unit => 
					unit.name().toUpperCase().indexOf(filter) !== -1
					|| (filter.length >=3 && unit.type().toUpperCase().indexOf(filter) !== -1)
				)
		}
	}

	class $mpk_tss_pereferial_domain_mock_ups extends $mpk_tss_pereferial_domain_ups {
		@$mol_memo.method
		status() {
			return $mpk_tss_pereferial_domain_mock_stub_status()
		}

		@$mol_memo.method
		name() {
			const firm = $mol_array_lottery( [
				'Shtil 1103L',
				'Shtil 1104M',
			] )
			const number = $mol_array_lottery( [ 'N1', 'N2', 'N3', 'N4' ] )
	
			return `${firm} ${number}`
		}

		@$mol_mem
		override updated(next?: $mol_time_moment) {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mol_stub_time(-60)
		}

		@$mol_memo.method
		override power_source() {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mol_array_lottery(['linein', 'internal'] as $mpk_tss_pereferial_domain_ups_power_source[])
		}

		@$mol_memo.method
		override voltage() {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mpk_tss_stub_number(0, 250)
		}

		@$mol_memo.method
		override battery_level() {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return $mpk_tss_stub_number(0, 100)
		}
		@$mol_memo.method
		override battery_time() {
			if (this.status() === $mpk_tss_pereferial_domain_status.unknown) return null
			return new $mol_time_duration({minute: $mpk_tss_stub_number(0, 300)})
		}
	}

	function $mpk_tss_pereferial_domain_mock_stub_status() {
		return $mol_array_lottery( [
			'ready', 'error', 'not_responding', 'inactive', 'unknown'
		] as $mpk_tss_pereferial_domain_status[])
	}
}

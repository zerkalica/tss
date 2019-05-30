namespace $.$$ {
	export class $mpk_tss_pereferial_ups extends $.$mpk_tss_pereferial_ups {
		unit(): $mpk_tss_pereferial_domain_ups { throw new $mpk_tss_todo }
		status() { return this.unit().status() }
		updated() { return this.unit().updated() }
		@$mol_mem
		power_source() {
			if (!this.unit().power_source()) return this.Unknown()
			return $mpk_tss_pereferial_source.make({status: () => this.unit().power_source()})

		}

		@$mol_mem
		voltage() {
			if (!this.unit().voltage()) return this.Unknown()
			return $mpk_tss_parameter_voltage.make({value: () => this.unit().voltage()})
		}

		@$mol_mem
		battery_level() {
			if (!this.unit().battery_level()) return this.Unknown()
			return this.unit().battery_level() + '%'
		}

		@$mol_mem
		battery_time() {
			if (!this.unit().battery_time()) return this.Unknown()
			return $mpk_tss_parameter_duration.make({value: () => this.unit().battery_time()})
		}
	}
}

namespace $.$$ {
	export class $mpk_tss_pereferial_details_ups extends $.$mpk_tss_pereferial_details_ups {
		unit(): $mpk_tss_pereferial_domain_ups { throw new $mpk_tss_todo }
		status() { return this.unit().status() }
		updated() { return this.unit().updated() }
		power_source() {
			if (!this.unit().power_source()) return this.Unknown()
			return this.unit().power_source()
		}
		voltage() {
			if (!this.unit().voltage()) return this.Unknown()
			return this.unit().voltage() + 'V'
		}
		battery_level() {
			if (!this.unit().battery_level()) return this.Unknown()
			return this.unit().battery_level() + '%'
		}
		battery_time() {
			if (!this.unit().battery_time()) return this.Unknown()
			return this.unit().battery_time().minute + 'm'
		}
	}
}

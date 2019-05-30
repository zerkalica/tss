namespace $.$$ {
	export class $mpk_tss_pereferial_ups extends $.$mpk_tss_pereferial_ups {
		unit(): $mpk_tss_pereferial_domain_ups { throw new $mpk_tss_todo }

		updated() { return this.unit().updated() }

		@$mol_mem
		status() { return $mpk_tss_pereferial_status.make({status: () => this.unit().status()}) }

		@$mol_mem
		power_source() {
			return this.unit().power_source() && $mpk_tss_pereferial_source.make({status: () => this.unit().power_source()})
		}

		@$mol_mem
		voltage() {
			return this.unit().voltage() && $mpk_tss_parameter_voltage.make({value: () => this.unit().voltage()})
		}

		@$mol_mem
		battery_level() {
			return this.unit().battery_level() && (this.unit().battery_level() + '%')
		}

		@$mol_mem
		battery_time() {
			return this.unit().battery_time() && $mpk_tss_parameter_duration.make({value: () => this.unit().battery_time()})
		}
	}
}

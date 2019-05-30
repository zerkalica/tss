namespace $.$$ {
	export class $mpk_tss_pereferial_link extends $.$mpk_tss_pereferial_link {
		unit(): $mpk_tss_pereferial_domain_unit {
			throw new $mpk_tss_todo
		}

		unit_id() {
			return this.unit().id()
		}

		type() {
			return this.unit().type()
		}

		name() {
			return this.unit().name()
		}

		unit_status() {
			return this.unit().status()
		}

		unit_status_click(event?: Event) {
			if (event) event.preventDefault()
			this.unit().updated(new $mol_time_moment())
		}
	}
}

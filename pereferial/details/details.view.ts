namespace $.$$ {
	export class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
		unit(): $mpk_tss_pereferial_domain_unit {
			throw new $mpk_tss_todo
		}

		title() {
			return this.type() + ' | ' + this.name()
		}

		type() { return this.unit().type() }

		name() { return this.unit().name() }

		unit_details() {
			switch (this.unit().type()) {
				case $mpk_tss_pereferial_domain_type.ups: return this.Ups()
			}
			throw new $mpk_tss_todo_unknown
		}
	}
}

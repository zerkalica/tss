namespace $.$$ {
	export class $mpk_tss_parameter_date extends $.$mpk_tss_parameter_date {
		date(): $mol_time_moment {
			throw new $mpk_tss_todo
		}

		date_formatted() {
			if (!this.date()) return this.Unknown()
			return this.date().native.toLocaleString()
		}
	}
}

namespace $.$$ {
	export class $mpk_tss_parameter_duration extends $.$mpk_tss_parameter_duration {
		value(): $mol_time_duration { throw new $mpk_tss_todo }
		formatted_value(): string {
			return this.value().minute + ' ' + this.minutes()
		}
	}
}

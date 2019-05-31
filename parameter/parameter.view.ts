namespace $.$$ {
	export class $mpk_tss_parameter extends $.$mpk_tss_parameter {
		Value_content() {
			if (this.value() === null || this.value() === undefined) return this.Unknown_value()

			return this.value()
		}

		Updated_value() {
			if (this.updated() === null || this.updated() === undefined) return this.Unknown_updated()

			return this.Date()
		}
	}
}

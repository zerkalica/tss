namespace $.$$ {
	export class $mpk_tss_reports_carriage_type extends $.$mpk_tss_reports_carriage_type {
		status_text() {
			return this.values()[this.value()] || this.value()
		}
	}
}

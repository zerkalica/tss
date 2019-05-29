namespace $.$$ {
	export class $mpk_tss_reports_carriage_load extends $.$mpk_tss_reports_carriage_load {
		status_text() {
			return this.statuses()[this.status()] || this.status()
		}
	}
}

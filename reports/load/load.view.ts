namespace $.$$ {
	export class $mpk_tss_reports_load extends $.$mpk_tss_reports_load {
		status_text() {
			return this.statuses()[this.status()] || this.status()
		}
	}
}

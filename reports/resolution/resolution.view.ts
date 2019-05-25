namespace $.$$ {
	export class $mpk_tss_reports_resolution extends $.$mpk_tss_reports_resolution {
		status_text() {
			return this.statuses()[this.status()] || this.status()
		}
	}
}

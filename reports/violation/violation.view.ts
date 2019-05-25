namespace $.$$ {
	export class $mpk_tss_reports_violation extends $.$mpk_tss_reports_violation {
		status_text() {
			return this.statuses()[this.status()] || this.status()
		}

		sub() {
			if (!this.status()) return [null]

			return super.sub()
		}
	}
}

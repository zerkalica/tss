namespace $.$$ {
	export class $mpk_tss_pereferials_unit_status extends $.$mpk_tss_pereferials_unit_status {
		status_text() {
			if (!this.status()) return this.statuses().unknown
			return this.statuses()[this.status()] || this.statuses().unknown
		}
	}
}

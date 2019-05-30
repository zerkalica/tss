namespace $.$$ {
	export class $mpk_tss_pereferial_source extends $.$mpk_tss_pereferial_source {
		status_text() {
			return this.statuses()[this.status()] || this.status()
		}
	}
}

namespace $.$$ {
	export class $mpk_tss_pereferial_status extends $.$mpk_tss_pereferial_status {
		status_text() {
			if (!this.status()) return this.statuses().unknown
			return this.statuses()[this.status()] || this.statuses().unknown
		}

		attr() {
			if (!this.colors()) return super.attr()
			return ({
				...super.attr() ,
				'mpk_tss_pereferial_status_type' :  this.status() ,
			})
		}
	}
}

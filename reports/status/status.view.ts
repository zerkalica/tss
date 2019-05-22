namespace $.$$ {
	export class $mpk_tss_reports_status extends $.$mpk_tss_reports_status {
		status_text() {
			return this.statuses()[this.status()]
		}

		attr() {
			if (!this.colors()) return super.attr()
			return ({
				...super.attr() ,
				'mpk_tss_reports_status_type' :  this.status() ,
			})
		}
	}
}

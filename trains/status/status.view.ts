namespace $.$$ {
	export class $mpk_tss_trains_status extends $.$mpk_tss_trains_status {
		status_text() {
			return this.statuses()[this.status()]
		}

		attr() {
			if (!this.colors()) return super.attr()
			return ({
				...super.attr() ,
				'mpk_tss_trains_status_type' :  this.status() ,
			})
		}
	}
}

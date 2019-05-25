namespace $.$$ {
	export class $mpk_tss_reports_delivery extends $.$mpk_tss_reports_delivery {
		status(): $mpk_tss_reports_domain_delivery { throw new $mpk_tss_todo }

		status_text() {
			return this.statuses()[this.status()] || this.status()
		}
	}
}

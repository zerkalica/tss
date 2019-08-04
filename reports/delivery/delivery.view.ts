namespace $.$$ {
	export class $mpk_tss_reports_delivery extends $.$mpk_tss_reports_delivery {
		status() {
			return $mpk_tss_reports_domain_delivery.preparing
		}

		status_text() {
			return this.statuses()[this.status()] || this.status()
		}

		Icon() {
			return this.icons()[this.status()] || this.icons().error
		}
	}

}

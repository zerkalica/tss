namespace $.$$ {
	export class $mpk_tss_reports_resolution extends $.$mpk_tss_reports_resolution {
		status(): $mpk_tss_reports_domain_resolution { throw new $mpk_tss_todo }

		status_text() {
			return this.statuses()[this.status()] || this.status()
		}

		Icon() {
			return this.icons()[this.status()] || this.icons().warning
		}
	}
}

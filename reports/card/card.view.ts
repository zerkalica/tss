namespace $.$$ {
	export class $mpk_tss_reports_card extends $.$mpk_tss_reports_card {
		report(): $mpk_tss_reports_domain_report {
			throw new $mpk_tss_todo
		}

		report_id() {
			return this.report().id()
		}

		train_number() {
			return this.report().train_number()
		}

		resolution() {
			return this.report().resolution()
		}

		started() {
			const start = this.report().started()

			return start ? start.native.toLocaleDateString() : null
		}

		average_speed() {
			return '' + this.report().average_speed() + ' km/h'
		}

		report_status() {
			return this.report().delivery()
		}

		report_status_click(even?: Event) {
			if (event) event.preventDefault()
			alert('Report...')
		}
	}
}

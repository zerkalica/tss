namespace $.$$ {
	export class $mpk_tss_trains_card extends $.$mpk_tss_trains_card {
		report(): $mpk_tss_trains_domain_report {
			throw new $mpk_tss_todo
		}

		report_id() {
			return this.report().id()
		}

		train_number() {
			return this.report().train_number()
		}

		violation_status() {
			return this.report().violation_status()
		}

		measurement_start() {
			const start = this.report().measurement_start()

			return start ? start.native.toLocaleDateString() : null
		}

		report_status() {
			return this.report().report_status()
		}

		report_status_click(even?: Event) {
			if (event) event.preventDefault()
			alert('Report...')
		}
	}
}

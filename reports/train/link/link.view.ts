namespace $.$$ {
	export class $mpk_tss_reports_train_link extends $.$mpk_tss_reports_train_link {
		report(): $mpk_tss_reports_domain_report {
			throw new $mpk_tss_todo
		}

		report_id() {
			return this.report().id()
		}

		train_number() {
			return this.report().train_number()
		}

		description() {
			return $mol_stub_message(1024)
		}

		resolution() {
			return this.report().resolution()
		}

		started() {
			const start = this.report().started()

			return start ? start.native.toLocaleDateString() : ''
		}

		average_speed() {
			return this.report().average_speed()
		}

		delivery() {
			return this.report().delivery()
		}

		report_status_click(even?: Event) {
			if (event) event.preventDefault()
			alert('Report...')
		}
	}
}

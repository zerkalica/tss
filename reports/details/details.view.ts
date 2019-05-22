namespace $.$$ {
	export class $mpk_tss_reports_details extends $.$mpk_tss_reports_details {
		report(): $mpk_tss_reports_domain_report {
			throw new $mpk_tss_todo
		}

		title() {
			return this.title_prefix() + ' № ' + this.report().train_number()
		}

		carriage_in_row(id: string) {
			return this.report().carriage(id)
		}

		carriage_rows() {
			return this.report().carriages().map(carriage => this.Carriage_row(carriage.id()))
		}
	}

	export class $mpk_tss_reports_details_carriage_row extends $.$mpk_tss_reports_details_carriage_row {
		carriage(): $mpk_tss_reports_domain_carriage {
			throw new $mpk_tss_todo
		}
		carriage_number() {
			return '' + this.carriage().carriage_number()
		}

		violation_status() {
			return this.carriage().violation_status()
		}
		load_type() {
			return this.carriage().load_type()
		}
		measured_speed() {
			return '' + this.carriage().measured_speed()
		}
		violation_type() {
			return this.carriage().violation_type()
		}
	}
}

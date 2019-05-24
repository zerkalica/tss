namespace $.$$ {
	export class $mpk_tss_reports_details_card extends $.$mpk_tss_reports_details_card {
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }

		title() {
			return this.title_prefix() + ' № ' + this.carriage_number()
		}

		carriage_id() {
			return this.carriage().id()
		}
	
		place() {
			return '' + this.carriage().place()
		}
	
		carriage_number() {
			return this.carriage().carriage_number()
		}
	
		violation_status() {
			return this.carriage().violation_status()
		}
		load_type() {
			return this.carriage().load_type()
		}
		violation_type() {
			return this.carriage().violation_type()
		}

		violation_status_total() {
			if (!this.violation_type()) return this.violation_status()
			return `${this.violation_status()} (${this.violation_type()})`
		}
	}
}

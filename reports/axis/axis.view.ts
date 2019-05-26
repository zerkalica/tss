namespace $.$$ {
	export class $mpk_tss_reports_axis extends $.$mpk_tss_reports_axis {
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }
		title() {
			return super.title().replace('%carriage_number', this.carriage().carriage_number())
		}
	}
}

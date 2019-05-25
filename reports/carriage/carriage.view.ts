namespace $.$$ {
	export class $mpk_tss_reports_carriage extends $.$mpk_tss_reports_carriage {
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
	
		resolution() {
			return this.carriage().resolution()
		}
		load() {
			return this.carriage().load()
		}
		violation() {
			return this.carriage().violation()
		}

		speed() {
			return this.carriage().measured_speed() + ' km/h'
		}
	}
}

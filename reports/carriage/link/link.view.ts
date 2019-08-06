namespace $.$$ {
	export class $mpk_tss_reports_carriage_link extends $.$mpk_tss_reports_carriage_link {
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }

		title() {
			return super.title()
				.replace('%train_number', this.carriage().train().train_number())
				.replace('%carriage_number', this.carriage_number())
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
			return this.carriage().measured_speed()
		}

		items() {
			return super.items().concat(this.additional())
		}
	}
}

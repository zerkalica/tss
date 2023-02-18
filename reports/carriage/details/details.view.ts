namespace $.$$ {
	export class $mpk_tss_reports_carriage_details extends $.$mpk_tss_reports_carriage_details {
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }

		title() {
			return super.title()
				.replace('%train_number', this.carriage().train().train_number())
				.replace('%carriage_number', this.carriage().carriage_number())
		}

		details() {
			const current = this.axle_current2()
			if (! current) return []
			return [ this.Axle_chart() ]
		}

		axle_current2() {
			return this.axle_current()!;
		}

		total_weight() {
			return this.carriage().total_weight()
		}

		type() {
			return this.carriage().type()
		}

		violation() {
			return this.carriage().violation()
		}

		length() {
			return this.carriage().length()
		}
	}
}

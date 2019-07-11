namespace $.$$ {
	export class $mpk_tss_reports_axle_chart extends $.$mpk_tss_reports_axle_chart {
		axle(): $mpk_tss_reports_domain_axle { throw new $mpk_tss_todo }
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }

		@$mol_mem
		wheel_left() {
			return this.axle().wheels()[0]
		}

		@$mol_mem
		wheel_right() {
			return this.axle().wheels()[1]
		}

		forces_left_x() {
			return this.wheel_left().forces()[0]
		}

		forces_right_x() {
			return this.wheel_right().forces()[0]
		}

		forces_left_y() {
			return this.wheel_left().forces()[1]
		}

		forces_right_y() {
			return this.wheel_right().forces()[1]
		}
	}
}

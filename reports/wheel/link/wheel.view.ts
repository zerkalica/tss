namespace $.$$ {
	export class $mpk_tss_reports_wheel_link extends $.$mpk_tss_reports_wheel_link {
		wheel(): $mpk_tss_reports_domain_wheel { throw new $mpk_tss_todo }

		id() {
			return this.wheel().id()
		}

		resolution() {
			return this.wheel().resolution() ?? ''
		}

		violation() {
			return this.wheel().violation()
		}

		name() {
			const side = this.wheel().id() === '1' ? 'L' : 'R'
			return `${this.axle_id()}.${side}`
		}
	}
}

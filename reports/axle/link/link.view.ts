namespace $.$$ {
	export class $mpk_tss_reports_axle_link extends $.$mpk_tss_reports_axle_link {
		axle(): $mpk_tss_reports_domain_axle { throw new $mpk_tss_todo }

		axle_id() {
			return this.axle().id() + ''
		}

		number() {
			return this.axle().axle_number()
		}

		resolution() {
			return this.axle().resolution()
		}

		violation() {
			return this.axle().violation()
		}

		wheel(id: string) {
			return this.axle().wheel(id)
		}

		wheels() {
			return this.axle().wheels().map(wheel => this.Wheel(wheel.id()))
		}
	}

	export class $mpk_tss_reports_axle_link_wheel extends $.$mpk_tss_reports_axle_link_wheel {
		wheel(): $mpk_tss_reports_domain_wheel { throw new $mpk_tss_todo }

		id() {
			return this.wheel().id()
		}

		resolution() {
			return this.wheel().resolution()
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

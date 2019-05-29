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

		@ $mol_mem
		forces_left() {
			return this.wheel_left().forces().map(force => force[1])
		}

		@ $mol_mem
		forces_right() {
			return this.wheel_right().forces().map(force => force[1])
		}

		@ $mol_mem
		ruler_data() {
			return this.wheel_right().forces()
		}

		@ $mol_mem
		ruler() {
			const result: Record<number, number> = {}
			const forces = this.ruler_data()
			for (let i = 0; i < forces.length; i++) {
				result[i] = forces[i][1]
			}

			return result
		}

		ruler_x_norm(id: string) {
			return '' + this.ruler_data()[Number(id)][0]
		}
	}
}

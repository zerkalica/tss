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
			return this.wheel_left().forces()[1]
		}

		@ $mol_mem
		forces_right() {
			return this.wheel_right().forces()[1]
		}

		@ $mol_mem
		ruler() {
			const result: Record<number, number> = {}
			const [, forces_y] = this.wheel_right().forces()
			for (let i = 0; i < forces_y.length; i++) {
				result[i] = forces_y[i]
			}

			return result
		}

		ruler_x_norm(id: string) {
			return id
			// return '' + this.wheel_right().forces()[0][Number(id)]
		}
	}

	export class $mpk_tss_reports_axle_chart_pane extends $.$mpk_tss_reports_axle_chart_pane {
		scale_x(next?: number): number {
			return this.scale(next && [next, this.scale()[1]])[0]
		}
	}
}

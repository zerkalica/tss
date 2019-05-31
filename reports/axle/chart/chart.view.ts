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

	export class $mpk_tss_reports_axle_chart_pane extends $.$mpk_tss_reports_axle_chart_pane {
		scale_limit(): [number, number] {
			return [20, 20]
		}

		scale_x(next?: number): number {
			return this.scale(next && [next, this.scale()[1]])[0]
		}

		scale_y(next?: number): number {
			return this.scale(next && [this.scale()[0], next])[1]
		}

		scale_xy(next?: number): number {
			return this.scale(next && [next, next])[0]
		}

		@$mol_mem
		scale(next?: [number, number]): [number, number] {
			const scale = super.scale() as [number, number]
			if (next === undefined) return scale
			let scale_x = next[0]
			let scale_y = next[1]
			const scale_limit = this.scale_limit()
			if (scale_x < scale[0]) scale_x = scale[0]
			if (scale_x > scale_limit[0]) scale_x = scale_limit[0]

			if (scale_y < scale[1]) scale_y = scale[1]
			if (scale_y > scale_limit[1]) scale_y = scale_limit[1]

			return [scale_x, scale_y]
		}
	}
}

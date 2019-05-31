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
		zoom_x_max() {
			return 20
		}

		@$mol_mem
		zoom_x(next?: number) {
			const [scale_x,] = super.scale()
			if (next === undefined) return scale_x

			const zoom_x_max = this.zoom_x_max()

			if (next < scale_x) return scale_x
			if (next > zoom_x_max) return zoom_x_max

			return next
		}

		zoom_y_max() {
			return 20
		}

		@$mol_mem
		zoom_y(next?: number) {
			const [,scale_y] = super.scale()
			if (next === undefined) return scale_y

			const zoom_y_max = this.zoom_y_max()

			if (next < scale_y) return scale_y
			if (next > zoom_y_max) return zoom_y_max

			return next
		}

		@$mol_mem
		scale() {
			return [
				this.zoom_x(),
				this.zoom_y(),
			]
		}
	}
}

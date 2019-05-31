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
		@$mol_mem
		zoom_x(next?: number) {
			const scale = super.scale()
			if (next === undefined) {
				return scale[0]
			}

			if (next < scale[0]) return scale[0]
			if (next > 20) return 20

			return next
		}

		@$mol_mem
		scale() {
			const scale = super.scale()
			const zoom = this.zoom_x()

			return [
				zoom,
				scale[1],
			]
		}

		@$mol_mem
		pan(next?: [number, number]): [number, number] {
			const shift = super.shift() as [number, number]
			if (next === undefined) return shift
			let shift_x = next[0]
			if (shift_x > this.gap_left()) shift_x = this.gap_left()
			// const size = this.size_real()
			// const scaled_x = Math.round(shift_x / this.scale()[0])
			// if (shift_x > 0) shift_x = 0
			return [
				shift_x,
				shift[1],
			]
		}

		shift() {
			return this.pan()
		}
	}
}

namespace $.$$ {
	export class $mpk_tss_reports_axle_chart extends $.$mpk_tss_reports_axle_chart {
		axle(): $mpk_tss_reports_domain_axle { throw new $mpk_tss_todo }
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }
		count() {
			return 30
		}

		@ $mol_mem
		length_series() {
			// const result: number[] = []
			// for (let i = 0, count = this.count(); i < count; i++) {
			// 	result.push(i)
			// }
			const wheel = this.axle().wheels()[0]
			return wheel.forces()
		}

		@ $mol_mem
		forces_left() {
			const wheel = this.axle().wheels()[0]
			return wheel.forces()
		}

		hor_label_text(key: string) {
			const points = this.forces_left().length
			const max = this.axle().max()
			return String(Math.ceil(Number(key) * (max/points)))
		}

		// length_series() {
		// 	const wheel = this.axle().wheels()[0]
		// 	return wheel.forces()
		// }

	}
}

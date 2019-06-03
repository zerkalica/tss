namespace $ {
	export class $mpk_tss_reports_domain_mock_trains extends $mpk_tss_reports_domain_trains {
		max_reports() { return 100 }

		@$mpk_tss_stub_mem
		report(id: string): $mpk_tss_reports_domain_report {
			return this.reports_all().find(report => report.id() === id) || this.reports_all()[0]
		}

		@$mpk_tss_stub_mem
		reports_all(): $mpk_tss_reports_domain_report[] {
			return $mpk_tss_stub_ids(this.max_reports())
				.map(id => $mpk_tss_reports_domain_mock_report.make({ id: $mol_const(id) }))
				.sort((r1, r2) => {
					if (r1.started() > r2.started()) return -1
					if (r1.started() < r2.started()) return 1
					return 0
				})
		}

		@$mol_mem
		reports(): $mpk_tss_reports_domain_report[] {
			const filter_number = this.filter_number().toUpperCase()
			const filter_resolution = this.filter_resolution()
			return this.reports_all()
				.filter(report => {
					if (filter_number && report.train_number().toUpperCase().indexOf(filter_number) === -1) {
						return false
					}

					if (filter_resolution && report.resolution() !== filter_resolution) {
						return false
					}

					return true
				})
			}
	}

	class $mpk_tss_reports_domain_mock_report extends $mpk_tss_reports_domain_report {
		@$mpk_tss_stub_mem
		train_number() {
			return '' + $mpk_tss_stub_number(1000, 9000) + '-' + $mpk_tss_stub_number(1000, 9000)
		}

		@$mpk_tss_stub_mem
		send_count() {
			return $mpk_tss_stub_number(0, 10)
		}

		@$mpk_tss_stub_mem
		resolution() {
			return this.carriages_store().carriages_all().reduce((status, carriage) => {
				if (carriage.resolution() === $mpk_tss_reports_domain_resolution.warning)
					return $mpk_tss_reports_domain_resolution.warning
				return status
			}, $mpk_tss_reports_domain_resolution.success)
		}

		@$mpk_tss_stub_mem
		delivery() {
			return $mpk_tss_reports_domain_mock_stub_report_status()
		}

		@$mpk_tss_stub_mem
		average_speed() {
			return $mpk_tss_stub_number(50, 55)
		}

		@$mpk_tss_stub_mem
		started() {
			return $mol_stub_time(-10)
		}

		@$mpk_tss_stub_mem
		protected carriages_store(): $mpk_tss_reports_domain_mock_carriages {
			return $mpk_tss_reports_domain_mock_carriages.make({
				train: $mol_const(this),
			})
		}

		@$mpk_tss_stub_mem
		carriages(config?: Partial<$mpk_tss_reports_domain_carriages>): $mpk_tss_reports_domain_carriages {
			return $mpk_tss_reports_domain_mock_carriages.make({
				...config,
				carriages_all: () => this.carriages_store().carriages_all(),
				carriage: (id: string) => this.carriages_store().carriage(id),
			})
		}
	}

	class $mpk_tss_reports_domain_mock_carriages extends $mpk_tss_reports_domain_carriages {
		@$mpk_tss_stub_mem
		train(): $mpk_tss_reports_domain_report { throw new $mpk_tss_todo }

		@$mpk_tss_stub_mem
		carriages_all(): $mpk_tss_reports_domain_carriage[] {
			return $mpk_tss_stub_ids($mpk_tss_stub_number(30, 45)).map((id, index) => {
				return $mpk_tss_reports_domain_mock_carriage.make({
					id : $mol_const(id),
					train: $mol_const(this.train()),
					place: $mol_const(index + 1),
				})
			})
		}

		@$mol_mem
		carriages(): $mpk_tss_reports_domain_carriage[] {
			const filter_number = this.filter_number().toUpperCase()
			const filter_resolution = this.filter_resolution()

			return this.carriages_all()
				.filter(carriage => {
					if (filter_number && carriage.carriage_number().toUpperCase().indexOf(filter_number) === -1) {
						return false
					}

					if (filter_resolution && carriage.resolution() !== filter_resolution) {
						return false
					}

					return true
				})
		}

		carriage(id: string): $mpk_tss_reports_domain_carriage {
			return this.carriages_all().find(carriage => carriage.id() === id) || this.carriages_all()[0]
		}
	}

	class $mpk_tss_reports_domain_mock_carriage extends $mpk_tss_reports_domain_carriage {
		@$mpk_tss_stub_mem
		place() {
			return $mpk_tss_stub_number(1, 50)
		}

		@$mpk_tss_stub_mem
		resolution() {
			return this.axis().reduce(
				(resolution, axle) => {
					if (axle.resolution() !== $mpk_tss_reports_domain_resolution.success) {
						return axle.resolution()
					}
					return resolution
				},
				$mpk_tss_reports_domain_resolution.success
			)
		}
	
		@$mpk_tss_stub_mem
		carriage_number() {
			return '' + $mpk_tss_stub_number(1000, 9000) + '-' + $mpk_tss_stub_number(1000, 9000)
		}

		@$mpk_tss_stub_mem
		load() {
			return $mpk_tss_reports_domain_mock_stub_carriage_load()
		}

		@$mpk_tss_stub_mem
		type(): $mpk_tss_reports_domain_carriage_type {
			return $mpk_tss_reports_domain_mock_stub_carriage_type()
		}

		@$mpk_tss_stub_mem
		length(): number {
			return $mpk_tss_stub_number(65, 85)
		}

		@$mpk_tss_stub_mem
		total_weight(): number {
			return $mpk_tss_stub_number(65, 85) * 1000
		}

		@$mpk_tss_stub_mem
		measured_speed() {
			return $mpk_tss_stub_number(50, 55)
		}

		@$mpk_tss_stub_mem
		violation() {
			if (this.resolution() == $mpk_tss_reports_domain_resolution.success) return null

			return this.axis().reduce(
				(violation, axle) => {
					if (axle.violation() !== null) {
						return axle.violation()
					}
					return violation
				},
				null as $mpk_tss_reports_domain_violation | null
			)
		}

		@$mpk_tss_stub_mem
		axis() {
			return [1, 2, 3, 4].map(index => {
				return $mpk_tss_reports_domain_mock_axle.make({
					id: $mol_const(String(index)),
					axle_number: $mol_const(index),
				})
			})
		}

		@$mpk_tss_stub_mem
		axle(id: string) {
			return this.axis().find(axle => axle.id() === id)
		}
	}

	class $mpk_tss_reports_domain_mock_axle extends $mpk_tss_reports_domain_axle {
		@$mpk_tss_stub_mem
		resolution() {
			return this.wheels().reduce(
				(resolution, wheel) => {
					if (wheel.resolution() !== $mpk_tss_reports_domain_resolution.success) {
						return wheel.resolution()
					}
					return resolution
				},
				$mpk_tss_reports_domain_resolution.success
			)
		}

		@$mpk_tss_stub_mem
		violation() {
			if (this.resolution() === $mpk_tss_reports_domain_resolution.success) return null

			return this.wheels().reduce(
				(violation, wheel) => {
					if (wheel.violation() !== null) {
						return wheel.violation()
					}
					return violation
				},
				null as $mpk_tss_reports_domain_violation | null
			)
		}

		@$mpk_tss_stub_mem
		wheels(): $mpk_tss_reports_domain_wheel[] {
			return [1, 2].map(id => $mpk_tss_reports_domain_mock_wheel.make({
				id: $mol_const('' + id),
			}))
		}

		@$mpk_tss_stub_mem
		wheel(id: string) {
			return this.wheels().find(wheel => wheel.id() === id) || this.wheels()[0]
		}
	}

	class $mpk_tss_reports_domain_mock_wheel extends $mpk_tss_reports_domain_wheel {
		@$mpk_tss_stub_mem
		resolution() {
			if (Math.random() > 0.999) return $mpk_tss_reports_domain_resolution.warning
			return $mpk_tss_reports_domain_resolution.success
		}

		@$mpk_tss_stub_mem
		violation() {
			if (this.resolution() === $mpk_tss_reports_domain_resolution.success) return null

			return $mpk_tss_reports_domain_mock_stub_violation()
		}

		@$mpk_tss_stub_mem
		forces(): Record<number, number> {
			const samples_count = 10000

			const max_x = 600
			const base_y = 80
			const amplitude = 5
			const freq = 50
			const result = {}
			const ratio = max_x / samples_count

			for (let i = 0; i < samples_count; i++) {
				const deviation = Math.random() > 0.6 ? (Math.random() * 3) : Math.random()
				const value = Number((base_y + Math.sin((freq / samples_count) * i) * amplitude * deviation).toFixed(3))
				result[i * ratio] = value
			}

			return result
		}
	}

	function $mpk_tss_reports_domain_mock_stub_carriage_type() {
		return $mol_stub_select_random( [
			$mpk_tss_reports_domain_carriage_type.tank,
			$mpk_tss_reports_domain_carriage_type.hopper,
			$mpk_tss_reports_domain_carriage_type.flatcar,
			$mpk_tss_reports_domain_carriage_type.covered,
		] as $mpk_tss_reports_domain_carriage_type[])
	}

	function $mpk_tss_reports_domain_mock_stub_violation() {
		return $mol_stub_select_random( [
			$mpk_tss_reports_domain_violation.slider,
			$mpk_tss_reports_domain_violation.vyscherbiny,
			$mpk_tss_reports_domain_violation.sink,
			$mpk_tss_reports_domain_violation.dent,
		] as $mpk_tss_reports_domain_violation[])
	}

	function $mpk_tss_reports_domain_mock_stub_report_status() {
		return $mol_stub_select_random( [
			$mpk_tss_reports_domain_delivery.preparing,
			$mpk_tss_reports_domain_delivery.sending,
			$mpk_tss_reports_domain_delivery.sent,
			$mpk_tss_reports_domain_delivery.error,
		] as $mpk_tss_reports_domain_delivery[])
	}

	function $mpk_tss_reports_domain_mock_stub_carriage_load() {
		return $mol_stub_select_random( [
			$mpk_tss_reports_domain_load.free,
			$mpk_tss_reports_domain_load.full,
		] as $mpk_tss_reports_domain_load[])
	}
}

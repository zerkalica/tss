namespace $ {
	export class $mpk_tss_reports_domain_mock_trains extends $mpk_tss_reports_domain_trains {
		max_reports() { return 10000 }

		@$mol_memo.method
		report(id: string): $mpk_tss_reports_domain_report {
			return this.reports_all().find(report => report.id() === id) || this.reports_all()[0]
		}

		@$mol_memo.method
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
			const result = this.reports_all()
				.filter(report => {
					if (filter_number && report.train_number().toUpperCase().indexOf(filter_number) === -1) {
						return false
					}

					if (filter_resolution && report.resolution() !== filter_resolution) {
						return false
					}

					return true
				})

			return result
		}
	}

	class $mpk_tss_reports_domain_mock_report extends $mpk_tss_reports_domain_report {
		@$mol_memo.method
		train_number() {
			return '' + $mpk_tss_stub_number(1000, 9000) + '-' + $mpk_tss_stub_number(1000, 9000)
		}

		@$mol_memo.method
		send_count() {
			return $mpk_tss_stub_number(0, 10)
		}

		@$mol_memo.method
		resolution() {
			return $mol_stub_select_random([
				$mpk_tss_reports_domain_resolution.warning,
				$mpk_tss_reports_domain_resolution.success
			] as $mpk_tss_reports_domain_resolution[])
		}

		@$mol_memo.method
		delivery() {
			return $mpk_tss_reports_domain_mock_stub_report_status()
		}

		@$mol_memo.method
		average_speed() {
			return $mpk_tss_stub_number(50, 55)
		}

		@$mol_memo.method
		started() {
			return $mol_stub_time(-10)
		}

		@$mol_memo.method
		carriages_store(): $mpk_tss_reports_domain_mock_carriages {
			return $mpk_tss_reports_domain_mock_carriages.make({
				parent_resolution: () => this.resolution(),
				train: $mol_const(this),
			})
		}

		@$mol_memo.method
		carriages(config?: Partial<$mpk_tss_reports_domain_carriages>): $mpk_tss_reports_domain_carriages {
			return $mpk_tss_reports_domain_mock_carriages.make({
				...config,
				parent_resolution: () => this.carriages_store().parent_resolution(),
				carriages_all: () => this.carriages_store().carriages_all(),
				carriage: (id: string) => this.carriages_store().carriage(id),
			})
		}
	}

	class $mpk_tss_reports_domain_mock_carriages extends $mpk_tss_reports_domain_carriages {
		@$mol_memo.method
		parent_resolution(): $mpk_tss_reports_domain_resolution { throw new $mpk_tss_todo }

		@$mol_memo.method
		train(): $mpk_tss_reports_domain_report { throw new $mpk_tss_todo }

		@$mol_memo.method
		carriages_all(): $mpk_tss_reports_domain_carriage[] {
			const range = $mpk_tss_stub_ids($mpk_tss_stub_number(30, 45))
			const resolution = this.parent_resolution()
			const error_count = resolution !== $mpk_tss_reports_domain_resolution.success ? range.length : 0
			const error_items = $mpk_tss_stub_pick_random(range, error_count)

			return range.map((id, index) => {
				return $mpk_tss_reports_domain_mock_carriage.make({
					id : $mol_const(id),
					resolution: $mol_const(error_items.has(id) ? this.parent_resolution() : $mpk_tss_reports_domain_resolution.success),
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

		@$mol_memo.method
		place() {
			return $mpk_tss_stub_number(1, 50)
		}

		@$mol_memo.method
		resolution(): $mpk_tss_reports_domain_resolution {
			throw new $mpk_tss_todo
		}
	
		@$mol_memo.method
		carriage_number() {
			return '' + $mpk_tss_stub_number(1000, 9000) + '-' + $mpk_tss_stub_number(1000, 9000)
		}

		@$mol_memo.method
		load() {
			return $mpk_tss_reports_domain_mock_stub_carriage_load()
		}

		@$mol_memo.method
		type(): $mpk_tss_reports_domain_carriage_type {
			return $mpk_tss_reports_domain_mock_stub_carriage_type()
		}

		@$mol_memo.method
		length(): number {
			return $mpk_tss_stub_number(65, 85)
		}

		@$mol_memo.method
		total_weight(): number {
			return $mpk_tss_stub_number(65, 85) * 1000
		}

		@$mol_memo.method
		measured_speed() {
			return $mpk_tss_stub_number(50, 55)
		}

		@$mol_memo.method
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

		@$mol_memo.method
		axis() {
			const range = [1, 2, 3, 4]
			const resolution = this.resolution()
			const error_count = resolution !== $mpk_tss_reports_domain_resolution.success ? range.length : 0
			const error_items = $mpk_tss_stub_pick_random(range, error_count)

			return range.map(index => {
				return $mpk_tss_reports_domain_mock_axle.make({
					id: $mol_const(String(index)),
					resolution: $mol_const(error_items.has(index)
						? resolution
						: $mpk_tss_reports_domain_resolution.success
					),
					axle_number: $mol_const(index),
				})
			})
		}

		@$mol_memo.method
		axle(id: string) {
			return this.axis().find(axle => axle.id() === id)
		}
	}

	class $mpk_tss_reports_domain_mock_axle extends $mpk_tss_reports_domain_axle {
		@$mol_memo.method
		resolution(): $mpk_tss_reports_domain_resolution {
			throw new $mpk_tss_todo
		}

		@$mol_memo.method
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

		@$mol_memo.method
		wheels(): $mpk_tss_reports_domain_wheel[] {
			const range = [1, 2]
			const resolution = this.resolution()
			const error_count = resolution !== $mpk_tss_reports_domain_resolution.success ? range.length : 0
			const error_items = $mpk_tss_stub_pick_random(range, error_count)

			return range.map(id => $mpk_tss_reports_domain_mock_wheel.make({
				id: $mol_const('' + id),
				resolution: $mol_const(error_items.has(id)
					? resolution
					: $mpk_tss_reports_domain_resolution.success
				),
			}))
		}

		@$mol_memo.method
		wheel(id: string) {
			return this.wheels().find(wheel => wheel.id() === id) || this.wheels()[0]
		}
	}

	class $mpk_tss_reports_domain_mock_wheel extends $mpk_tss_reports_domain_wheel {
		@$mol_memo.method
		resolution(): $mpk_tss_reports_domain_resolution {
			throw new $mpk_tss_todo
		}

		@$mol_memo.method
		violation() {
			if (this.resolution() === $mpk_tss_reports_domain_resolution.success) return null

			return $mpk_tss_reports_domain_mock_stub_violation()
		}

		@$mol_memo.method
		forces(): readonly [readonly number[], readonly number[]] {
			const samples_count = 10000

			const max_x = 600
			const base_y = 80
			const amplitude = 5
			const freq = 50
			const series_x = [] as number[]
			const series_y = [] as number[]
			const ratio = max_x / samples_count

			for (let i = 0; i < samples_count; i++) {
				const deviation = Math.random() > 0.6 ? (Math.random() * 3) : Math.random()
				const value = Number((base_y + Math.sin((freq / samples_count) * i) * amplitude * deviation).toFixed(3))
				series_x.push(Number(Number(i * ratio).toFixed(3)))
				series_y.push(value)
			}

			return [series_x, series_y] as const
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

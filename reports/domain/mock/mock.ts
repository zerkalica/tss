namespace $ {
	export class $mpk_tss_reports_domain_mock extends $mpk_tss_reports_domain {
		max_reports() { return 100 }

		@$mpk_tss_stub_mem
		report(id: string): $mpk_tss_reports_domain_report {
			return $mpk_tss_reports_domain_mock_report.make({ id: $mol_const(id) })
		}

		@$mpk_tss_stub_mem
		reports_all(): $mpk_tss_reports_domain_report[] {
			return $mpk_tss_stub_ids(this.max_reports())
				.map(id => this.report(id))
				.sort((r1, r2) => {
					if (r1.started() > r2.started()) return -1
					if (r1.started() < r2.started()) return 1
					return 0
				})
		}

		@$mol_mem
		reports(): $mpk_tss_reports_domain_report[] {
			const filter = this.filter_ids()
			return this.reports_all()
				.filter(report => {
					if (!filter) return true
					if (report.train_number().indexOf(filter) !== -1) return true
					if (report.id().indexOf(filter) !== -1) return true

					return false
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
			return new $mpk_tss_reports_domain_mock_carriages()
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
		carriages_all(): $mpk_tss_reports_domain_carriage[] {
			return $mpk_tss_stub_ids($mpk_tss_stub_number(30, 45)).map((id, index) => {
				const carriage = this.carriage(id)
				if (Math.random() > 0.96) {
					carriage.resolution = $mol_const($mpk_tss_reports_domain_resolution.warning)
				}
				carriage.place = $mol_const(index + 1)
				return carriage
			})
		}

		@$mol_mem
		filter_number(next?: string | null): string | null {
			return next || null
		}

		@$mol_mem
		filter_resolution(next?: $mpk_tss_reports_domain_resolution | null): $mpk_tss_reports_domain_resolution | null {
			return next || null
		}

		@$mol_mem
		carriages(): $mpk_tss_reports_domain_carriage[] {
			const filter_number = this.filter_number()
			const filter_resolution = this.filter_resolution()

			return this.carriages_all()
				.filter(carriage => {
					if (filter_number && carriage.carriage_number().indexOf(filter_number) === -1) {
						return false
					}

					if (filter_resolution && carriage.resolution() !== filter_resolution) {
						return false
					}

					return true
				})
		}

		@$mpk_tss_stub_mem
		carriage(id: string): $mpk_tss_reports_domain_carriage {
			return $mpk_tss_reports_domain_mock_carriage.make({ id : $mol_const(id) })
		}
	}

	class $mpk_tss_reports_domain_mock_carriage extends $mpk_tss_reports_domain_carriage {
		@$mpk_tss_stub_mem
		resolution() {
			return $mpk_tss_reports_domain_resolution.success
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
		measured_speed() {
			return $mpk_tss_stub_number(50, 55)
		}

		@$mpk_tss_stub_mem
		violation() {
			if (this.resolution() == $mpk_tss_reports_domain_resolution.success) return null
			return $mpk_tss_reports_domain_mock_stub_violation()
		}

		@$mpk_tss_stub_mem
		axis() {
			return $mol_range2().slice(1, 4).map(index => {
				return $mpk_tss_reports_domain_axle.make({
					id: $mol_const(String(index)),
					axle_number: $mol_const(index),
				})
			})
		}
	}

	function $mpk_tss_reports_domain_mock_stub_violation() {
		return $mol_stub_select_random( [
			$mpk_tss_reports_domain_violation.slider
		] as ($mpk_tss_reports_domain_violation)[])
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

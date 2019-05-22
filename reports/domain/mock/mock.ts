namespace $ {
	export class $mpk_tss_reports_domain_mock extends $mpk_tss_reports_domain {
		max_reports() { return 30 }

		@$mol_mem_key
		report(id: string): $mpk_tss_reports_domain_report {
			return $mpk_tss_reports_domain_mock_report.make({ id: $mol_const(id) })
		}

		@$mol_mem
		reports(): $mpk_tss_reports_domain_report[] {
			return $mpk_tss_stub_ids(this.max_reports())
				.map(id => this.report(id))
				.sort((r1, r2) => {
					if (r1.measurement_start() > r2.measurement_start()) return -1
					if (r1.measurement_start() < r2.measurement_start()) return 1
					return 0
				})
		}
	}

	class $mpk_tss_reports_domain_mock_report extends $mpk_tss_reports_domain_report {
		@$mol_mem
		train_number() {
			return String($mpk_tss_stub_number(1000, 9000)) + '-' + String($mpk_tss_stub_number(1000, 9000))
		}

		@$mol_mem
		send_count() {
			return $mpk_tss_stub_number(0, 10)
		}

		@$mol_mem
		violation_status() {
			return this.carriages()[0].violation_status()
		}

		@$mol_mem
		report_status() {
			return $mpk_tss_reports_domain_mock_stub_report_status()
		}

		@$mol_mem
		measurement_start() {
			return $mol_stub_time(-10)
		}

		@$mol_mem
		carriages(): $mpk_tss_reports_domain_carriage[] {
			return $mpk_tss_stub_ids(35).map((id, index) => {
				const carriage = this.carriage(id)
				carriage.carriage_number = $mol_const(index + 1)
				return carriage
			})
		}

		@$mol_mem_key
		carriage(id: string): $mpk_tss_reports_domain_carriage {
			return $mpk_tss_reports_domain_mock_carriage.make({ id : $mol_const(id) })
		}
	}

	class $mpk_tss_reports_domain_mock_carriage extends $mpk_tss_reports_domain_carriage {
		@$mol_mem
		violation_status() {
			return $mpk_tss_reports_domain_mock_stub_violation_status()
		}

		@$mol_mem
		load_type() {
			return $mpk_tss_reports_domain_mock_stub_carriage_load()
		}

		@$mol_mem
		measured_speed() {
			return $mpk_tss_stub_number()
		}

		@$mol_mem
		violation_type() {
			return $mpk_tss_reports_domain_mock_stub_violation_type()
		}

		@$mol_mem
		axis() {
			return $mol_range2().slice(1, 4).map(index => {
				return $mpk_tss_reports_domain_axle.make({
					id: $mol_const(String(index)),
					axle_number: $mol_const(index),
				})
			})
		}
	}

	function $mpk_tss_reports_domain_mock_stub_violation_type() {
		return $mol_stub_select_random( [
			'slider', null
		] as (null | $mpk_tss_reports_domain_violation_type)[])
	}

	function $mpk_tss_reports_domain_mock_stub_violation_status() {
		return $mol_stub_select_random( [
			'ready', 'warning',
		] as $mpk_tss_reports_domain_violation_status[])
	}

	function $mpk_tss_reports_domain_mock_stub_report_status() {
		return $mol_stub_select_random( [
			'preparing', 'sending', 'sended', 'error_try', 'error_no_send',
		] as $mpk_tss_reports_domain_report_status[])
	}

	function $mpk_tss_reports_domain_mock_stub_carriage_load() {
		return $mol_stub_select_random( [
			'free', 'full'
		] as $mpk_tss_reports_domain_load_type[])
	}
}

namespace $ {
	const t = $mpk_tss_todo

	export class $mpk_tss_reports_domain {
		@$mol_mem_key
		report(id: string): $mpk_tss_reports_domain_report {
			throw new t
		}

		@$mol_mem
		reports(): $mpk_tss_reports_domain_report[] {
			throw new t
		}
	}

	export enum $mpk_tss_reports_domain_violation_status {
		success = 'success',
		warning = 'warning',
	}

	export enum $mpk_tss_reports_domain_load_type {
		free = 'free',
		full = 'full',
	}

	export enum $mpk_tss_reports_domain_violation_type {
		slider = 'slider',
	}

	export class $mpk_tss_reports_domain_wheel extends $mol_object {
		id(): string { throw new t }
		violation_status(): $mpk_tss_reports_domain_violation_status { throw new t }
		force_vertical(): number { throw new t }
		force_horizontal(): number { throw new t }
	}

	export type $mpk_tss_reports_domain_axle_chart = [number, number]

	export class $mpk_tss_reports_domain_axle extends $mol_object {
		id(): string { return String(this.axle_number()) }
		axle_number(): number { throw new t }
		wheel_left(): $mpk_tss_reports_domain_wheel { throw new t }
		wheel_right(): $mpk_tss_reports_domain_wheel { throw new t }
		chart_data(): $mpk_tss_reports_domain_axle_chart[] { throw new t }
	}

	export class $mpk_tss_reports_domain_carriage extends $mol_object {
		id(): string { return this.carriage_number() }
		carriage_number(): string { throw new t }
		place(): number { throw new t }
		violation_status(): $mpk_tss_reports_domain_violation_status { throw new t }
		violation_type(): $mpk_tss_reports_domain_violation_type | null { throw new t }
		load_type(): $mpk_tss_reports_domain_load_type { throw new t }
		// Measured speed at time point, km/h
		measured_speed(): number { throw new t }
		cargo_weight(): number { throw new t }
		total_weight(): number { throw new t }
		carriage_length(): number { throw new t }
		axis(): $mpk_tss_reports_domain_axle[] { throw new t }
	}

	export enum $mpk_tss_reports_domain_report_status {
		preparing = 'preparing',
		sending = 'sending',
		sent = 'sent',
		error_try = 'error_try',
		error_no_send = 'error_no_send',
	}

	export class $mpk_tss_reports_domain_report extends $mol_object {
		id(): string { throw new t }
		train_number(): string { throw new t }
		send_count(): number { throw new t }
		report_status(): $mpk_tss_reports_domain_report_status { throw new t }
		// Average speed, km/h
		average_speed(): number { throw new t }
		violation_status(): $mpk_tss_reports_domain_violation_status { throw new t }
		measurement_start(): $mol_time_moment | null { throw new t }
		carriages(): $mpk_tss_reports_domain_carriage[] { throw new t }
		carriage(id: string): $mpk_tss_reports_domain_carriage { throw new t }
	}
}

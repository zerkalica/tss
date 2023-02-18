namespace $ {
	const t = $mpk_tss_todo

	export class $mpk_tss_reports_domain_trains extends $mol_object {
		@$mol_mem_key
		report(id: string): $mpk_tss_reports_domain_report {
			throw new t
		}

		@$mol_mem
		filter_number(next?: string | null): string | null {

			throw new t
		}

		@$mol_mem
		filter_resolution(next?: $mpk_tss_reports_domain_resolution | null): $mpk_tss_reports_domain_resolution | null {
			throw new t
		}

		@$mol_mem
		reports(): $mpk_tss_reports_domain_report[] {
			throw new t
		}
	}

	export enum $mpk_tss_reports_domain_resolution {
		success = 'success',
		warning = 'warning',
	}

	export enum $mpk_tss_reports_domain_load {
		free = 'free',
		full = 'full',
	}

	export enum $mpk_tss_reports_domain_violation {
		slider = 'slider',
		vyscherbiny = 'vyscherbiny',
		sink = 'sink',
		dent = 'dent',
	}

	export enum $mpk_tss_reports_domain_carriage_type {
		hopper = 'hopper',
		flatcar = 'flatcar',
		tank = 'tank',
		covered = 'covered',
	}

	export type $mpk_tss_reports_domain_point = [number, number]

	export class $mpk_tss_reports_domain_wheel extends $mol_object {
		id(): string { throw new t }
		resolution(): $mpk_tss_reports_domain_resolution | null { throw new t }
		violation(): $mpk_tss_reports_domain_violation | null { throw new t }
		forces(): readonly [readonly number[], readonly number[]]  { throw new t }
	}

	export class $mpk_tss_reports_domain_axle extends $mol_object {
		id(): string { return String(this.axle_number()) }
		axle_number(): number { throw new t }
		resolution(): $mpk_tss_reports_domain_resolution | null { throw new t }
		violation(): $mpk_tss_reports_domain_violation | null { throw new t }
		wheel(id: string): $mpk_tss_reports_domain_wheel { throw new t }
		wheels(): $mpk_tss_reports_domain_wheel[] {
			throw new t
		}
	}

	export class $mpk_tss_reports_domain_carriage extends $mol_object {
		id(): string { return this.carriage_number() }
		train(): $mpk_tss_reports_domain_report { throw new t }
		carriage_number(): string { throw new t }
		place(): number { throw new t }
		resolution(): $mpk_tss_reports_domain_resolution | null { throw new t }
		violation(): $mpk_tss_reports_domain_violation | null { throw new t }
		load(): $mpk_tss_reports_domain_load { throw new t }
		// Measured speed at time point, km/h
		measured_speed(): number { throw new t }
		// kg
		total_weight(): number { throw new t }
		// meters
		length(): number { throw new t }
		type(): $mpk_tss_reports_domain_carriage_type { throw new t }
		axis(): $mpk_tss_reports_domain_axle[] { throw new t }
		axle(id: string): $mpk_tss_reports_domain_axle { throw new t }
	}

	export enum $mpk_tss_reports_domain_delivery {
		preparing = 'preparing',
		sending = 'sending',
		sent = 'sent',
		error = 'error',
	}

	export class $mpk_tss_reports_domain_carriages extends $mol_object {
		@$mol_mem_key
		carriage(id: string): $mpk_tss_reports_domain_carriage { throw new t }

		@$mol_mem
		filter_number(next?: string | null): string | null {
			throw new t
		}

		@$mol_mem
		filter_resolution(next?: $mpk_tss_reports_domain_resolution | null): $mpk_tss_reports_domain_resolution | null {
			throw new t
		}

		@$mol_mem
		carriages(): $mpk_tss_reports_domain_carriage[] { throw new t }
	}

	export class $mpk_tss_reports_domain_report extends $mol_object {
		id(): string { throw new t }
		train_number(): string { throw new t }
		send_count(): number { throw new t }
		delivery(): $mpk_tss_reports_domain_delivery { throw new t }
		// Average speed, km/h
		average_speed(): number { throw new t }
		resolution(): $mpk_tss_reports_domain_resolution { throw new t }
		started(): $mol_time_moment | null { throw new t }
		carriages(config?: Partial<$mpk_tss_reports_domain_carriages>): $mpk_tss_reports_domain_carriages { throw new t }
	}
}

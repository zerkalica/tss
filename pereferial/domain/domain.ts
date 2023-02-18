namespace $ {
	export class $mpk_tss_pereferial_domain_units extends $mol_object {
		unit(id: string): $mpk_tss_pereferial_domain_unit {
			throw new $mpk_tss_todo
		}
		filter_name(next?: string) {
			return next || ''
		}
		units(): $mpk_tss_pereferial_domain_unit[] {
			throw new $mpk_tss_todo
		}
	}

	export enum $mpk_tss_pereferial_domain_type {
		ups = 'UPS',
	}

	export enum $mpk_tss_pereferial_domain_status {
		ready = 'ready',
		error = 'error',
		not_responding = 'not_responding',
		inactive = 'inactive',
		unknown = 'unknown',
	}

	export const $mpk_tss_pereferial_domain_status_weights: Record<string, number> = {
		ready: 20,
		error: 0,
		not_responding: 5,
		inactive: 6,
		unknown: 7,
	}

	export class $mpk_tss_pereferial_domain_unit extends $mol_object {
		id() : string { throw new $mpk_tss_todo }
		type(): $mpk_tss_pereferial_domain_type { throw new $mpk_tss_todo }
		name(): string { throw new $mpk_tss_todo }
		status(): $mpk_tss_pereferial_domain_status { throw new $mpk_tss_todo }
		updated(next?: $mol_time_moment): $mol_time_moment | null { throw new $mpk_tss_todo }
	}

	export enum $mpk_tss_pereferial_domain_ups_power_source {
		linein = 'linein',
		internal = 'internal',
	}

	export class $mpk_tss_pereferial_domain_ups extends $mpk_tss_pereferial_domain_unit {
		type(): $mpk_tss_pereferial_domain_type { return $mpk_tss_pereferial_domain_type.ups }
		power_source(): $mpk_tss_pereferial_domain_ups_power_source | null { throw new $mpk_tss_todo }
		voltage(): number | null { throw new $mpk_tss_todo }
		/**
		  Battery level 0-100%
		 */
		battery_level(): number | null { throw new $mpk_tss_todo }
		battery_time(): $mol_time_duration | null { throw new $mpk_tss_todo }
	}
}

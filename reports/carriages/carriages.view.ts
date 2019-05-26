namespace $.$$ {
	export class $mpk_tss_reports_carriages extends $.$mpk_tss_reports_carriages {
		report(): $mpk_tss_reports_domain_report {
			throw new $mpk_tss_todo
		}

		@$mol_mem
		carriages() {
			return this.report().carriages({
				filter_number: (next?: string | null) => this.filter_number(),

				filter_resolution: () => {
					return this.filter_warnings()
						? $mpk_tss_reports_domain_resolution.warning
						: null
				},
			})
		}

		title() {
			return this.title_prefix() + ' № ' + this.report().train_number()
		}

		carriage(id: string) {
			return this.carriages().carriage(id)
		}

		carriage_links() {
			return this.carriages().carriages()
				.map(carriage => this.Carriage_link(carriage.id()))
		}

		average_speed() {
			return this.report().average_speed() + ' km/h'
		}

		carriage_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'carriage' ) , next ) || ''
		}

		@$mol_mem
		filter_warnings(next?: boolean) {
			const param = $mol_state_arg.value( this.state_key( 'only_warnings' ) , next === undefined ? undefined : (next ? '1' : '0') )
			return param === '1'
				? true
				: (param === '0' ? false : true)
		}

		@$mol_mem
		filter_number(next?: string) {
			return $mol_state_arg.value( this.state_key( 'carriages' ) , next === '' ? null : next) || ''
		}

		destructor() {
			this.filter_number(null)
			this.carriage_current_id(null)
		}
	}
}

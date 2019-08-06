namespace $.$$ {
	export class $mpk_tss_reports_carriage_list extends $.$mpk_tss_reports_carriage_list {
		report(): $mpk_tss_reports_domain_report {
			throw new $mpk_tss_todo
		}

		@$mol_mem
		carriages() {
			return this.report().carriages({
				filter_number: (next?: string | null) => this.filter_number(),
				filter_resolution: () => {
					return this.filter_warning()
						? $mpk_tss_reports_domain_resolution.warning
						: null
				},
			})
		}

		@$mol_mem
		filter_warning(next?: boolean) {
			const param = this.$.$mol_state_arg.value(
				this.state_key( 'carriages_warning' ),
				next ? '1' : null
			)

			return !!param
		}

		title() {
			return super.title().replace('%train_number', this.report().train_number())
		}

		carriage(id: string) {
			return this.carriages().carriage(id)
		}

		carriage_links() {
			return this.carriages().carriages()
				.map(carriage => this.Carriage_link(carriage.id()))
		}

		carriage_id( next? : string ) {
			return this.$.$mol_state_arg.value( this.state_key( 'carriage' ) , next ) || ''
		}

		Carriage() {
			if (!this.carriage_id()) return null

			return this.Carriage_details(this.carriage_id())
		}

		focus_main() {
			this.Main().focused(true)
		}

		@$mol_mem
		filter_number(next?: string) {
			return this.$.$mol_state_arg.value( this.state_key( 'carriages' ) , next === '' ? null : next) || ''
		}
	}
}

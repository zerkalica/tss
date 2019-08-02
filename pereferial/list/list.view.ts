namespace $.$$ {
	export class $mpk_tss_pereferial_list extends $.$mpk_tss_pereferial_list {
		@$mol_mem
		domain() {
			return this.$.$mpk_tss_pereferial_domain_units.make({
				filter_name: () => this.filter_value()
			})
		}

		@$mol_mem
		unit_links() {
			return this.domain().units().map(unit => this.Unit_link(unit.id()))
		}

		unit(id: string) {
			return this.domain().unit(id)
		}

		@$mol_mem
		filter_value(next?: string) {
			return this.$.$mol_state_arg.value( this.state_key( 'units' ) , next ? next : null) || ''
		}

		unit_current_id( next? : string ) {
			return this.$.$mol_state_arg.value( this.state_key( 'unit' ) , next ) || ''
		}

		Unit_current() {
			return this.unit_current_id() && this.Unit_details(this.unit_current_id())
		}

		details_event_top(event?: Event) {
			this.Main().focused(true)
		}
	}
}

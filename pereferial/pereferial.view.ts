namespace $.$$ {
	export class $mpk_tss_pereferial extends $.$mpk_tss_pereferial {
		@$mol_mem
		domain() {
			return new $mpk_tss_pereferial_domain_mock()
		}

		@$mol_mem
		unit_links() {
			return this.domain().units().map(unit => this.Unit_link(unit.id()))
		}

		unit_for_card(id: string) {
			return this.domain().unit(id)
		}

		unit_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'unit' ) , next ) || ''
		}

		unit_current_page() {
			if (!this.unit_current_id()) return null

			return this.Unit_details()
		}

		unit_for_details() {
			const id = this.unit_current_id()
			if (!id) return null

			return this.domain().unit( id )
		}

		destructor() {
			this.unit_current_id(null)
		}
	}
}

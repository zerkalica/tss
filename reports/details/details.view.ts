namespace $.$$ {
	export class $mpk_tss_reports_details extends $.$mpk_tss_reports_details {
		report(): $mpk_tss_reports_domain_report {
			throw new $mpk_tss_todo
		}

		title() {
			return this.title_prefix() + ' № ' + this.report().train_number()
		}

		carriage(id: string) {
			return this.report().carriage(id)
		}

		carriage_links() {
			return this.report().carriages().map(carriage => this.Carriage_link(carriage.id()))
		}

		carriage_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'carriage' ) , next ) || ''
		}

		Carriage_details() {
			// return this.carriage_current_id() && this.Carriage_details_card(this.carriage_current_id())
		}
	}
}

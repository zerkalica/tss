namespace $.$$ {
	export class $mpk_tss_reports_carriages extends $.$mpk_tss_reports_carriages {
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

		average_speed() {
			return this.report().average_speed() + ' km/h'
		}

		carriage_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'carriage' ) , next ) || ''
		}
	}
}

namespace $.$$ {
	export class $mpk_tss_trains extends $.$mpk_tss_trains {
		@$mol_mem
		domain() {
			return new $mpk_tss_trains_domain_mock()
		}

		@$mol_mem
		report_links() {
			return this.domain().reports().map(report => this.Report_link(report.id()))
		}

		report(id: string) {
			return this.domain().report(id)
		}

		report_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'report' ) , next ) || ''
		}

		carriage_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'carriage' ) , next ) || ''
		}

		subpages() {
			return [
				this.report_current_id() && this.Report_details(this.report_current_id()),
				this.carriage_current_id() && this.Carriage_details(this.carriage_current_id()),
			]
		}

		destructor() {
			this.report_current_id(null)
			this.carriage_current_id(null)
		}
	}
}

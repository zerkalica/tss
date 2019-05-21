namespace $.$$ {
	export class $mpk_tss_reports extends $.$mpk_tss_reports {
		@$mol_mem
		domain() {
			return new $mpk_tss_reports_domain_mock()
		}

		@$mol_mem
		report_links() {
			return this.domain().reports().map(report => this.Report_link(report.id()))
		}

		report_for_card(id: string) {
			return this.domain().report(id)
		}

		report_link_id(id: string) {
			return id
		}

		report_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'report' ) , next ) || ''
		}

		report_current_page() {
			if (!this.report_current_id()) return null

			return this.Report_details()
		}

		report_for_details() {
			const id = this.report_current_id()
			if (!id) return null

			return this.domain().report( id )
		}

		destructor() {
			this.report_current_id(null)
		}
	}
}

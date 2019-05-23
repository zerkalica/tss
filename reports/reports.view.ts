namespace $.$$ {
	export class $mpk_tss_reports extends $.$mpk_tss_reports {
		@$mol_mem
		domain() {
			return new $mpk_tss_reports_domain_mock()
		}

		main_blended() {
			return !!this.report_current_id()
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

		shaded(id: string) {
			if (!this.report_current_id()) return false

			return this.report_current_id() !== id
		}

		Details_pages() {
			if (!this.report_current_id()) return null
			return this.Report_details(this.report_current_id()).pages()
		}

		clear_url() {
			this.report_current_id(null)
		}

		destructor() {
			this.clear_url()
		}
	}
}

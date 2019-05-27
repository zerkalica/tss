namespace $.$$ {
	export class $mpk_tss_reports extends $.$mpk_tss_reports {
		@$mol_mem
		domain() {
			return this.$.$mpk_tss_reports_domain.make({
				filter_number: (next?: string ) => this.filter_number(),
				filter_resolution: () => {
					return this.filter_all()
						? null
						: $mpk_tss_reports_domain_resolution.warning
				},
			})
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

		filter_number( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'trains' ) , next === '' ? null : next) || ''
		}

		@$mol_mem
		filter_all(next?: boolean) {
			const param = this.$.$mol_state_arg.value( this.state_key( 'trains_all' ) , next ? '1' : null)
			return param === '1'
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

		focus_main() {
			this.Main().focused(true)
		}
	}

	export class $mpk_tss_reports_page extends $.$mpk_tss_reports_page {
		destructor() {
			this.report_current_id(null)
			this.filter_number(null)
		}
	}
}

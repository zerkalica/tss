namespace $.$$ {
	class $mpk_tss_locale extends $mol_locale {
		@ $mol_mem
		static lang_default() {
			return 'ru'
		}
	}

	export class $mpk_tss extends $.$mpk_tss {
		terminal() {
			return this.$.$mpk_tss_domain_terminal.current()
		}

		title() {
			return super.title().replace('%terminal_number', this.terminal().id())
		}

		terminal_formatted_label() {
			return this.terminal_text().replace('%terminal_number', this.terminal().id())
		}

		@ $mol_atom2_field
		get $(): $mol_ambient_context {
			return (super.$ as $mol_ambient_context).$mol_ambient({
				$mpk_tss_domain_terminal: $mpk_tss_domain_terminal_mock,
				$mol_locale: $mpk_tss_locale,
				$mpk_tss_domain_user: $mpk_tss_domain_user_mock,
				$mpk_tss_pereferial_domain_units: $mpk_tss_pereferial_domain_mock_units,
				$mpk_tss_reports_domain_trains: $mpk_tss_reports_domain_mock_trains,
			})
		}
	}

	export class $mpk_tss_main extends $.$mpk_tss_main {
		Pereferial() {
			const Pereferial = super.Pereferial()
			// see https://github.com/eigenmethod/mol/issues/324

			Pereferial.$ = this.$
			return Pereferial
		}

		Reports() {
			const Reports = super.Reports()
			// see https://github.com/eigenmethod/mol/issues/324
			Reports.$ = this.$
			return Reports
		}

		copyright() {
			return super.copyright().replace('%year', '' + new Date().getFullYear())
		}

		current_user() {
			return this.$.$mpk_tss_domain_user.current()
		}

		login_submit(next?: boolean) {
			const form = this.Login()
			const user = this.current_user()
			user.email(form.login())
			user.password(form.password())
			user.login()
		}

		entered() {
			return this.current_user().logged()
		}

		Logged_user() {
			if (!this.entered()) return null

			return this.User_link()
		}

		logout_click() {
			return this.current_user().logout()
		}

		menu_items() {
			return Object.keys(this.menu_pages()).map(id => this.Menu_item(id))
		}

		menu_page_arg(id: string) {
			return { page: id }
		}

		logged_email() {
			return this.current_user().email()
		}

		menu_page_title(id: string) {
			return this.menu_pages()[id].title()
		}

		@$mol_mem
		page_id(next?: string) {
			return this.$.$mol_state_arg.value( this.state_key( 'page' ) , next ) || ''
		}

		sidebar_items() {
			if( !this.entered() ) return [ this.Login() ]

			return [this.Menu()]
		}

		pages() {
			if( !this.entered() ) return [ this.Sidebar() ]

			const id = this.page_id() || 'summary'
			const page = this.menu_pages()[id]
			const pages = page && page.pages ? page.pages() : [page]

			return [
				this.Sidebar(),
				...pages,
			]
		}
	}
}

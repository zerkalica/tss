namespace $.$$ {
	export class $mpk_tss extends $.$mpk_tss {
	}

	export class $mpk_tss_main extends $.$mpk_tss_main {

		entered( next? : boolean ) {
			if( $mol_state_arg.value( `entered` ) != null ) return true
			return $mol_state_session.value( `${ this }.entered()` , next ) || false
		}

		logout_click() {
			this.entered(false)
		}

		menu_items() {
			return Object.keys(this.menu_pages()).map(id => this.Menu_item(id))
		}

		menu_page_arg(id: string) {
			return {page: id}
		}

		menu_page_title(id: string) {
			return this.menu_pages()[id].title()
		}

		page_id() {
			return this.$.$mol_state_arg.value( 'page' )
		}

		sidebar_items() {
			if( !this.entered() ) return [ this.Enter() ]

			return [this.Menu()]
		}

		pages() {
			if( !this.entered() ) return [ this.Sidebar() ]

			const id = this.page_id()

			return [].concat([
				this.Sidebar(),
				id ? null : this.Summary(),
				id === 'software' && this.Software(),
				id === 'sensors' && this.Sensors(),
			])
				.concat(id === 'pereferial' && this.Pereferial().pages())
				.concat(id === 'reports' && this.Reports().pages())
				.filter(Boolean)
		}
	}
}

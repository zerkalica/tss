namespace $.$$ {
	
	export class $mpk_tss extends $.$mpk_tss {

		menu_items() {
			return Object.keys(this.menu_pages()).map(id => this.Menu_item(id))
		}

		menu_page_arg(id: string) {
			return {page: id}
		}

		menu_page_title(id: string) {
			return this.menu_pages()[id].self_title()
		}

		page_id() {
			return this.$.$mol_state_arg.value( 'page' )
		}

		pages() {
			// if( !this.domain().authentificated() ) {
			// 	return this.Enter()
			// }
			const id = this.page_id()

			return [
				this.Sidebar(),
				id ? null : this.Summary(),
				id === 'reports' && this.Reports(),
				id === 'software' && this.Software(),
				id === 'pereferials' && this.Pereferials(),
				id === 'sensors' && this.Sensors(),
			].filter(Boolean)
		}

		logout_click() {
			alert('Logout...')
		}
	}
}

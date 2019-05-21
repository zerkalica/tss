namespace $.$$ {
	export class $mpk_tss_pereferial_unit_card extends $.$mpk_tss_pereferial_unit_card {
		unit(): $mpk_tss_pereferial_domain_unit {
			throw new Error('unit')
		}

		type() {
			return this.unit().type()
		}

		element() {
			return this.unit().element()
		}

		status() {
			return this.unit().status()
		}

		refresh_click(event: Event) {
			event.preventDefault()
			alert('Refresh...')
		}
	}
}

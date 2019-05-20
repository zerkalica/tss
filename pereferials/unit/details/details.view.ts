namespace $.$$ {
	export class $mpk_tss_pereferials_unit_details extends $.$mpk_tss_pereferials_unit_details {
		unit(): $mpk_tss_pereferials_domain_unit {
			throw new Error('unit')
		}

		title() {
			return this.type() + ' | ' + this.element()
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

		unit_parameters() {
			return this.unit().parameters().map(parameter => this.Parameter(parameter))
		}

		parameter_name(parameter: $mpk_tss_pereferials_domain_unit_parameter) {
			return parameter.name()
		}

		parameter_value(parameter: $mpk_tss_pereferials_domain_unit_parameter) {
			return parameter.value()
		}

		parameter_updated(parameter: $mpk_tss_pereferials_domain_unit_parameter) {
			const updated = parameter.updated()
			return updated.toString('DD.MM.YYYY, hh:mm')
		}

		refresh_click(event: Event) {
			event.preventDefault()
			alert('Refresh...')
		}
	}
	
}

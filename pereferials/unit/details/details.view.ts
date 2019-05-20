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

		parameter_item(parameter: $mpk_tss_pereferials_domain_unit_parameter) {
			return parameter
		}

		refresh_click(event: Event) {
			event.preventDefault()
			alert('Refresh...')
		}
	}

	export class $mpk_tss_pereferials_unit_details_parameter extends $.$mpk_tss_pereferials_unit_details_parameter {
		parameter(): $mpk_tss_pereferials_domain_unit_parameter {
			throw new Error('parameter')
		}

		parameter_name() {
			return this.parameter().name()
		}

		Value_content() {
			const value = this.parameter().value()
			if (!value) return this.unknown()
			switch (value.type) {
				case 'string': return this.Value_string(value.value)
				case 'status': return this.Value_status(value.value)
			}

			return null
		}

		value_string_data(data: string) {
			return data
		}

		value_status_data(status: $mpk_tss_pereferials_domain_unit_status) {
			return status
		}

		parameter_updated() {
			const updated = this.parameter().updated()
			return updated ? updated.toString('DD.MM.YYYY, hh:mm') : this.unknown()
		}
	}
	
}

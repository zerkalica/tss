namespace $.$$ {
	export class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
		unit(): $mpk_tss_pereferial_domain {
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

		parameter_item(parameter: $mpk_tss_pereferial_domain_parameter) {
			return parameter
		}

		refresh_click(event: Event) {
			event.preventDefault()
			alert('Refresh...')
		}
	}
	export class $mpk_tss_pereferial_details_parameter extends $.$mpk_tss_pereferial_details_parameter {
		parameter(): $mpk_tss_pereferial_domain_parameter {
			throw new Error('parameter')
		}

		parameter_name() {
			return this.parameter().name()
		}

		Value_content() {
			const value = this.parameter().value()
			if (!value) return this.Unknown()
			switch (value.type) {
				case 'string': return this.Value_string(value.value)
				case 'status': return this.Value_status(value.value)
			}

			return null
		}

		value_string_data(data: string) {
			return data
		}

		value_status_data(status: $mpk_tss_pereferial_domain_status) {
			return status
		}

		parameter_updated() {
			const updated = this.parameter().updated()
			if (!updated) return this.Unknown()
			const current = new $mol_time_moment()
			if (
				current.native.toDateString() === updated.native.toDateString()
				&& current.hour === updated.hour
				&& current.minute === updated.minute
			)
				return this.updated_now_text()
			return updated.toString('DD.MM.YYYY, hh:mm')
		}
	}
	
}

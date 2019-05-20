namespace $.$$ {
	export class $mpk_tss_pereferials extends $.$mpk_tss_pereferials {
		@ $mol_mem
		units() {
			return [
				{
					id: '1',
					type: 'UPS',
					element: 'Shtil SR1103L N1',
					status: 'error',
					paremeters: [
						{
							name: 'State',
							value: 'notresponding',
							update: new Date().toString(),
						},
						{
							name: 'Power source',
							value: null,
							update: null,
						},
						{
							name: 'Voltage',
							value: null,
							update: null,
						},
						{
							name: 'Bat. level',
							value: null,
							update: null,
						},
						{
							name: 'Bat. time',
							value: null,
							update: null,
						},
					],
				},
				{
					id: '2',
					type: 'UPS',
					element: 'Shtil SR1103L N2',
					status: 'ready',
					paremeters: [
						{
							name: 'State',
							value: 'ready',
							update: new Date().toString(),
						},
						{
							name: 'Power source',
							value: 'AC',
							update: new Date().toString(),
						},
						{
							name: 'Voltage',
							value: 220,
							update: new Date().toString(),
						},
						{
							name: 'Bat. level',
							value: 33,
							update: new Date().toString(),
						},
						{
							name: 'Bat. time',
							value: 134,
							update: new Date().toString(),
						},
					],
				},
				{
					id: '3',
					type: 'AVR',
					element: 'AVR Electricity system N1',
					status: 'ready',
					paremeters: [
						{
							name: 'State',
							value: 'ready',
							update: new Date().toString(),
						},
						{
							name: 'Voltage',
							value: 12,
							update: new Date().toString(),
						},
					],
				},
				{
					id: '4',
					type: 'AVR',
					element: 'AVR Electricity system N4',
					status: 'ready',
					paremeters: [
						{
							name: 'State',
							value: 'ready',
							update: new Date().toString(),
						},
						{
							name: 'Voltage',
							value: 12,
							update: new Date().toString(),
						},
					],
				},
				{
					id: '5',
					type: 'AVR',
					element: 'AVR Electricity system N1',
					status: 'ready',
					paremeters: [
						{
							name: 'State',
							value: 'ready',
							update: new Date().toString(),
						},
						{
							name: 'Voltage',
							value: 12,
							update: new Date().toString(),
						},
					],
				},
				{
					id: '6',
					type: 'AVR',
					element: 'AVR Electricity system N1',
					status: 'ready',
					paremeters: [
						{
							name: 'State',
							value: 'ready',
							update: new Date().toString(),
						},
						{
							name: 'Voltage',
							value: 12,
							update: new Date().toString(),
						},
					],
				},

			]
		}

		unit_cards() {
			return this.units().map((unit, index) => this.Unit_card(index))
		}
		unit(index : any ) {
			return this.units()[index]
		}
		unit_id(index: any) {
			return this.units()[index].id
		}

		unit_current(): any {
			const index = $mol_state_arg.value( 'unit' )
			const unit = index && this.unit( index )

			if (!unit) return null

			return this.Unit_details(index)
		}
		
	}

	export class $mpk_tss_pereferials_unit_card extends $.$mpk_tss_pereferials_unit_card {
		
		unit() {
			return null as any
		}

		type() {
			return this.unit().type
		}

		element() {
			return this.unit().element
		}

		status() {
			return this.unit().status
		}
	}
	
}

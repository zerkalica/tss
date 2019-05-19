namespace $.$$ {
	export class $mpk_tss_reports extends $.$mpk_tss_reports {
		@ $mol_mem
		records() {
			return [
				[
					'#2131',
					'warning',
					new Date(),
					'some',
				],
			]
		}
		
		column_name( id : string ) {
			return [this.column_names()[id]]
		}
	}
}

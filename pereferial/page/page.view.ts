namespace $.$$ {
	export class $mpk_tss_pereferial_page extends $.$mpk_tss_pereferial_page {
		@ $mol_mem
		context_sub( ) {
			class $mpk_tss_pereferial_state_arg extends this.$.$mol_state_arg {
				static allowed_keys() {
					return [...super.allowed_keys(), 'unit']
				}
			}

			return this.$.$mol_ambient({
				$mol_state_arg: $mpk_tss_pereferial_state_arg,
			})
		}
	}
}

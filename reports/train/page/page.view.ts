namespace $.$$ {
	export class $mpk_tss_reports_train_page extends $.$mpk_tss_reports_train_page {
		@ $mol_mem
		context_sub( ) {
			class $mpk_tss_train_state_arg extends this.$.$mol_state_arg {
				// static allowed_keys() {
				// 	return [...super.allowed_keys(), 'report']
				// }
			}

			return this.$.$mol_ambient({
				$mol_state_arg: $mpk_tss_train_state_arg,
			})
		}
	}
}

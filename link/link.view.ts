namespace $.$$ {
	export class $mpk_tss_link extends $.$mpk_tss_link {
		@ $mol_mem
		uri() {
			const arg = this.$.$mol_state_arg
			const dict = arg.dict()
			const params = this.copy_params()

			const href_args = {...this.arg()}
			for (let key of params) href_args[key] = dict[key]

			return arg.make_link( href_args )
		}
	}
}

namespace $ {
	export class $mpk_tss_domain_user_mock extends $mpk_tss_domain_user {
		protected server_data(next?: string) {
			return this.$.$mol_state_arg.value( 'login', next) || ''
		}

		@$mol_mem
		email(next?: string): string {
			if (next !== undefined) return next

			return this.server_data()
		}

		@$mol_mem
		password(next?: string): string {
			return ''
		}

		logged(): boolean {
			return this.server_data() !== ''
		}

		login(): void {
			this.server_data(this.email())
			this.password('')
		}

		logout(): void {
			this.server_data(null)
			this.email('')
			this.password('')
		}
	}
}

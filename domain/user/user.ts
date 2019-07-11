namespace $ {
	export class $mpk_tss_domain_user extends $mol_object {
		@$mol_mem
		static current() { return new this }

		email(next?: string): string { throw new $mpk_tss_todo }
		password(next?: string): string { throw new $mpk_tss_todo }
		logged(): boolean { throw new $mpk_tss_todo }

		login(): void { throw new $mpk_tss_todo }
		logout(): void { throw new $mpk_tss_todo }
	}
}

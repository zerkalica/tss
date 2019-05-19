namespace $.$$ {
	export class $mpk_tss_wrap extends $.$mpk_tss_wrap {
		title() {
			return this.breadcrumbs().concat(this.self_title()).join(' - ')
		}
	}
}

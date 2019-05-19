namespace $.$$ {
	export class $mpk_tss_status extends $.$mpk_tss_status {
		title(): string {
			return this.statuses()[this.type()] || super.type()
		}
	}
}

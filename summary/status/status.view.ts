namespace $.$$ {
	export class $mpk_tss_summary_status extends $.$mpk_tss_summary_status {
		title(): string {
			return this.statuses()[this.type()] || super.type()
		}
	}
}

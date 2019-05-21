namespace $ {
	export function $mpk_tss_stub_id() {
		return $mol_stub_code()
	}

	export function $mpk_tss_stub_ids(max = 10): string[] {
		const ids: string[] = []
		for (let i = 0; i < max; i++) {
			ids.push($mpk_tss_stub_id())
		}
		return ids
	} 
}

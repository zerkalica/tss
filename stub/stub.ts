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

	export function $mpk_tss_stub_number(min = 20, max = 80) {
		return min + Math.floor(Math.random() * (max - min))
	}

	export function $mpk_tss_stub_mem< Host , Value >(
		obj : Host ,
		name : string ,
		descr : TypedPropertyDescriptor< ( id?: string | Object )=> Value >
	) {

		const value = descr.value!
		const store = new WeakMap< Object , Map<string, Value> >()
		
		descr.value = function $mpk_tss_stub_mem_value( id?: string | Object ) {
			let map = store.get(this)
			if (!map) {
				map = new Map()
				store.set(this, map)
			}

			const key = JSON.stringify(id)
			let result = map.get(key)
			if (result === undefined) {
				result = value.call(this, id)
				map.set(key, result)
			}
			return result
		}

		descr.value[ 'value' ] = value
	}

}

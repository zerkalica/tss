namespace $ {
	export class $mpk_tss_reports_domain_mock extends $mpk_tss_reports_domain {
		max_trains() { return 10 }
		protected place = 0
		@$mol_mem_key
		train(id: string): $mpk_tss_reports_domain_train {
			const status = $mpk_tss_reports_domain_mock_stub_train_status()

			const carriages: $mpk_tss_reports_domain_train_carriage[] = []

			for (let i = 0; i < 30; i++) {
				this.place = i + 1
				carriages.push(this.carriage(( i * 123456789 % 987654321 ).toString( 16 ).toUpperCase()))
			}

			return $mpk_tss_reports_domain_train.make({
				id : $mol_const(id) ,
				status: $mol_const(status),
				updated: $mol_const($mol_stub_time(60)),
				carriages: $mol_const(carriages),
			})
		}

		@$mol_mem_key
		carriage(id: string): $mpk_tss_reports_domain_train_carriage {
			const status = $mpk_tss_reports_domain_mock_stub_train_status()
			return $mpk_tss_reports_domain_train_carriage.make({
				id : $mol_const(id),
				place: $mol_const(this.place),
				status: $mol_const(status),
				load: $mol_const($mpk_tss_reports_domain_mock_stub_carriage_load()),
				speed: $mol_const(20 + Math.floor(Math.random() * 80)),
				violation: $mol_const($mpk_tss_reports_domain_mock_stub_train_violation()),
			})
		}

		@$mol_mem
		trains(): $mpk_tss_reports_domain_train[] {
			var next : $mpk_tss_reports_domain_train[] = []
			const max = this.max_trains()
			for( var i = 1 ; i <= max ; ++i ) {
				next.push( this.train( ( i * 123456789 % 987654321 ).toString( 16 ).toUpperCase() ) )
			}
			return next
		}
	}

	function $mpk_tss_reports_domain_mock_stub_train_violation() {
		return $mol_stub_select_random( [
			'slider', null
		] as (null | $mpk_tss_reports_domain_train_violation)[])
	}

	function $mpk_tss_reports_domain_mock_stub_train_status() {
		return $mol_stub_select_random( [
			'ready', 'error', 'warning', 'unknown'
		] as $mpk_tss_reports_domain_train_status[])
	}

	function $mpk_tss_reports_domain_mock_stub_carriage_load() {
		return $mol_stub_select_random( [
			'free', 'full'
		] as $mpk_tss_reports_domain_train_load[])
	}
}

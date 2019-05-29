namespace $.$$ {
	export class $mpk_tss_reports_axle_list extends $.$mpk_tss_reports_axle_list {
		carriage(): $mpk_tss_reports_domain_carriage { throw new $mpk_tss_todo }

		axle(id: string): $mpk_tss_reports_domain_axle {
			return this.carriage().axle(id)
		}

		axle_current_id( next? : string ) {
			return this.$.$mol_state_arg.value( this.state_key( 'axle' ) , next ) || this.carriage().axis()[0].id()
		}

		axle_current() {
			if (!this.axle_current_id()) return null
			return this.axle(this.axle_current_id())
		}

		axis() {
			return this.carriage().axis().map((axle, index) => this.Axle_link(axle.id()))
		}

		destructor() {
			this.axle_current_id(null)
		}
	} 
}

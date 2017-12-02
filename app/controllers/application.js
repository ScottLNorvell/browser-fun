import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';


export default Controller.extend({
  battery: service(),
  charging: alias('battery.charging'),
  showCharge: true,
  chargingClass: computed('charging', 'showCharge', function() {
    const {
      charging,
      showCharge
    } = this.getProperties('showCharge', 'charging');
    if (showCharge) {
      return charging ? 'charging' : 'not-charging'
    }
  }),
  actions: {
    showChargeIndicator() {
      this.toggleProperty('showCharge');
    }
  }
});

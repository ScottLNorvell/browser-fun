import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  battery: service(),
  charging: alias('battery.charging'),
  chargingTime: alias('battery.chargingTime'),
  dischargingTime: alias('battery.dischargingTime'),
  level: alias('battery.level')
});

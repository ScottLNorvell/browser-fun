import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  init() {
    navigator.getBattery().then(battery => {
      battery.addEventListener('chargingchange', () => this.incrementProperty('checker'))
      battery.addEventListener('chargingtimechange', () => this.incrementProperty('checker'))
      battery.addEventListener('dischargingtimechange', () => this.incrementProperty('checker'))
      battery.addEventListener('levelchange', () => this.incrementProperty('checker'))
      this.setProperties({ battery });
    });
  },

  checker: 0,
  battery: null,

  charging: computed('checker', 'battery', function() {
    const battery = this.get('battery');
    return battery && battery.charging;
  }),

  chargingTime: computed('checker', 'battery', function() {
    const battery = this.get('battery');
    return battery && battery.chargingTime;
  }),

  dischargingTime: computed('checker', 'battery', function() {
    const battery = this.get('battery');
    return battery && battery.dischargingTime;
  }),

  level: computed('checker', 'battery', function() {
    const battery = this.get('battery');
    return battery && battery.level;
  })
});

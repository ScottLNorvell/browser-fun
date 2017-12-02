import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  pitch: alias('speech.pitch'),
  rate: alias('speech.rate'),
  speech: service(),
  actions: {
    sayTheThing() {
      const theThing = this.get('theThing');
      this.get('speech').say(theThing);
    },
    reset() {
      this.setProperties({
        theThing: '',
        pitch: 1,
        rate: 1
      });
    }
  }
});

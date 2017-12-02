import Component from '@ember/component';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  speech: service(),
  voice: null,
  isActive: computed('voice', 'speech.voice', function() {
    const voice = this.get('voice');
    const speechVoice = this.get('speech.voice');
    return voice === speechVoice;
  }),
  _setVoice() {
    this.get('speech').setVoice(this.get('voice'));
  },
  actions: {
    setVoice() {
      this._setVoice();
    },

    sayWithVoice() {
      this._setVoice();
      this.sendAction();
    }

  }
});

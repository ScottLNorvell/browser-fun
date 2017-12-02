import Service from '@ember/service';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';



export default Service.extend({
  init() {
    const synth = window.speechSynthesis;
    const _voices = synth.getVoices();
    synth.onvoiceschanged = () => this.set('_voices', synth.getVoices());

    this.setProperties({
      synth,
      _voices
    });
  },
  pitch: 1,
  rate: 1,
  synth: null,

  _voices: null,
  voices: filter('_voices', voice => /en/.test(voice.lang)),

  _voice: null,
  voice: computed('_voice', function() {
    const _voice = this.get('_voice');
    return _voice || this.get('voices').findBy('default')
  }),

  setVoice(voice) {
    this.set('_voice', voice);
  },

  say(text) {
    text = text || 'There is nothing to say!';
    const voice = this.get('voice');
    const synth = this.get('synth');

    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voice;

    utterThis.pitch = this.get('pitch');
    utterThis.rate = this.get('rate');

    synth.cancel();

    synth.speak(utterThis);
  }
});

import i18n, {fallbacks} from 'i18n-js';
//import * as RnLocalize from 'react-native-localize';
import {I18Manager} from 'react-native';
import en from './en';
import tr from './tr';
import I18n from 'i18n-js';

//const locales = RnLocalize.getLocales(); //Telefondan dili cekeriz
//I18n.locale = locales[0].languageTag; // Baslangic dil secenegi telefondan gelen dil olarak ayarlariz
//export const isRtl = locales[0].isRTL; // Dilin hangi yonden baslayacagi
//I18Manager.forceRTL = isRtl;

I18n.fallbacks = true; //belirtilen dile ait bilgi bulunmazsa bir sonraki dili tercih eder
I18n.locales.no = 'tr'; //istenlilen dil bulunmadiginda
I18n.translations = {
  //uygulamada kullanilacak diller
  tr,
  en,
};
export default I18n;

import { createI18n } from "vue-i18n";
import EnMessage from "~/lang/en.json"
import BmMessage from "~/lang/bm.json"
import KrMessage from "~/lang/kr.json"
import ViMessage from "~/lang/vi.json"

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: EnMessage,
    kr: KrMessage,
    bm: BmMessage,
    vi: ViMessage
  }
});
export default i18n;
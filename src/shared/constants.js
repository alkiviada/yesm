import YesmLink from './YesmLink'
import TelLink from './TelLink'
import EmailLink from './EmailLink'
import ExternalLink from './ExternalLink'
import YesmStudio from './YesmStudio'

const text = 'Tis a consummation devoutly to be wished. Nymph, in your orisons, you might say I am a dreamer.'
const text_ru = 'Федор Михайлович Достоевский переворачивается. Играет бас, играет соло. Она поет как она брови наколола'
const text_ua = 'Товарищ, верь! Остров Крым. В тясяча девятьсот шестидесятом году. Именно эту дату вы прочитали на каменной лавке'

export const sideNav = {
  'address': { 
    'title': {'en': 'Address is ',
              'ru': 'Адреса тра ла ла', 
               'ua': 'Adresa UA', },
    'color': 'red', 
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'address' }, 
  'as': { 
    'title': { 'ru': 'Автономные системы', 'en': 'Autonomous Systems', 'ua': 'UA Atonomy' },
    'color': 'blue', 
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'as' }, 
  'monitor': { 
    'title': { 'ru': 'Мониторинг ресурсов клиента', 'en': 'Monitoring of resources', 'ua': 'Мониторинг ресурсов клиента UA' },
    'color': 'yellow', 
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'monitor' }, 
  'lir': {
    'title': {'ru': 'Регистрация LIR', 'en': 'Registration LIR', 'ua': 'Регiстрацiя' },
    'color': 'blue', 
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'lir' }, 
  'domain': {
    'title': {'ru': 'Регистрация доменов', 'en': 'DOmain registration', 'ua': 'UA DOmain' },
    'color': 'red', 
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'domain' }, 
  'cons': { 
    'title': {'ru': 'IP-консалтинг', 'ua': 'UA Consulting', 'en': 'IP-consulting' },
    'color': 'yellow', 
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'cons' }, 
}

export const headerNav = {
  'about': { 
    'title': {'ru': 'Компания', 'en': 'About', 'ua': 'ABout UA' },
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'about' }, 
  'contact': { 
    'title': {'ru': 'Связаться', 'en': 'Contact', 'ua': 'Contact UA'},
    'text': {'en': text, 'ru': text_ru, 'ua': text_ua }, 
    'pageClass': 'contact' }, 
}

export const footerNav = {
 'privacy': { 'title': 'Privacy', 'text': text, 'pageClass': 'privacy', 'component': YesmLink }, 
 'user': { 'title': 'User agreement', 'text': text, 'pageClass': 'privacy', 'component': YesmLink }, 
 'terms': { 'title': 'Terms and conditions', 'text': text, 'pageClass': 'privacy', 'component': YesmLink }, 
 'help': { 'title': 'Help', 'text': text, 'pageClass': 'help', 'component': YesmLink }, 
 'faq': { 'title': 'FAQ', 'text': text, 'pageClass': 'help', 'component': YesmLink }, 
 'email': { 'title': 'info@yesm.com', 'component': EmailLink }, 
 'tel': { 'title': '123456789', 'component': TelLink }, 
 'fb': { 'title': 'Facebook', 'component': ExternalLink, 'to': 'http://myfb/yesm'}, 
 'copyright': { 'component': YesmStudio }, 
}


export const langs = ['ru', 'en', 'ua']

import YesmLink from './YesmLink'
import TelLink from './TelLink'
import EmailLink from './EmailLink'
import ExternalLink from './ExternalLink'
import YesmStudio from './YesmStudio'

const text = 'Igraet bas. Igraet solo. Ona poet kak ona brovi nakolola. В тясяча девятьсот шестидесятом году. Именно эту дату вы прочитали на каменной лавке'

export const sideNav = {
 'address': { 'title': 'Адреса тра ла ла', 'color': 'red', 'pageLink': 'address', 'text': text, 'pageClass': 'address' }, 
 'as': { 'title': 'Автономные системы', 'color': 'blue', 'pageLink': 'as', 'text': text, 'pageClass': 'as' }, 
 'monitor': { 'title': 'Мониторинг ресурсов клиента', 'color': 'yellow', 'pageLink': 'monitor', 'text': text, 'pageClass': 'monitor' }, 
 'lir': {'title': 'Регистрация LIR', 'color': 'blue', 'pageLink': 'lir', 'text': text, 'pageClass': 'lir' }, 
 'domain': {'title': 'Регистрация доменов', 'color': 'red', 'pageLink': 'domain', 'text': text, 'pageClass': 'domain' }, 
 'cons': { 'title': 'IP-консалтинг', 'color': 'yellow', 'pageLink': 'cons', 'text': text, 'pageClass': 'cons' }, 
}

export const headerNav = {
 'about': { 'text': text, 'pageClass': 'about' }, 
 'contact': { 'title': 'Автономные системы', 'color': 'blue', 'pageLink': 'as', 'text': text, 'pageClass': 'as' }, 
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


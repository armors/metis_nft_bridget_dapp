import Vue from 'vue'
import API from '../api/http'
import yHeader from '../components/yHeader'
import yNumberInput from '../components/yNumberInput'
import yBtn from '../components/yBtn'
import MessageBox from '../components/confirmBox/confirm'
import ToastBox from '../components/toastBox/toast'
import LoadMore from '../components/loadmoreBox/loadMore'
import yTitle from '../components/yTitle'
import ySubTitle from '../components/ySubTitle'
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

// const lang = require('../lang/cn.json')
const lang = require('../lang/en.js').langInfoData()
Vue.component('y-loadmore', LoadMore)
Vue.component('y-header', yHeader)
Vue.component('y-btn', yBtn)
Vue.component('y-number-input', yNumberInput)
Vue.component('y-title', yTitle)
Vue.component('y-sub-title', ySubTitle)
Vue.use(MessageBox)
Vue.use(ToastBox)
Vue.prototype.$get = API.getJson
Vue.prototype.$post = API.postJson
Vue.prototype.$lang = lang
Vue.prototype.$collectionData = require('../json/collection.js').CollectionData()
Vue.use(API)

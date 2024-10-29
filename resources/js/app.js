import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { createApp, h } from 'vue';
import LandingLayout from './Shared/Layouts/Landing';
import CorporateUILayout from './Shared/Layouts/CorporateUI';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRightToBracket, faAngleLeft, faAngleRight, faLocationDot, faMoneyBillWave, faBriefcase, faMoneyBillTrendUp, faUniversalAccess, faPersonCane, faHandsHoldingChild, faHouseChimney, faFileInvoice, faHeart, faChartColumn, faArrowTrendUp, faCity, faPeopleGroup, faGlobe, faCaretLeft, faCaretRight, faBars, faBarsStaggered, faGauge, faUsers, faCog, faHandshake, faAnglesRight, faBell, faCalendarCheck, faNewspaper, faUserTie, faCalendarDays, faSitemap, faPiggyBank, faSackDollar, faEye, faCheck, faBan, faPlus, faEdit, faEnvelope, faMessage, faArrowLeftLong, faUserPlus, faIdBadge, faKey, faClipboardCheck, faFilm, faInfoCircle, faIdCard, faSignOutAlt, faUserFriends, faClock, faUserCheck, faUserTimes, faCalendar, faPlayCircle, faLongArrowAltLeft, faLongArrowAltRight, faComments, faBullseye, faHandsHelping, faQuestionCircle, faUpload, faCheckCircle, faVideo, faChevronDown, faTimes, faCommentDots, faBullhorn, faCoffee, faFistRaised, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faComments as faCommentsRegular, faEye as faEyeRegular, faQuestionCircle as faQuestionCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faWhatsappSquare, faFacebook, faInstagramSquare, faSquareYoutube, faLinkedin, faWhatsapp, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import CKEditor from '@ckeditor/ckeditor5-vue';
import axios from 'axios';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import VueVideoPlayer from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

library.add(faRightToBracket, faAngleLeft, faAngleRight, faLocationDot, faMoneyBillWave, faBriefcase, faMoneyBillTrendUp, faUniversalAccess, faPersonCane, faHandsHoldingChild, faHouseChimney, faFileInvoice, faWhatsappSquare, faFacebook, faInstagramSquare, faSquareYoutube, faLinkedin, faHeart, faArrowTrendUp, faChartColumn, faCity, faPeopleGroup, faGlobe, faCaretLeft, faCaretRight, faBars, faBarsStaggered, faGauge, faUsers, faCog, faHandshake, faAnglesRight, faBell, faCalendarCheck, faNewspaper, faUserTie, faCalendarDays, faSitemap, faSackDollar, faPiggyBank, faEye, faCheck, faBan, faPlus, faEdit, faEnvelope, faWhatsapp, faMessage, faArrowLeftLong, faUserPlus, faIdBadge, faKey, faClipboardCheck, faFilm, faInfoCircle, faIdCard, faSignOutAlt, faUserFriends, faClock, faUserCheck, faUserTimes, faCalendar, faPlayCircle, faLongArrowAltLeft, faLongArrowAltRight, faComments, faBullseye, faHandsHelping, faQuestionCircle, faUpload, faCheckCircle, faVideo, faChevronDown, faTimes, faSquareFacebook, faYoutube, faHeartRegular, faCommentsRegular, faEyeRegular, faCommentDots, faBullhorn, faCoffee, faFistRaised, faAngleDown, faAngleRight, faQuestionCircleRegular);

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;
    
        if(name.startsWith("Admin/")) {
            page.layout ??= CorporateUILayout;
        } else {
            page.layout ??= LandingLayout;
        }
    
        return page;
    },
    setup({ el, App, props, plugin }) {
        const VueApp = createApp({
            render: () => h(App, props)
        });

        VueApp.config.globalProperties.$http = axios;
        // VueApp.config.globalProperties.$route = route

        VueApp.use(plugin)
            .use(CKEditor)
            .use(VuePlyr, {
                plyr: {}
            })
            .use(VueVideoPlayer)
            .component('QuillEditor', QuillEditor)
            .component("Link", Link)
            .component("Head", Head)
            .component('FontAwesomeIcon', FontAwesomeIcon)
            .mount(el);
    },
    title: title => `${title} FinArk Official Website`,
    progress: false
    // progress: {
    //     color: '#043a54',
    // }
});
/*因为是浏览器插件所以没有用懒加载*/
import password from '@/pages/passWord.vue';
import exDetail from '@/pages/exDetail.vue';
import settingKey from '@/pages/settingKey.vue';
import changePass from '@/pages/changePassword.vue';
import i18n from '@/pages/i18nSetting.vue';
import ektDetail from '@/pages/ektDetail.vue';
import successPage from '@/pages/successPage.vue';
import main from '@/pages/mainContent.vue';
import guess from '@/pages/guess.vue';
import mainPage from '@/pages/main.vue';
import myImport  from '@/pages/import.vue';
import exportAddress  from '@/pages/exportAddress.vue';
import me  from '@/pages/me.vue';
import exportEkt  from '@/pages/exportEkt.vue';
import exportQr  from '@/pages/export.vue';

export default [

    {
        path: '/main',
        name: 'main',
        component: main
    },{
        path: '/exportQr',
        name: 'exportQr',
        component: exportQr
    },
    {
        path: '/me',
        name: 'me',
        component: me
    },{
        path: '/exportEkt',
        name: 'exportEkt',
        component: exportEkt
    },{
        path: '/mainPage',
        name: 'mainPage',
        component: mainPage
    },{
        path: '/myImport',
        name: 'myImport',
        component: myImport
    },{
        path: '/exportAddress',
        name: 'exportAddress',
        component: exportAddress
    },
    {
        path: '/guess',
        name: 'guess',
        component: guess
    },
    {
        path: '/password',
        name: 'password',
        component: password
    },
    {
        path: '/successPage',
        name: 'successPage',
        component: successPage
    },
    {
        path: '/exDetail',
        name: 'exDetail',
        component: exDetail
    },
    {
        path: '/ektDetail',
        name: 'ektDetail',
        component: ektDetail
    },
    {
        path: '/settingKey',
        name: 'settingKey',
        component: settingKey
    },{
        path: '/i18n',
        name: 'i18n',
        component: i18n
    },
]

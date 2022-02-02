import Dashboard from '../pages/mainpages/admin/dashboard/dashboard';
import Settings from '../pages/mainpages/admin/settings/settings';
import AppLayout from '../pages/shared/applayout/applayout';


export const appPages = [
  {
    label: 'Dashboard',
    path: '/',
    exact: true,
    children: AppLayout({})(Dashboard),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-apps" style={{ color: '#333333' }}></i>,
  },
  {
    label: 'Settings',
    path: '/settings',
    exact: true,
    children: AppLayout({})(Settings),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-settings" style={{ color: '#333333' }}></i>,
  },
  {
    label: 'Transactions',
    path: '/settings',
    exact: true,
    children: AppLayout({})(Settings),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-bank" style={{ color: '#333333' }}></i>,
  },
]


export const routes = [...appPages]

// export default [
//   {
//     path: 'dashboard',
//     component: DasboardSelector,
//   },
//   {
//     path: 'test',
//     component: ForgetPassword,
//   },
//   {
//     path: 'doctors',
//     component: AllDoctors,
//   },
//   {
//     path: 'chat',
//     component: Chat,
//   },
//   {
//     path: 'patient-record-details',
//     component: PatientRecordDetails,
//   },
//   {
//     path: 'tenants',
//     component: Tenants,
//   },
//   {
//     path: 'appointments',
//     component: DoctorAppointment,
//   },

//   {
//     path: 'all-drugs',
//     component: GetAllDrugs,
//   },
//   {
//     path: 'all-withdrawals',
//     component: AllWithdrawal,
//   },
//   {
//     path: 'appointments/',
//     component: Appointment,
//   },

//   {
//     path: 'withdrawal/',
//     component: WithDrawal,
//   },
//   {
//     path: 'laborders',
//     component: LabOrders,
//   },
//   {
//     path: 'transactions',
//     component: Transactions,
//   },
//   {
//     path: 'all-appointments',
//     component: AdminAppointment,
//   },
//   {
//     path: 'profile',
//     component: UserProfile,
//   },
//   {
//     path: 'orders',
//     component: Orders,
//   },
//   // {
//   //   path: 'settings',
//   //   component: Settings,
//   // },
// ];

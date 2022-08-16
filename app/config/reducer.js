import { combineReducers } from 'redux'

import loaderReducer from '../components/loader/loader.reducer';

// import sideMenuReducer from '../scenes/sidemenu/sideMenu.reducer';
// import toastReducer from './toast.reducer';
// import notificationReducer from './notification.reducer'
// import powerGoalsReducer from '../scenes/powergoals/powerGoals.reducer'
// import drVisitPlannerReducer from '../scenes/drvisitplanner/deVisitPlaner.reducer'
// import personalOrganizerReducer from '../scenes/personalorganizer/personalOrganizer.reducer'
// import addCategoryReducer from '../scenes/personalorganizer/addCategory.reducer'
// import articlesReducer from '../scenes/explorelife/articles.reducer'
// import companyNewsReducer from '../scenes/communicationhub/companyNews.reducer'
// import myFitnessGoalsReducer from '../scenes/yourfitnesscommunity/myFitnessGoals.reducer'
// import rewardReducer from '../components/reward/reward.reducer';
// import KPIDashboardReducer from '../scenes/kpidashboard/kpiDashboard.reducer';
// import KPIOneStopReducer from '../scenes/kpidashboard/oneStop.reducer';
// import MedicationReminder from '../scenes/medicationreminder/medicationReminder.reducer'
// import Profile from '../scenes/profile/profile.reducer'
// import ChatReducer from '../scenes/chatpoc/chatPOC.reducer'
// import allAboutDogsArticles from '../scenes/dogsandpets/allABoutDogs.reducer'

// const navReducer = (state, action) => {
//   const newState = Nav.router.getStateForAction(action, state)
//   return newState || state
// }

export default combineReducers({
  loaderReducer
//   rewardReducer,
//   sideMenuReducer,
//   nav:navReducer,
//   toastReducer,
//   notificationReducer,
//   powerGoalsReducer,
//   drVisitPlannerReducer,
//   personalOrganizerReducer,
//   addCategoryReducer,
//   articlesReducer,
//   companyNewsReducer,
//   myFitnessGoalsReducer,
//   KPIDashboardReducer,
//   MedicationReminder,
//   Profile,
//   KPIOneStopReducer,
//   ChatReducer,
//   allAboutDogsArticles
});
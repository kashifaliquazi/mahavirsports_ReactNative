import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const REGION= 'Dev';//'QA' //Dev
export const VERSION = 'v0.64.0' //30-April-2020

export const GET_TIPS_FOR_TRIPS_VIDEOS= `api/TipsForTrips?featureId=225` 


// export const BASE_URL =  REGION =='Dev'?'https://mhydevapi.azurewebsites.net/':'https://healthyyoudevapi.azurewebsites.net/';
// export const CDN_BASE_URL = REGION =='Dev'? 'https://mhydevassets.blob.core.windows.net/':'https://mhyqaassets.blob.core.windows.net/';
// export const ACTION_LOG_API = REGION =='Dev'? 'https://mhydevfunc.azurewebsites.net/api/InsertActionLog':'https://mhyqafunc.azurewebsites.net/api/InsertActionLog';
//export const ACTION_LOG_X_FUNCTION_KEY = REGION =='Dev'? 'VraVz1WHAvz37/QXJqM3QU4ytA7hO2bQDzG6xwpQMciQ2vhnhb3JFA==':'07DSLUPDcIOCfd3QHnG4G1MRr5wXWS2samySlbNy42PTD4ZHVpbZ/Q==';

// Pointing to Demo
export const BASE_URL = 'http://10.0.2.2:3000/testv1/';// REGION =='Dev'?'https://mhydevapi.azurewebsites.net/':'https://healthyyoudevapi.azurewebsites.net/';

export const LOGIN_API = 'user/login';

export const CDN_BASE_URL ='https://mhydemoassets.blob.core.windows.net/';// REGION =='Dev'? 'https://mhydevassets.blob.core.windows.net/':'https://mhyqaassets.blob.core.windows.net/';
export const ACTION_LOG_API = 'https://mhydemofunc.azurewebsites.net'; //REGION =='Dev'? 'https://mhydevfunc.azurewebsites.net/api/InsertActionLog':'https://mhyqafunc.azurewebsites.net/api/InsertActionLog';

export const ACTION_LOG_X_FUNCTION_KEY = 'LPqG15enaati1HQaLCX8KuhxdGO3THc1OWaqzcuPA3S42HyxteZidg==';//REGION =='Dev'? 'VraVz1WHAvz37/QXJqM3QU4ytA7hO2bQDzG6xwpQMciQ2vhnhb3JFA==':'07DSLUPDcIOCfd3QHnG4G1MRr5wXWS2samySlbNy42PTD4ZHVpbZ/Q==';

export const AMIE_VIDEOS= `api/YFC_Videos?featureId=50` // Replaced Saturday Mornign with Ammie API Reference to MYHMOBILE-1514

export const GET_PLANET_MACKIE_VIDEOS= `api/PlanetMackie?featureId=223` 
export const GET_DOGS_AND_PETS_VIDEOS= `api/DogsAndPets?featureId=226` 

export const LGM_KRISTINA_VIDEOS= `api/LetsGetMovin?featureId=216` 
export const LGM_BEVERLY_VIDEOS= `api/LetsGetMovin?featureId=217` 
export const LGM_AMIE_VIDEOS= `api/LetsGetMovin?featureId=218` 

export const LITM_CRYSTAL_VIDEOS = `api/LivinInTheMore?featureId=219`
export const LITM_CHRISTINA_VIDEOS= `api/LivinInTheMore?featureId=220` 
export const LITM_DANI_VIDEOS= `api/LivinInTheMore?featureId=221` 

export const LOG_OUT_API = 'api/Logoff';
export const GET_TOKEN = 'token';
export const USER_MODULES = 'api/ModulesForUser/GetModules';
export const VALIDATE_EMAIL = 'api/ForgotPassword/ValidateEmail';
export const RESET_EMAIL = 'api/ForgotPassword/SendResetEmail';
export const CHANGE_PASSWORD = 'api/Account/ChangePassword';



export const DOGS_AND_PETS_VIDEOS= `api/AllAboutDogsVideos?featureId=227` 
export const GET_All_ABOUT_DOGS_ARTICLES= `api/AllAboutDogsArticles?featureId=228` 





// export const FITBIT_CONFIGURATION = {
//     client_id:'22BKL8',
//     client_secret: '923068a47c4d8722926aa8e3100d57e4',
//     response_type: 'code',// for ios
//     scope: 'heartrate activity activity profile sleep',
//     redirect_uri: 'io.identityserver.demo://callback',
//     expires_in: '31536000',
//     scope:{
//         ios_devices:'heartrate activity activity profile sleep',
//         android_devices:['heartrate activity', 'activity', 'profile', 'sleep'],
//     },
//     authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize', 
//     tokenEndpoint: 'https://api.fitbit.com/oauth2/token', ////for android
//     revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',//for android,
//     grant_type: 'authorization_code', // fro IOS
// } 
// export const FITBIT_CONFIGURATION = (REGION=="Dev"?{
//     client_id:'22BKL8',
//     client_secret: '923068a47c4d8722926aa8e3100d57e4',
//     response_type: 'code',// for ios
//     scope: 'heartrate activity activity profile sleep',
//     redirect_uri: 'io.identityserver.demo://callback',
//     expires_in: '31536000',
//     scope:{
//         ios_devices:'heartrate activity activity profile sleep',
//         android_devices:['heartrate activity', 'activity', 'profile', 'sleep'],
//     },
//     authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize', 
//     tokenEndpoint: 'https://api.fitbit.com/oauth2/token', ////for android
//     revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',//for android,
//     grant_type: 'authorization_code', // fro IOS
// } :
// {
//     client_id:'22D42C',
//     client_secret: '53634febbf37452ddd0509f900830567',
//     response_type: 'code',// for ios
//     scope: 'heartrate activity activity profile sleep',
//     redirect_uri: 'io.identityserver.demo://callback',
//     expires_in: '31536000',
//     scope:{
//         ios_devices:'heartrate activity activity profile sleep',
//         android_devices:['heartrate activity', 'activity', 'profile', 'sleep'],
//     },
//     authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize', 
//     tokenEndpoint: 'https://api.fitbit.com/oauth2/token', ////for android
//     revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',//for android,
//     grant_type: 'authorization_code', // fro IOS
// })

//fit bit configration for Demo App
export const FITBIT_CONFIGURATION = {
    client_id:'22BN9Z',
    client_secret: 'a19906e3b8acfc29e703013d6bd511e1',
    response_type: 'code',// for ios
    scope: 'heartrate activity activity profile sleep',
    redirect_uri: 'io.identityserver.demo://callback',
    expires_in: '31536000',
    scope:{
        ios_devices:'heartrate activity activity profile sleep',
        android_devices:['heartrate activity', 'activity', 'profile', 'sleep'],
    },
    authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize', 
    tokenEndpoint: 'https://api.fitbit.com/oauth2/token', ////for android
    revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',//for android,
    grant_type: 'authorization_code', // fro IOS
} ;

export const METHODS = {
    POST: 'POST',
    GET: 'GET',
    DELETE: 'DELETE',
    PUT:'PUT'
}
export const FCM_SENDER_ID = "981736343669";
export const FAB_BUTTON_SIZE = viewportWidth*0.15
export const STICKY_BUTTON_HEIGHT= viewportWidth*0.15
export const CHECK_BOX_SIZE=viewportWidth*0.06;
export const PIE_DIMENSIONS = {HEIGHT:viewportWidth*0.7, WIDTH:viewportWidth*0.7};
export const HOW_IT_WORKS_VIDEO_FLAG = 'api/StartVideo/SetStartVideoFlag';
export const MY_LIFE_BALANCE = 'api/MyLifeBalance';

export const BLANK_FIELD = ' -- ';
export const KEYBOARD_EVENT_DURATION = 300;
export const DOWNLOAD_MEDICATION_CONTENT = `api/UserMedication/DownloadContent`;
export const UPLOAD_MEDICATION_CONTENT = `api/UserMedication/UploadContent`;
export const REWARD_POINTS = `api/RewardPointLedger/GetRewardPointLedgerByUser`;
export const POWER_GOALS_VIDEOS = 'api/PowerGoals/GetVideos/2';
export const POWER_GOALS_VIDEOS_WITH_PAGINATION = 'api/PowerGoals/GetVideosByPage';
export const POWER_GOALS_VIDEO_FLAG = 'api/PowerGoals/SetVideoSeenFlag';
export const MY_POWER_GOALS = 'api/MyPowerGoals';
export const YOUR_VOICE_MATTERS = 'api/YourVoice';

export const HEALTH_ASSESSMENT_FLAG = '/api/EmployeeHealthWellness/UpdateFlag/8';
export const WELLNESS_EXAM_FLAG = '/api/EmployeeHealthWellness/UpdateFlag/7';

export const HEALTHY_YOU_GUIDE = 'api/HealthyYouGuide/Getvideos';
export const START_A_TEAM_GUIDELINE = 'api/FC_Teams/guideLineForStartTeamByTenantID';


export const UPDATE_USER_PROFILE = 'api/CacheManager/UpdateUserProfileMobile';
export const UPDATE_PROFILE_PICTURE = 'api/CacheManager/UploadContent';

export const ONESTOP_CATEGORIES ='api/onestop?pagesize=10&pageindex=1'

//as Ashish sir worked on to separate the healthy you guide from Reward point ledger.
//he created a new API for Healthy You Guide to save the video content visit by users.
//that's why changed the api
// export const UNLOCK_HEALTHY_YOU_GUIDE_VIDEO = 'api/RewardPointLedger/SaveRewardPointLedgerByFeatureIDForView';
export const UNLOCK_HEALTHY_YOU_GUIDE_VIDEO = 'api/HYGuideContentVisit/SaveHYGuideContentVisit';

export const FASTRESEARCH_CATEGORY = 'api/FastResearchCategory';
export const FASTRESEARCH_CATEGORY_DETAILS = 'api/FastResearch/Category/';

export const DR_VISIT_PLANER_QUESYION_BY_CAT_ID = 'api/DrVisitPlanner/QuestionsByVisitCatId/';

export const SURVEY = 'Api/SurveyMaster';

export const APPROVE_IDEA = 'api/SharedIdeas/Approve';
export const DISCARD_IDEA = 'api/SharedIdeas/Reject';
export const IDEAS_FOR_APPROVAL = 'api/SharedIdeas';
//export const VIDEOS_LIBRERY = 'api/ContentForUser?featureId=58&isOld=false&isFinancialTip=false'
export const VIDEOS_LIBRERY = 'api/YFC_Videos?featureId=58'// replaced reference to MYHMOBILE-1513
export const JOIN_TEAM_API = 'api/FC_Teams/GetTeamsToJoin';
export const JOIN_TEAM_REQUEST = 'api/FC_Teams/JoinTeam'
export const TEAM_TYPE = 'api/TeamType';
export const ACTIVITY_TEAM_TYPE = 'api/Activity/GetActivityByTeamTypeID';
export const GET_MY_TEAMS = 'api/FC_Teams/GetMYTeams';
export const REJECT_TEAM_MEMBER = 'api/FC_Teams/RejectTeamMember';
export const APPROVE_TEAM_MEMBER = 'api/FC_Teams/ApproveTeamMember';
export const START_TEAM = 'api/FC_Teams/StartATeam';
export const LEAVE_TEAM = 'api/FC_Teams/LeaveTeam';
export const GET_TEAM_REQUEST = 'api/FC_Teams/GetTeamsPendingApproval'
export const APPROVE_TEAM = 'api/FC_Teams/ApproveTeam';
export const REJECT_TEAM = 'api/FC_Teams/RejectTeam';

export const GET_ALL_ACTIVITY = 'api/Activity'; // self directred activity
export const FITNESS_ACTIFITY_LOG = 'api/FitnessActivityLog';

export const TEAM_CHALLENGES = `api/FC_TeamChallenge/TeamChallenge`;
export const GET_TEAM_CHALLENGES = `api/FC_TeamChallenge/GetTeamChallenges`;
export const ACCEPT_TEAM_CHALLENGES = `api/FC_TeamChallenge/AcceptTeamChallenge`; 
export const REJECT_TEAM_CHALLENGES = `api/FC_TeamChallenge/RejectTeamChallenge`;


export const TEAM_CHALLENGE_DURATION = 'api/FC_Teams/GetChallengeDuration';
export const GET_TEAM_PROGRESS_SUMMARY = 'api/FC_Teams/GetTeamProgressSummary';
export const GET_TEAM_MEMBER_PROGRESS = 'api/FC_Teams/GetTeamMemberProgress';

export const GET_FITNESS_TRACKER_COMPANY = `api/FitnessTracker/GetFitnessTrackerCompany`;
export const GET_FITNESS_TRACKER_DEVICES = `api/FitnessTracker/GetFitnessTracker`;
export const LINK_MY_DEVICE = `api/FitnessTracker/LinkMyDevice`;
export const FITNESS_ACTIVITY_LOG_SUMMARY = 'api/FitnessActivityLog/GetWeeklySummary';
export const FITNESS_ACTIVITY_SYNC = `api/FitnessTracker/FitnessActivitySync`;
export const ZINDEX_MAX = 11000;

export const KPI_GET_COMPLETION_OF_WELLNESS_EXAM = 'api/Kpi/getCompletionOfWellnessExam';
export const KPI_GET_COMPLETION_OF_HEALTH_ASSESMENT = 'api/Kpi/getCompletionOfHealthAssessment';
export const KPI_GET_COMPLETION_OF_HEALTHY_YOU_GUIDE = 'api/Kpi/getCompletionOfHealthYouGuide';

export const KPI_GET_PAGE_VIEWS = 'api/Kpi/getUsageMainMenuModuleWise';
export const KPI_GET_EXPLORE_LIFE_USAGE = 'api/Kpi/getExploreLifeMenusUsage';
export const KPI_GET_EXPLORE_LIFE_COMMENTS_STATS = 'api/Kpi/getExploreLifeCommentsStats';
export const KPI_GET_USER_COUNT_FOR_IDEAS_SHARED = 'api/Kpi/getUserCountForIdeasShared';
export const KPI_GET_IDEA_SHARED_BY_DEPARTMENT_WISE = 'api/Kpi/getIdeasSharedByDepartment';
export const KPI_GET_USER_COUNT_BY_DEVICE_TYPE = 'api/Kpi/getUserCountByDeviceType';
export const KPI_GET_USER_COUNT_BY_DEVICE_COMPANY = 'api/Kpi/getUserCountByDeviceCompany';
export const KPI_GET_SELF_DIRECTED_ACTIVITIES_PARTICIPATION_STATS = 'api/Kpi/getSelfDirectedActivitiesParticipationStats';

export const KPI_GET_ACTIVITY_FOR_KPI = 'api/Kpi/GetActivityForKPI';
export const KPI_GET_TEAM_FOR_KPI = 'api/Kpi/GetTeamForKPI';

export const KPI_GET_USER_COMMENT_STARS = `api/Kpi/getUserCommentsStats`
export const KPI_GET_ALL_PAGE_VISIT = `api/Kpi/getPageVisitForAllFeatures`;

export const KPI_GET_HEALTHY_BALANCE_STATS = `api/Kpi/getHealthyBalanceStats`;

export const KPI_GET_TOP_CONTENT = 'api/Kpi/getTopContentView';

export const KPI_GET_EXPLORE_LIFE_CONTENT_USAGE = `api/Kpi/getExploreLifeContentUsageWithContentTitle`;
export const KPI_GET_COMMENT_TYPE_FOR_EXPLORE_LIFE_CONTENT = `api/Kpi/getCommentTypeForExploreLifeContent`;

export const KPI_GET_MY_LIFE_BALANCE_USAGE_WITH_CONTENT_TITLE = `api/Kpi/getMyLifeBalanceUsageWithContentTitle`;

export const KPI_GET_ACTIVITY_STATS = `api/Kpi/getActivitiesParticipationStats`;

export const KPI_GET_CONTEST_PARTICIPATION_STATS = `api/Kpi/getContestParticipationStats`;
export const KPI_GET_SURVEY_PARTICIPATION_STATS = `api/Kpi/getSurveyParticipationStats`;

export const KPI_GET_CONTENT_USAGE_OF_SAT_MORNING_WITH_AMIE = `api/Kpi/getContentUsageOfSatMorningWithAmie`;
export const KPI_GET_CONTENT_USAGE_OF_VIDEO_LIBRARY = `api/Kpi/getContentUsageOfVideoLibrary`;
export const KPI_GET_ACTIVITY_MEASUREMENT ='api/Kpi/getTrackerActivitiesStats';

export const KPI_GET_EONE_STOP_CATEGORY_USAGE = 'api/Kpi/getOneStopCategoryUsage';
export const KPI_GET_EONE_STOP_SUB_CATEGORY_USAGE = 'api/Kpi/getOneStopSubCategoryUsage';
// export const COMMENT_ON_CONTENT = `api/RewardPointLedger/SaveRewardPointLedgerByFeatureID`;
//changing this api since we've removed this api from RewardPointLedger and created new one
export const COMMENT_ON_CONTENT = `api/UserComments/SaveUserComments`;

export const ACTION_LOG={
login:{
    TypeID:1
},
logout:{
    TypeID:2
},
ChangePassword:{
    TypeID:6
},
complitionOfWellnessExam:{
    TypeID:7
},
complitionOfHealthAssessment:{
    TypeID:8
},
complitionOfHealthyYouGuide:{
    TypeID:9
},
logout:{
    TypeID:2
},
contentView:{
    TypeID:4
},

newsRead : {
    TypeID:10
},
pageVisit :{
    TypeID:3
},
ideasShared : { //it is different in this doc: https://gohealthyyou.atlassian.net/wiki/spaces/MYHMOBILE/pages/453083168/ACTION+LOG+REWARD+POINTS+Requirements
    TypeID:13
},
surveyParticipation : {
    TypeID:12
},
participationInContest : {
    TypeID:14
},
commentOnExploreLife:{ // otherId = comment ID , reference ID = article ID
    TypeID:5
},
commentOnCompanyNews:{
    TypeID:11
},
oneStopModuleLinkVisit:{
    TypeID:15
}
}

export const  ACTION_LOG_PAGE_VISIT_REFERENCE_ID = {
    DogsAndPets:226,
    DogsAndPetsVideo:227,
    DogsAndPetsArticles:228,
    PlanetMackie: 223,
    TipsForTrips: 225,
    VacationPlus: 224,
    PlanetMackie: 223, 
    DogsAndPets:226,
    LetsGetMovingHome: 214,
    LGM_LighthouseYogaWithKristina	: 216,
    LGM_QigongWithBeverly: 217,
    LGM_SaturdayMorningWithAmie: 218,

    LivingInTheMoreHome:215,
    LITM_LimitlessYouWithCrystal	: 219,
    LITM_PowerGoalsByChristina: 220,
    LITM_DecisionMakingWithDanute: 221,

    SaturdayMorningWithAmie: 50,
    JoinATeam: 87,
    StartATeam: 86,
    TeamChallenge: 64,
    SelfDirectedActivities: 59,
    MyFitnessGoals: 63,
    FitnessActivityLog: 61,
    VideoLibrary: 58,
    LinkMyDevice: 62,
    TeamProgress: 66,
    TeamMembersProgress: 60,
    TravelRewardCenter:70,
    CompanyNews:28,
    YourVoiceMatters:29,
    Livinginthemoment:97,
    ReleaseStress:98,
    BalanceThoughtAndFeeling:99,
    Spirituality: 100,
    MyPowerGoals:33,
    ExploreLifeAtHome:24,
    ExploreLifeAtWork:25,
    ExploreLifeOnTheGo:26,
    ExploreLifeJustForYou:27,
    
    FastResearchHome:74,

    PersonalOrganizerHome:73,
    Birthdays:75,
    MyPrescriptions:76,
    EmergencyContacts:77,
    TravelInformation:78,
    MyDoctors:79,
    MyAutomobiles:80,
    MyGymInformation:81,
    InsuranceInformation:82,
    MyPetInformation:83,
    CreateNewCategory:84,
    ViewNewCategory:85,

    MedicationReminderHome:222,
    DoctorVisitPlannerHome:72,
    WellnessExam:88,
    DiscussHealthProblem:89,
    DiscussSurgery:90,
    GetAMedicalTest:91,
    ChangeOrGetNewMedication: 92,
    Emergency:93, //EmergencyChecklist
    Gynecology:94,

    HealthyYOUGuide: 23,
    HealthyBalance:30,
    MyLifeBalance:31,
    PowerGoals:32,

    ExploreLifeLandingPage:43,
    ExploreLifeComment:44,
    CommunicationHub:45,
    YourFitnessCommunity:51,
    TeamsApproval:56,
    ResourceCenter:71,
    CompanyNewsDetails:68,
    OneStop:201
    
}


export const PAGE_SIZE = 8;
export const UI_CONSTANTS={

    //colors

    PRIMARY_COLOR:'#1C1C57',

    DARK_STATUS_BAR:'#080808',
    
    SECONDARY_COLOR:'#89E643',

    PINK_COLOR :'#E51373',

    COMPANY_NEWS_FEATURED_BACKGROUND_COLOR:'#7432CD',

    BTN_COLORS:['#89E643', '#2EA10E'],
    FLAT_BTN_COLORS:['#8DC440', '#8DC440'],
    SIDEMENU_ICONS_COLOR:'#8DC440',

    GREEN_CTA_COLORS:['#8DC440','#62882C'],

    GREEN2_CTA_COLORS:['#86B95D','#258741'],
    
    PINK_CTA_COLORS:['#C656B5','#992687'],

    DARKBLUE_CTA_COLORS:['#5E5EC0','#292974'],

    LIGHTPINK_CTA_COLORS:['#F57BB3','#E51373'],
    
    LIGHTBLUE_CTA_COLORS:['#66CDFE','#007CB8'],
    
    ORANGE_CTA_COLORS:['#FF7800', '#CD4604'],
    
    MAGENTA_CTA_COLORS:['#7907F4', '#430088'],
    
    YELLOW_CTA_COLORS:['#E8CE00', '#B57600'],
    
    LOVENDAR_CTA_COLORS:['#5039DE', '#1B0D60'],

    LOVENDAR2_CTA_COLORS:['#9347EF', '#5D21A7'],

    TEAM_COLOR_01:'#89E643',
    TEAM_COLOR_02:'#FCCB0A',
    TEAM_COLOR_03:'#15ACB8',
    TEAM_COLOR_04:'#FF7777',
    TEAM_COLOR_05:'#FF005D',
    TEAM_COLOR_06:'#FF6439',
    TEAM_COLOR_07:'#E43939',
    TEAM_COLOR_08:'#A67CFF',
    TEAM_COLOR_09:'#FFA2C6',
    TEAM_COLOR_10:'#00B8FF',
    TEAM_COLOR_11:'#B2BE7D',
    TEAM_COLOR_12:'#DEDE00',

    

    TEAM_COLOR_01_BG:'#1B2B00',
    TEAM_COLOR_02_BG:'#2B1E00',
    TEAM_COLOR_03_BG:'#1C4A54',
    TEAM_COLOR_04_BG:'#5B3333',
    TEAM_COLOR_05_BG:'#46041E',
    TEAM_COLOR_06_BG:'#572700',
    TEAM_COLOR_07_BG:'#481313',
    TEAM_COLOR_08_BG:'#20054B',
    TEAM_COLOR_09_BG:'#372A37',
    TEAM_COLOR_10_BG:'#001C7D',
    TEAM_COLOR_11_BG:'#2D3420',
    TEAM_COLOR_12_BG:'#293100',


    
    PIE_COLOR_01:'#64DD17',
    PIE_COLOR_02:'#6200EA',
    PIE_COLOR_03:'#AA00FF',
    PIE_COLOR_04:'#03A9F4',
    PIE_COLOR_05:'#E91E63',
    PIE_COLOR_06:'#F44336',
    PIE_COLOR_07:'#FF9800',
    PIE_COLOR_08:'#3F51B5',
    PIE_COLOR_09:'#CDDC39',
    PIE_COLOR_10:'#0091EA',
    PIE_COLOR_11:'#607D8B',
    PIE_COLOR_12:'#FFAF02',
    
    WELCOME_BTN_COLORS:['#1D8CFA', '#3023AE'],
    //CTA - Gradient TILE Buttons 
    CTA_BUTTON_WIDTH: viewportWidth * 0.8,
    IPAD_CTA_BUTTON_WIDTH:viewportWidth * 0.40,
    CTA_BUTTON_HEIGHT: viewportHeight * 0.15,
    IPAD_CTA_BUTTON_HEIGHT:viewportHeight * 0.21,
    CTA_ICON_SIZE:75,
    CTA_BORDER_RADIUS:12,
    CTA_FONT_SIZE:20,

    //BUTTON CSS
    BTN_ICON_SIZE:24,
    BTN_TEXT_SIZE:viewportWidth*0.04,
    BTN_TEXT_FONTFAMILY:'unisansregular',
    BTN_TEXT_COLOR:'white',

    //Page Typography
    PAGE_FIRST_TITLE_FONTSIZE:viewportWidth*0.07,
    PAGE_FIRST_TITLE_FONTFAMILY : 'unisansregular',
    
    //HEADER IMAGE
    HEADER_IMAGE_HEIGHT:Platform.OS==='ios'?viewportHeight*0.6:viewportHeight*0.5,
    HEADER_IMAGE_WIDTH:'100%',
    CONTENT_CONTAINER_BORDER_RADIUS:20,
    SURVEY_FINISH_BUTTON_WIDTH:viewportWidth*0.35,
    SURVEY_QUESTION_NAVIGATION_BTN_SIZE:viewportHeight*0.1,
    SURVEY_QUESTION_NAVIGATION_BTN_SIZE_SE:viewportHeight*0.08,
    CONTENT_MASTER_PADDING:viewportWidth*0.032,

    //dropDownTileRecords
    RECORD_HEIGHT:viewportHeight*0.06+5,
    RECORD_TOP_PADDING:viewportHeight*0.06/2+5,
    RECORD_TOP:-viewportHeight*0.06/1.5,

    //medication reminder 
    CAPSULE_WIDTH:viewportWidth*0.7,
    CAPSULE_HEIGHT:viewportHeight*0.88,
    CAPSULE_WIDTH_IPAD:viewportWidth*0.65,
    CAPSULE_HEIGHT_IPAD:viewportHeight*0.9,


}

export const PRESCRIPTIONS = 'api/RC_UserPrescriptionInfo';
export const BIRTHDAYS = 'api/RC_Birthdays';
export const DOCTOR = 'api/RC_UserDoctorInfo';
export const GYM = `api/RC_UserGymInfo`;
export const PET = `api/RC_UserPetInfo`;
export const EMERGENCY_CONTACTS = `api/RC_UserICEInfo`;
export const AUTO_MOBILE = `api/RC_UserAutomobileInfo`;
export const TRAVEL_INFO = `api/RC_UserTravelInfo`;
export const HEALTH_INSUARANCE = `api/RC_InsuranceHealth`;
export const LIFE_INSUARANCE = `api/RC_InsuranceLife`;
export const HOME_INSUARANCE = `api/RC_InsuranceHomeOwners`;
export const CAR_INSUARANCE = `api/RC_InsuranceCar`;
export const CUSTOM_CATEGORY = `api/RC_UserNewCategory`;
export const CUSTOM_CATEGORY_RECORDS = `api/RC_CategoryValues`;
export const FEATURED_ARTICLES =   `api/ContentForUser?isOld=false&isFinancialTip=false`
export const FINANCIAL_ARTICLES =   `api/ContentForUser?isOld=false&isFinancialTip=true`
export const PREVIOUS_ARTICLES =   `api/ContentForUser?isOld=true&isFinancialTip=false`
export const EXPLORE_LIFE_FEATURED_ARTICLES =   `api/ExploreLife?isOld=false&isFinancialTip=false`
export const EXPLORE_LIFE_FINANCIAL_ARTICLES =   `api/ExploreLife?isOld=false&isFinancialTip=true`
export const EXPLORE_LIFE_PREVIOUS_ARTICLES =   `api/ExploreLife?isOld=true&isFinancialTip=false`
export const GET_EXPLORE_LIFE_CONTENT_BY_ID = `api/ExploreLife/ContentById`;
export const GET_NEWS_BY_ID = `api/CompanyNews/NewsById`;
export const JUST_FOR_YOU_ARTICLES = `api/JustForYou`
export const COMPANY_NEWS = `api/CompanyNews`
// export const GET_COMMENT_GIVEN_BY_CONTENT_ID = `api/RewardPointLedger/GetGivenCommentById`;
//changing this api since we've removed this api from RewardPointLedger and created new one
export const GET_COMMENT_GIVEN_BY_CONTENT_ID = `api/UserComments/GetGivenComment`;
export const MY_FITNESS_GOALS = `api/FC_MyFitnessGoal`
export const MY_FITNESS_GOALS_MASTER = `api/GoalMaster`
export const MY_FITNESS_GOALS_DURATION= `api/ChallengeDuration`

export const GET_TEAMS_BY_LEAD= `api/FC_TeamChallenge/GetTeamsByLead` 
export const GET_OTHER_TEAMS = 'api/FC_TeamChallenge/GetOtherTeams';
export const CHALLENGE_TEAM = 'api/FC_Teams/TeamChallenge';

export const VALIDATIONS={
    EMAIL:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    // NEW_EMAIL_REGEX: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    NEW_EMAIL_REGEX: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //https://stackoverflow.com/a/5503256
    CONTACT:/^\d{10,15}$/
}
export const MODULELISTDETAILS = {
    "Healthy You Guide": {
        "ModuleName": "Healthy You Guide",
        "Icon": "icon-healthy-you.png",
        "Scene": "HealthyYouGuide",
         
    },
    "Resource Center": {
        "ModuleName": "Resource Center",
        "Icon": "icon-resource-center.png",
        "Scene": "ResourceCenter"
    },
    "Explore Life": {
        "ModuleName": "Explore Life",
        "Icon": "icon-explore-life.png",
        "Scene": "ExploreLife"
    },
    "Your Fitness Community": {
        "ModuleName": "Your Fitness Community",
        "Icon": "icon-your-fitness-community.png",
        "Scene": "YourFitnessCommunity"
    },
    "Communication Hub": {
        "ModuleName": "Communication Hub",
        "Icon": "icon-communication-hub.png",
        "Scene": "CommunicationHub"
    },
    "Healthy Balance": {
        "ModuleName": "Healthy Balance",
        "Icon": "icon-healthy-balance.png",
        "Scene": "HealthyBalance"
    },
    "My Life Balance": {
        "ModuleName": "My Life Balance",
        "Icon": "icon-my-life-balance.png",
        "Scene": "MyLifeBalance"
    },
    "Power Goals": {
        "ModuleName": "Power Goals",
        "Icon": "icon-power-goals.png",
        "Scene": "PowerGoals"
    },
    "Travel Rewards Center": {
        "ModuleName": "Travel Rewards Center",
        "Icon": "icon-travel-rewards.png",
        "Scene": "TravelRewardsCenter"
    },
    "KPI Dashboard": {
        "ModuleName": "KPI Dashboard",
        "Icon": "icon-kpi-dashboard.png",
        "Scene": "KPIDashboard"
    },  
    "Just For You": {
        "ModuleName": "Just For You",
        "Icon": "icon-just-for-you.png",
        "Scene": "/teamsapproval"
    },
    "Team Approval": {
        "ModuleName": "Team Approval",
        "Icon": "icon-team-approval.png",
        "Scene": "TeamApproval"
    },
    "Customer Super Admin": {
        "ModuleName": "Customer Super Admin",
        "Icon": "nav9.png",
        "Scene": "/teamsapproval"
    },
    "Reward Credits": {
        "ModuleName": "Reward Credits",
        "Icon": "icon-rewards-credit.png",
        "Scene": "RewardCredits"
    },
    "Shared Ideas": {
        "ModuleName": "Shared Ideas",
        "Icon": "icon-share-your-ideas.png",
        "Scene": "Approval"
    },
    "Vacation Plus": {
        "ModuleName": "Vacation Plus",
        "Icon": "icon-vacation-plus.png",
        "Scene": "VaccationPlus1"
    },
    "One Stop": {
        "ModuleName": "One Stop",
        "Icon": "icon-One-stop.png",
        "Scene": "OneStop"
    },
    "Chat POC": {
        "ModuleName": "Chat POC",
        "Icon": "Chat.png",
        "Scene": "ChatPOC"
    },
    "Livin’ in The More": {
        "ModuleName": "Livin’ in The More",
        "Icon": "livinginthemore.png",
        "Scene": "LivingInTheMore"
    },
    "Let’s Get Movin’": {
        "ModuleName": "Let’s Get Movin’",
        "Icon": "Step.png",
        "Scene": "LetsGetMoving"
        },
    "Audio POC": {
        "ModuleName": "Audio POC",
        "Icon": "Chat.png",
        "Scene": "AudioPoc"
    },
    "Planet Mackie": {
        "ModuleName": "Planet Mackie",
        "Icon": "planet-mackie-icon.png",
        "Scene": "PlanetMackie"
    },
    "All About Dogs": {
        "ModuleName": "All About Dogs",
        "Icon": "icon-dogs-and-pets.png",
        "Scene": "DogsAndPets"
    },
    // "Dogs and Pets": {
    //     "ModuleName": "Dogs and Pets",
    //     "Icon": "icon-dogs-and-pets.png",
    //     "Scene": "DogsAndPets"
    // },
    // "Vaccation Plus 2": {
    //     "ModuleName": "Vaccation Plus 2",
    //     "Icon": "icon-vacation-plus.png",
    //     "Scene": "VaccationPlus2"
    // },
}

export const LABLES = {
    DOWNLOAD_PDF : 'Download PDF',
    SAVE : 'Save',
    RESET : `Reset`,
    APPLY : `Apply`,
    GOAL_STATUS :`Goal Status`,
    DONE : `Done`,
    TIME : `Time`,
    DATE : `Date`,
    

}
export const RESET_PASSWORD = {
    PASSWORD_LINK : `Password Reset Link Sent`,
    RESET_MESSAGE : `We have sent you password reset link on your registered email address. Follow the instructions to reset your Password.`
}
export const HEALTHY_BALANCE = {
    TITLE : `Gain control over substances, situations and  manage diabetes in a new and empowering way.`,
    TITLE1 : `We can help!`,
}
export const LANDING_PAGE = {
      // TITLE : `Connect, Collaborate, Participate and Reward yourself!`,
    // SUBTITLE : `Helping you make a difference at work, at home and on the go`,
    TITLE : `Connect – Participate – Reward Yourself`,
    SUBTITLE : `Making Life Better at Home – Work and On the Go!`,
}
export const COPYRIGHTS = {
    COPYRIGHT : `Copyright 2020 All rights`
    }
    
    export const HEALTHY_YOU_GUIDE_TITLES = {
    TITLE : `Get the most from every medical visit... A`,
    TITLE1 : `Fun, Informative, Audio/Visual Experience`,
    TITLE2 : `for the entire family.`,
    PLAY : `Play`,
    }
export const MY_LIFE_BALANCE_TITLES = {
    TITLE : `Helping focus mind, body and spirit in new empowering ways.`,
    TITLE1 : `Learn fun and engaging techniques to bring your attention to the present, helping you live in the moment, so that life happens for you… rather than to you!`,
}
export const MESSAGES={
    DELETE:`Record deleted successfully.`,
    ADD:`Record added successfully.`,
    EDIT:`Record edited successfully.`,
    NO_RECORDS:`No more records found.`,
    ANSWER_VALIDATION:'Please select an answer',
    DELETE_CONFIRMATION:`Do you want to delete this record?`,
    NO_RECORDS_ADDED_MESSAGE:`No record found.`,
    CONTEST_IDEA : `Your idea has been submitted for approval.`,
    HEALTHYYOUGUIDE_VIDEO_LOCK_MESSAGE:`Please watch previous video first.`,
    DEVICE_SYNCING_ERROR:`Please link your fitness device first.`
}
export const POWER_GOALS = {
    TITLE : `Unlock the Power of your Potential`,
    TITLE1 : `Set a Power Goal with an action plan and change your life!`,
    TITLE2 : `As Mark Twain once said, “The secret to getting ahead is getting started.”`,
    TITLE3 : `Do you have a goal in mind ? Not any goal but a real Power Goal that will inspire you to step-up and take action! Then let’s get started and make it happen!`,
    TITLE4 : `As Christina says,`,
    TITLE5 : `"Make life happen for you,`,
    TITLE6 : `rather than to you."`,
}
export const RESOURCE_CENTER = {
    TITLE : `Information at your Fingertips when you need it Fast!`,
}
export const WELCOME = {
    TITLE : `Welcome to`,
    TITLE1 : `New Way To Explore, Connect, Collaborate and Participate...While Rewarding yourself and your family for every wellness step that you take.`,
    TITLE2 : `Ready to have some fun ?`,
}
export const DR_VISIT_PLANER = {
    TITLE : `Want answers...Ask Questions !`,
    // TITLE2 : `Quickly prepare for a medical visit from a wellness exam to an emergency, with questions and check list to speed you on your way.`,
    TITLE2 : `Quickly prepare for a medical visit from a wellness exam to an emergency. Simply view questions and check list to speed you on your way.`,
}
export const WELLNESS_EXAM={
    TITLE1:`It’s Your Wellness Exam… Bring Your Questions!`,
    DESCRIPTION1:`Review the following questions and be sure to add your own. Then just Download PDF.`,
}
export const DISCUSS_HEALTH_PROBLEM={
    TITLE1:`Be sure to have your questions ready`,
    DESCRIPTION1:`A little preparation makes all the difference… add additional questions and just Download PDF.`,
    NOTE:`Note: If still unsure or uncomfortable, get a 2nd opinion.`
}
export const DISCUSS_SURGERY={
    TITLE1:`Be sure to have your questions ready`,
    DESCRIPTION1:`Listening is important… Asking Questions is Critical! Be sure to add your own and just Download PDF.`,
    NOTE:`If you still have doubts, concerns or feel unsure get a Second Opinion`
}
export const GET_MEDICAL_TEST={
    TITLE1:`Be sure to have your questions ready`,
    DESCRIPTION1:`Make sure you get the best result… Have your questions ready and just Download PDF.`,
 }
export const GET_NEW_MEDICATION={
    TITLE1:`Be sure to have your questions ready`,
    DESCRIPTION1:`Be sure to bring a list of your current medications. Add your own questions and just Download PDF.`,
}
export const EMERGYNCY_CHECKLIST={
    TITLE:`Quickly Prepare and Get Moving!`,
    TITLE1:`When to Call 911`,
    DESCRIPTION1:`There are times when a medical condition is so severe that it requires immediate professional medical assistance. The following 15 symptoms are signs of medical emergencies—call 911 immediately.`,
    TITLE2:`Every Second Counts`,
    DESCRIPTION2:`Things to Bring When Heading to the Emergency Room Use this list to make sure you have everything necessary for an ER stay.`,
    NOTE:`If You Are Unsure About What to Do in an Emergency Situation - Call 911`
}
export const GYNECOLOGIST_CHECKLIST={
    TITLE:`Be sure to have your questions ready`,
    TITLE1:`Be sure to have your questions ready`,
    DESCRIPTION1:`Be prepared for your next visit to the gynecologist with this checklist and be sure to add your own questions. Then Download PDF.`,
}

export const EXPLORE_LIFE={
    LANDING_PAGE:{
        HEADING_1:`Support for everyday living at Home, Work and On the Go!`,
        HEADING_2:`It’s all about you… with a rich mix of real-life issues that will keep you coming back for more!`,
    },
    ARTICLES:{
        EXPLORE_LIFE_AT_HOME_HEADING:`Home is where the heart is… Make it even better!`,
        EXPLORE_LIFE_AT_WORK_HEADING:`Making your workplace
        Work for you!`,
        EXPLORE_LIFE_ON_THE_GO_HEADING:`Getting there is half the fun…`,
        JUST_FOR_YOU_HEADING:`Articles... Specially for you!`,
    },
    
}
export const COMMUNICATION_HUB ={
    COMPANY_NEWS:{
        FEATURED_NEWS_HEADING:`Feature News`,
        OTHER_NEWS_HEADING_1:`National Fitness Challenge Winners are going on a 5 day cruise to Bermuda`,
        OTHER_NEWS_HEADING_2:`The 2 winning Team will meet abroad the Norwegian gateway for a well-deserved vacation`
    },
    TITLE : 'Where the company news is current and your ideas are important!',
}

export const IMAGE_LOADER = {
FEATURED:"FEATURED",
HEADER:"HEADER",
ARTICLE:"ARTICLE",
COMPANY_NEWS:"COMPANY_NEWS"
}

export const PERSONALORGANISER_PDF_HEADER = `<html>
<header>
    <style>
        *{
         padding:0px;
         margin:0px;
        }
        .wrapper{
            width:100%;
            background-color:#ffffff;
            height:100%;

            
        }
        .pageWrapper{
            background: white;
            width:1000px;
            margin:auto;
            -webkit-box-shadow: 0px 0px 20px -8px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 20px -8px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 20px -8px rgba(0,0,0,0.75);
            padding-bottom:40px;

        }

        .header{
            display: flex;
            justify-content: space-between;
            background-color:#555555;
            height:100px;
            padding:10px;
            vertical-align: middle;
            align-items: center;
            margin-bottom: 30px;

        }
        h2{
            font-size: 30px;
            color:white;
            font-weight: 100;
            
        }

        .logo{
            width:230px;
            margin-left: 20px;
        }
        .question-container{
            padding:20px;
            padding-left:40px;
            padding-right:40px;
            justify-content: flex-start;
            display:flex;
            flex-direction: row;
            align-content: flex-start;
            align-items: flex-start;
            
        }
        h3{
            font-size:20px;
            font-weight:normal;
            color:#222222;
            padding-bottom:10px;
            margin-top:8px;
        }
        .description{
            font-size:14px;
            color:#222222;
            display: block;
            margin-top:20px;
        }
        .checked{
           
            margin-right: 20px;
            border-radius: 50%;
            color: white;
            font-size: 20px;
            height: 32px;
            width: 32px;
         
            background-color: rgb(0, 181, 226);
            -webkit-box-shadow: inset 2px 2px 5px 0px rgba(0,0,0,0.38);
            -moz-box-shadow: inset 2px 2px 5px 0px rgba(0,0,0,0.38);
            box-shadow: inset 2px 2px 5px 0px rgba(0,0,0,0.38);
            display: flex;
            align-items: center;
            justify-content: center;
            }

            .unchecked{
            padding: 10px;
            margin-right: 20px;
            border-radius: 50%;
            margin-top:10px;
            background-color:lightgrey;
        }

        
        
        
   

        .text-divider{margin: 2em 0; line-height: 0; text-align: center;width:80%;margin: auto;margin-top:10px;margin-bottom:10px;}
.text-divider span{background-color: #ffffff; padding: 1em;}
.text-divider:before{ content: " "; display: block; border-top: 1px solid grey; border-bottom: 1px solid grey;}
.tbl-header{
    background-color: rgb(27, 27, 27);
    color:white;height:60px; 
    editor/#45484d+0,000000+100;Black+3D+%231 */
background: #45484d; /* Old browsers */
background: -moz-linear-gradient(top, #45484d 0%, #000000 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #45484d 0%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #45484d 0%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    }
    .tbl{background-color:#fafafa;width:95%;margin:auto;
        -webkit-box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.2);
box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.2);
}
.tbl-heading-cell{padding:10px;font-size:15px;width: auto;word-wrap: normal;border-right:0.5px solid rgb(105, 105, 105);text-align: left}
.tbl-data-cell{padding:10px;font-size:11.5px;border-right:0.25px solid rgb(218, 218, 218);word-wrap: break-word;}
.tbl-data-row{background-color:white;color:black}
.tbl-data-row:nth-child(odd){background-color: rgb(236, 236, 236)}
    </style>
</header>

<div class="wrapper">

    <div class="pageWrapper">
            <div class="header">
                <img class="logo" src="https://mhydemo.azurewebsites.net/images/logo-white.svg"/>
                <div style="display:grid;text-align:right">
                    `


export const PERSONALORGANISER_PDF_FOOTER = `           </Table>

    </div>
</div>
</html>`


export const BIRTHDAY_PDF_BODY =`</div>
</div>
<!--  devider -->
     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Name</td>
        <td class="tbl-heading-cell">Relationship</td>
        <td class="tbl-heading-cell">Birthday</td>
        <td class="tbl-heading-cell">Notification</td>
     
     
    </tr>`

    export const DOCTOR_PDF_BODY =`</div>
    </div>
    
        <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
        <tr class="tbl-header">
            <td class="tbl-heading-cell">Name</td>
            <td class="tbl-heading-cell">Speciality</td>
            <td class="tbl-heading-cell">Address</td>
            <td class="tbl-heading-cell">Contact No.</td>
            <td class="tbl-heading-cell" style="width:30%">Remarks</td>
         
         
        </tr>`


export const PRESCRIPTIONS_PDF_BODY =`</div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Doctor Visit Date</td>
        <td class="tbl-heading-cell">Doctor Visit Details</td>
        <td class="tbl-heading-cell" style="width:30% !important">Remarks</td>   
    </tr>`  
            
            
export const HEALTHINSURANCE_PDF_BODY =` </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Carrier Name</td>
        <td class="tbl-heading-cell">Website</td>
        <td class="tbl-heading-cell">Ins. ID No.</td>
        <td class="tbl-heading-cell">Expiration Date</td>
        <td class="tbl-heading-cell" style="width:18%">Customer Service Phone No.</td>
        <td class="tbl-heading-cell" style="width:18%">Other Important Phone No.</td>
   
    </tr>`  

    export const LIFEINSURANCE_PDF_BODY =`  </div>
    </div>
    
        <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
        <tr class="tbl-header">
            <td class="tbl-heading-cell">Company Name</td>
            <td class="tbl-heading-cell">Policy No.</td>
            <td class="tbl-heading-cell">Agent Phone.</td>
            <td class="tbl-heading-cell">Company Phone.</td>
            
        </tr>`  

export const HOMEINSURANCE_PDF_BODY =`   </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Company Name</td>
        <td class="tbl-heading-cell">Policy Number</td>
        <td class="tbl-heading-cell">Agent Phone</td>
        <td class="tbl-heading-cell">Company Phone</td>
   
    </tr>`  

export const CARINSURANCE_PDF_BODY =`  </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Carrier Name</td>
        <td class="tbl-heading-cell">Vehicle ID No.</td>
        <td class="tbl-heading-cell">Policy No.</td>
        <td class="tbl-heading-cell">Expiration Date</td>
        <td class="tbl-heading-cell" style="width:18%">Customer Service Phone No.</td>
        <td class="tbl-heading-cell" style="width:18%">Other Imp. Phone No.</td>
    </tr>`  

export const MYPETINFORMATION_PDF_BODY =` </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Name</td>
        <td class="tbl-heading-cell">Breed</td>
        <td class="tbl-heading-cell">Birthdate</td>
        <td class="tbl-heading-cell">Veterinary Doctor Name</td>
        <td class="tbl-heading-cell"  style="width:20%">Veterinary Doctor Address</td>
        <td class="tbl-heading-cell">Veterinary Doctor Contact No.</td>
        <td class="tbl-heading-cell" style="width:25%">Remarks</td>
     
     
    </tr>`  

    export const MYGYMDETAILS_PDF_BODY =`  </div>
    </div>
    
         <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
        <tr class="tbl-header">
            <td class="tbl-heading-cell">Name</td>
            <td class="tbl-heading-cell">Address</td>
            <td class="tbl-heading-cell">Contact No</td>
            <td class="tbl-heading-cell">Membership ID</td>
            <td class="tbl-heading-cell" style="width:30%">Remarks</td>
        </tr>`  
    
    
    export const MYAUTOMOBILES_PDF_BODY =`  </div>
    </div>
    
        <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
        <tr class="tbl-header">
            <td class="tbl-heading-cell">Make & Model</td>
            <td class="tbl-heading-cell">Registration No.</td>
            <td class="tbl-heading-cell">Purchase Date</td>
            <td class="tbl-heading-cell">Insurance Information</td>
            <td class="tbl-heading-cell" style="width:25%">Maintenance Notes</td>
        </tr>
`  

export const TRAVELINFORMATION_PDF_BODY =` </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Airline</td>
        <td class="tbl-heading-cell">Flgiht No.</td>
        <td class="tbl-heading-cell">Departure Date</td>
        <td class="tbl-heading-cell">Departure Time</td>
        <td class="tbl-heading-cell">Confirmation Code</td>
     
    </tr>
`  

export const EMERGENCYCONTACTS_PDF_BODY =`  </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Name</td>
        <td class="tbl-heading-cell">Relationship</td>
        <td class="tbl-heading-cell">Location</td>
        <td class="tbl-heading-cell">Contact No</td>
        <td class="tbl-heading-cell">Email</td>
        <td class="tbl-heading-cell" style="width:30% !important">Remarks</td>
    </tr>
`  

export const MYPOWERGOALS_PDF_BODY =` </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Goal</td>
        <td class="tbl-heading-cell">Deadline</td>
        <td class="tbl-heading-cell">Status</td>
        <td class="tbl-heading-cell">Remarks</td>
     
    </tr>
`  

export const CUSTOMCATEGORY_PDF_BODY =` </div>
</div>

     <Table cellspacing="0" cellpadding="0" class="tbl" style="table-layout: fixed;">
    <tr class="tbl-header">
        <td class="tbl-heading-cell">Title/Name</td>
        <td class="tbl-heading-cell">Description/Information</td>
    </tr>
`  
export const ORDER_BY ={ASC:'asc',DESC:'desc'};

export const DAYS = [{ "Code": 1,
"getDay":1,
"Value": "Mon",
"isSelected":false,
"DisplayText": "M",
"DisplayTextForMedication": "Monday"},
{ "Code": 2,
"getDay":2,
"Value": "Tue",
"isSelected":false,
"DisplayText": "T",
"DisplayTextForMedication": "Tuesday"},
{ "Code": 3,
"getDay":3,
"Value": "Wed",
"isSelected":false,
"DisplayText": "W",
"DisplayTextForMedication": "Wednesday"},
{ "Code": 4,
"getDay":4,
"Value": "Thu",
"isSelected":false,
"DisplayText": "T",
"DisplayTextForMedication": "Thursday"},
{ "Code": 5,
"getDay":5,
"Value": "Fri",
"isSelected":false,
"DisplayText": "F",
"DisplayTextForMedication": "Friday"},
{ "Code": 6,
"getDay":6,
"Value": "Sat",
"isSelected":false,
"DisplayText": "S",
"DisplayTextForMedication": "Saturday"},
{ "Code": 7,
"getDay":0,
"Value": "Sun",
"isSelected":false,
"DisplayText": "S",
"DisplayTextForMedication": "Sunday"}];

export const DAILY_FREQUENCY = "Daily";
export const WEEKLY_FREQUENCY = "Weekly"
export const MONTHLY_FREQUENCY = "Monthly"
export const MEDICATION_MINIMUM_DOSAGE_VALIDATION_MESSAGE = "At least One dosage is required.";
export const MEDICATION_MAXIMUM_DOSAGE_VALIDATION_MESSAGE = "You cannot add more than 6 dosages."
export const MEDICATION_FREQUENCY_REQUIRED = "Please Select Frequency";
export const MEDICATION_STARTDATE_REQUIRED = "Please Select Start Date";



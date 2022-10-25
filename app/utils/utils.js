import moment from 'moment';

exports.getFormatedData =(date)=>{
    return moment(new Date(date)).format('DD/MM/YYYY')
}
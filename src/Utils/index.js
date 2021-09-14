import moment from "moment";

export function inicioDia(){
    return moment().startOf('day');
}

export function diaPassados(date){
    return (moment().startOf('day') - moment(date))/86400000;
}

export function atualizaPorcentagem(porcent, total, feito){
    return feito ? (porcent*total + 100)/total : (porcent*total - 100)/total;
}

export function novaPorcentagem(porcent, total){
    return porcent*total/(total + 1);
}
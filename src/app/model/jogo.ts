export class Jogo {

    constructor(public jogador1 = '', public jogador2 = '', public time1 = '', public time2 = '',
        public gols1 = '', public gols2 = '', public createdAt = '', public updatedAt = '',
        public data: Date = new Date(), public dataFormatado = '') {
    }
}

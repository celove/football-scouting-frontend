import { Campeonato } from './campeonato';
export class Campeonatos {
    campeonatos: Campeonato[];


    constructor() {
        this.campeonatos = [
            new Campeonato('Premier League',
                ['Arsenal PL', 'Chelsea PL', 'Liverpool PL', 'Manchester City PL', 'Manchester United PL', 'Tottenham PL']),
            new Campeonato('Champions 1', ['Real Madrid', 'Barcelona', 'Liverpool', 'Manchester City', 'PSG']),
            new Campeonato('Champions 2', ['AC Milan', 'Arsenal', 'Chelsea', 'Inter de Milao', 'Napoli']),
            new Campeonato('Selecoes', ['Brasil', 'Franca', 'Inglaterra', 'Italia', 'Holanda'])
        ];
    }
}

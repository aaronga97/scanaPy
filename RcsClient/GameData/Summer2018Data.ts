// tslint:disable:indent
import { IGameData } from './IGameData'

// {
// 	Opponent: 'COPYPASTETHISONE',
// 	Date: '4/11/2018',
// 	GoalsInFavor: 0,
// 	GoalsAgainst: 0,
// 	Notes: 'THIS IS OPTIONAL',
// 	PlayerStats:
// 	{
// 		AndreasH: { 'Goals': 0, 'Assists': 0 },
// 		ChrisB: { 'Goals': 0, 'Assists': 0 },
// 		DiegoV: { 'Goals': 0, 'Assists': 0 },
// 		DineshV: { 'Goals': 0, 'Assists': 0 },
// 		JordanH: { 'Goals': 0, 'Assists': 0 },
// 		JasonR: { 'Goals': 0, 'Assists': 0 },
// 		JorgeA: { 'Goals': 0, 'Assists': 0 },
// 		JorgeM: { 'Goals': 0, 'Assists': 0 },
// 		MarkT: { 'Goals': 0, 'Assists': 0 },
// 		MartinM: { 'Goals': 0, 'Assists': 0 },
// 		MattA: { 'Goals': 0, 'Assists': 0 },
// 		MattMC: { 'Goals': 0, 'Assists': 0 },
// 		MattR: { 'Goals': 0, 'Assists': 0 },
// 		NicoS: { 'Goals': 0, 'Assists': 0 },
// 		RaymondO: { 'Goals': 0, 'Assists': 0 },
// 		ScottO: { 'Goals': 0, 'Assists': 0 },
// 		UmairA: { 'Goals': 0, 'Assists': 0 }
// 		Nimish: { 'Goals': 0, 'Assists': 0 }
// 	}
// },

const summer2018Data: IGameData[] =
[
    {
        Opponent: 'The Pot',
        Date: '7/11/2018',
        GoalsInFavor: 4,
        GoalsAgainst: 6,
        Notes: 'This is the second game we lose against the Pot - they have a strong indoor team - Josh and Carlos have speed and they got us on many counters. Next time we should focus on finishing our plays and not push all of our players to their side of the field.',
        PlayerStats:
        {
            ChrisB: { },
            DiegoV: { 'Assists': 1 },
            DineshV: { 'Goals': 1 },
            JorgeA: { 'Goals': 1 },
            MarkT: { 'Goals': 1, 'Assists': 2 },
            MattR: { 'Pitchers': 1 },
            ScottO: { },
            UmairA: { 'Goals': 1 },
            RaymondO: { 'Pitchers': 1 },
            Nimish: { }
        }
    },
]

export default summer2018Data
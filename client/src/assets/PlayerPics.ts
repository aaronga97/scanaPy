import { PlayerName } from '../../GameData/IGameData'

const JorgeA = require('./img/players/jorgea.jpg')
const DineshV = require('./img/players/dineshv.jpg')
const JordanH = require('./img/players/jordanh.png')
const JorgeM = require('./img/players/jorgem.png')
const MarkT = require('./img/players/markt.png')
const MattMc = require('./img/players/mattmc.png')
const MattR = require('./img/players/mattr.png')
const NicoS = require('./img/players/nicos.png')
const Nimish = require('./img/players/nimish.jpg')
const RaymondO = require('./img/players/raymondo.png')
const Ville = require('./img/players/ville.jpg')
const DiegoV = require('./img/players/diegov.png')
const MattA = require('./img/players/MattA.jpg')
const ChrisB = require('./img/players/ChrisB.png')
const Umair = require('./img/players/Umair.jpg')

const unknown = require('./img/players/unknown.png')

export default class PlayerPics {
    public static GetPic(player: PlayerName) {
        switch (player) {
            case 'JorgeA':
                return JorgeA
            case 'DineshV':
                return DineshV
            case 'JordanH':
                return JordanH
            case 'JorgeM':
                return JorgeM
            case 'MarkT':
                return MarkT
            case 'MattMC':
                return MattMc
            case 'MattR':
                return MattR
            case 'NicoS':
                return NicoS
            case 'Nimish':
                return Nimish
            case 'RaymondO':
                return RaymondO
            case 'Ville':
                return Ville
            case 'DiegoV':
                return DiegoV
            case 'MattA':
                return MattA
            case 'ChrisB':
                return ChrisB
            case 'UmairA':
                return Umair
            default:
                return unknown
        }
    }
}
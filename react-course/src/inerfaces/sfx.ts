import AlarmSound from '../assets/wierdSfx/alarm.mp3';
import Alarm from '../assets/wierdSfx/alarm.png';
import NokiaSound from '../assets/wierdSfx/all-goofy-ahh-sound-effects-for-2023-memes-audio-extractornet_Dc2F0VFp.mp3';
import BikeSound from '../assets/wierdSfx/bike.mp3';
import Dong from '../assets/wierdSfx/ding.jpg';
import DongSound from '../assets/wierdSfx/dong.mp3';
import GoofySound from '../assets/wierdSfx/goofy.mp3';
import Goofy from '../assets/wierdSfx/goofy.png';
import Bike from '../assets/wierdSfx/moto.jpg';
import Nokia from '../assets/wierdSfx/nokia.jpg';
import Omg from '../assets/wierdSfx/omg.jpg';
import OmgSound from '../assets/wierdSfx/omg.mp3';
import Rock from '../assets/wierdSfx/rock.jpg';
import RockSound from '../assets/wierdSfx/rock.mp3';
import SamsungSound from '../assets/wierdSfx/samphone.mp3';
import Samsung from '../assets/wierdSfx/samsung.jpg';
import Scary from '../assets/wierdSfx/scary.jpg';
import ScarySound from '../assets/wierdSfx/scary.mp3';
import Wtf from '../assets/wierdSfx/wtf.jpg';
import WtfSound from '../assets/wierdSfx/wtf.mp3';

export interface ISfxItem {
    sound: string;
    image: string;
}

export const sfxSounds: ISfxItem[] = [
    {
        sound: AlarmSound,
        image: Alarm,
    },
    {
        sound: RockSound,
        image: Rock,
    },
    {
        sound: GoofySound,
        image: Goofy,
    },
    {
        sound: DongSound,
        image: Dong,
    },
    {
        sound: NokiaSound,
        image: Nokia,
    },
    {
        sound: BikeSound,
        image: Bike,
    },
    {
        sound: SamsungSound,
        image: Samsung,
    },
    {
        sound: ScarySound,
        image: Scary,
    },
    {
        sound: WtfSound,
        image: Wtf,
    },
    {
        sound: OmgSound,
        image: Omg,
    },
];

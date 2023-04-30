import { Howl } from 'howler';
import { useState } from 'react';
import { ISfxItem } from '../../inerfaces/sfx';

function SfxButton(props: ISfxItem) {
    const { image, sound } = props;
    const [playing, setPlaying] = useState(false);
    const playS = () => {
        const playSound = new Howl({
            src: sound,
            volume: 0.3,
        });
        const duration = Math.ceil(playSound.duration() * 1000) || 1500;
        playSound.play();
        setPlaying(true);
        setTimeout(() => {
            setPlaying(false);
        }, duration);
    };
    return (
        <button
            onClick={playS}
            className={playing ? 'sfx__button active' : 'sfx__button'}
            type="button"
        >
            <img className="sfx__image" src={image} alt={image} />
        </button>
    );
}

export default SfxButton;

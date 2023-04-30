import { sfxSounds } from '../../inerfaces/sfx';
import SfxButton from '../sfxbutton/SfxButton';
import './SfxContainer.scss';

function SfxContainer() {
    return (
        <>
            <h1>Ultra magic SSR Goofy sound machine</h1>
            <h2>Top secret feature</h2>
            <div className="sfx__container">
                {sfxSounds.map((el) => (
                    <SfxButton
                        key={el.image}
                        image={el.image}
                        sound={el.sound}
                    />
                ))}
            </div>
        </>
    );
}

export default SfxContainer;

import { sfxSounds } from '../../inerfaces/sfx';
import SfxButton from '../sfxbutton/SfxButton';
import './SfxContainer.scss';

function SfxContainer() {
    return (
        <>
            <h1>Ultra magic SFX Goofy machine</h1>
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

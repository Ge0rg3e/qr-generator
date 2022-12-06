// Import
import { useState } from 'react';

// Types
interface Props {
    onChange: (mode: 0 | 1, color: string) => void;
}

// Data
const colors = [
    '#69D2E7',
    '#A7DBD8',
    '#E0E4CC',
    '#F38630',
    '#FA6900',
    '#FE4365',
    '#FC9D9A',
    '#83AF9B',
    '#D95B43',
    '#542437',
    '#53777A',
    '#556270',
    '#4ECDC4',
    '#C7F464',
    'transparent',
];

// Component
const Palette = (props: Props) => {
    const [mode, setMode] = useState<0 | 1>(0);

    return (
        <div className='px-5'>
            <div className={`w-full h-[150px] flex justify-between gap-x-4`}>
                <div
                    className={`bg-[#1b1c2c] w-[50px] h-full rounded-md flex-middle flex-col gap-y-2`}
                >
                    <button onClick={() => setMode(0)}>
                        <i
                            className={`${
                                mode === 0 && 'text-indigo-500'
                            } fas fa-layer-group text-2xl`}
                        ></i>
                    </button>

                    <button onClick={() => setMode(1)}>
                        <i
                            className={`${
                                mode === 1 && 'text-indigo-500'
                            } far fa-layer-group text-2xl`}
                        ></i>
                    </button>
                </div>

                <div
                    className={`w-full h-full rounded-md flex flex-wrap gap-3`}
                >
                    {(mode === 0 ? colors : colors.slice(0, -1)).map(
                        (color, i) => (
                            <button
                                onClick={() => props.onChange(mode, color)}
                                className={`w-10 h-10 rounded-full ${
                                    color === 'transparent' &&
                                    'border-8 border-[#1b1c2c]'
                                }`}
                                style={{ backgroundColor: color }}
                                key={i}
                            ></button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

// Export
export default Palette;

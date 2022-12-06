// Import
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Components
import { QRCodeCanvas } from 'qrcode.react';
import Palette from './components/palette';
import Slider from './components/slider';
import Input from './components/input';
import Save from './components/save';

// Types
type Options = {
    color: [string, string];
    value: string;
    size: number;
};

// App
const App = () => {
    const [options, setOptions] = useState<Options>({
        color: ['transparent', '#faf9fb'],
        size: 200,
        value: '',
    });

    return (
        <div
            className={`md:w-[700px] md:h-[450px] w-full h-full flex flex-col justify-center items-start md:flex-row shadow-xl`}
        >
            <div className={`bg-[#25273c] w-full h-full rounded-l-md relative`}>
                <Input
                    onChange={(value) => setOptions({ ...options, value })}
                    icon={'fas fa-sticky-note'}
                    placeHolder={`Value`}
                    value={options.value}
                />

                <Palette
                    onChange={(mode, color) =>
                        setOptions(() => {
                            const x = { ...options };

                            x.color[mode] = color;

                            return x;
                        })
                    }
                />

                <Slider
                    onChange={(value) =>
                        setOptions({ ...options, size: value })
                    }
                    icon={'far fa-expand-arrows-alt'}
                    value={options.size}
                    max={300}
                />

                <Save />
            </div>

            <div
                className={`bg-[#1b1c2c] w-full h-full pb-[100px] md:pb-0 rounded-r-md flex-middle`}
            >
                <QRCodeCanvas
                    fgColor={options.color[1]}
                    bgColor={options.color[0]}
                    value={options.value}
                    size={options.size}
                    id={`qr`}
                />
            </div>
        </div>
    );
};

// Render
createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// Import
import ReactSlider from 'react-slider';

// Types
interface Props {
    onChange: (value: number) => void;
    value: number;
    icon: string;
    max: number;
}

// Component
const Slider = (props: Props) => {
    return (
        <div className='px-5'>
            <div className='flex items-center my-5 bg-[#1b1c2c] w-full h-[45px] rounded-md'>
                <i className={`${props.icon} text-2xl ml-3`}></i>

                <ReactSlider
                    onChange={(value) => props.onChange(value)}
                    trackClassName='slider-track'
                    thumbClassName='slider-thumb'
                    defaultValue={props.value}
                    className='slider'
                    max={props.max}
                    min={10}
                />
            </div>
        </div>
    );
};

// Export
export default Slider;

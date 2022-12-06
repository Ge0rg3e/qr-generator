// Component
const Save = () => {
    const onClick = async () => {
        const dom = document.getElementById('qr') as HTMLCanvasElement;
        const url = dom.toDataURL('image/png', 1.0);
        const x = document.createElement('a');
        x.download = 'qr.png';
        x.href = url;
        x.click();
        x.remove();
    };

    return (
        <button
            className={`fixed md:absolute bottom-0 md:rounded-bl-md w-full h-12 bg-indigo-500 text-xl pb-1 hover:bg-indigo-500/80`}
            onClick={onClick}
        >
            Save It
        </button>
    );
};

// Export
export default Save;

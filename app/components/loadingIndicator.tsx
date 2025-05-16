

const loaderStyles = `
.loader {
    stroke: #1E293B;
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 40 160;
    stroke-dashoffset: 200;
    stroke-linecap: round;
    animation: dashMove 1s linear infinite;
}
@keyframes dashMove {
    to {
        stroke-dashoffset: 0;
    }
}

@media (prefers-color-scheme: dark) {
    .loader {
        stroke: #fafaf9;
    }
    .rail {
        stroke: #44403c;   
    }
}

`;

const LoadingIndicator: React.FC = () => (
    <div style={{ padding: 32 }}>
        <style>{loaderStyles}</style>
        <div
            style={{
                width: "100%",
                height: "100%",
                borderRadius: 24,
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="rail"
                        d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20Z"
                        strokeWidth="3"
                        stroke="#d6d3d1"
                        fill="none"
                    />
                    <path
                        className="loader"
                        d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20Z"
                    />
                </svg>
            </div>
        </div>
    </div>
);

export default LoadingIndicator;
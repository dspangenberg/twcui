interface CounterProps extends React.ComponentProps<'button'> {
    initialValue?: number;
    step?: number;
    min?: number;
    max?: number;
}
export declare function MyCounter({ initialValue, step, min, max }: CounterProps): import("react/jsx-runtime").JSX.Element;
export {};

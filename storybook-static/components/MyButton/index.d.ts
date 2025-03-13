interface ComponentProps extends React.ComponentProps<'button'> {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
}
export declare function MyButton({ primary, size, label, ...props }: ComponentProps): import("react/jsx-runtime").JSX.Element;
export {};

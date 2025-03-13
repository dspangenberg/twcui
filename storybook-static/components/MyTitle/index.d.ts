interface ComponentProps extends React.ComponentProps<'h1'> {
    primary?: boolean;
    title: string;
}
export declare function MyTitle({ primary, title, ...props }: ComponentProps): import("react/jsx-runtime").JSX.Element;
export {};

declare module '*.md' {
    const value: any;
    export default value;
}

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    const value: any;
    export default value;
}

declare module '*.webp' {
    const value: any;
    export default value;
}

declare module '*.scss' {
    const styles: {[key: string]: string};
    export default styles;
}

declare namespace NodeJS {
    export interface ProcessEnv {
        ENDPOINT: string;
    }
}

declare namespace JSX {
    interface IntrinsicElements {
        'ld-button': any;
        'ld-paper': any;
        'ld-progress': any;
        'ld-icon': any;
        'ld-loading': any;
        'f24-form': any;
    }
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

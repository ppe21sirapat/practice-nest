declare const _default: (() => {
    type: string;
    port: string;
    host: string;
    database: string;
    username: string;
    password: string;
    entities: string[];
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    port: string;
    host: string;
    database: string;
    username: string;
    password: string;
    entities: string[];
    synchronize: boolean;
}>;
export default _default;


export class Settings {
    primaryKey?: string;
    header?: string;
    property?: string;
    asc?: string;
    icon?: string;
    link?: string;
    children?: ChildrenSettings[];
    subProperty?: string;
}

export class ChildrenSettings {
    primaryKey?: string;
    type?: string;
    icon?: string;
    tooltip: string;
    seguridad?: Array<string>;
    rotate?: boolean;
}
import "reflect-metadata";
import { PATH_METADATA } from "../constants";

export function Controller(prefix?: string): ClassDecorator {
    let path: string = "/";
    if (typeof prefix !== undefined) {
        path = prefix;
    }
    return (target: object) => {
        Reflect.defineMetadata(PATH_METADATA, path, target);
    };
}
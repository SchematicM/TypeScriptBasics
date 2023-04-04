import {ICore} from "./core.interface";

export interface IRocket {
    rocket_name: string;
    first_stage: {
        cores: ICore[];
    }
}
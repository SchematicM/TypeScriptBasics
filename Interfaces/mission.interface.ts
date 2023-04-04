import {ILink} from "./link.interface";
import {IRocket} from "./rocket.interface";
import {IPayload} from "./payload.interface";

export interface IMission {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: ILink;
    rocket: IRocket;
    second_stage: {
        payloads: IPayload[];
    }
}
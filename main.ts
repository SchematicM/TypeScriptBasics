// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
//

// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": "http://some.com",
//         "video_link": "https://youtu/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }


import {IMission} from "./Interfaces/mission.interface";

const mission: IMission = {
    mission_name: 'Mission',
    launch_date_local: 'locale',
    launch_site: {site_name_long: 'site name long'},
    links: {video_link: 'https://video.com', article_link: 'https://article.com'},
    rocket: {
        rocket_name: 'rocket',
        first_stage: {
            cores: [
                {
                    flight: 3,
                    core: {
                        reuse_count: 56789,
                        status: 'unknown'
                    }
                },
                {
                    flight: 23,
                    core: {
                        reuse_count: 5,
                        status: 'unknown'
                    }
                }
            ]
        }
    },
    second_stage: {
        payloads: [{
            payload_type: 'string',
            payload_mass_kg: 23,
            payload_mass_lbs: 5677.90
        }]
    }
};

console.log(mission);
//
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//

import {IUser} from './Interfaces/user.interface'
    const user:IUser = {
        name:'Max',
        age:18,
        gender:'male'
    }
console.log(user);
//
// function sum(a,b){
//     return a+b
// }
function sum(a:number,b:number):number{
    return a+b
}

console.log(sum(2, 5));
// function showSum(a,b){
//     console.log(a + b);
// }
function showSum(a:number,b:number):void{
    console.log(a + b);
}
showSum(2,3);

//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//

function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc;
    return someUser;
}

console.log(incAge(user, 32));

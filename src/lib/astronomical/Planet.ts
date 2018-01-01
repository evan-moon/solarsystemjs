/**
 * @class
 * @extends AstronomicalObject
 * @name Planet
 * @desc 행성 클래스
 */
import { AstronomicalObjectData, PlanetData } from 'src/lib/interfaces/astro.interface';
import { AstronomicalObject } from 'src/lib/celestial/AstronomicalObject';

export class Planet extends AstronomicalObject {
    constructor (data: PlanetData) {
        let astronomical: AstronomicalObjectData = {
            id: data.id,
            name: data.name,
            mass: data.mass,
            radius: data.radius,
            material: data.material
        };
        if (data.sideralDay) {
            astronomical.sideralDay = data.sideralDay;
        }
        super(astronomical);
    }
}
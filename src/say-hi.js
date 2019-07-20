import {WORLD_NAME} from './constants'

export default class SayHi {
    name = WORLD_NAME

    say = () => console.log('---', `HI ${this.name}`)
}

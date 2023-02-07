
import { type } from './type'


Array.from('abc')

export function clone(sourse) {
    const t  = type(sourse)
    if(t !== 'object' && t !== 'array') {
        return sourse
    }

    let target;
    if(t=== 'object') {
        target  = {}
        for(let i in sourse) {
            if(sourse.hasOwnProperty(i)) {
                target[i] = clone(sourse[i])
            }
        }
    } else {
        target = []
        for(let i = 0; i < sourse.length; i++) {
            target[i] = clone(sourse[i])
        }
    }
    return target
}
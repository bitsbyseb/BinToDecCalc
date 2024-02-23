import type {dividedObj} from '../types.model'

export function dividedByTwo(num:number,numArr:dividedObj[]) {
    if (Math.floor(num/2)>=2) {
        numArr.push({
            residue:Math.floor(num%2),
            dividend:num,
            result:num/2
        });
        dividedByTwo(Math.floor(num/2),numArr);
    } else {
        numArr.push({
            residue:Math.floor(num%2),
            dividend:num,
            result:num/2,
            quotient:Math.floor(num/2)
        });
    }
}
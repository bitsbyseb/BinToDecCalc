'use strict';
import { reverseString } from './utils/reverseStr';
import type { dividedObj } from './types.model';
import { dividedByTwo } from './utils/dividedByTwo';
import { writeResult } from './utils/writeResult';
// Dom Nodes
const $fromSelect: HTMLSelectElement | null = document.querySelector('#numberType');
const $toSelect: HTMLSelectElement | null = document.querySelector('#secondNumberType');
const $input: HTMLInputElement | null = document.querySelector('#number');
const $form = document.querySelector('#form');
const $result = document.querySelector('#result');

const toDecimal = (binary: string) => {
    let finalValue = 0;
    binary = reverseString(binary);
    for (let i = binary.length-1;i>=0;i--) {
        if (binary[i] === '1') {
            finalValue = finalValue + (2**i);
        }
    }
    return finalValue;
}

const toBinary = (decNumber: string) => {
    let numArr: dividedObj[] = [];
    if (decNumber.startsWith('-')) {
        decNumber = decNumber.slice(1);
        dividedByTwo(parseInt(decNumber),numArr);
        let binary = '';
        let finalBinary = numArr.reduce((acc, current) => {
            if (current.quotient !== undefined) {
                return acc += `${current.residue}${current.quotient}`
            } else {
                return acc += current.residue;
            }
        }, binary);

        
        finalBinary = (() => {
            let arr = [...finalBinary];
            
            for  (let l = arr.length;l>=0;l--) {
                if (arr[l] === '1') {
                    arr[l] = '0';
                } else {
                    arr[l] = '1';
                }
            }

            for (let l = arr.length;l>=0;l--) {
                if (arr[l] === '0') {
                    arr[l] = '1';
                    break;
                }
            }   
            
            return arr.join('');
        })();
        
        if ($result !== null) {
            writeResult($result, reverseString(finalBinary));
        }

    } else {
        dividedByTwo(parseInt(decNumber), numArr);
        let binary = '';
        const finalBinary = numArr.reduce((acc, current) => {
            if (current.quotient !== undefined) {
                return acc += `${current.residue}${current.quotient}`
            } else {
                return acc += current.residue;
            }
        }, binary);

        if ($result !== null) {
            writeResult($result, reverseString(finalBinary));
        }
    }

}

const handleEvent = (e: Event) => {
    try {
        e.preventDefault();
        const from = $fromSelect?.value;
        const to = $toSelect?.value;
        const numberValue = $input?.value ?? '';

        if (from === to) {
            throw new Error("bad format specified");
        }

        if (from === 'binary') {
            const decimalNum = toDecimal(numberValue);
            if ($result !== null) {
                writeResult($result, `${decimalNum}`);
            }
        } else if (from === 'decimal') {
            toBinary(numberValue);
        }

    } catch (error) {
        alert(error);
    }
}

$form?.addEventListener('submit', handleEvent);
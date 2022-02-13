export let firstText = 'test test';

let secondText = 'testttt';

function printOutText(text) {
    console.log(text);
}

export { secondText, printOutText as printText };

let defaultText;
export default defaultText = 'default text';
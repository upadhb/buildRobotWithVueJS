/*
export default {
    //bind - hook of directive only works once during the first bind
    bind: (element, binding) => {

       /!* // use v-pin:position.top.right in the html element to apply the directive this way
        if(binding.arg === 'position') {
            element.style.position = 'absolute';
            Object.keys(binding.modifiers).forEach(key => element.style[key] = '5px')
        }*!/

       //use this way to provide dynamic value for directive v-pin="{top: '5px', right: '5px'}"
        element.style.position = 'absolute';
        Object.keys(binding.value).forEach(passedKey => element.style[passedKey] = binding.value[passedKey])
    },
    //update - hook of the directive will update the element with directive feature whenever binding values are updated
    update: (element, bind) => {
        //do something
    }
}*/

//the most common way to write a directive is using short hand function method that does both BIND && UPDATE

export default function (element, binding) {
    element.style.position = 'absolute';
    Object.keys(binding.value).forEach(passedKey => element.style[passedKey] = binding.value[passedKey])
}


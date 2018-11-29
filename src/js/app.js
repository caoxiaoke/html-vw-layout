const app = {
    sayHello: () => {
        let text = document.createElement('span');
        text.textContent = 'Hello!';
        document.querySelector('body').appendChild(text);
        console.log(' hello !!!!');
    }
};


module.exports = app;
const EventEmitter = require('events');

const ud = new EventEmitter();

ud.on('greet', (name) => {
    console.log(`Hello there 2B ${name}`);
});

ud.on('exit', (num) => {
    console.log(`Thank you for visit ${num}`);
});

ud.emit('greet', "Devanshi");
ud.emit('exit', 100);

class Button extends EventEmitter{
   click(){
      console.log('Button was clicked')
      this.emit('click',{timestamp: Date.now()});
   }
}
const button= new Button()
button.on('click',(event)=>{
   console.log(`Click event fired at ${event.timestamp}`)
})
button.click()

class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }


addClock (time, callback) {
    if (!time && !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
    }
    else if (this.alarmCollection.find(clock => clock.time === time)){
        console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({time, callback, canCall});
    
}

removeClock (time){
  this.time.filter(function(t){
    delete t.this.time === time;
  });
}

getCurrentFormattedTime(){
    return new Date().toTimeString().slice(0,5);
}



start() {
    if(this.intervalId) {
        return;
    }

    this.intervalid = setInterval(() => this.alarmCollection.forEach(clock => {
        if(clock.time === this.getCurrentFormattedTime() && clock.canCall) {
            clock.canCall = false;
            clock.callback();
        }
    }), 1000);
}

stop(){
    clearInterval(this.intervalid);
    this.intervalid = null;
}

resetAllCalls(){
    this.alarmCollection.forEach(this.canCall = true)
}

clearAlarms() {
    this.stop();
    this.alarmCollection = [];
}

}
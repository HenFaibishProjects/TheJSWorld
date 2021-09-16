
var buttonEl = $('#todo');
var startt = $('#startt');

startt.click(startTabata);

$('#todo').click(function () {
    console.log("aad");
    alert("Hello!");
});
var __scheduleTable = {};
var __scheduleId = 0;
var schedule = function(callback, table, scope, error){
    var i = 0;
    var id = __scheduleId++;
    __scheduleTable[id] = true;
    var tick = function(){
        if(!__scheduleTable[id]){
            return;
        }
        if(i < table.length){
            try{
                callback.call(scope || window, table[i], i);
                setTimeout(tick, table[i]);
                i++;
            }catch(e){
                error = error || function(){};
                if(error){
                    error(e, table[i], i);
                }
            }
        }
    };
    tick();
};

function getValues(){
    var rounds = $('.input-rounds').val();
    var rest = $('.input-rest').val();
    var work = $('.input-work').val();

    $('.input-rounds').removeClass('state-error-mark');
    $('.input-rest').removeClass('state-error-mark');
    $('.input-work').removeClass('state-error-mark');

    var correct = true;
    try{
        rounds = parseInt(rounds);
    }catch(e){
        $('.input-rounds').addClass('delaystate-error-mark');
        correct =  false;
    }
    if(isNaN(rounds) || rounds <= 0){
        $('.input-rounds').addClass('state-error-mark');
        correct =  false;
    }

    try{
        rest = parseFloat(rest);
    }catch(e){
        $('.input-rest').addClass('state-error-mark');
        correct =  false;
    }

    if( isNaN(rest) || rest <= 0){
        $('.input-rest').addClass('state-error-mark');
        correct =  false;
    }

    try{
        work = parseFloat(work);
    }catch(e){
        $('.input-work').addClass('state-error-mark');
        correct =  false;
    }

    if( isNaN(work) || work<= 0){
        $('.input-work').addClass('state-error-mark');
        correct =  false;
    }

    if(!correct){
        this.notify('Incorrect!');
        return false;
    }

    this.specs = {
        rounds: rounds,
        rest: rest,
        work: work
    };
    return this.specs;
};


    var clearSchedule = function(){
        __scheduleTable = {};
    };


function startTabata() {
    console.log("clear schedule");
}



$('#startt').click(function() {
    // if(this.running){
    //     return;
    // }
    // this.loadSounds(); // if we haven't already
    console.log("clear schedule")
    clearSchedule();
})
     var s = getValues();
    if (s) {
        var rs = [];
        var schedules = [];
        for (var i = 0; i < s.rounds; i++) {
            rs.push({
                total: s.rest * 1000,
                round: i + 1,
                type: 'rest'
            });
            schedules.push(s.rest * 1000);

            rs.push({
                total: s.work * 1000,
                round: i + 1,
                type: 'work'
            });
            schedules.push(s.work * 1000);
        }
        schedules.push(500);
        this.rounds = rs;
        console.log('startaaaaaaaa');
        this.running = true;
        schedule(function (delay, rn) {
            this._doRound(rn);
        }, schedules, this);

        $('.timer-start').val('Stop');
        // {s: schedules, r: rs};
    }



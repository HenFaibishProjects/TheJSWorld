
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
/**
 * Created by kevin on 2017/2/17.
 */

function parent() {
    var count = 0;
    return function (){
        count++;
        console.log(count);
    }
}

var children = parent();
children();  // 1
children();  // 2


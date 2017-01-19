/**
 * Created by user on 2017/1/19.
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*n=numRows
 Δ=2n-2    1                           2n-1                         4n-3
 Δ=        2                     2n-2  2n                    4n-4   4n-2
 Δ=        3               2n-3        2n+1              4n-5       .
 Δ=        .           .               .               .            .
 Δ=        .       n+2                 .           3n               .
 Δ=        n-1 n+1                     3n-3    3n-1                 5n-5
 Δ=2n-2    n                           3n-2                         5n-4
 */
var convert = function(s, numRows) {
    let result = "";
    if(numRows==1) return s;
    let cursor1,cursor2;
    let len=s.length;
    for(let i=0;i<numRows;i++){
        cursor1=(numRows-i-1)*2;
        cursor2=(i)*2;
        let pos=i;
        if(pos<len) result+=s.charAt(pos);
        while (1){
            pos+=cursor1;
            if(pos>=len)
                break;
            if(cursor1)
                result+=s.charAt(pos);
            pos+=cursor2;
            if(pos>=len)
                break;
            if(cursor2)
                result+=s.charAt(pos);
        }
    }
    return result;
};

let result = convert("PAYPALISHIRING",3);
console.log(result);
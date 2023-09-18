

function remove_duplicates(lst) {
    return is_null(lst)
           ? null
           : pair(head(lst), 
               accumulate( (x, y) => x !== y , null, tail(lst)));
}

remove_duplicates(list(2,2,2,3,4,5));


function subsets(xs){
    return is_null(xs)
            ? null
            : 
//return head(xs), then return head(tail(xs)), recursively call
//base case: list(null)
//then pair each of the individual elements returned above
//then pair as many times as possible
    
}
/*
const w = 3;
const x = 5;
const y = 7;
(w => (x, y) => (w => (y => y + x)(w))(100 * w + 10 * y))(y)(w, x);
*/
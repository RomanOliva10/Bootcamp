const contarImpares = (v) =>{
    let cont = 0;
    let i = 0
    let len = v.length;
    for (; i < len; i++) {
        if (v[i] % 2 === 1) {
            cont++;
        }
    }
    console.log(cont);
};

arr = [1,3,4,2,6,7,9,1, 8]

contarImpares(arr);